<template>

        <div class="modal-body" >
          <div class="single">
            <div class="parent-lbl float-left">
              <router-link to="/notes" class="close close-btn" data-dismiss="modal"> Back to my postit
                <span class="lbl more ">⬅</span>
              </router-link>
            </div>
            <span class="clearfix"></span>
            <div class="item" v-bind:style="{background: color}" >
              <div class="title text-center">
                <h2>{{note.title}}</h2>
              </div>
              <p>
               {{note.description}}
              </p>
              <router-link v-bind:to="'/edit/'+id" class="btn btn-sm btn-secondary">Edit</router-link>
              
            </div>
          </div>
        </div>


</template>

<script>
export default {
    name: "note",
    data() {
            return {
                //title: this.$route.params.title,
                id: this.$route.params.id,
                note:'',
                color:'rgb(242, 234, 150)'
            }
        },
        
        
  methods:{
      getTodo(){
          if (localStorage.getItem('notes')) {
            let notes = JSON.parse(localStorage.getItem('notes'));
           notes.map(note => {
             if(note.id==this.id)
                this.note=note
              });
            }  
                          
      },
      getColor(){
        if((this.id%3)==1){
            this.color="rgb(242, 234, 150)"
         }
         else if( this.id%3 == 2){
            this.color="rgb(249, 163, 59)"
         }
         else if( this.id%3 == 0){
            this.color="rgb(255, 146, 164)"
         }
         
      }
  },
   created() {
        this.getTodo()
        this.getColor()
    }
    
           
       
}
</script>

<style scoped>
/* .item{
  min-width: 243px!important;
} */
</style>