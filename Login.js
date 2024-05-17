
let child = document.getElementById('login');
let logindiv=document.getElementById('logindiv'); 
let biglight=document.getElementById('biglight');
let text=document.getElementById('text')

child.addEventListener('click', function() {
    text.innerHTML="";
    biglight.innerHTML="";
    logindiv.classList.add('slide');
});
