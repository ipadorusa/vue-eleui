<template>
    <section>
        <h2>v-if</h2>
        <p v-if="inventory > 10"> 10 over </p>
        <p v-else-if="inventory < 10 && inventory >1"> 1~ 10 almost soldout </p>
        <p v-else> Out of Stock </p>
        <h2>v-show</h2>
        <p v-show="showMe">보여져라 안보여져라, 돔에 남아있지요 </p>
    </section>
</template>
<script>
export default {
  name: "StudyState02",
  data() {
    return {
        inventory:20,
        showMe: true
    };
  }
};
</script>
