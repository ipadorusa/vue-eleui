<template>
    <section>
        <h2>즐겨찾기리스트</h2>
        <el-table
                :data="bookData"
                height="600"
                :default-sort = "{prop: 'date', order: 'descending'}"
                style="width: 100%">
            <el-table-column
                    prop="date"
                    label="Date"
                    sortable
                    width="180">
            </el-table-column>
            <el-table-column
                    prop="title"
                    label="title"
                    sortable
                    width="300">
            </el-table-column>
            <el-table-column
                    prop="url"
                    label="url"
                    sortable>
            </el-table-column>

        </el-table>
    </section>
</template>

<script>
    export default {
        name: 'BookMarkList',
        data() {
            return {
                bookData: [
                    {
                        "date" : "20180418",
                        "url" : "https://codeburst.io/top-javascript-vscode-extensions-for-faster-development-c687c39596f5",
                        "category" : ["addon"],
                        "title" : "Top JavaScript VSCode Extensions for Faster Development"
                    },
                    {
                        "date" : "20180418",
                        "url" : "https://www.json.org/json-ko.html",
                        "category" : ["json"],
                        "title" : "json개요"
                    },
                    {
                        "date" : "20180419",
                        "url" : "https://slides.com/sdrasner/svg-can-do-that#/",
                        "category" : ["svg"],
                        "title" : "SVG can do THAT?!"
                    },
                    {
                        "date" : "20180419",
                        "url" : "https://developers.google.com/web/fundamentals/design-and-ux/animations/css-vs-javascript?hl=ko",
                        "category" : ["css,animations"],
                        "title" : "CSS와 자바스크립트 애니메이션"
                    },
                    {
                        "date" : "20180420",
                        "url" : "https://www.reddit.com/r/javascript/comments/2t6riw/a_frontend_developer_interview_question_thats/",
                        "category" : ["webfrontend"],
                        "title" : "frontend-interview"
                    },
                    {
                        "date" : "20180421",
                        "url" : "https://evilmartians.com/chronicles/scroll-to-the-future-modern-javascript-css-scrolling-implementations",
                        "category" : ["scroll"],
                        "title" : "scroll-to-the-future-modern-javascript-css-scrolling-implementations"
                    },
                    {
                        "date" : "20180423",
                        "url" : "https://medium.com/@ljs0705/%EC%B9%B4%EC%B9%B4%EC%98%A4%ED%8E%98%EC%9D%B4%EC%A7%80-%EC%9B%B9-react-%ED%8F%AC%ED%8C%85-%ED%9B%84%EA%B8%B0-76402cc5e031",
                        "category" : ["react"],
                        "title" : "카카오페이지 웹 React 포팅 후기"
                    },
                    {
                        "date" : "20180425",
                        "url" : "https://standardjs.com/rules-kokr.html",
                        "category" : ["javascript", "standard", "lint"],
                        "title" : "javascriptstandard"
                    },
                    {
                        "date" : "20180425",
                        "url" : "http://denvycom.com/blog/d3-js-version-4-x-examples-and-changes-from-version-3-x/",
                        "category" : ["d3", "d3vsd4"],
                        "title" : "d3vsd4차이점"
                    },
                    {
                        "date" : "20180425",
                        "url" : "http://rankedin.kr/users",
                        "category" : ["Github 한국 사용자 순위"],
                        "title" : "Github 한국 사용자 순위"
                    },
                    {
                        "date" : "20180429",
                        "url" : "https://medium.mybridge.co/vue-js-top-10-open-source-of-the-month-v-apr-2018-bdaf78698818",
                        "category" : ["vue, open Source"],
                        "title" : "Vue.js Top 10 Open Source of the Month (v.Apr 2018)"
                    },
                    {
                        "date" : "20180429",
                        "url" : "https://medium.mybridge.co/node-js-top-10-open-source-of-the-month-v-apr-2018-6f209d974ee6",
                        "category" : ["Node, open Source"],
                        "title" : "Node.js Top 10 Open Source of the Month"
                    },
                    {
                        "date" : "20180430",
                        "url" : "https://github.com/nhnent/tui.chart?utm_source=mybridge&utm_medium=blog&utm_campaign=read_more",
                        "category" : ["Graph, open Source"],
                        "title" : "Toast UI Chart"
                    },
                    {
                        "date" : "20180501",
                        "url" : "https://medium.freecodecamp.org/check-out-these-useful-ecmascript-2015-es6-tips-and-tricks-6db105590377",
                        "category" : ["ECMAScript, javascript"],
                        "title" : "Check out these useful ECMAScript 2015 (ES6) tips and tricks"
                    },
                    {
                        "date" : "20180506",
                        "url" : "https://stackblitz.com/",
                        "category" : ["Online IDE"],
                        "title" : "StackBlitz"
                    },
                    {
                        "date" : "20180508",
                        "url" : "https://electronjs.org/",
                        "category" : ["Javascript,HTML"],
                        "title" : "ELECTRON"
                    },
                    {
                        "date" : "20180516",
                        "url" : "https://medium.freecodecamp.org/modern-frontend-hacking-cheatsheets-df9c2566c72a",
                        "category" : ["cheatsheets"],
                        "title" : "The best front-end hacking cheatsheets — all in one place."
                    },
                    {
                        "date" : "20180516",
                        "url" : "https://codeburst.io/best-courses-to-learn-javascript-in-2017-fc3a254638cc",
                        "category" : ["javascript"],
                        "title" : "Best courses to learn Javascript in 2017"
                    },
                    {
                        "date" : "20180529",
                        "url" : "https://medium.com/@kyuwoo.choi/%EC%9B%B9-%EC%BB%B4%ED%8F%AC%EB%84%8C%ED%8A%B8-3-%EC%89%90%EB%8F%84%EC%9A%B0-%EB%8F%94-shadow-dom-5057b2dc7960",
                        "category" : ["ShadowDom"],
                        "title" : "웹 컴포넌트(3) — 쉐도우 돔"
                    },
                    {
                        "date" : "20180604",
                        "url" : ["https://www.inflearn.com/course/%ED%95%A8%EC%88%98%ED%98%95-%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%B0%8D/","https://github.com/Functional-JavaScript/FunctionalES","https://medium.com/@indongyoo"],
                        "category" : ["유인동","함수형자바스크립트"],
                        "title" : "함수형 자바스크립트 (유인동)"
                    },
                    {
                        "date" : "20180618",
                        "url" : ["https://github.com/reactkr/learn-react-in-korean"],
                        "category" : ["react모음"],
                        "title" : "react모음"
                    },
                    {
                        "date" : "20180619",
                        "url" : ["http://tech.kakao.com/"],
                        "category" : ["기술블로그"],
                        "title" : "카카오 기술블로그"
                    },
                    {
                        "date" : "20180619",
                        "url" : ["https://tech.lezhin.com/"],
                        "category" : ["기술블로그"],
                        "title" : "레진 기술블로그"
                    },
                    {
                        "date" : "20180619",
                        "url" : ["http://readme.skplanet.com/"],
                        "category" : ["기술블로그"],
                        "title" : "sk플래닛 기술브로그"
                    },
                    {
                        "date" : "20180619",
                        "url" : ["https://d2.naver.com/helloworld"],
                        "category" : ["기술블로그"],
                        "title" : "네이버 기술블로그"
                    },
                    {
                        "date" : "20180619",
                        "url" : ["https://engineering.linecorp.com/ko"],
                        "category" : ["기술블로그"],
                        "title" : "라인 기술블로그"
                    },
                    {
                        "date" : "20180619",
                        "url" : ["https://medium.com/styleshare"],
                        "category" : ["기술블로그"],
                        "title" : "스타일쉐어 기술블로그"
                    },
                    {
                        "date" : "20180619",
                        "url" : ["https://dailyhotel.io/"],
                        "category" : ["기술블로그"],
                        "title" : "데일리호텔 기술블로그"
                    },
                    {
                        "date" : "20180619",
                        "url" : ["https://tmondev.blog.me/"],
                        "category" : ["기술블로그"],
                        "title" : "티몬 기술블로그"
                    },
                    {
                        "date" : "20180619",
                        "url" : ["http://meetup.toast.com/"],
                        "category" : ["기술블로그"],
                        "title" : "TOAST 기술블로그"
                    },
                    {
                        "date" : "20180619",
                        "url" : ["http://wit.nts-corp.com/"],
                        "category" : ["기술블로그"],
                        "title" : "NTS 기술블로그"
                    },
                    {
                        "date" : "20180619",
                        "url" : ["http://woowabros.github.io/"],
                        "category" : ["기술블로그"],
                        "title" : "우아한형제들 기술블로그"
                    },
                    {
                        "date" : "20180620",
                        "url" : ["https://joshua1988.github.io/es6-online-book/"],
                        "category" : ["Vue.js 개발자를 위한 ES6 입문서(무료)"],
                        "title" : "joshua1988 기술블로그"
                    },
                    {
                        "date" : "20180625",
                        "url" : ["https://github.com/svg/svgo"],
                        "category" : ["svg"],
                        "title" : "svg불필요 없애기"
                    },
                    {
                        "date" : "20180707",
                        "url" : ["https://medium.com/@hongkevin/js-1-%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8-%EB%B0%B0%EC%97%B4-%EB%A9%94%EC%84%9C%EB%93%9C-1-foreach-map-b1cb1c2237d1"],
                        "category" : ["javascript"],
                        "title" : "자바스크립트 배열 메서드"
                    }
                ]
            };
        }
    }
</script>

<style scoped>

</style>