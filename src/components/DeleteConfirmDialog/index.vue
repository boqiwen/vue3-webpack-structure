<script setup>
  // 参数传递
  const props = defineProps({
    title: { type: String, default: '提示' },
    type: { type: String, default: 'prompt' },
    content: { type: String, default: '内容' },
    confirmBtnText: { type: String, default: '确定' },
    cancelBtnText: { type: String, default: '取消' },
    show: { type: Boolean, default: false },
    cancel: { type: Function, default: () => {} },
    confirm: { type: Function, default: () => {} },
  });
</script>

<template>
  <div class="deleteConfirmDialog">
    <!-- 主体部分 -->
    <div class="dialogMainBox">
      <!-- 标题 -->
      <div class="dialogHeader">{{ title }}</div>

      <!-- 提示内容 -->
      <div class="dialogContent">
        {{ content }}
      </div>

      <!-- 操作按钮 -->
      <div class="dialogFooter">
        <!-- 确定按钮 -->
        <button @click="confirm" :class="['btn', `btn-${type}`]">{{ confirmBtnText }}</button>
        <!-- 取消按钮 -->
        <button @click="cancel" class="btn">{{ cancelBtnText }}</button>        
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.deleteConfirmDialog {
  position: fixed;
  top: 0px;
  left: 0px;
  width: 100vw;
  height: 100vh;
  background-color: rgb(138, 138, 138, .3);

  .dialogMainBox {
    background-color: #fff;
    margin: 80px auto;
    width: 400px;
    border-radius: 4px;
    overflow: hidden;

    .dialogHeader {
      background-color: #f2f2f2;
      color: #666666;
      font-size: 16px;
      padding: 10px 15px;
    }

    .dialogContent {
      padding: 30px;
    }

    .dialogFooter {
      text-align: right;
      padding: 20px;

      .btn {
        margin-right: 10px;
        min-width: 70px;
        border-radius: 3px;
        font-size: 14px;
        padding: 6px 10px;
        border: 1px solid #000000;
        background-color: #ffffff;
        color: #000000;

        &:hover {
          color: #ffffff;
          background-color: #666666;
          border: 1px solid #666666;
        }
      }

      .btn-warning {
        color: #ffffff;
        background-color: #ff7d00;
        border: 1px solid #ff7d00;

        &:hover {
          color: #ffffff;
          background-color: #dd6b00;
          border: 1px solid #dd6b00;
        }
      }
    }
  }
}
</style>