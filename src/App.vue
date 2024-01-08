<script lang="ts" setup>
import Button from './components/Button.vue'
import Switch from './components/Switch.vue'
import { ButtonVariant } from './utils/enums'
import { ref } from 'vue'
import ListSection from './components/ListSection.vue'
import ListTile from './components/ListTile.vue'
import InfoDialog from './components/InfoDialog.vue'

const checked = ref(false)
const onClicked = () => {
  alert('AA')
}
</script>

<template>
  <div class="absolute inset-0 grid justify-center items-center gap-4 bg-gray-200">
    <Button :variant="ButtonVariant.SECONDARY">
      Hello
    </Button>
    <div class='w-80'>
      <ListSection title='List Section'>
        <ListTile v-for='i in 5' subtitle='subtitle' title='List Tile Title'>
          <Switch :isChecked="checked" />
        </ListTile>
      </ListSection>
    </div>
    <InfoDialog :is-open='true' title='Info Dialog' :on-button-clicked='onClicked'>
      message for info dialog
    </InfoDialog>
  </div>
</template>