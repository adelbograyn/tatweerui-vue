<script lang="ts" setup>
import Button from './components/Button.vue'
import Switch from './components/Switch.vue'
import { ButtonVariantEnum } from './utils/enums'
import { ref } from 'vue'

const checked = ref(false)
</script>

<template>
  <div class="absolute inset-0 grid justify-center items-center gap-4 bg-gray-200">
    <Button :variant="ButtonVariantEnum.PRIMARY">
      Hello
    </Button>
    <Switch :isChecked="checked" class="w-80" @on-checked="">Hello</Switch>
  </div>
</template>