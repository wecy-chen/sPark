
$(function () {
    var flag = false;// 防止滚动条停止在底部时，触发多次scroll中的回调函数，重复加载数据
    var scrollTop = $(this).scrollTop();
    var scrollHeight = $(document).height();
    var windowHeight = $(this).height();
    if (scrollHeight == windowHeight)//界面不存在scrollbar,即页面中显示的数据未填满整个页面
    {
        //doingsomething : ajax 加载数据
    }
    $(window).scroll(function () {
        scrollTop = $(this).scrollTop();
        scrollHeight = $(document).height();
        windowHeight = $(this).height();
        var ul = $('.notice-content ul');
        if (scrollTop + windowHeight >= scrollHeight) {
            console.log('我到底了');//滚动到底部执行事件
            if (flag == false) {
                //flag=true
                //添加一些等待加载的动画效果
                $('.upload').show();
                //doingsomething : ajax 加载数据;
                setTimeout(function () {
                    for (var i = 0; i < 6; i++) {
                        var li = $('<li>');
                        var a = $('<a>');
                        var span = $('<span>');
                        var span2 = $('<span>');
                        var dot = $('<div>');
                        li.appendTo(ul);
                        a.appendTo(li);
                        dot.appendTo(a);
                        span.appendTo(a);
                        span2.appendTo(a);
                        dot.addClass('dot');
                        span.addClass('m-ellipsis spn');
                        span2.addClass('right');
                        a.attr('href','announcement.html')
                        span.html('落实“放管服”推助企业发展');
                        span2.html('2017-09-02');
                        li.addClass('clearfix');
                    }
                    $('.upload').hide();
                }, 2000)
                // ajax 加载成功后，停止动画效果，局部刷新添加新的数据到界面中
            }
        }
    });

//时间转换
    function getLocalTime(nS) {
        return new Date(parseInt(nS) * 1000).Format("yyyy-MM-dd hh:mm:ss");
    }

    Date.prototype.Format = function (fmt) {//author: meizz
        var o = {
            "M+": this.getMonth() + 1, //月份
            "d+": this.getDate(), //日
            "h+": this.getHours(), //小时
            "m+": this.getMinutes(), //分
            "s+": this.getSeconds(), //秒
            "q+": Math.floor((this.getMonth() + 3) / 3), //季度
            "S": this.getMilliseconds() //毫秒
        };
        if (/(y+)/.test(fmt))
            fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
        for (var k in o)
            if (new RegExp("(" + k + ")").test(fmt))
                fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
        return fmt;
    }
    console.log(getLocalTime(1564521154000/1000));
})
