<template>
 <section>
  <div class="w-28">
    <RichTextEditor v-model="value" editorStyle="height: 320px" />
  </div>
 </section>
</template>

<script setup>

import { ref } from 'vue';
</script>
