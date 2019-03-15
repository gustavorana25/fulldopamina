<template>
  <div id="app">
    <form @submit="addTodo" action="#">
      <input class="inputGeneral" v-model="newTodo" type="text" placeholder="Digite sua tarefa e aperte enter" />
    </form>
    <TodoList 
      title="Tarefas" 
      v-bind:todos="todos"
      :doneTodo="doneTodo"
      :clean="cleanTasks"
      cleanText="Limpar tarefas"
    />
    <TodoList 
      title="Concluidas" 
      v-bind:todos="dones"
      :doneTodo="restoreTodo" 
      done
      :clean="cleanDoneTasks"
      cleanText="Limpar tarefas concluídas"
    />
    <img v-show="showGif" :src="gif" class="gif" />
  </div>
</template>

<script src="./App.js"></script>
<style src="./App.css"></style>