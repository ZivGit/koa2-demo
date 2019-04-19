/**
 * rem
 */
function rem() {
    var rem = document.documentElement.offsetWidth / 7.5;
    document.getElementsByTagName("html")[0].style.fontSize = rem + "px";
}


var phoneWidth = parseInt(window.screen.width);
var phoneScale = phoneWidth / 750;
var ua = navigator.userAgent;
if (/Android (\\d+\.\d+)/.test(ua)) {
    var version = parseFloat(RegExp.$1);
    if (version > 2.3) {
        // andriod 2.3
        $('head').append('<meta name="viewport" content="width=750, minimum-scale = ' + phoneScale + ', maximum-scale = ' + phoneScale + ', target-densitydpi=device-dpi">')
    } else {
        // andriod 2.3以上
        $('head').append('<meta name="viewport" content="width=750, target-densitydpi=device-dpi">')
    }
} else {
    // 其他系统
    $('head').append('<meta name="viewport" content="width=750, user-scalable=no, target-densitydpi=device-dpi">')
}


/**
 * 首页标题
 * @param  {[type]} index [description]
 * @return {[type]}       [description]
 */
function render(index) {
    var title = [
        (lang === 'zh-CN' && '即将上映') || (lang === 'zh-TW' && '即將上映') || (lang === 'en-GB' && 'Online Shows'),
        (lang === 'zh-CN' && '巨角作品') || (lang === 'zh-TW' && '巨角作品') || (lang === 'en-GB' && 'Works'),
        (lang === 'zh-CN' && '新闻报道') || (lang === 'zh-TW' && '新聞報導') || (lang === 'en-GB' && 'Media'),
        (lang === 'zh-CN' && '集团简介') || (lang === 'zh-TW' && '集團簡介') || (lang === 'en-GB' && 'About Us'),
        (lang === 'zh-CN' && '集团荣耀') || (lang === 'zh-TW' && '即將上映') || (lang === 'en-GB' && 'Online Shows'),
        (lang === 'zh-CN' && '联系我们') || (lang === 'zh-TW' && '聯繫我們') || (lang === 'en-GB' && 'Contact Us')
    ]
    switch (index) {
        case 0:
        return null
        case 1:
        return title[0]
        case 2:
        return title[1]
        case 3:
        return title[2]
        case 4:
        return title[3]
        case 5:
        return title[4]
        case 6:
        return title[5]
    }
}


/**
 * tab
 */
$('#js_tab .tabNav-item').each(function(index) {
    $(this).click(function() {
        $(this).addClass('on').siblings().removeClass('on')
        $('#js_tab .tabBox-item').eq(index).addClass('on').siblings().removeClass('on')
    })
})


/**
 * 页脚折叠效果
 */
$('.menu-order').on('click', '.menu-order-item', function() {
    var self = $(this)
    var other = $('.menu-order-item').not(self)
    var sBody = $(this).find('.menu-order-body')
    var oBody = $('.menu-order-item').not(self).find('.menu-order-body')
    sBody.slideToggle('fast', function() {
        if ($(this).is(':hidden')) {
            self.removeClass('on')
        }
    })
    oBody.slideUp()
    self.addClass('on')
    other.removeClass('on')
})



$('.page-header-icon.icon-menu').on('click', function() {
    var self = $(this)
    $('#page-menu').slideToggle('fast', function() {
        if ($(this).is(':hidden')) {
            self.removeClass('icon-menu_on')
        }
    })
    self.addClass('icon-menu_on')
})
$('.page-menu-order-item').on('click', function() {
    var self = $('.page-header-icon.icon-menu')
    $('#page-menu').slideToggle('fast', function() {
        if ($(this).is(':hidden')) {
            self.removeClass('icon-menu_on')
        }
    })
    self.addClass('icon-menu_on')
})


/**
 * Swiper
 */
new Swiper('.swiper__vertical', {
    direction: 'vertical'
})

new Swiper('.swiper__page-index-slide1', {
    pagination: {
        el: '.swiper__page-index-slide1 .swiper-pagination',
    },
    autoplay: {
        delay: 5000
    },
    loop: true
})

var swiperPageIndex = new Swiper('.swiper__page-index', {
    direction: 'vertical',
    hashNavigation: {
        watchState: true
    },
    on: {
        slideChangeTransitionStart: function() {
            $('.page-header__center h1').html(render(this.realIndex))
        }
    }
})

new Swiper('.swiper__horizontal', {
    pagination: {
        el: '.swiper__horizontal .swiper-pagination',
    },
    loop: true
})

new Swiper('.swiper__marquee', {
    pagination: {
        el: '.swiper__marquee .swiper-pagination',
    },
    initialSlide: 0,
    centeredSlides : true,
    slidesPerView: 'auto',
    spaceBetween: 40,
    loop: true,
    on: {
        slideChangeTransitionStart: function() {
            $('.swiper-pagination__marquee .swiper-slide').hide().eq(this.realIndex).show()
        }
    }
})

new Swiper('.swiper__navigation', {
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    observer: true,
    observeParents: true,
    // hashNavigation: {
    //     watchState: true
    // }
    hashNavigation: true
})


function handleIntrShow(n) {
    $('#about-intr').find('.intr-' + n).slideToggle(0).siblings().hide(0)
}


function handleChangeLang(n, k) {
    $('.page-menu-lang li').eq(n).addClass('on').siblings().removeClass('on')
    $.cookie('lang', k)
    location.reload()
}


// onload
window.onload = function() {
    rem()
}

// onresize
window.onresize = function() {
    rem()
}