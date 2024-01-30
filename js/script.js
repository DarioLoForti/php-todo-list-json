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
                headers: {'Content-type': 'multipart/form-data'}
            }).then((response) => {
                this.todoList.push({ text: this.inputText, done: false });
                 this.inputText = "";
            })
        },

        getTodoList(){
            axios.get(this.apiUrl).then((response) => {
                console.log(response.data);
                this.todoList = response.data;
            });
        },

        toggleDone(index){
            this.todoList[index].done = !this.todoList[index].done;
        },
        
    },
}).mount('#app')