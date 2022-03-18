window.onload = function () {
    var mi = document.getElementsByClassName('mi');
    var xin = document.getElementsByClassName('xin');
    var op = document.getElementsByClassName('options');
    var sp = op[0].getElementsByTagName('span')

    for (i = 0; i < sp.length; i++) {
        sp[i].setAttribute('index', i);
        sp[i].onclick = function () {
            for (i = 0; i < sp.length; i++) {
                sp[i].style.color = 'black';
            }
            this.style.color = "rgb(0, 160, 216)";
            if (this.getAttribute('index') == 0) {
                mi[0].style.display = 'block';
                xin[0].style.display = 'none';
            }
            else {
                mi[0].style.display = 'none';
                xin[0].style.display = 'block';
            }

        }
    }
    //登录
    var buts = document.querySelector('.but');
    var sub = buts.querySelector('input');
    sub.addEventListener('click', function () {
        if (sub.value == '') {
            alert('您没有输入内容');
        }
    });

    var way = document.querySelector('.way');
    var log_way = way.querySelectorAll('div');
    var log_icon = way.querySelectorAll('span');
    // 鼠标经过
    for (i = 0; i < log_icon.length; i++) {
        log_icon[i].setAttribute('index', i);
        log_icon[i].addEventListener('mouseover', function () {
            var on = this.getAttribute('index')
            var imgn = way.querySelectorAll('img');
            imgn[on].style.display = 'block';
        })
    }


    // 鼠标离开
    for (i = 0; i < log_icon.length; i++) {
        log_icon[i].setAttribute('index', i);
        log_icon[i].addEventListener('mouseout', function () {
            var on = this.getAttribute('index')
            var imgn = way.querySelectorAll('img');
            imgn[on].style.display = 'none';
        })
    }


    /* for(i=0;i<log_way.length;i++){
    log_way[i].addEventListener('mouseout',function(){
        var imgn=this.querySelector('img');
        imgn.style.display='none';
    })
    } */

}