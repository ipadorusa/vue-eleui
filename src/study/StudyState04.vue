<template>
    <section>
        <h2>사용자입력 핸들링</h2>
        <p>{{ message }}</p>
        <button type="button" v-on:click="reverseMessage">메시지 뒤집기</button>
        <br><br>
        <p>{{ message2 }}</p>
        <input v-model="message2">

    </section>
</template>
<script>
export default {
  name: "StudyState04",
  data() {
      return {
        message: 'UI개발팀은 총원 10명으로 구성 되어 있습니다.',
        message2: '안녕하세요 Vue'
      }
  },
  methods: {
    reverseMessage: function () {
      this.message = this.message.split('').reverse().join('')
    }
  }
};
</script>
