<template>
    <section>
        <h2>v-bind</h2>
        <br>
        <p>
            v-bind:src = 'expression'
        </p>
        <br>
        <ul>
            <li v-for="(list,index) in dataExam" :key="list.id">{{ index }}. {{ list.example }}</li>
        </ul>
    </section>
</template>
<script>
export default {
  name: "StudyState01",
  data() {
    return {
        dataExam: [
            {'example' : ':src="image"'},
            {'example' : ':alt="description"'},
            {'example' : ':href="url"'},
            {'example' : ':title="toolTip"'},
            {'example' : ':class="isAcitve"'},
            {'example' : ':style="isStyled"'},
            {'example' : ':disabled="isDisabled"'}
        ]
    };
  }
};
</script>
