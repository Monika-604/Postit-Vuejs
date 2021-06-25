<template>

  <form class="form-horizontal" role="form">
    <div class="form-group">
      <div class="col-sm-4">
        <input type="text" class="form-control" id="title" placeholder="Title">
      </div>
    </div>

    <div class="form-group">
      <div class="col-sm-10">
        <input type="text" class="form-control" id="abstract" placeholder="Abstract">
      </div>
    </div>

    <div class="form-group">
      <div class="form-group">
        <textarea v-model="descriptionText"  name="description" rows="15" class="form-control" placeholder="Description"></textarea>
      </div>
    </div>

    <div class="form-group">
      <div class="col-sm-offset-2 col-sm-10">

        <button v-on:click="sendForm()" type="submit" class="btn btn-default">create</button>
        <button v-on:click="closeForm">Cancel</button>
      </div>


    </div>
  </form>
</template>

<script>
export default {
name: "Edit.vue"
}
</script>

<style scoped>

</style>