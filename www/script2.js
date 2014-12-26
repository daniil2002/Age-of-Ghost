h1 = 100;
h2 = 100;
enemsR = [];
enemsL = [];
wes = [];
wid = $(window).width();
hei = $(window).height();
alert('wid='+wid+' hei='+hei);
interv = 50;
money = 100;
function createW1(x1, y1, x2, y2) {
    var elem = $('<div class="we1"></div>');
    elem.css({
        left: x1,
        top: y1
    });
    var obj = {
        elem: elem,
        left: x1,
        targetLeft: x2,
        top: y1,
        targetTop: y2,
        power: 2,
        speed: 20,
        directionR: x2 > x1,
        directionB: y2 > y1
    };
    wes.push(obj);
    subHealth(obj, 0, enemsR);
    $(".cont").append(elem);
}
function create1() {
    var price = 10;
    if (money < price) return;
    money -= price;
    updateMoneyDiv();
    var elem = $('<div class="en1"></div>');
    elem.append($('<div class="health"><div class=" health1"></div></div>'));
    elem.css({left: 150});
    elem.addClass("anim");
    var obj = {
        elem: elem,
        left: 150,
        power: 0.6,
        powerk: 1,
        health: 100,
        speed: 2,
        directionR: true,
        distance: 45,
        distanceF: 45,
        targetLeft: wid - 150,
        state: 'normal',
        price: price
    };
    enemsR.push(obj);
    subHealth(obj, 0, enemsR);
    $(".cont").append(elem);
}
function create3() {
    var price = 5;
    if (money < price) return;
    money -= price;
    updateMoneyDiv();
    var elem = $('<div class="en3"></div>');
    elem.append($('<div class="health"><div class=" health1"></div></div>'));
    elem.css({left: 150});
    elem.addClass("anim");
    var obj = {
        elem: elem,
        left: 150,
        power: 0.2,
        health: 100,
        powerk: 1.5,
        speed: 3,
        directionR: true,
        distance: 45,
        distanceF: 45,
        targetLeft: wid - 150,
        state: 'normal',
        price: price
    };
    enemsR.push(obj);
    subHealth(obj, 0, enemsR);
    $(".cont").append(elem);
}
function create4() {
    var price = 20;
    if (money < price) return;
    money -= price;
    updateMoneyDiv();
    var elem = $('<div class="en4"></div>');
    elem.append($('<div class="health"><div class=" health1"></div></div>'));
    elem.css({left: 150});
    elem.addClass("anim");
    var obj = {
        elem: elem,
        left: 150,
        power: 1,
        health: 100,
        powerk: 1,
        speed: 2,
        directionR: true,
        distance: 45,
        distanceF: 45,
        targetLeft: wid - 150,
        state: 'normal',
        price: price
    };
    enemsR.push(obj);
    subHealth(obj, 0, enemsR);
    $(".cont").append(elem);
}
function create6() {
    var price = 100;
    if (money < price) return;
    money -= price;
    updateMoneyDiv();
    var elem = $('<div class="en6"></div>');
    elem.append($('<div class="health"><div class=" health1"></div></div>'));
    elem.css({left: 150});
    elem.addClass("anim");
    var obj = {
        elem: elem,
        left: 150,
        power: 2.6,
        health: 100,
        powerk: 1,
        speed: 1,
        directionR: true,
        distance: 45,
        distanceF: 130,
        targetLeft: wid - 150,
        state: 'normal',
        price: price
    };
    enemsR.push(obj);
    subHealth(obj, 0, enemsR);
    $(".cont").append(elem);

}
function create7() {
    var price = 25;
    if (money < price) return;
    money -= price;
    updateMoneyDiv();
    var elem = $('<div class="en7"></div>');
    elem.append($('<div class="health"><div class=" health1"></div></div>'));
    elem.css({left: 150});
    elem.addClass("anim");
    var obj = {
        elem: elem,
        left: 150,
        power: 0.5,
        health: 100,
        powerk: 1,
        speed: 2,
        directionR: true,
        distance: 45,
        distanceF: 150,
        targetLeft: wid - 150,
        state: 'normal',
        price: price
    };
    enemsR.push(obj);
    subHealth(obj, 0, enemsR);
    $(".cont").append(elem);

}
function create2() {
    var price = 10;
    var elem = $('<div class="en2"></div>');
    elem.append($('<div class="health"><div class=" health1"></div></div>'));
    elem.css({left: wid-150});
    elem.addClass("anim");
    var obj = {
        elem: elem,
        left: wid-150,
        speed:3,
        power: 0.5,
        health: 100,
        powerk: 1,
        distance: 45,
        distanceF: 45,
        directionR: false,
        targetLeft: 130,
        state: 'normal',
        price: price
    };
    enemsL.push(obj);
    subHealth(obj, 0, enemsL);
    $(".cont").append(elem);
}
function create5() {
    var price = 10;
    var elem = $('<div class="en5"></div>');
    elem.append($('<div class="health"><div class=" health1"></div></div>'));
    elem.css({left: wid-150});
    elem.addClass("anim");
    var obj = {
        elem: elem,
        left: wid-150,
        speed:3,
        power: 1,
        health: 100,
        powerk: 1,
        distance: 45,
        distanceF: 45,
        directionR: false,
        targetLeft: 130,
        state: 'normal',
        price: price
    };
    enemsL.push(obj);
    subHealth(obj, 0, enemsL);
    $(".cont").append(elem);
}
setInterval(function(){
    if(!((h1>0) && (h2>0)))
        exit();
    for(var i = 0; i < enemsR.length; ++i) {
        if (enemsR[i].state == 'fight') {
            if (Math.random()*100 < 10) playTap();
        }
        if (enemsR[i].health <= 0) {
            if (enemsR[i].state != 'die') {
                if (enemsR[i].elem.hasClass("en1")) {
                    setDie1State(enemsR[i]);
                } else if (enemsR[i].elem.hasClass("en3")) {
                    setDie3State(enemsR[i]);
                } else if (enemsR[i].elem.hasClass("en4")) {
                    setDie4State(enemsR[i]);
                } else if (enemsR[i].elem.hasClass("en7")) {
                    setDie7State(enemsR[i]);
                } else if (enemsR[i].elem.hasClass("en6")) {
                    setDie6State(enemsR[i]);
                }
                var _i = i;
                setTimeout(function() {
                    enemsR[_i].elem.remove();
                    enemsR.splice(0, 1);
                }, 400);
            }

            continue;
        }
        if (enemsL.length > 0 && Math.abs(enemsR[i].left-enemsL[0].left) < enemsR[i].distanceF) {
            setFightState(enemsR[i]);
            var _i = i;
            setTimeout(function() {
                subHealth(enemsL[0], enemsR[_i].power*enemsL[0].powerk, enemsL);
            }, 200);

        } else {
            if (enemsR[i].left < enemsR[i].targetLeft) {
                if (i > 0 && (Math.abs(enemsR[i-1].left - enemsR[i].left) < enemsR[i].distance || enemsR[i].left > enemsR[i-1].left)) continue;
                setAnimState(enemsR[i])
                enemsR[i].left += enemsR[i].speed;
                $(enemsR[i].elem).css({left: enemsR[i].left});
            } else {
                setFightState(enemsR[i]);
                h2 -= enemsR[i].power / 5;
                $(".war .health1").css("width", h2 + "%");
                if (h2 <= 0){
                    bomba.start();
                    $(".GameOver p").text('Вы победили. Ура!');
                    $(".GameOver").show();
                    if (h2 > -100) {
                        $(".war").css("background-image", "url('boom.gif?"+new Date().getTime()+"')");
                        h2 = -101;
                    }


                }
//                    alert('Вы победили. Ура!');
            }
        }

    }
   for(var i = 0; i < enemsL.length; ++i) {
       if (enemsL[i].state == 'fight') {
           if (Math.random()*100 < 10) playTap();
       }
        if (enemsL[i].health <= 0) {
            if (enemsL[i].state != 'die') {
                if (enemsL[i].elem.hasClass("en2")) {
                    setDie2State(enemsL[i]);
                } else if (enemsL[i].elem.hasClass("en5")) {
                    setDie5State(enemsL[i]);
                }
                var _i = i;
                setTimeout(function() {
                    enemsL[_i].elem.remove();
                    enemsL.splice(0, 1);
                }, 400);
                money += enemsL[i].price * 1.5;
                updateMoneyDiv();

            }
            continue;
//            for(var i = 0; i < enemsL.length; ++i) {
//                if (enemsL[i].health <= 0) {
//                    if (enemsL[i].state != 'die') {
//                        var _i = i;
//                        setTimeout(function() {
//                            enemsL[_i].elem.remove();
//                            enemsL.splice(0, 1);
//                        }, 80);
//                        money += enemsL[i].price * 1.5;
//                        updateMoneyDiv();
//                    }
//                    setDieState(enemsL[i]);
//                }
//            }
        }
        if (enemsR.length > 0 && Math.abs(enemsR[0].left-enemsL[i].left) < enemsL[i].distanceF) {
            setFightState(enemsL[i]);
            subHealth(enemsR[0], enemsL[i].power*enemsR[0].powerk, enemsR);
        } else {
            if (enemsL[i].left > enemsL[i].targetLeft) {
                if (i > 0 && (Math.abs(enemsL[i-1].left - enemsL[i].left) < enemsL[i].distance || enemsL[i].left < enemsL[i-1].left)) continue;
                setAnimState(enemsL[i])
                enemsL[i].left -= enemsL[i].speed;
                $(enemsL[i].elem).css({left: enemsL[i].left});
            } else {
                setFightState(enemsL[i]);
                h1 -= enemsL[i].power / 5;
                $(".castle .health1").css("width", h1 + "%");
                if (h1 <= 0){
                    $(".GameOver p").text('Вы проиграли!')
                    $(".GameOver").show();
                    if (h1 > -100) {
                        $(".castle").css("background-image", "url('boom.gif?"+new Date().getTime()+"')");
                        h1 = -101;
                    }

//                    alert('Вы проиграли!');
                }
            }
        }

   }
    for(var i = 0; i < wes.length; ++i) {
        if (wes[i].directionR && wes[i].left > wes[i].targetLeft) {
            var _i = i;
            setTimeout(function() {
                subHealth(enemsL[0], wes[_i].power*enemsL[0].powerk, enemsL);
                wes[_i].elem.remove();
                wes.splice(_i, 1);
            }, 80);
        } else if (!wes[i].directionR && wes[i].left < wes[i].targetLeft) {
            var _i = i;
            setTimeout(function() {
                subHealth(enemsR[0], wes[_i].power*enemsR[0].powerk, enemsR);
                wes[_i].elem.remove();
                wes.splice(_i, 1);
            }, 80);
        } else {
            wes[i].top += 1.0*wes[i].speed/(Math.abs(wes[i].targetLeft-wes[i].left))*Math.abs(wes[i].targetTop-wes[i].top) * (wes[i].directionB ? 1 : -1);
            wes[i].left += wes[i].speed * (wes[i].directionR ? 1 : -1);
            $(wes[i].elem).css({
                left: wes[i].left,
                top: wes[i].top
            });
        }
    }

    var rPower = 0;
    for (var i = 0; i < enemsR.length; ++i) {
        rPower += enemsR[i].power;
    }
    var lPower = 0;
    for (var i = 0; i < enemsL.length; ++i) {
        lPower += enemsL[i].power;
    }
    if (rPower >= lPower) {
        if (Math.random()*100 < 1) {
            if (Math.random()*100 < 50) {
                create2();
            } else {
                create5();
            }

        }

    }

    }, interv);
setInterval(function(){
    if (enemsL.length > 0) {
        var fEnem = enemsL[0];
        if (fEnem.left < wid*0.4) {
            createW1(88, 0.3*hei+20, fEnem.left, 0.45*hei);
        }
    }
    if (enemsR.length > 0) {
        var f1Enem = enemsR[0];
        if (f1Enem.left > wid*0.6) {
            createW1(wid-88, 0.3*hei+20, f1Enem.left+40, 0.45*hei);
        }
    }
}, 8*interv);


function setAnimState(obj) {
    $(obj.elem).removeClass("fight");
    $(obj.elem).removeClass("die");
    $(obj.elem).addClass("anim");
    obj.state = 'anim';
}
function setNormalState(obj) {
    $(obj.elem).removeClass("fight");
    $(obj.elem).removeClass("anim");
    $(obj.elem).removeClass("die");
    obj.state = 'normal';
}
function setFightState(obj) {
    $(obj.elem).addClass("fight");
    $(obj.elem).removeClass("anim");
    $(obj.elem).removeClass("die");
    obj.state = 'fight';
}
function setDieState(obj) {
    $(obj.elem).addClass("dieing");
    $(obj.elem).removeClass("anim");
    $(obj.elem).removeClass("fight");
    obj.state = 'die';
    $(obj.elem).css("background-image", "url('boom.gif?"+new Date().getTime()+"')");
}
setDie1State = setDie2State = setDie3State = setDie4State = setDie5State = setDie6State = setDie7State = setDieState;
function subHealth(obj, power, Arr) {
    obj.health -= power;
    $(obj.elem).find(".health1").css("width", obj.health + "%");
}
function updateMoneyDiv() {
    $(".money").text(money);
}


function exit() {

}

function playTap() {
    $("#tapAudio")[0].load();
    $("#tapAudio")[0].play();
}
function playTap1() {
    $("#tapAudio2")[0].load();
    $("#tapAudio2")[0].play();
}
function playSalut() {
    $("#salutAudio")[0].load();
    $("#salutAudio")[0].play();
}

bomba = {
    interval: undefined,
    freq: 12,
    curr: 17,
    state: 0,
    start: function(){
        if (bomba.state == 0) {
            bomba.state = 1;
            bomba.interval = setInterval(function() {
                bomba.curr++;
                if (bomba.curr >= 17) {
                    $(".bomba").css({
                        left: Math.random()*(wid-300)+150,
                        top: Math.random()*(hei-300)+150
                    });
                    bomba.curr = 0;
                    playSalut();
                }
                $(".bomba").css("background-image", "url('bomba/"+(bomba.curr+1)+".png')");
            }, 1000.0/bomba.freq)
        }

    },
    stop: function() {
        clearInterval(bomba.interval);
        bomba.state = 0;
    }
}