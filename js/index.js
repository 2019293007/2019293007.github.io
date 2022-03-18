window.addEventListener('load', function () {
    var params = location.search.substring(7);
    alert('欢迎登录：' + params);

    var xia = document.getElementsByClassName('xiazaiapp');
    var list = document.getElementsByClassName('list');
    var li = list[0].getElementsByTagName('li');


    // 五秒自动关闭广告
    var at = document.querySelector('.author');
    setTimeout(function () {
        at.style.display = 'none';
    }, 2000);
    console.log(at);


    var ding = setInterval(function () {
        var five = at.querySelector('span');
        five.innerText--;
        if (five.innerText == 0) {
            clearInterval(ding);
        }
    }, 1000)
    //鼠标经过出现二维码
    li[li.length - 1].onmouseover = function () {
        xia[0].style.display = ' block';
    }
    li[li.length - 1].onmouseout = function () {
        xia[0].style.display = 'none';
    }

    // 登录
    var logn = document.querySelector('.login');
    logn.addEventListener('click', function () {
        window.location.href = "dynamic.html";
    })

    // 右侧固定定位
    var to = document.querySelectorAll('.to');
    document.addEventListener('scroll', function () {
        for (i = 0; i < to.length; i++) {
            to[i].style.visibility = 'hidden';
        }
        if (window.pageYOffset >= 700) {

            for (i = 0; i < to.length; i++) {

                to[i].style.visibility = 'visible';

            }
        }

    })


    /*  // 分装缓动函数
      // 当我们不断的点击按钮，这个元素的速度会越来越快，因为开启了太多的定时器
      // 解决方案就是 让我们元素只有一个定时器执行
      // 先清除以前的定时器，只保留当前的一个定时器执行
  /*     function animate(obj, target) {
          clearInterval(obj.timer);
          obj.timer = setInterval(function () {
              if (obj.offsettop >= target) {
                  // 停止动画 本质是停止定时器
                  clearInterval(obj.timer);
              }
              obj.style.left = obj.offsettop + 1 + 'px';
          }, 30);
      } 
    
  */

    //   input获取焦点变色
    var hd = document.querySelector('.hd');
    var ip = hd.querySelector('input');
    var h_but = hd.querySelector('button');
    ip.addEventListener('focus', function () {
        ip.style.background = '#fff';
        h_but.style.background = '#fff';
    })
    // 失去焦点
    ip.addEventListener('blur', function () {
        ip.style.background = 'rgb(230,234,234)';
        h_but.style.background = 'rgb(230,234,234)';
    })

    // 顶部a标签动画
    //   鼠标经过 



    var ha = hd.querySelectorAll('a');
    console.log(ha);
    for (i = 0; i < ha.length; i++) {
        ha[i].addEventListener('mouseover', function () {
            console.log(this);
            // for(i = 0; i < ha.length; i++){
            animatey(this, -3, function () {
                for (i = 0; i < ha.length; i++) {
                    animatey(ha[i], 0);
                    // ha[i].style.top = 0+'px';
                }
            });
            //    console.log(this.offsetTop); 

        })
    }
    // console(obj.offsettop)
    /*  console.log(ha);
      for (i = 0; i < ha.length; i++) {
          ha[i].addEventListener('mouseover', function () {
      
                  this.style.top = -3+'px';
  
               setTimeout(function () {
                   for(i = 0; i < ha.length; i++){
                   ha[i].style.top=0+'px'}
                   }, 100)
          })
                  } */

    // })

    //   鼠标离开
    //   for (i = 0; i < ha.length; i++) {
    //       // a.onmouseout = function () {
    //          ha[i].addEventListener('mouseout',function(){
    //         this.style.top='0px';
    //          })             
    //           }

    // 导航栏鼠标经过事件
    var navm = document.querySelector('.navm');
    var nav_li = navm.querySelectorAll('li');

    for (i = 0; i < nav_li.length; i++) {
        nav_li[i].addEventListener('mouseover', function () {
            for (i = 0; i < nav_li.length; i++) {
                nav_li[i].style.backgroundColor = 'rgb(246, 247, 248)'
            }
            this.style.backgroundColor = '#ccc';
        })
    }

    // 导航栏鼠标离开事件

    for (i = 0; i < nav_li.length; i++) {
        nav_li[i].addEventListener('mouseout', function () {
            //   for (i = 0; i < nav_li.length; i++) {
            //       nav_li[i].style.backgroundColor ='rgb(246, 247, 248)'
            //   }
            this.style.backgroundColor = 'rgb(246, 247, 248)';
        })
    }


    // 导航栏字体图标鼠标事件
    var navr = document.querySelector('.navr');
    var ico = navr.querySelectorAll('ul>li');
    for (i = 0; i < ico.length; i++) {
        ico[i].addEventListener('mouseover', function () {
            for (i = 0; i < ico.length; i++) {
                ico[i].style.color = 'black';
            }
            this.style.color = 'rgb(0, 173, 235)';
        })
    }



    // 导航栏字体图标鼠标离开事件

    for (i = 0; i < ico.length; i++) {
        ico[i].addEventListener('mouseout', function () {
            //   for (i = 0; i < nav_li.length; i++) {
            //       nav_li[i].style.backgroundColor ='rgb(246, 247, 248)'
            //   }
            this.style.color = 'black';
        })
    }


    // 轮播图动态添加小li
    var ol = document.querySelector('ol');
    var tu = document.querySelector('.tu');
    var ul = tu.querySelector('ul');
    var slideshow = document.querySelector('.slideshow');
    var slideWidth = slideshow.offsetWidth;
    var num = 0;
    var circle = 0;
    // var li = document.createElementAll('li');

    // 2. 鼠标经过slideshow 就显示隐藏左右按钮
    slideshow.addEventListener('mouseenter', function () {
        l.style.display = 'block';
        r.style.display = 'block';
        clearInterval(timer);
        timer = null; // 清除定时器变量
    });
    slideshow.addEventListener('mouseleave', function () {
        l.style.display = 'none';
        r.style.display = 'none';
        timer = setInterval(function () {
            //手动调用点击事件
            r.click();
        }, 2000);
    });

    for (var i = 0; i < ul.children.length; i++) {
        // 创建一个小li 
        var li = document.createElement('li');
        // 记录当前小圆圈的索引号 通过自定义属性来做 
        li.setAttribute('index', i);
        // 把小li插入到ol 里面
        ol.appendChild(li);
        // 4. 小圆圈的排他思想 我们可以直接在生成小圆圈的同时直接绑定点击事件
        li.addEventListener('click', function () {
            // 干掉所有人 把所有的小li 清除 current 类名
            for (var i = 0; i < ol.children.length; i++) {
                ol.children[i].className = '';
            }
            // 留下我自己  当前的小li 设置current 类名
            this.className = 'current';
            // 5. 点击小圆圈，移动图片 当然移动的是 ul 
            // ul 的移动距离 小圆圈的索引号 乘以 图片的宽度 注意是负值
            // 当我们点击了某个小li 就拿到当前小li 的索引号
            var index = this.getAttribute('index');
            // 当我们点击了某个小li 就要把这个li 的索引号给 num  
            num = index;
            // 当我们点击了某个小li 就要把这个li 的索引号给 circle  
            circle = index;
            // num = circle = index;


            animate(ul, -index * slideWidth);
        })
    }
    var but = slideshow.querySelectorAll('button');
    var l = document.querySelector('.zuo');

    var r = document.querySelector('.you');
    var flag = true;

    var first = ul.children[0].cloneNode(true);
    ul.appendChild(first);
    // 轮播图左按钮
    l.addEventListener('click', function () {
        if (flag) {
            flag = false;
            if (num == 0) {
                num = ul.children.length - 1;
                ul.style.left = -num * slideWidth + 'px';
            }
            num--;
            animate(ul, -num * slideWidth, function () {
                flag = true;
            });
            // 点击左侧按钮，小圆圈跟随一起变化 可以再声明一个变量控制小圆圈的播放
            circle--;
            // 如果circle < 0  说明第一张图片，则小圆圈要改为第4个小圆圈（3）
            // if (circle < 0) {
            //     circle = ol.children.length - 1;
            // }
            circle = circle < 0 ? ol.children.length - 1 : circle;
            // 调用函数
            circleChange();
        }
    });

    function circleChange() {
        // 先清除其余小圆圈的current类名
        for (var i = 0; i < ol.children.length; i++) {
            ol.children[i].className = '';
        }
        // 留下当前的小圆圈的current类名
        ol.children[circle].className = 'current';
    }

    // 轮播图右按钮
    r.addEventListener('click', function () {

        if (flag) {
            flag = false;
            if (num == ul.children.length - 1) {
                num = 0;
                ul.style.left = -num * slideWidth + 'px';
            }
            num++;
            animate(ul, -num * slideWidth, function () {
                flag = true;
            });
            // 点击左侧按钮，小圆圈跟随一起变化 可以再声明一个变量控制小圆圈的播放
            circle++;
            // 如果circle < 0  说明第一张图片，则小圆圈要改为第4个小圆圈（3）
            // if (circle < 0) {
            //     circle = ol.children.length - 1;
            // }
            circle = circle > ol.children.length - 1 ? 0 : circle;
            // 调用函数
            circleChange();
        }
    });

    function circleChange() {
        // 先清除其余小圆圈的current类名
        for (var i = 0; i < ol.children.length; i++) {
            ol.children[i].className = '';
        }
        // 留下当前的小圆圈的current类名
        ol.children[circle].className = 'current';
    }
    var timer = setInterval(function () {
        //手动调用点击事件
        r.click();
    }, 2000);


    // var slideshow = document.querySelector('.slideshow');



    // 番剧动态

    // var daybut=querySelectorAll('');
    // 日期栏
    var week = document.querySelector('.week');
    // 星期几
    var w_li = week.querySelectorAll('li')
    // 内容栏
    // 番剧正文中最大的盒子
    var anime = document.querySelector('.anime');
    var according = document.querySelector('.according');

    var a_ul = according.querySelectorAll('ul');

    for (i = 0; i < w_li.length; i++) {
        w_li[i].setAttribute('index', i);
        w_li[i].addEventListener('click', function () {
            for (i = 0; i < a_ul.length; i++) {
                a_ul[i].style.display = 'none';
                w_li[i].id = '';
            }
            var index = this.getAttribute('index');
            // a_ul[0].style.display = 'block';

            switch (index) {
                case '0':
                    w_li[index].id = 'blue';
                    a_ul[0].style.display = 'block';
                    break;
                case '1':
                    w_li[index].id = 'blue';
                    a_ul[0].style.display = 'block';
                    break;
                case '2':
                    w_li[index].id = 'blue';
                    a_ul[1].style.display = 'block';
                    break;
                case '3':
                    // console.log(w_li[index]);
                    w_li[index].id = 'blue';
                    a_ul[2].style.display = 'block';
                    break;
                case '4':
                    w_li[index].id = 'blue';
                    a_ul[3].style.display = 'block';
                    break;
                case '5':
                    w_li[index].id = 'blue';
                    a_ul[4].style.display = 'block';
                    break;
                case '6':
                    w_li[index].id = 'blue';
                    a_ul[5].style.display = 'block';
                    break;
                case '7':
                    w_li[index].id = 'blue';
                    a_ul[6].style.display = 'block';
                    break;
                default:
                    w_li[index].id = 'blue';
                    a_ul[7].style.display = 'block';
                    break;
            }

        })

    }

    // 内容部分a标签经过变色
    var show = document.querySelectorAll('.show');


    for (i = 0; i < show.length; i++) {
        var zz = show[i].querySelectorAll('.zhezhao');
        var an = show[i].querySelectorAll('a');
        // var =show[i].querySelectorAll('a');
        for (j = 0; j < zz.length; j++) {
            // 图片遮罩
            zz[j].addEventListener('mouseover', function () {

                this.style.opacity = '0.5';

            })
            // 去遮罩
            zz[j].addEventListener('mouseout', function () {

                this.style.opacity = '0';

            })
        }




        for (j = 0; j < an.length; j++) {

            // a连接变色
            an[j].addEventListener('mouseover', function () {
                this.style.color = 'rgb(66, 179, 240)';
            })
            an[j].addEventListener('mouseout', function () {
                this.style.color = 'black';
            })

        }
    }
    // console.log(show);
    /* for(i=0;i<an.length;i++){
        
    var ain=an[i];
    console.log(ain);
    } */
    // for(i=0;i<an.length;i++){


    //     }






    // an[i].addEventListener('mouseover',function () { 
    //    
    //     console.log(0);
    // })
    // }


})