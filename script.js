// event pada link
$('.page-scroll').on('click', function (e) {
    var tujuan = $(this).attr('href');
    // ambil section 
    var elemenTujuan = $(tujuan);

    $('html, body').animate({
        scrollTop: elemenTujuan.offset().top
    });
    e.preventDefault();
});

// function tombol back to top
$(function(){
    $('.top').hide().on('click', function(){
        $('body,html').animate({scrollTop : 0}, 800);
    });
    $(window).on('scroll', function(){
        if($(this).scrollTop() > 50){
            $('.top').show();
        }else{
            $('.top').hide();
        }
    });
});

// function running text 
var i = 0;
var text = "HELLO & WELCOME"
type();
function type () {
    if (i < text.length) {
        document.getElementById("hello").innerHTML += text.charAt(i);
        i++;
        setTimeout(type, 100);
    }
}

