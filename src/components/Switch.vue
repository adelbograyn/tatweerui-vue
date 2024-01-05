<script setup lang="ts">
import {ref} from "vue"
import {Switch, SwitchGroup, SwitchLabel} from '@headlessui/vue'

const props = defineProps({
  isChecked: {
    type: Boolean,
    default: false,
  },
  title: String,
})


const checked =  ref(props.isChecked)
const emit = defineEmits(['changeEvent'])

const onChecked = () => {
  checked.value = !checked.value
  emit('changeEvent', {checked: checked.value, title: props.title})
}
</script>

<template>
  <SwitchGroup>
    <div class="flex items-center w-full justify-between">
      <SwitchLabel class="mr-4" passive>{{ props.title }}</SwitchLabel>
      <Switch
          v-slot="{ checked }"
          v-model="checked"
          :class="checked ? 'bg-gradient-to-r from-blue-500 to-blue-600' : 'bg-gray-300'"
          class="relative inline-flex h-[28px] w-[50px] shrink-0 cursor-default rounded-full"
          @click="onChecked"
      >
        <span
            :class="checked ? 'translate-x-[24px]' : 'translate-x-[2px]'"
            aria-hidden="true"
            class="pointer-events-none translate-y-[2px] inline-block h-[24px] w-[24px] transform rounded-full bg-white shadow-lg ring-0 transition duration-300 ease-out"
        />
      </Switch>
    </div>
  </SwitchGroup>
</template>