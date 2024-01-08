<script lang="ts" setup>
import { Dialog, DialogPanel, TransitionChild, TransitionRoot } from '@headlessui/vue'
import { ref } from 'vue'

interface Props {
  isOpen?: boolean,
  isCloseButton?: boolean,
}

const props = withDefaults(defineProps<Props>(), {
  isOpen: false,
  isCloseButton: true,
})
const isOpen = ref(props.isOpen)
</script>

<template>
  <TransitionRoot :show="isOpen" as="template">
    <Dialog as="div" class="relative z-50" @close="isOpen = false">
      <TransitionChild
        as="template"
        enter="ease-out duration-200"
        enter-from="opacity-0"
        enter-to="opacity-100"
        leave="ease-in duration-100"
        leave-from="opacity-100"
        leave-to="opacity-0"
      >
        <div class="fixed inset-0 bg-black/25 backdrop-blur transition-opacity" />
      </TransitionChild>

      <div class="fixed inset-0 z-10 overflow-y-auto">
        <div
          class="
                flex
                min-h-full
                items-center
                justify-center
                text-center
              "
        >
          <TransitionChild
            as="template"
            enter="ease-out duration-200"
            enter-from="opacity-0 -translate-y-8"
            enter-to="opacity-100 translate-y-0"
            leave="ease-in duration-100"
            leave-from="opacity-100 translate-y-0"
            leave-to="opacity-0 -translate-y-8"
          >
            <DialogPanel
              class="
                    relative
                    border border-gray-200
                    dark:border-gray-700
                    transform
                    overflow-hidden
                    rounded-lg
                    bg-gray-200
                    dark:bg-gray-800
                    text-center
                    shadow-2xl
                    transition-all
                    sm:w-full
                    sm:max-w-sm
                    lg:min-w-fit
                  "
            >
              <div class="bg-gray-200 dark:bg-gray-900 p-4">
                <div v-if='props.isCloseButton'
                     class="absolute right-0 mx-4 -my-0 rounded-full bg-gray-300 active:bg-gray-100 p-1">
                  <a @click="isOpen = false">
                    <svg
                      class="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="1.5"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M6 18L18 6M6 6l12 12"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </a>
                </div>
                <div class="mt-3 text-center">
                  <slot />
                </div>
              </div>
            </DialogPanel>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</template>

<style scoped>

</style>