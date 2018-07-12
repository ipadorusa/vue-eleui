<template>
    <section>
        <h2>계산된 속성</h2>
        <p>원본 메시지: "{{ message }}"</p>
        <p>뒤집히도록 계산된 메시지: "{{ reversedMessage }}" </p><br><br>
        <h2>계산된 속성 vs 감시된 속성</h2>
        <div>{{ fullName }}</div>
    </section>
</template>
<script>
export default {
    name: "StudyState06",
    data: function() {
        return {
            message: '안녕하세요',
            firstName: 'woosuk',
            lastName: 'Kim'
        }
    },
    computed: {
        // 계산된 getter
        reversedMessage: function () {
            // `this` 는 vm 인스턴스를 가리킵니다.
            return this.message.split('').reverse().join('')
        },
        fullName: function () {
            return this.firstName + ' ' + this.lastName
        }
    }
};
</script>
