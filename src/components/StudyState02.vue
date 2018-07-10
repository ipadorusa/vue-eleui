<template>
    <section>
        <h2>v-if</h2>
        <p v-if="seen">이제 나를 볼 수 있어요</p>
    </section>
</template>
<script>
export default {
  name: "StudyState02",
  data() {
    return {
      seen: true
    };
  }
};
</script>
