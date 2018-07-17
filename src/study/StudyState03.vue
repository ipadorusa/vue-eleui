<template>
    <section>
        <h2>v-for 1</h2>
        <ol>
            <li v-for="item in todos" v-bind="item" v-bind:key="item.text">{{ item.text }}</li>
        </ol>
        <h2>v-for 2</h2>
        <ul>
            <li v-for="detail in details" :key="detail.id">{{ detail }}</li>
        </ul>
        <h2>v-for 3</h2>
        <div v-for="variant in variants" :key="variant.id">
            <p>{{ variant.variantColor }}</p>
        </div>
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
        ],
        details: ['80% cotton', '20% polyester', 'Gender-neutral'],
        variants: [
            {
                variantId: 2234,
                variantColor: "blue"
            },
            {
                variantId: 2235,
                variantColor: "black"
            }
        ]
      }
  }
};
</script>
