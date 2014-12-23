function f1() {
    $('#w3').addClass('blue').removeClass('yellow');
    $('#w4').addClass('yellow').removeClass('blue');
    $('#w6').addClass('blue').removeClass('yellow');
    $('#w5').addClass('yellow').removeClass('blue');
    $('#w10').hide();
    $('#w11').show();
    alert('Нажата первая кнопка; +100');
}
function f2(){
    $('#w3').addClass('yellow').removeClass('blue');
    $('#w4').addClass('blue').removeClass('yellow');
    $('#w6').addClass('yellow').removeClass('blue');
    $('#w5').addClass('blue').removeClass('yellow') ;
    $('#w11').hide();
    $('#w10').show();
    alert('Нажата вторая кнопка -1000');
}
function f3(elem){
    a=a+1;$('.qq').html(a+' баллов');
    $(elem).hide();
    setTimeout(function() {
        var x = Math.random() * $(window).width() / 2;
        var y = Math.random() * $(window).height() / 2;
        $(elem).css({
            left: x,
            top: y
        });
        $(elem).show();
    }, 300);
}

a = 0;

setInterval(function() {
    var cx = parseInt($(".ball1").css("left").substr(0, $(".ball1").css("left").length-2));
    var cy = parseInt($(".ball1").css("top").substr(0, $(".ball1").css("top").length-2));
    cx += Math.random() * 6-6;
    cy += Math.random() * 6-6;
    if (cx > $(window).width() / 2) cx = $(window).width() / 2;
    if (cx < 0) cx = 0;
    if (cy < 0) cy = 0;
    if (cy > $(window).height() / 2) cy = $(window).height() / 2;
    $(".ball1").css({
        left: cx,
        top: cy
    });
}, 50);

setInterval(function() {
    var cx = parseInt($(".ball2").css("left").substr(0, $(".ball2").css("left").length-2));
    var cy = parseInt($(".ball2").css("top").substr(0, $(".ball2").css("top").length-2));
    cx += Math.random() * 8+8;
    cy += Math.random() * 8+8;
    if (cx > $(window).width() / 2) cx = $(window).width() / 2;
    if (cx < 0) cx = 0;
    if (cy < 0) cy = 0;
    if (cy > $(window).height() / 2) cy = $(window).height() / 2;
    $(".ball2").css({
        left: cx,
        top: cy
    });
}, 50);
setInterval(function() {
    var cx = parseInt($(".ball3").css("left").substr(0, $(".ball3").css("left").length-2));
    var cy = parseInt($(".ball3").css("top").substr(0, $(".ball3").css("top").length-2));
    cx += Math.random() * 9+9;
    cy += Math.random() * 9+9;
    if (cx > $(window).width() / 2) cx = $(window).width() / 2;
    if (cx < 0) cx = 0;
    if (cy < 0) cy = 0;
    if (cy > $(window).height() / 2) cy = $(window).height() / 2;
    $(".ball3").css({
        left: cx,
        top: cy
    });
}, 50);
setInterval(function() {
    var cx = parseInt($(".ball4").css("left").substr(0, $(".ball4").css("left").length-2));
    var cy = parseInt($(".ball4").css("top").substr(0, $(".ball4").css("top").length-2));
    cx += Math.random() * 10+10;
    cy += Math.random() * 10+10;
    if (cx > $(window).width() / 2) cx = $(window).width() / 2;
    if (cx < 0) cx = 0;
    if (cy < 0) cy = 0;
    if (cy > $(window).height() / 2) cy = $(window).height() / 2;
    $(".ball4").css({
        left: cx,
        top: cy
    });
}, 50);
