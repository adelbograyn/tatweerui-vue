<script lang="ts" setup>
type Props = {
  title: string,
  subtitle?: string,
}

defineProps<Props>()
</script>

<template>
  <div class='px-4'>
    <div class='flex justify-between items-center border-b w-full py-2'>
      <div>
        <div>{{ title }}</div>
        <div class='text-xs text-gray-500'>{{ subtitle }}</div>
      </div>
      <div class=''>
        <slot />
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>