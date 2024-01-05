<div align="center">
  <picture>
    <img alt="logo" height="200px" src="https://github.com/adelbograyn/tatweerui-vue/blob/main/public/tatweer.png">
  </picture>
</div>

# Tatweer UI

### it's a UI library developed by [tatweer research company](https://tatweerresearch.org) for Vue based on [headless ui](https://headlessui.com/)

## Installation

```bash
npm install tatweerui-vue
```

## Usage

```vue

<script setup>
  import { Button, Switch, ButtonVariant } from 'tatweerui-vue'
</script>

<template>
  <Button :variant="ButtonVariant.PRIMARY">
    Hello
  </Button>
  <Switch :isChecked="true" @on-checked="(isChecked)=>isChecked">World</Switch>
</template>
```

## Components

- [x] Button
    - [x] Primary
    - [x] Secondary
- [x] Switch
- [x] ListSection
- [x] ListTile

#

![Screenshot 2024-01-05 at 9.54.54 pm.png](src%2Fassets%2Fimages%2FScreenshot%202024-01-05%20at%209.54.54%E2%80%AFpm.png)
![Screenshot 2024-01-05 at 10.04.23 pm.png](src%2Fassets%2Fimages%2FScreenshot%202024-01-05%20at%2010.04.23%E2%80%AFpm.png)

```vue

<ListSection title='List Section'>
  <ListTile title='List Tile Title' subtitle='subtitle'>
    <Switch :isChecked="true" />
  </ListTile>
</ListSection>
```

![Screenshot 2024-01-05 at 9.54.25 pm.png](src%2Fassets%2Fimages%2FScreenshot%202024-01-05%20at%209.54.25%E2%80%AFpm.png)
