<script lang="ts" setup>
import Button from './components/Button.vue'
import Switch from './components/Switch.vue'
import { ButtonVariant } from './utils/enums'
import { ref } from 'vue'
import ListSection from './components/ListSection.vue'
import ListTile from '@/components/ListTile.vue'

const checked = ref(false)
</script>

<template>
  <div class="absolute inset-0 grid justify-center items-center gap-4 bg-gray-200">
    <Button :variant="ButtonVariant.SECONDARY">
      Hello
    </Button>
    <div class='w-80'>
      <ListSection title='List Section'>
        <ListTile title='List Tile Title' subtitle='subtitle' v-for='i in 5'>
            <Switch :isChecked="checked" class="w-80" />
        </ListTile>
      </ListSection>
    </div>
  </div>
</template>