<script setup>
  import { reactive } from 'vue';

  const baseInfo = reactive({
    test: '11'
  })
</script>

<template>
  <div>
    登陆
    {{ baseInfo.test }}
    <MyButton />
    <MyInput />
    <div>testGlobal: {{ testGlobal }}</div>
  </div>
</template>

<style lang="scss" scoped></style>
