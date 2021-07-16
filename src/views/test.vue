<template>
  <div>
    <a-button @click="testRequest" type="primary">test</a-button>
  </div>
</template>
<script lang="ts" setup>
const testRequest = () => {
    console.log('test')
}
</script>
