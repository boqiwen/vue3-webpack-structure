<script setup>
  const stateInfo = defineProps({
    name: String,
    count: Number,
    info: Object,
    key: Number
  });
</script>

<script>
export default {
  name: 'MyButton'
}
</script>

<template>
  <div>
    我的按钮
    name: {{ stateInfo.name }}
    count: {{ stateInfo.count }}
    info: <span v-for="item in stateInfo.info">{{ item }}</span>
    key: {{ stateInfo.userId }}
  </div>
</template>

<style scoped></style>
