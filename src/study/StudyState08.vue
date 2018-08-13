<template>
    <section>
        <h2>Evnet Handling</h2>
        <button type="button" @click="addCart">Add Cart</button>
        <button type="button" @click="removeCart">Remove Cart</button>
        <div class="cart">
            <p>Cart :: {{ cart }}</p>
        </div>
        <div>test commit</div>
    </section>
</template>
<script>
export default {
  name: "StudyState08",
  data() {
      return {
          cart: 0
      }
  },
  methods: {
      addCart() {
          this.cart += 1;
      },
      removeCart() {
          this.cart = 0;
      }
  }
};
</script>
