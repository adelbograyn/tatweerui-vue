<script lang="ts" setup>
defineProps({
  isLoading: {
    type: Boolean,
    default: false,
  },
})
</script>

<template>
  <button
      class="
      bg-gradient-to-b
      from-primary
      to-primary-dim
      active:shadow-inner
      active:bg-gradient-to-b
      active:from-primary-dim
      active:to-primary
      disabled:cursor-not-allowed
      disabled:active:bg-bg-gradient-to-b
      disabled:active:from-primary
      disabled:active:to-primary-dim
      disabled:shadow-none
      text-on-primary
      focus:outline-none
      cursor-default
      px-4
      py-1
      rounded
      shadow-xl
      flex
      justify-center
      items-center
      gap-2
      min-w-20
      min-h-8
      max-w-full
"
      :disabled="isLoading"
  >
    <svg
        v-if="isLoading"
        class="animate-spin min-h-5 min-w-5 max-h-5 max-w-5 text-on-primary"
        fill="none"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg">
      <circle
          class="opacity-25"
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          stroke-width="4"/>
      <path
          class="opacity-75"
          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0
            12h4zm2 5.291A7.962 7.962 0 014 12H0c0
            3.042 1.135 5.824 3 7.938l3-2.647z"
          fill="currentColor">
      </path>
    </svg>
    <slot v-else/>
  </button>
</template>