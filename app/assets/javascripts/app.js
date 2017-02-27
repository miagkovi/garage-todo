var app = new Vue({
  el: '#app',

  data: {
    projects: [
      {
        title: 'Complete the test task for Ruby Garage',
        tasks: [
          {
            title: 'Open this mock-up in Adobe Fireworks',
            is_done: false
          },
          {
            title: 'Attentively check the file',
            is_done: false
          },
          {
            title: 'Write HTML & CSS',
            is_done: false
          },
          {
            title: 'Add a Javascript to implement adding / editing / removing for todo items and lists taking into account as more use cases as possible',
            is_done: false
          }
        ]
      },
      {
        title: 'For Home',
        tasks: [
          {
            title: 'Buy a milk',
            is_done: false
          },
          {
            title: 'Call Mam',
            is_done: false
          },
          {
            title: 'Clean the room',
            is_done: false
          },
          {
            title: 'Repair the DVD Player',
            is_done: false
          }
        ]
      }
    ]
  },

  methods: {

    cantBeBlank: function(){
      return alert("Can't be blank!")
    },

    addProject: function(){
      var new_title = prompt('New list:');
      if (new_title === '') {
        this.cantBeBlank();
      } else {
        this.projects.push({title: new_title, tasks: []});
      }
    },

    deleteProject: function(index){
      var isSure = confirm("Are you sure?");
      if (isSure) {
        this.projects.splice(index, 1);
      }
    },

    editProject: function(index){
      var new_title = prompt('Edit list:', this.projects[index].title);
      if (new_title === '') {
        this.cantBeBlank();
      } else if (new_title) {
        this.projects[index].title = new_title;
      } else {
        return false;
      }
    },

    addTask: function(index){
      var my_target = document.getElementsByClassName('new_task')[index];
      if (my_target.value === '') {
        this.cantBeBlank();
      } else {
        this.projects[index].tasks.push({
          title: my_target.value,
          done:false
        });
        my_target.value = '';
      }
    },

    deleteTask: function(index1, index2){
      this.projects[index1].tasks.splice(index2, 1);
    },

    editTask: function(index1, index2){
      var new_title = prompt('Edit task:', this.projects[index1].tasks[index2].title);
      if (new_title === '') {
        this.cantBeBlank();
      } else if (new_title) {
        this.projects[index1].tasks[index2].title = new_title;
      } else {
        return false;
      }
    },

    toggleDone: function(index1, index2){
      this.projects[index1].tasks[index2].is_done === true
      ? this.projects[index1].tasks[index2].is_done = false
      : this.projects[index1].tasks[index2].is_done = true;
    }
  }
})