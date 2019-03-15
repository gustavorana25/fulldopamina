import TodoList from './components/TodoList/TodoList.vue';
import { playAudio } from './helpers/audio';
import {randomGif} from './helpers/gifs';
import { saveLocalStorage, getFromLocalStorage } from './helpers/localStorage';

export default {
    name: 'app',
    components: {
        TodoList
    },
    data: () => ({
        todos: getFromLocalStorage("todo", ["Começando a brincar com Full dopamina"]),
        dones: getFromLocalStorage("done", []),
        newTodo: "",
        gif:randomGif(),
        showGif:false
    }),
    methods: {
        addTodo: function (e) {
            e.preventDefault();
            this.todos.push(this.newTodo);
            this.newTodo = "";
            playAudio("yeah", 0.4);
            this.updateLocalStorage();
        },
        doneTodo: function (index) {
            this.dones.push(this.todos[index]);
            this.todos = this.todos.filter((_,i) => i!==index);
            this.updateLocalStorage();
            playAudio("victory", 0.3);
            this.addGif();
        },
        restoreTodo: function (index) {
            this.todos.push(this.dones[index]);
            this.dones = this.dones.filter((_, i) => i !== index);
            this.updateLocalStorage();
        },
        updateLocalStorage: function(){
            saveLocalStorage("todo", this.todos);
            saveLocalStorage("done", this.dones);
        },
        cleanDoneTasks: function(){
            this.dones = [];
            this.updateLocalStorage();
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