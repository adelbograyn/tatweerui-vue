<script lang="ts" setup>
import BaseDialog from './BaseDialog.vue'
import { DialogTitle } from '@headlessui/vue'
import { Info } from 'lucide-vue-next'
import Button from './Button.vue'
import { ref } from 'vue'

interface Props {
  isOpen?: boolean,
  title?: string,
  buttonLabel?: string,
  onButtonClicked?: () => void,
}

const props = withDefaults(defineProps<Props>(), {
  isOpen: false,
  buttonLabel: 'OK',
})

const isOpen = ref(props.isOpen)
</script>

<template>
  <BaseDialog :is-close-button='false' :is-open='isOpen'>
    <DialogTitle as="h3" class="text-xl font-medium mt-8">
      <div class='grid justify-center items-center'>
        <Info class='w-20 h-20 text-primary' />
      </div>
      <div class="flex justify-center items-center mt-8">
        <span class="text-stone-800">{{ props.title }}</span>
      </div>
    </DialogTitle>
    <div class='mt-4 mb-8 text-gray-600 max-w-80'>
      <slot />
    </div>
    <Button class='w-full' variant='primary' @click='props.onButtonClicked'>{{ props.buttonLabel }}</Button>
  </BaseDialog>
</template>

<style scoped>

</style>