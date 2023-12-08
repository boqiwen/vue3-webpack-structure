<template>
  <Child ref="childRef" :title="refInfo.name" @changeName="changeName"></Child>
  <div>
    <img src="@images/test.png" alt="" />
    <img src="@images/WechatIMG5.png" alt="" />
    <img src="@images/lingke.png" alt="" />
  </div>
  <div>
    <button @click="changeNum">改变</button>
  </div>
</template>

<script setup>
import { isRef, reactive, readonly, ref, toRef, toRefs, unref, watchEffect } from 'vue';
import Child from './child';

  const childRef = ref("childRef");
  const refInfo = ref({name: 'aaa'});
  const changeName = (name) => {
    refInfo.value.name = name;
    childRef.value.logFunc();
  }

</script>

<style lang="scss">
  .box {
    color: red;
  }

  img {
    width: 80px;
    height: 80px;
  }
</style>