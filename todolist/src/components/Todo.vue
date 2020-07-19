<template>
    <div class="todos">
        <h2>TodoList</h2>
        <input class="mylist" type="text" v-model="content" />
        <button @click="addtodo">添加目标</button>
        <input type="button" @click="getdata" value="获取todolist" />
        <div class="todo" v-for="(item,index) in todos" v-bind:key="item.id">{{index}}.{{item.title}}</div>
    </div>
</template>

<script>
    export default {
        name: 'Todo',
        data() {
            return {
                todos: [],
                num: 1,
                content: ''
            };
        },
        methods: {
            getdata() {
                this.axios.get('https://jsonplaceholder.typicode.com/todos/' + this.num++).then(response => {
                    this.todos.push(response.data);
                });
            },
            addtodo() {
                console.log(this.content);
                this.todos.push({ title: this.content });
            }
        }
    };
</script>

<style scoped>
.todo {
    height: 25px;
    width: 500px;
    background-color: lightgrey;
    margin: 10px 0;
    border: 3px darkgrey solid;
}
.mylist {
    height: 30px;
    width: 350px;
    display: block;
    font-size: 26px;
}
</style>