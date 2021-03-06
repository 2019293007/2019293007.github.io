window.addEventListener('load', function () {
    console.log('545');
    var b = document.querySelectorAll('a');
    console.log(b);
    for (i = 0; i < b.length; i++) {
        b[i].addEventListener('mouseover', function () {
            this.style.color = 'rgb(0, 161, 214)';
        })
    }

    for (i = 0; i < b.length; i++) {
        b[i].addEventListener('mouseout', function () {
            this.style.color = 'rgb(0, 0,0)';
        })
    }
    // dynamic

    // 发布评论
    // 1. 获取元素
    var btn = document.querySelector('button');
    var text = document.querySelector('input');
    var ul = document.querySelector('ul');
    // 2. 注册事件
    btn.onclick = function () {
        if (text.value == '') {
            alert('您没有输入内容');
            return false;
        } else {
            // console.log(text.value);
            // (1) 创建元素
            var li = document.createElement('li');
            // 先有li 才能赋值
            li.innerHTML = text.value + "<a href='javascript:;'>删除</a>";
            // (2) 添加元素
            // ul.appendChild(li);
            ul.insertBefore(li, ul.children[0]);
            text.value = '';
            // (3) 删除元素 删除的是当前链接的li  它的父亲
            var as = document.querySelectorAll('a');
            for (var i = 0; i < as.length; i++) {
                as[i].onclick = function () {
                    // node.removeChild(child); 删除的是 li 当前a所在的li  this.parentNode;
                    ul.removeChild(this.parentNode);
                }
            }
        }
    }
})