/*未输入用户密码错误*/

jQuery(document).ready(function() {

    $('.container form').submit(function(){
        var username = $(this).find('.username').val();
        var password = $(this).find('.password').val();
        if(username == '') {
            $(this).find('.error').fadeOut('fast');
            $(this).find('.error').fadeIn('fast', function(){
                $(this).parent().find('.username').focus();
            });
            return false;
        }
        if(password == '') {
            $(this).find('.error').fadeOut('fast');
            $(this).find('.error').fadeIn('fast', function(){
                $(this).parent().find('.password').focus();
            });
            return false;
        }
    });

    $('.container form .username, .container form .password').keyup(function(){
        $(this).parent().find('.error').fadeOut('fast');
    });

});

/*兼容ie9以及以下placeholder显示*/

$(function () {  
    //浏览器不支持 placeholder 时才执行  
    if (!('placeholder' in document.createElement('input'))) {  
        $('[placeholder]').each(function () {  
            var $tag = $(this); //当前 input  
            var $copy = $tag.clone();   //当前 input 的复制  
            if ($copy.val() == "") {  
                $copy.css("color", "#9b9b9b");  
                $copy.val($copy.attr('placeholder'));  
            }  
            $copy.focus(function () {  
                if (this.value == $copy.attr('placeholder')) {  
                    this.value = '';  
                    this.style.color = '#747474';  
                }  
            });  
            $copy.blur(function () {  
                if (this.value=="") {  
                    this.value = $copy.attr('placeholder');  
                    $tag.val("");  
                    this.style.color = '#9b9b9b';  
                } else {  
                    $tag.val(this.value);  
                }  
            });  
            $tag.hide().after($copy.show());    //当前 input 隐藏 ，具有 placeholder 功能js的input显示  
        });  
    }  
});