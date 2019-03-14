import TodoList from './components/TodoList/TodoList.vue';
import {randomGif} from './gifs';

const audios = {
    yeah: new Audio(require('./assets/yeah.wav')),
    victory: new Audio(require('./assets/victory.wav'))
}

const saveTodos = (todos)=>{
    localStorage.setItem("todos", JSON.stringify(todos))
}

const getTodos = () =>{
    return localStorage.getItem('todos') ? JSON.parse(localStorage.getItem('todos')) : ["Começando a brincar com Full dopamina"];
}

export default {
    name: 'app',
    components: {
        TodoList
    },
    data: () => ({
        todos: getTodos(),
        dones:[],
        newTodo: "",
        gif:randomGif(),
        showGif:false
    }),
    methods: {
        addTodo: function (e) {
            this.todos.push(this.newTodo);
            this.newTodo = "";

            this.playAudio(audios.yeah, 0.5);
            saveTodos(this.todos);
            e.preventDefault();
        },
        doneTodo: function (index) {
            this.dones.push(this.todos[index]);
            this.todos = this.todos.filter((_,i) => i!==index);
            saveTodos(this.todos);
            this.playAudio(audios.victory, 0.3);
            this.showGif = true;
            this.gif= randomGif();
            setTimeout(()=>{
                this.showGif = false;
            },2000)
        },
        playAudio: function(audio, volume){
            audio.volume = volume;
            audio.play();
        }
    }
}