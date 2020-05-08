/* Модальное окно */
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

    /* Стрелка прокрутки вниз */
    $(function(){
    	$('#scroll_bottom').click(function(){
    		$('html, body').animate({scrollTop: $(document).height() - $(window).height()}, 600);
    		return false;
    	});
    });
    /* Стрелка прокрутки вверх */
    $(function(){
    	$('#scroll_top').click(function(){
    		$('html, body').animate({scrollTop: 0}, 600);
    		return false;
    	});
    });

    $(function(){
        $('#scroll_top').hide();
        $(window).scroll(function(){
            if($(window).scrollTop() > 200) {
                $('#scroll_top').show();
            } else {
                $('#scroll_top').hide();
            }
        });
    });
///////////////////////////???
    $(function(){
        $(window).scroll(function(){
            if ($(window).scrollTop() > document.body.scrollHeight - 100) {
                $('#scroll_bottom').hide();
            } else {
                $('#scroll_bottom').show();
            }
        });
    });
//////////////////////////???
});
