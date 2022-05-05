<template>
  <div id="gestionnaire">
    <p class="titre-page title is-2">{{data2.length}}</p>

    <div>
      <input type="radio" id="type1" name="type" value="type1">
      <label for="type1">Type 1</label> <br>
      <input type="radio" id="type2" name="type" value="type2">
      <label for="type2">Type 2</label>
    </div>
  </div>
</template>

<script>
export default {
  name: 'gestionnaire',
  data () {
    return {
    }
  },
  props : ["data2"],
}
</script>


<style>
#gestionnaire {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
