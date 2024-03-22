<script setup>
import DeleteConfirmDialog from '../../components/DeleteConfirmDialog/index.js';
import { ref } from 'vue';

const title = ref('警告');

setTimeout(() => {
  title.value = 'hahaha'
}, 3000);

// 删除按钮点击
const deleteItemClick = () => {
DeleteConfirmDialog.alert(
  {
    title: title,
    type: 'warning',
    confirmBtnText: '确定删除',
    content: '您确定要删除该部门及其所有子部门吗？'
  },
  {
    confirmCallback: (action) => {
      console.log('关闭了');
    },
    cancelCallback: (action) => {
      console.log('取消了');
    },
  }
)
}
</script>

<template>
  <div>
    <button @click="deleteItemClick">删除</button>
  </div>
</template>

<style lang="scss" scoped></style>
