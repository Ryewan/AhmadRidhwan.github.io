var app = new Vue({
    el: "#app",
    data: {
        message: "Hello Vue!!"
    }
});

var app2 = new Vue({
    el: "#app-2",
    data: {
        message: "You loaded this page on " + new Date().toLocaleString()
        
    }
});

var app3 = new Vue ({
    el: "#app-3",
    data: {
        seen: true
    }
});

var app4 = new Vue ({
    el: "#app-4",
    data: {
        todos: [
            {text: "Learn HTml- Done"},
            {text: "Learn CSS- Done"},
            {text: "Learn JS- Done"},
            {text: "Learn Vue- Done"}
        ]
    }
});

var app5 = new Vue ({
    el: "#app-5",
    data: {
        message: "Ridhwan"
    },
    methods: {
        reverseMessage: function() {
            this.message = this.message.split('').reverse().join('')
        }
    }
});

var app6 = new Vue({
    el: '#app-6',
    data: {
      message: 'Hello Vue!'
    }
  })