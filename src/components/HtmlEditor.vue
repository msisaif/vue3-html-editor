<script setup>
import HeadingElement from "./elements/HeadingElement.vue";
import ParagraphElement from "./elements/ParagraphElement.vue";

import { useEditorStore } from "../stores/editor";
import { storeToRefs } from "pinia";

const editor = useEditorStore();
const { body } = storeToRefs(editor);

const components = {
  HeadingElement,
  ParagraphElement,
};

function addComponent(component) {
  editor.add(component);
}

function saveData() {
  editor.save();
}
</script>

<template>
  <div class="p-4">
    <div class="flex justify-between p-2 border">
      <div class="flex gap-1">
        <button
          type="button"
          @click="addComponent('HeadingElement')"
          class="border px-4 py-1 bg-gray-600 text-white"
        >
          Heading
        </button>
        <button
          type="button"
          @click="addComponent('ParagraphElement')"
          class="border px-4 py-1 bg-gray-600 text-white"
        >
          Paragraph
        </button>
      </div>
      <button
        type="button"
        @click="saveData"
        class="border px-4 py-1 bg-sky-600 text-white"
      >
        Save
      </button>
    </div>
    <div class="border">
      <template v-for="(element, index) in body" :key="index">
        <component
          :is="components[element.component]"
          v-model="element.value"
        />
      </template>
    </div>
  </div>
</template>
