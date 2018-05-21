$(function(){
	var box = $('.box');
    var ul = $('.box ul')[0];
    var liList = $('.box ul li');
    var spans = $('.box .count span');
    var imgWidth = liList[0].offsetWidth;
    var click=false;
    var index = 1;
    var num = 0;
    spans.eq(0).addClass('bgcolor');
    if(!click) box.timer = setInterval(shooRight, 5000);

    

    spans.click(function () {
    		click=!click
    		if(click){
    		clearInterval(box.timer);
    		click=!click;
    		}
    		console.log(click);
        var index = $(this).index();
        activeSpan(index);
        shooRight()
    });

    function shooRight() {
        index++;
        num++;
        if (num > spans.length-1) {
            num = 0;
        }
        if (index >= liList.length) {
            index = 1;
            ul.style.left = -imgWidth + 'px ';
        }
        fnMove(ul, {left: -imgWidth * index});
        activeSpan(num)
    }

    function activeSpan(num) {
        for (var i = 0; i < spans.length; i++) {
            spans[i].className = '';
        }
        spans.eq(num).addClass('bgcolor')
    }
})