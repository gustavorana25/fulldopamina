import TodoList from './components/TodoList/TodoList.vue';
import { playAudio } from './helpers/audio';
import {randomGif} from './helpers/gifs';
import { saveTodos, getTodos } from './helpers/localStorage';

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
            playAudio("yeah", 0.4);
            saveTodos(this.todos);
            e.preventDefault();
        },
        doneTodo: function (index) {
            this.dones.push(this.todos[index]);
            this.todos = this.todos.filter((_,i) => i!==index);
            saveTodos(this.todos);
            playAudio("victory", 0.3);
            this.addGif();
        },
        restoreTodo: function (index) {
            this.todos.push(this.dones[index]);
            this.dones = this.dones.filter((_, i) => i !== index);
            saveTodos(this.todos);
        },
        addGif: function(){
            this.showGif = true;
            setTimeout(() => {
                this.showGif = false;
                this.gif = randomGif();
            }, 3000)
        }
    }
}