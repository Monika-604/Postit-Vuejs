<template>
  <section class="border p-4 d-flex justify-content-center mb-4">
    <form style="width: 26rem" >

      <div class="form-outline mb-4">
        <label class="form-label" for="form4Example1" style="margin-left: 0px;">Title</label>
        <input type="text" id="form4Example1" class="form-control" v-model="title" >
        <div class="form-notch"><div class="form-notch-leading" style="width: 9px;"></div><div class="form-notch-middle" style="width: 42.4px;"></div><div class="form-notch-trailing"></div></div></div>


      <div class="form-outline mb-4">
        <label class="form-label" for="form4Example2" style="margin-left: 0px;">Abstract</label>
        <input type="text" id="form4Example2" class="form-control" v-model="abstract">
        <div class="form-notch"><div class="form-notch-leading" style="width: 9px;"></div><div class="form-notch-middle" style="width: 88.80000000000001px;"></div><div class="form-notch-trailing"></div></div></div>


      <div class="form-outline mb-4">
        <label class="form-label" for="form4Example3" style="margin-left: 0px;">Content</label>
        <textarea class="form-control" id="form4Example3" rows="4" v-model="description"></textarea>
        <div class="form-notch"><div class="form-notch-leading" style="width: 9px;"></div><div class="form-notch-middle" style="width: 60px;"></div><div class="form-notch-trailing"></div></div></div>


      <!-- Submit button -->
      <router-link to="/notes" class="btn btn-secondary mr-2">Cancel</router-link>
      <button type="button" class="btn btn-primary btn-block mb-4" @click.prevent="addNote()" >Add</button>
    </form>
  </section>



</template>

<script>
export default {
  name: "Create",
   data(){
        return{
                id: '',
                title:'',
                abstract:'',
                description:''
        }
    },
    methods:{
        addNote(){
          if (localStorage.getItem('notes')) {
              let notes = JSON.parse(localStorage.getItem('notes'));
              let newNote={ id:Date.now(), title:this.title, abstract:this.abstract, description:this.description } 
              notes.push(newNote)
              localStorage.setItem('notes', JSON.stringify(notes));
            } 
            else{
              let notes=[]
              let newNote={ id:Date.now(), title:this.title, abstract:this.abstract, description:this.description } 
              notes.push(newNote)
              localStorage.setItem('notes', JSON.stringify(notes));
            } 
            this.$router.push({ name: 'Index'});
        }
          

    }

}
</script>

<style scoped>

</style>
