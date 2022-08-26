<script setup>
import { ref } from 'vue'

// defineProps<{ msg: string }>()

const count = ref(10)

const getCurrentTab = async () => {
  let queryOptions = { active: true, currentWindow: true };
  let [tab] = await chrome.tabs.query(queryOptions);
  return tab;
};
//  sendMessage
const sendMessageToContentScript = async (message) => {
  const tab = await getCurrentTab();
  return await chrome.tabs.sendMessage(tab.id, message);
};

const add = async() => {
  console.log(11)
  count.value+=3
  // console.log($('span.resume-basic__name').text().trim())
  await sendMessageToContentScript({ action: 'collection' });
}
</script>

<template>
  <!-- <h1>{{ msg }}</h1> -->

  <div class="card">
    <button type="button" @click="add">count is {{ count }}</button>
    <p>
      Edit
      <code>components/HelloWorld.vue</code> to test HMR
    </p>
  </div>

  <p>
    Check out
    <a href="https://vuejs.org/guide/quick-start.html#local" target="_blank"
      >create-vue</a
    >, the official Vue + Vite starter
  </p>
  <p>
    Install
    <a href="https://github.com/johnsoncodehk/volar" target="_blank">Volar</a>
    in your IDE for a better DX
  </p>
  <p class="read-the-docs">Click on the Vite and Vue logos to learn more</p>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
