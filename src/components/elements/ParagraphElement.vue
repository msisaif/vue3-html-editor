<script setup>
defineProps(['modelValue'])
defineEmits(['update:modelValue'])
</script>

<template>
  <p 
    title="Paragraph"
    contenteditable="true"
    spellcheck="false"
    @blur="$emit('update:modelValue', $event.target.innerHTML)"
    v-html="modelValue"
  ></p>
</template>