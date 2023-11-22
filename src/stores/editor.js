import { ref } from 'vue'
import { defineStore } from 'pinia'
import { isArray } from "@vue/shared";

export const useEditorStore = defineStore('editor', () => {
  function init() {
    const response = JSON.parse(localStorage.getItem(page.value));
    
    return ref(isArray(response) ? response : []);
  }

  const page = ref("home")

  const body = init();

  async function add(component) {
    console.log(body, body.value);

    body.value.push({
      component,
      value: "",
    });
  }
  
  async function save() {
    localStorage.setItem(page.value, JSON.stringify(body.value));
  }

  return { page, body, add, save }
})
