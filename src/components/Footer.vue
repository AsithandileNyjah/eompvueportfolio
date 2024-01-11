<template>
    <footer>
      <ul class="social-icons">
        <li>&copy;</li>
        <li>{{ currentYear }}</li>
        <li>Asithandile Tyulu</li>
        <li><a href="https://www.linkedin.com/in/asithandile-tyulu-a12006171/" data-location="LinkedIn" class="fa fa-linkedin"></a></li>
        <li><a href="https://github.com/AsithandileNyjah" data-location="GitHub" class="fa fa-github"></a></li>
        <li><a href="https://twitter.com/ThandileTyulu" data-location="Twitter" class="fa fa-twitter"></a></li>
      </ul>
    </footer>
  </template>
  
  <script>
  export default {
    data() {
      return {
        currentYear: ""
      };
    },
    mounted() {
      this.getData();
    },
    methods: {
      getData() {
        // Get the current year
        const currentYear = new Date().getFullYear();
  
        // Set the current year to the data property
        this.currentYear = currentYear.toString();
      }
    }
  };
  </script>
  
<style>
footer{
    position: fixed;
    margin-top: 1000px;
    bottom: 0;
    width: 100%;
    background-color: #333;
    color: #fff;
    text-align: center;
    padding: 2rem;
}

.social-icons {
            list-style: none;
            padding: 0;
            margin: 0;
}

.social-icons li {
            display: inline-block;
            margin: 0 10px;
}

.social-icons a {
            color: #fff;
            text-decoration: none;
            position: relative;
            display: inline-block;
            font-size: 24px;
}

.social-icons a:hover::before {
            content: attr(data-location);
            position: absolute;
            top: -30px;
            left: 50%;
            transform: translateX(-50%);
            background-color: #333;
            color: #fff;
            padding: 5px;
            border-radius: 5px;
            font-size: 12px;
            display: none;
}

.social-icons a:hover::before {
            display: block;
}

.fa-linkedin:before {
            content: "\f08c";
}

.fa-github:before {
    content: "\f09b";
}

.fa-twitter:before {
    content: "\f099";
}
</style>