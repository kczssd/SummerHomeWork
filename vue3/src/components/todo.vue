<template>
    <div class="todos">
        <h2>TodoList</h2>
        <input class="mylist" type="text" v-model="content" />
        <button @click="addtodo">添加目标</button>
        <input type="button" @click="getdata" value="获取todolist" />
        <div class="todo" v-for="(item,index) in todos" v-bind:key="index">{{index}}.{{item}}</div>
    </div>
</template>

<script>
    import { ref } from '@vue/composition-api';
    export default {
        setup() {
            const todos = ref([]);
            let content = ref('');
            let num = 1;
            const getdata = () => {
                fetch('https://jsonplaceholder.typicode.com/todos/' + num++)
                    .then(response => response.json())
                    .then(json => todos.value.push(json.title));
            };
            const addtodo = () => {
                todos.value.push(content.value);
            };
            // console.log(props);
            // console.log(context);
            // const state = reactive({
            //     num: 0
            //     // count//reactive里访问ref
            // }); //一次创建多个

            // const count = ref(0); //一次创建一个
            // console.log(count.value++);

            // const plusone = computed(() => state.num + 1); //只读
            // const oneplus = computed({
            //     get: () => {
            //         state.num + 1;
            //     },
            //     set: val => {
            //         state.num = val - 1;
            //     }
            // });可读可写

            return {
                // count,
                // ...toRefs(state),
                // plusone
                todos,
                content,
                getdata,
                addtodo
            };
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