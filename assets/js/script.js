let btn = document.querySelector('#btn');
let sidebar = document.querySelector('.sidebar');

btn.onclick = function (){
    sidebar.classList.toggle('active');
};


        document.getElementById('contact-form').addEventListener('submit', function(event) {
            event.preventDefault(); 


setTimeout(function() {
        swal({
            title: "Success!",
            text: "Your form has been submitted successfully!",
            icon: "success",
            button: "OK"
        });
    }, 10); 
});
