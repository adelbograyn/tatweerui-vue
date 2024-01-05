<script lang="ts" setup>
import Button from "./components/Button.vue"
import {Switch} from "./index";
</script>

<template>
  <div class="absolute inset-0 flex justify-center items-center gap-4 bg-gray-200">
      <Button variant="primary">
        Hello
      </Button>
    <Switch :isChecked="true" prop="Hello" fieldId="1" type="string" @changeEvent="console.log($event)"/>

  </div>
</template>