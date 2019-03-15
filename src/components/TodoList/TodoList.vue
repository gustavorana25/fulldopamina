<template>
  <div class="list">
    <div class="headerList">
      <h1>{{title}}:</h1>
      <button v-show="clean" v-on:click="clean()">{{cleanText ? cleanText : "Limpar"}}</button>
    </div> 
    <ul>
      <li v-bind:class="{ done: done }" v-for="(todo, i) in todos" v-on:click="doneTodo(i)" :key="i">
        {{todo}}
      </li>
    </ul>
  </div>
</template>

<script src="./TodoList.js"></script>
<style scoped src="./TodoList.css"></style>