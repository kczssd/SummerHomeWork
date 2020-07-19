<template>
    <div id="app">
        我的年龄为{{$store.state.age}}
        我明年的年龄为{{$store.getters.nowAge}}
        <button @click="addAge()">增加年龄</button>
        <button @click="addAgeAsync()">增加年龄</button>
        <!-- <button @click="$store.state.age=100">点击</button> -->
    </div>
</template>

<script>
    export default {
        name: 'App',
        methods: {
            addAge() {
                this.$store.commit('addAge', 1);
            },
            addAgeAsync() {
                this.$store.dispatch('addAgeAsync', 3);
            }
        }
    };
</script>

<style>
</style>
