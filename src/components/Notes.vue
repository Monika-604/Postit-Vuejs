<template>
  <div class="container mt-5">
      <div class="row ">
          <div class="deco">
            <div class="col-lg-4 col-md-6 col-sm-6 col-12 list-items" v-bind:key="post.id" v-for="post in posts">
              
                <div class="item">
                  <div class="title">
                    <h2>{{ post.title }}</h2>
                    <router-link to="/" >
                        <i class="btn-danger delete" @click="deleteNote(post.id)">x</i>
                    </router-link>
                  </div>
                  <p>
                    {{ post.abstract }}
                  </p>
                  <div class="parent-lbl">
                    <router-link v-bind:to="'/note/'+post.id" class="lbl more" >➝</router-link>
                  </div>
                </div>
              
            </div>
          </div>
      </div>
      <div>
          <router-link to="/create" class="add-postit"> Add a postit +</router-link>
          <!-- <button @click="addtolocalstorage()">test</button> -->
      </div>
  </div>
</template>

<script>

export default {
  name: 'Notes',
  components: {

  },
  data() {
    return {
        posts: [
             
            ],
      total:'',
      notes:[]
    }
  },
   
 methods: {
    // addTodo(newTodo) {
    //   this.todos.push({ description: newTodo, completed: false });
    // }
      getTotalNote(){
          if (localStorage.getItem('notes')) {
              let notes = JSON.parse(localStorage.getItem('notes'));
                  this.posts=notes
            }                 
      },
      addtolocalstorage(){
          localStorage.setItem('notes', JSON.stringify(this.posts));
      },
      test(){
          console.log(this.posts);
      },
       deleteNote(id){
            if (localStorage.getItem('notes')) {
                let notes = JSON.parse(localStorage.getItem('notes'));
                this.posts= notes.filter((note) => {
                  return note.id != id;
                });
                this.addtolocalstorage()
            }
           
          },

    },
    created() {
        this.getTotalNote()
    }
   
}
</script>
<style>
.delete{
     padding: 0 5px;
    margin-left: 21px;
    border-radius: 5px;
}
  .list-items:nth-child(1) .item{
    background-color: rgb(242, 234, 150)
  }
  .list-items:nth-child(2) .item{
    background-color: rgb(249, 163, 59);
    margin-top: 60px;
  }
  .list-items:nth-child(3) .item{
    background-color: rgb(255, 146, 164);
    margin-top: 120px;
  }

</style>