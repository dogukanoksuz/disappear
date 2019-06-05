/*
    deadline disappearing module
    github.com/dogukanoksuz

    <function>Disappear(date, limit)</function>
    <arguments>
        <first>date: takes a valid es6 time object</first>
        <second>limit: takes a int value</second>
    </arguments>
*/
let Disappear = (e,t) => document.getElementsByTagName("body")[0].style.opacity = 1 - (new Date-e)/864e5/t;