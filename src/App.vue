<script lang="ts" setup>
import TPrimaryButton from "./components/TPrimaryButton.vue"
import TSecondaryButton from "./components/TSecondaryButton.vue"
</script>

<template>
  <div class="absolute inset-0 flex justify-center items-center gap-4 bg-gray-200">
      <TPrimaryButton :is-loading="true">
        Hello
      </TPrimaryButton>
      <TSecondaryButton>
        Hello
      </TSecondaryButton>
  </div>
</template>