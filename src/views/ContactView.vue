<template lang="">
    <div style="height: 80vh" class="container-fluid">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" integrity="sha512-jBqC8H2hE5WA8M/AJHQWAYUDJQ2MIE07I5J6L6jMxRFO6dNM4ATPeW6N6sWtC/XnpPKe1Pi/QPPOkLkZOqLrzg==" crossorigin="anonymous" />
        <div class="container text-center">
            <div class="row">
                <div class="col">
                    <h3>Contact Me</h3>
                    <div class="form">
            <form
            action="https://formspree.io/f/mleqdjed"
            method="POST"
                >
                <label for="">
                    Full Name
                    <input type="name" name="name" required placeholder="John Doe">
                </label>
                <label>
                    Your email:
                    <input type="email" name="email" required placeholder="jdoe@example.co.za">
                </label>
                <label>
                    Your message:
                    <textarea name="message" rows="4" required placeholder="Enter your message here"></textarea>
                </label>
                <button type="submit">Send</button>
            </form>
        </div>
                </div>
                <div class="col">
                    <h3>For Fast Replies</h3>
                    <div class="contact">
                        <a href="https://www.linkedin.com/in/asithandile-tyulu-a12006171/" data-location="LinkedIn" class="fa fa-linkedin"></a>
        <a href="https://github.com/AsithandileNyjah" data-location="GitHub" class="fa fa-github"></a>
        <a href="https://twitter.com/ThandileTyulu" data-location="Twitter" class="fa fa-twitter"></a>
        <a class="fa fa-phone"> 081 899 3523</a>
        <a class="fa fa-envelope"> atyuluu@gmail.com</a>
        <a class="fa fa-map-pin"> Cape Town</a>
                    </div>
                </div>
                <div class="col">
                    <h3>Location</h3>
                    <div class="iframe">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3306.8695882739507!2d18.6530256243245!3d-34.02155829986652!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1dcc4f2fae401a17%3A0xe9d01c4b79773deb!2sAndile%20Msizi%20Hall!5e0!3m2!1sen!2sza!4v1705061662336!5m2!1sen!2sza" width="400" height="300" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style>
form {
    max-width: 400px;
    margin: 0 auto;
    font-family: 'Arial', sans-serif;
}

label {
    display: block;
    margin-bottom: 10px;
}

input, textarea {
    width: 100%;
    padding: 8px;
    margin-bottom: 10px;
    box-sizing: border-box;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 14px;
}

button {
    background-color: #7F00FF;
    color: #fff;
    padding: 10px 15px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 16px;
}
button:hover {
    background-color: #007bb5;
}
.form, .iframe {
    margin-left: 10px;
    margin-top: 5rem;
}

.contact {
    display: flex;
    flex-direction: column;
    margin-top: 10rem;
}

.contact a {
    margin-bottom: 10px;
    text-decoration: none;
    color: #333; 
}

.contact a.fa-linkedin,
.contact a.fa-github,
.contact a.fa-twitter {
    order: 1; 
}

.contact a.fa-phone,
.contact a.fa-envelope,
.contact a.fa-map-pin {
    order: 0; 
}


.contact p {
    margin: 0; 
    font-weight: bold; 
}

</style>