<template>
<div class="container">
<ToDosFile />
</div>
</template>

<script>
import ToDosFile from './components/ToDosFile.vue'

export default {
  name: 'App',
  components: {
    ToDosFile
  }
}
</script>

<style>
body {
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  line-height: 1.6;
  background: #e8f7f0;
}
.container {
  max-width: 1100px;
  margin: auto;
  overflow: auto;
  padding: 0 2rem;
}
</style>
