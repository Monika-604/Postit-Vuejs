<template>
  
</template>
<script>
    export default {
        name: 'Post',
      data() {
        return {
          id: this.id
        }
        },
        methods:{

          deleteNote(id){
            if (localStorage.getItem('notes')) {
                let notes = JSON.parse(localStorage.getItem('notes'));
                this.notes= notes.filter((note) => {
                  return note.id != id;
                });
            }
          },

        },
        props: [
            "post"
        ],

    }
</script>
<style scoped>
.delete{
     padding: 0 5px;
    margin-left: 21px;
    border-radius: 5px;
}

</style>