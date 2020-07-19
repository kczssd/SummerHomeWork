<template>
    <div id="app">
        <Todo />
        <!-- <Watch /> -->
    </div>
</template>

<script>
    import Todo from './components/todo';
    // import Watch from './components/watch';
    export default {
        name: 'App',
        components: {
            Todo
        }
    };
</script>

<style>
#app {
    margin-top: 60px;
}
</style>
