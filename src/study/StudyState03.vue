<template>
    <section>
        <h2>v-for</h2>
        <ol>
            <li v-for="item in todos" v-bind="item" v-bind:key="item.text">{{ item.text }}</li>
        </ol>
    </section>
</template>
<script>
export default {
  name: "StudyState03",
  data() {
      return {
        todos: [
            { text: 'JavaScript 배우기' },
            { text: 'Vue 배우기' },
            { text: '무언가 멋진 것을 만들기' }
        ]
      }
  }
};
</script>
