<template>
  <section>
    <h2>뷰 공부하면서 정리할것들</h2>
    <study-state-02></study-state-02>
    <study-state-03></study-state-03>
  </section>
</template>
<script>
import StudyState02 from '@/components/StudyState02.vue'
import StudyState03 from '@/components/StudyState03.vue'
export default {
  name: 'VuestudyList',
  components: {
    StudyState02,
    StudyState03
  }
}
</script>

