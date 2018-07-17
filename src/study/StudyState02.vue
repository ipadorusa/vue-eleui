<template>
    <section>
        <h2>v-if</h2>
        <p v-if="inventory > 10"> 10 over </p>
        <p v-else-if="inventory < 10 && inventory >1"> 1~ 10 almost soldout </p>
        <p v-else> Out of Stock </p>
    </section>
</template>
<script>
export default {
  name: "StudyState02",
  data() {
    return {
        inventory:20
    };
  }
};
</script>
