<template>
  <div id="app">
    <form @submit="addTodo">
      <input class="inputGeneral" v-model="newTodo" type="text" placeholder="Digite sua task e aperte enter" />
    </form>
    <TodoList :doneTodo="doneTodo" title="Todo List" v-bind:todos="todos"/>
    <TodoList title="Finalizado" done v-bind:todos="dones"/>
  </div>
</template>

<script src="./App.js"></script>
<style src="./App.css"></style>