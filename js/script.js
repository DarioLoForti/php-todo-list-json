const { createApp } = Vue;

createApp({
    data() {
        return {
            apiUrl: 'server.php',
            todoList: [],
            inputText:""
        }
    },
    mounted() {
        this.getTodoList();
    },
    methods: {
        getTodoList(){
            axios.get(this.apiUrl).then((response) => {
                console.log(response.data);
                this.todoList = response.data;
            });
        },

        addList(){
            let obj = {
                text: this.inputText,
                done: false
            }

            this.todoList.push(obj);
            this.inputText = "";
        }
    },
}).mount('#app')