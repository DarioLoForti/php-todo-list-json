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
        updateList(){
            const data = {
                item: this.inputText,
                done: false
            }

            axios.post(this.apiUrl, data, {
                headers: {'Content-type': 'multipart/from-data'}
            }).then((response) => {
                this.inputText = "";
                this.done = false;
                this.todoList = response.data;
            })
        },

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
            
        },

        toggleDone(index){
            this.todoList[index].done = !this.todoList[index].done;
        },
    },
}).mount('#app')