<script setup>
defineProps(['modelValue'])
defineEmits(['update:modelValue'])
</script>

<template>
  <h1 
    title="Heading"
    class="text-3xl leading-[1.5]"
    contenteditable="true"
    spellcheck="false"
    @blur="$emit('update:modelValue', $event.target.innerHTML)"
    v-html="modelValue"
  ></h1>
</template>