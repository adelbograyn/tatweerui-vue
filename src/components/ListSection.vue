<script lang="ts" setup>
defineProps<{
  title: {
    type: string,
    required: true,
  }
}>()
</script>

<template>
  <div>
    <label class='font-bold ms-4'>{{ title }}</label>
    <div class='bg-white ps-4 rounded-lg mt-1'>
      <slot />
    </div>
  </div>
</template>

<style scoped>

</style>