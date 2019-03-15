export default {
    name: 'TodoList',
    props: {
        todos: Array,
        title: String,
        done: Boolean,
        doneTodo: Function,
        clean: Function,
        cleanText: String | undefined
    }
}