<template>
  <div>
    {{ title }}
    <input id="changeTitleDom" @change="changeName" />
  </div>
</template>

<script setup>
import { ref } from 'vue';

  const props = defineProps({
    title: String
  });

  const emits = defineEmits(['changeName']);

  const countRef = ref(0);

  const changeName = () => {
    let num = document.querySelector("#changeTitleDom").value;
    emits("changeName", num)
  }

  const logFunc = () => {
    countRef.value ++
    console.log(countRef.value);
  }

  defineExpose({
    logFunc
  })
</script>