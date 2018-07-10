<template>
    <section>
        <h2>v-bind</h2>
        <div>
            <span v-bind:title="message">
            내 위에 잠시 마우스를 올리면 동적으로 바인딩 된 title을 볼 수 있습니다!
            </span>
        </div>
    </section>
</template>
<script>
export default {
  name: "StudyState01",
  data() {
    return {
      message: '이 페이지는 ' + new Date() + ' 에 로드 되었습니다'
    };
  }
};
</script>
