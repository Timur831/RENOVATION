var button = document.querySelector('#button');
var modal = document.querySelector('#modal');
var close = document.querySelector('#close');

$(document).ready(function(){

    button.addEventListener('click', function() {
        modal.classList.add('modal_active');
    });
    
    close.addEventListener('click', function(){
        modal.classList.remove('modal_active');
    });

    
});