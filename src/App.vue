<template>
  <div id="app">
    <form @submit="addTodo">
      <input class="inputGeneral" v-model="newTodo" type="text" placeholder="Digite sua tarefa e aperte enter" />
    </form>
    <TodoList 
      title="Tarefas" 
      v-bind:todos="todos"
      :doneTodo="doneTodo"
    />
    <TodoList 
      title="Concluidas" 
      v-bind:todos="dones"
      :doneTodo="restoreTodo" 
      done
      :clean="cleanDoneTasks" 
    />
    <img v-show="showGif" :src="gif" class="gif" />
  </div>
</template>

<script src="./App.js"></script>
<style src="./App.css"></style>