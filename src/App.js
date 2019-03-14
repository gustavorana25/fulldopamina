import TodoList from './components/TodoList/TodoList.vue'

export default {
    name: 'app',
    components: {
        TodoList
    },
    data: () => ({
        todos: ["Começando a brincar com Full dopamina"],
        dones:[],
        newTodo: ""
    }),
    methods: {
        addTodo: function (e) {
            this.todos.push(this.newTodo);
            this.newTodo = "";

            this.playAudio(require('./assets/yeah.wav'), 0.4);
            e.preventDefault();
        },
        doneTodo: function (index) {
            this.dones.push(this.todos[index]);
            this.todos = this.todos.filter((_,i) => i!==index);

            this.playAudio(require('./assets/victory.wav'), 0.1);
        },
        playAudio: function(audio, volume){
            var audioObjct = new Audio(audio);
            audioObjct.volume = volume;
            audioObjct.play();
            audioObjct = undefined;
        }
    }
}