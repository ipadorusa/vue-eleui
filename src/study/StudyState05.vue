<template>
    <section>
        <h2>원시 HTML</h2>
        <p>Using mustaches: {{ rawHtml }}</p>
        <p>Using v-html directive: <span v-html="rawHtml"></span></p>
        <h2>v-bind</h2>
        <button v-bind:disabled="isButtonDisabled">Button</button>  <button v-bind:disabled="true">Button</button>
        <p>isButtonDisabled가 null, undefined 또는false의 값을 가지면 disabled 속성은 렌더링 된 button 엘리먼트에 포함되지 않습니다.</p>
        <br><br>
        <h2>수식어</h2>
        <p>
            수식어는 점으로 표시되는 특수 접미사로, 디렉티브를 특별한 방법으로 바인딩 해야 함을 나타냅니다.<br>예를 들어, .prevent 수식어는 트리거된 이벤트에서 event.preventDefault()를 호출하도록 v-on 디렉티브에게 알려줍니다.
        </p>
    </section>
</template>
<script>
export default {
  name: "StudyState05",
  data() {
      return {
          rawHtml: '<span style="color: red">This should be red.</span>'
      }
  }
};
</script>
