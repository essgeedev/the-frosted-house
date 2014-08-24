function initializeSlick(){$(".featured-images").slick({autoplay:!0,autoplaySpeed:5e3,fade:!0,dots:!0,speed:2e3})}!function(i){"use strict";"function"==typeof define&&define.amd?define(["jquery"],i):i(jQuery)}(function(i){"use strict";var e=window.Slick||{};e=function(){function e(e,o){var s,n,l=this;if(l.defaults={accessibility:!0,appendArrows:i(e),arrows:!0,asNavFor:null,prevArrow:'<button type="button" data-role="none" class="slick-prev">Previous</button>',nextArrow:'<button type="button" data-role="none" class="slick-next">Next</button>',autoplay:!1,autoplaySpeed:3e3,centerMode:!1,centerPadding:"50px",cssEase:"ease",customPaging:function(i,e){return'<button type="button" data-role="none">'+(e+1)+"</button>"},dots:!1,dotsClass:"slick-dots",draggable:!0,easing:"linear",fade:!1,focusOnSelect:!1,infinite:!0,lazyLoad:"ondemand",onBeforeChange:null,onAfterChange:null,onInit:null,onReInit:null,pauseOnHover:!0,pauseOnDotsHover:!1,responsive:null,rtl:!1,slide:"div",slidesToShow:1,slidesToScroll:1,speed:300,swipe:!0,touchMove:!0,touchThreshold:5,useCSS:!0,vertical:!1},l.initials={animating:!1,dragging:!1,autoPlayTimer:null,currentSlide:0,currentLeft:null,direction:1,$dots:null,listWidth:null,listHeight:null,loadIndex:0,$nextArrow:null,$prevArrow:null,slideCount:null,slideWidth:null,$slideTrack:null,$slides:null,sliding:!1,slideOffset:0,swipeLeft:null,$list:null,touchObject:{},transformsEnabled:!1},i.extend(l,l.initials),l.activeBreakpoint=null,l.animType=null,l.animProp=null,l.breakpoints=[],l.breakpointSettings=[],l.cssTransitions=!1,l.paused=!1,l.positionProp=null,l.$slider=i(e),l.$slidesCache=null,l.transformType=null,l.transitionType=null,l.windowWidth=0,l.windowTimer=null,l.options=i.extend({},l.defaults,o),l.originalSettings=l.options,s=l.options.responsive||null,s&&s.length>-1){for(n in s)s.hasOwnProperty(n)&&(l.breakpoints.push(s[n].breakpoint),l.breakpointSettings[s[n].breakpoint]=s[n].settings);l.breakpoints.sort(function(i,e){return e-i})}l.autoPlay=i.proxy(l.autoPlay,l),l.autoPlayClear=i.proxy(l.autoPlayClear,l),l.changeSlide=i.proxy(l.changeSlide,l),l.selectHandler=i.proxy(l.selectHandler,l),l.setPosition=i.proxy(l.setPosition,l),l.swipeHandler=i.proxy(l.swipeHandler,l),l.dragHandler=i.proxy(l.dragHandler,l),l.keyHandler=i.proxy(l.keyHandler,l),l.autoPlayIterator=i.proxy(l.autoPlayIterator,l),l.instanceUid=t++,l.htmlExpr=/^(?:\s*(<[\w\W]+>)[^>]*)$/,l.init()}var t=0;return e}(),e.prototype.addSlide=function(e,t,o){var s=this;if("boolean"==typeof t)o=t,t=null;else if(0>t||t>=s.slideCount)return!1;s.unload(),"number"==typeof t?0===t&&0===s.$slides.length?i(e).appendTo(s.$slideTrack):o?i(e).insertBefore(s.$slides.eq(t)):i(e).insertAfter(s.$slides.eq(t)):o===!0?i(e).prependTo(s.$slideTrack):i(e).appendTo(s.$slideTrack),s.$slides=s.$slideTrack.children(this.options.slide),s.$slideTrack.children(this.options.slide).detach(),s.$slideTrack.append(s.$slides),s.$slides.each(function(e,t){i(t).attr("index",e)}),s.$slidesCache=s.$slides,s.reinit()},e.prototype.animateSlide=function(e,t){var o={},s=this;s.options.rtl===!0&&s.options.vertical===!1&&(e=-e),s.transformsEnabled===!1?s.options.vertical===!1?s.$slideTrack.animate({left:e},s.options.speed,s.options.easing,t):s.$slideTrack.animate({top:e},s.options.speed,s.options.easing,t):s.cssTransitions===!1?i({animStart:s.currentLeft}).animate({animStart:e},{duration:s.options.speed,easing:s.options.easing,step:function(i){s.options.vertical===!1?(o[s.animType]="translate("+i+"px, 0px)",s.$slideTrack.css(o)):(o[s.animType]="translate(0px,"+i+"px)",s.$slideTrack.css(o))},complete:function(){t&&t.call()}}):(s.applyTransition(),o[s.animType]=s.options.vertical===!1?"translate3d("+e+"px, 0px, 0px)":"translate3d(0px,"+e+"px, 0px)",s.$slideTrack.css(o),t&&setTimeout(function(){s.disableTransition(),t.call()},s.options.speed))},e.prototype.applyTransition=function(i){var e=this,t={};t[e.transitionType]=e.options.fade===!1?e.transformType+" "+e.options.speed+"ms "+e.options.cssEase:"opacity "+e.options.speed+"ms "+e.options.cssEase,e.options.fade===!1?e.$slideTrack.css(t):e.$slides.eq(i).css(t)},e.prototype.autoPlay=function(){var i=this;i.autoPlayTimer&&clearInterval(i.autoPlayTimer),i.slideCount>i.options.slidesToShow&&i.paused!==!0&&(i.autoPlayTimer=setInterval(i.autoPlayIterator,i.options.autoplaySpeed))},e.prototype.autoPlayClear=function(){var i=this;i.autoPlayTimer&&clearInterval(i.autoPlayTimer)},e.prototype.autoPlayIterator=function(){var e=this,t=null!=e.options.asNavFor?i(e.options.asNavFor).getSlick():null;e.options.infinite===!1?1===e.direction?(e.currentSlide+1===e.slideCount-1&&(e.direction=0),e.slideHandler(e.currentSlide+e.options.slidesToScroll),null!=t&&t.slideHandler(t.currentSlide+t.options.slidesToScroll)):(0===e.currentSlide-1&&(e.direction=1),e.slideHandler(e.currentSlide-e.options.slidesToScroll),null!=t&&t.slideHandler(t.currentSlide-t.options.slidesToScroll)):(e.slideHandler(e.currentSlide+e.options.slidesToScroll),null!=t&&t.slideHandler(t.currentSlide+t.options.slidesToScroll))},e.prototype.buildArrows=function(){var e=this;e.options.arrows===!0&&e.slideCount>e.options.slidesToShow&&(e.$prevArrow=i(e.options.prevArrow),e.$nextArrow=i(e.options.nextArrow),e.htmlExpr.test(e.options.prevArrow)&&e.$prevArrow.appendTo(e.options.appendArrows),e.htmlExpr.test(e.options.nextArrow)&&e.$nextArrow.appendTo(e.options.appendArrows),e.options.infinite!==!0&&e.$prevArrow.addClass("slick-disabled"))},e.prototype.buildDots=function(){var e,t,o=this;if(o.options.dots===!0&&o.slideCount>o.options.slidesToShow){for(t='<ul class="'+o.options.dotsClass+'">',e=0;e<=o.getDotCount();e+=1)t+="<li>"+o.options.customPaging.call(this,o,e)+"</li>";t+="</ul>",o.$dots=i(t).appendTo(o.$slider),o.$dots.find("li").first().addClass("slick-active")}},e.prototype.buildOut=function(){var e=this;e.$slides=e.$slider.children(e.options.slide+":not(.slick-cloned)").addClass("slick-slide"),e.slideCount=e.$slides.length,e.$slides.each(function(e,t){i(t).attr("index",e)}),e.$slidesCache=e.$slides,e.$slider.addClass("slick-slider"),e.$slideTrack=0===e.slideCount?i('<div class="slick-track"/>').appendTo(e.$slider):e.$slides.wrapAll('<div class="slick-track"/>').parent(),e.$list=e.$slideTrack.wrap('<div class="slick-list"/>').parent(),e.$slideTrack.css("opacity",0),e.options.centerMode===!0&&(e.options.slidesToScroll=1,0===e.options.slidesToShow%2&&(e.options.slidesToShow=3)),i("img[data-lazy]",e.$slider).not("[src]").addClass("slick-loading"),e.setupInfinite(),e.buildArrows(),e.buildDots(),e.updateDots(),e.options.accessibility===!0&&e.$list.prop("tabIndex",0),e.setSlideClasses("number"==typeof this.currentSlide?this.currentSlide:0),e.options.draggable===!0&&e.$list.addClass("draggable")},e.prototype.checkResponsive=function(){var e,t,o=this;if(o.originalSettings.responsive&&o.originalSettings.responsive.length>-1&&null!==o.originalSettings.responsive){t=null;for(e in o.breakpoints)o.breakpoints.hasOwnProperty(e)&&i(window).width()<o.breakpoints[e]&&(t=o.breakpoints[e]);null!==t?null!==o.activeBreakpoint?t!==o.activeBreakpoint&&(o.activeBreakpoint=t,o.options=i.extend({},o.options,o.breakpointSettings[t]),o.refresh()):(o.activeBreakpoint=t,o.options=i.extend({},o.options,o.breakpointSettings[t]),o.refresh()):null!==o.activeBreakpoint&&(o.activeBreakpoint=null,o.options=i.extend({},o.options,o.originalSettings),o.refresh())}},e.prototype.changeSlide=function(e){var t=this,o=i(e.target),s=null!=t.options.asNavFor?i(t.options.asNavFor).getSlick():null;switch(o.is("a")&&e.preventDefault(),e.data.message){case"previous":t.slideCount>t.options.slidesToShow&&(t.slideHandler(t.currentSlide-t.options.slidesToScroll),null!=s&&s.slideHandler(s.currentSlide-s.options.slidesToScroll));break;case"next":t.slideCount>t.options.slidesToShow&&(t.slideHandler(t.currentSlide+t.options.slidesToScroll),null!=s&&s.slideHandler(s.currentSlide+s.options.slidesToScroll));break;case"index":var n=i(e.target).parent().index()*t.options.slidesToScroll;t.slideHandler(n),null!=s&&s.slideHandler(n);break;default:return!1}},e.prototype.destroy=function(){var e=this;e.autoPlayClear(),e.touchObject={},i(".slick-cloned",e.$slider).remove(),e.$dots&&e.$dots.remove(),e.$prevArrow&&(e.$prevArrow.remove(),e.$nextArrow.remove()),e.$slides.parent().hasClass("slick-track")&&e.$slides.unwrap().unwrap(),e.$slides.removeClass("slick-slide slick-active slick-visible").removeAttr("style"),e.$slider.removeClass("slick-slider"),e.$slider.removeClass("slick-initialized"),e.$list.off(".slick"),i(window).off(".slick-"+e.instanceUid),i(document).off(".slick-"+e.instanceUid)},e.prototype.disableTransition=function(i){var e=this,t={};t[e.transitionType]="",e.options.fade===!1?e.$slideTrack.css(t):e.$slides.eq(i).css(t)},e.prototype.fadeSlide=function(i,e){var t=this;t.cssTransitions===!1?(t.$slides.eq(i).css({zIndex:1e3}),t.$slides.eq(i).animate({opacity:1},t.options.speed,t.options.easing,e)):(t.applyTransition(i),t.$slides.eq(i).css({opacity:1,zIndex:1e3}),e&&setTimeout(function(){t.disableTransition(i),e.call()},t.options.speed))},e.prototype.filterSlides=function(i){var e=this;null!==i&&(e.unload(),e.$slideTrack.children(this.options.slide).detach(),e.$slidesCache.filter(i).appendTo(e.$slideTrack),e.reinit())},e.prototype.getCurrent=function(){var i=this;return i.currentSlide},e.prototype.getDotCount=function(){var i,e=this,t=0,o=0,s=0;for(i=e.options.infinite===!0?e.slideCount+e.options.slidesToShow-e.options.slidesToScroll:e.slideCount;i>t;)s++,o+=e.options.slidesToScroll,t=o+e.options.slidesToShow;return s},e.prototype.getLeft=function(i){var e,t,o=this,s=0;return o.slideOffset=0,t=o.$slides.first().outerHeight(),o.options.infinite===!0?(o.slideCount>o.options.slidesToShow&&(o.slideOffset=-1*o.slideWidth*o.options.slidesToShow,s=-1*t*o.options.slidesToShow),0!==o.slideCount%o.options.slidesToScroll&&i+o.options.slidesToScroll>o.slideCount&&o.slideCount>o.options.slidesToShow&&(o.slideOffset=-1*o.slideCount%o.options.slidesToShow*o.slideWidth,s=-1*o.slideCount%o.options.slidesToShow*t)):0!==o.slideCount%o.options.slidesToShow&&i+o.options.slidesToScroll>o.slideCount&&o.slideCount>o.options.slidesToShow&&(o.slideOffset=o.options.slidesToShow*o.slideWidth-o.slideCount%o.options.slidesToShow*o.slideWidth,s=o.slideCount%o.options.slidesToShow*t),o.options.centerMode===!0&&o.options.infinite===!0?o.slideOffset+=o.slideWidth*Math.floor(o.options.slidesToShow/2)-o.slideWidth:o.options.centerMode===!0&&(o.slideOffset+=o.slideWidth*Math.floor(o.options.slidesToShow/2)),e=o.options.vertical===!1?-1*i*o.slideWidth+o.slideOffset:-1*i*t+s},e.prototype.init=function(){var e=this;i(e.$slider).hasClass("slick-initialized")||(i(e.$slider).addClass("slick-initialized"),e.buildOut(),e.setProps(),e.startLoad(),e.loadSlider(),e.initializeEvents(),e.checkResponsive()),null!==e.options.onInit&&e.options.onInit.call(this,e)},e.prototype.initArrowEvents=function(){var i=this;i.options.arrows===!0&&i.slideCount>i.options.slidesToShow&&(i.$prevArrow.on("click.slick",{message:"previous"},i.changeSlide),i.$nextArrow.on("click.slick",{message:"next"},i.changeSlide))},e.prototype.initDotEvents=function(){var e=this;e.options.dots===!0&&e.slideCount>e.options.slidesToShow&&i("li",e.$dots).on("click.slick",{message:"index"},e.changeSlide),e.options.dots===!0&&e.options.pauseOnDotsHover===!0&&e.options.autoplay===!0&&i("li",e.$dots).on("mouseenter.slick",e.autoPlayClear).on("mouseleave.slick",e.autoPlay)},e.prototype.initializeEvents=function(){var e=this;e.initArrowEvents(),e.initDotEvents(),e.$list.on("touchstart.slick mousedown.slick",{action:"start"},e.swipeHandler),e.$list.on("touchmove.slick mousemove.slick",{action:"move"},e.swipeHandler),e.$list.on("touchend.slick mouseup.slick",{action:"end"},e.swipeHandler),e.$list.on("touchcancel.slick mouseleave.slick",{action:"end"},e.swipeHandler),e.options.pauseOnHover===!0&&e.options.autoplay===!0&&(e.$list.on("mouseenter.slick",e.autoPlayClear),e.$list.on("mouseleave.slick",e.autoPlay)),e.options.accessibility===!0&&e.$list.on("keydown.slick",e.keyHandler),e.options.focusOnSelect===!0&&i(e.options.slide,e.$slideTrack).on("click.slick",e.selectHandler),i(window).on("orientationchange.slick.slick-"+e.instanceUid,function(){e.checkResponsive(),e.setPosition()}),i(window).on("resize.slick.slick-"+e.instanceUid,function(){i(window).width()!==e.windowWidth&&(clearTimeout(e.windowDelay),e.windowDelay=window.setTimeout(function(){e.windowWidth=i(window).width(),e.checkResponsive(),e.setPosition()},50))}),i(window).on("load.slick.slick-"+e.instanceUid,e.setPosition),i(document).on("ready.slick.slick-"+e.instanceUid,e.setPosition)},e.prototype.initUI=function(){var i=this;i.options.arrows===!0&&i.slideCount>i.options.slidesToShow&&(i.$prevArrow.show(),i.$nextArrow.show()),i.options.dots===!0&&i.slideCount>i.options.slidesToShow&&i.$dots.show(),i.options.autoplay===!0&&i.autoPlay()},e.prototype.keyHandler=function(i){var e=this;37===i.keyCode?e.changeSlide({data:{message:"previous"}}):39===i.keyCode&&e.changeSlide({data:{message:"next"}})},e.prototype.lazyLoad=function(){function e(e){i("img[data-lazy]",e).each(function(){var e=i(this),t=i(this).attr("data-lazy")+"?"+(new Date).getTime();e.load(function(){e.animate({opacity:1},200)}).css({opacity:0}).attr("src",t).removeAttr("data-lazy").removeClass("slick-loading")})}var t,o,s,n,l=this;l.options.centerMode===!0||l.options.fade===!0?(s=l.options.slidesToShow+l.currentSlide-1,n=s+l.options.slidesToShow+2):(s=l.options.infinite?l.options.slidesToShow+l.currentSlide:l.currentSlide,n=s+l.options.slidesToShow),t=l.$slider.find(".slick-slide").slice(s,n),e(t),1==l.slideCount?(o=l.$slider.find(".slick-slide"),e(o)):l.currentSlide>=l.slideCount-l.options.slidesToShow?(o=l.$slider.find(".slick-cloned").slice(0,l.options.slidesToShow),e(o)):0===l.currentSlide&&(o=l.$slider.find(".slick-cloned").slice(-1*l.options.slidesToShow),e(o))},e.prototype.loadSlider=function(){var i=this;i.setPosition(),i.$slideTrack.css({opacity:1}),i.$slider.removeClass("slick-loading"),i.initUI(),"progressive"===i.options.lazyLoad&&i.progressiveLazyLoad()},e.prototype.postSlide=function(i){var e=this;null!==e.options.onAfterChange&&e.options.onAfterChange.call(this,e,i),e.animating=!1,e.setPosition(),e.swipeLeft=null,e.options.autoplay===!0&&e.paused===!1&&e.autoPlay()},e.prototype.progressiveLazyLoad=function(){var e,t,o=this;e=i("img[data-lazy]").length,e>0&&(t=i("img[data-lazy]",o.$slider).first(),t.attr("src",t.attr("data-lazy")).removeClass("slick-loading").load(function(){t.removeAttr("data-lazy"),o.progressiveLazyLoad()}))},e.prototype.refresh=function(){var e=this,t=e.currentSlide;e.destroy(),i.extend(e,e.initials),e.currentSlide=t,e.init()},e.prototype.reinit=function(){var e=this;e.$slides=e.$slideTrack.children(e.options.slide).addClass("slick-slide"),e.slideCount=e.$slides.length,e.currentSlide>=e.slideCount&&0!==e.currentSlide&&(e.currentSlide=e.currentSlide-e.options.slidesToScroll),e.setProps(),e.setupInfinite(),e.buildArrows(),e.updateArrows(),e.initArrowEvents(),e.buildDots(),e.updateDots(),e.initDotEvents(),e.options.focusOnSelect===!0&&i(e.options.slide,e.$slideTrack).on("click.slick",e.selectHandler),e.setSlideClasses(0),e.setPosition(),null!==e.options.onReInit&&e.options.onReInit.call(this,e)},e.prototype.removeSlide=function(i,e){var t=this;return"boolean"==typeof i?(e=i,i=e===!0?0:t.slideCount-1):i=e===!0?--i:i,t.slideCount<1||0>i||i>t.slideCount-1?!1:(t.unload(),t.$slideTrack.children(this.options.slide).eq(i).remove(),t.$slides=t.$slideTrack.children(this.options.slide),t.$slideTrack.children(this.options.slide).detach(),t.$slideTrack.append(t.$slides),t.$slidesCache=t.$slides,t.reinit(),void 0)},e.prototype.setCSS=function(i){var e,t,o=this,s={};o.options.rtl===!0&&(i=-i),e="left"==o.positionProp?i+"px":"0px",t="top"==o.positionProp?i+"px":"0px",s[o.positionProp]=i,o.transformsEnabled===!1?o.$slideTrack.css(s):(s={},o.cssTransitions===!1?(s[o.animType]="translate("+e+", "+t+")",o.$slideTrack.css(s)):(s[o.animType]="translate3d("+e+", "+t+", 0px)",o.$slideTrack.css(s)))},e.prototype.setDimensions=function(){var i=this;i.options.vertical===!1?i.options.centerMode===!0&&i.$list.css({padding:"0px "+i.options.centerPadding}):(i.$list.height(i.$slides.first().outerHeight(!0)*i.options.slidesToShow),i.options.centerMode===!0&&i.$list.css({padding:i.options.centerPadding+" 0px"})),i.listWidth=i.$list.width(),i.listHeight=i.$list.height(),i.options.vertical===!1?(i.slideWidth=Math.ceil(i.listWidth/i.options.slidesToShow),i.$slideTrack.width(Math.ceil(i.slideWidth*i.$slideTrack.children(".slick-slide").length))):(i.slideWidth=Math.ceil(i.listWidth),i.$slideTrack.height(Math.ceil(i.$slides.first().outerHeight(!0)*i.$slideTrack.children(".slick-slide").length)));var e=i.$slides.first().outerWidth(!0)-i.$slides.first().width();i.$slideTrack.children(".slick-slide").width(i.slideWidth-e)},e.prototype.setFade=function(){var e,t=this;t.$slides.each(function(o,s){e=-1*t.slideWidth*o,i(s).css({position:"relative",left:e,top:0,zIndex:800,opacity:0})}),t.$slides.eq(t.currentSlide).css({zIndex:900,opacity:1})},e.prototype.setPosition=function(){var i=this;i.setDimensions(),i.options.fade===!1?i.setCSS(i.getLeft(i.currentSlide)):i.setFade()},e.prototype.setProps=function(){var i=this;i.positionProp=i.options.vertical===!0?"top":"left","top"===i.positionProp?i.$slider.addClass("slick-vertical"):i.$slider.removeClass("slick-vertical"),(void 0!==document.body.style.WebkitTransition||void 0!==document.body.style.MozTransition||void 0!==document.body.style.msTransition)&&i.options.useCSS===!0&&(i.cssTransitions=!0),void 0!==document.body.style.MozTransform&&(i.animType="MozTransform",i.transformType="-moz-transform",i.transitionType="MozTransition"),void 0!==document.body.style.webkitTransform&&(i.animType="webkitTransform",i.transformType="-webkit-transform",i.transitionType="webkitTransition"),void 0!==document.body.style.msTransform&&(i.animType="msTransform",i.transformType="-ms-transform",i.transitionType="msTransition"),void 0!==document.body.style.transform&&(i.animType="transform",i.transformType="transform",i.transitionType="transition"),i.transformsEnabled=null!==i.animType},e.prototype.setSlideClasses=function(i){var e,t,o,s,n=this;n.$slider.find(".slick-slide").removeClass("slick-active").removeClass("slick-center"),t=n.$slider.find(".slick-slide"),n.options.centerMode===!0?(e=Math.floor(n.options.slidesToShow/2),n.options.infinite===!0&&(i>=e&&i<=n.slideCount-1-e?n.$slides.slice(i-e,i+e+1).addClass("slick-active"):(o=n.options.slidesToShow+i,t.slice(o-e+1,o+e+2).addClass("slick-active")),0===i?t.eq(t.length-1-n.options.slidesToShow).addClass("slick-center"):i===n.slideCount-1&&t.eq(n.options.slidesToShow).addClass("slick-center")),n.$slides.eq(i).addClass("slick-center")):i>=0&&i<=n.slideCount-n.options.slidesToShow?n.$slides.slice(i,i+n.options.slidesToShow).addClass("slick-active"):t.length<=n.options.slidesToShow?t.addClass("slick-active"):(s=n.slideCount%n.options.slidesToShow,o=n.options.infinite===!0?n.options.slidesToShow+i:i,n.options.slidesToShow==n.options.slidesToScroll&&n.slideCount-i<n.options.slidesToShow?t.slice(o-(n.options.slidesToShow-s),o+s).addClass("slick-active"):t.slice(o,o+n.options.slidesToShow).addClass("slick-active")),"ondemand"===n.options.lazyLoad&&n.lazyLoad()},e.prototype.setupInfinite=function(){var e,t,o,s=this;if((s.options.fade===!0||s.options.vertical===!0)&&(s.options.centerMode=!1),s.options.infinite===!0&&s.options.fade===!1&&(t=null,s.slideCount>s.options.slidesToShow)){for(o=s.options.centerMode===!0?s.options.slidesToShow+1:s.options.slidesToShow,e=s.slideCount;e>s.slideCount-o;e-=1)t=e-1,i(s.$slides[t]).clone(!0).attr("id","").prependTo(s.$slideTrack).addClass("slick-cloned");for(e=0;o>e;e+=1)t=e,i(s.$slides[t]).clone(!0).attr("id","").appendTo(s.$slideTrack).addClass("slick-cloned");s.$slideTrack.find(".slick-cloned").find("[id]").each(function(){i(this).attr("id","")})}},e.prototype.selectHandler=function(e){var t=this,o=null!=t.options.asNavFor?i(t.options.asNavFor).getSlick():null,s=parseInt(i(e.target).parent().attr("index"));if(s||(s=0),!(t.slideCount<=t.options.slidesToShow)&&(t.slideHandler(s),null!=o)){if(o.slideCount<=o.options.slidesToShow)return;o.slideHandler(s)}},e.prototype.slideHandler=function(i){var e,t,o,s,n=null,l=this;return l.animating===!0?!1:(e=i,n=l.getLeft(e),o=l.getLeft(l.currentSlide),s=0!==l.slideCount%l.options.slidesToScroll?l.options.slidesToScroll:0,l.currentLeft=null===l.swipeLeft?o:l.swipeLeft,l.options.infinite===!1&&l.options.centerMode===!1&&(0>i||i>l.slideCount-l.options.slidesToShow+s)?(l.options.fade===!1&&(e=l.currentSlide,l.animateSlide(o,function(){l.postSlide(e)})),!1):l.options.infinite===!1&&l.options.centerMode===!0&&(0>i||i>l.slideCount-l.options.slidesToScroll)?(l.options.fade===!1&&(e=l.currentSlide,l.animateSlide(o,function(){l.postSlide(e)})),!1):(l.options.autoplay===!0&&clearInterval(l.autoPlayTimer),t=0>e?0!==l.slideCount%l.options.slidesToScroll?l.slideCount-l.slideCount%l.options.slidesToScroll:l.slideCount-l.options.slidesToScroll:e>l.slideCount-1?0:e,l.animating=!0,null!==l.options.onBeforeChange&&i!==l.currentSlide&&l.options.onBeforeChange.call(this,l,l.currentSlide,t),l.currentSlide=t,l.setSlideClasses(l.currentSlide),l.updateDots(),l.updateArrows(),l.options.fade===!0?(l.fadeSlide(t,function(){l.postSlide(t)}),!1):(l.animateSlide(n,function(){l.postSlide(t)}),void 0)))},e.prototype.startLoad=function(){var i=this;i.options.arrows===!0&&i.slideCount>i.options.slidesToShow&&(i.$prevArrow.hide(),i.$nextArrow.hide()),i.options.dots===!0&&i.slideCount>i.options.slidesToShow&&i.$dots.hide(),i.$slider.addClass("slick-loading")},e.prototype.swipeDirection=function(){var i,e,t,o,s=this;return i=s.touchObject.startX-s.touchObject.curX,e=s.touchObject.startY-s.touchObject.curY,t=Math.atan2(e,i),o=Math.round(180*t/Math.PI),0>o&&(o=360-Math.abs(o)),45>=o&&o>=0?"left":360>=o&&o>=315?"left":o>=135&&225>=o?"right":"vertical"},e.prototype.swipeEnd=function(e){var t=this,o=null!=t.options.asNavFor?i(t.options.asNavFor).getSlick():null;if(t.dragging=!1,void 0===t.touchObject.curX)return!1;if(t.touchObject.swipeLength>=t.touchObject.minSwipe)switch(i(e.target).on("click.slick",function(e){e.stopImmediatePropagation(),e.stopPropagation(),e.preventDefault(),i(e.target).off("click.slick")}),t.swipeDirection()){case"left":t.slideHandler(t.currentSlide+t.options.slidesToScroll),null!=o&&o.slideHandler(o.currentSlide+o.options.slidesToScroll),t.touchObject={};break;case"right":t.slideHandler(t.currentSlide-t.options.slidesToScroll),null!=o&&o.slideHandler(o.currentSlide-o.options.slidesToScroll),t.touchObject={}}else t.touchObject.startX!==t.touchObject.curX&&(t.slideHandler(t.currentSlide),null!=o&&o.slideHandler(o.currentSlide),t.touchObject={})},e.prototype.swipeHandler=function(i){var e=this;if(!(e.options.swipe===!1||"ontouchend"in document&&e.options.swipe===!1||e.options.draggable===!1||e.options.draggable===!1&&!i.originalEvent.touches))switch(e.touchObject.fingerCount=i.originalEvent&&void 0!==i.originalEvent.touches?i.originalEvent.touches.length:1,e.touchObject.minSwipe=e.listWidth/e.options.touchThreshold,i.data.action){case"start":e.swipeStart(i);break;case"move":e.swipeMove(i);break;case"end":e.swipeEnd(i)}},e.prototype.swipeMove=function(i){var e,t,o,s,n=this;return s=void 0!==i.originalEvent?i.originalEvent.touches:null,e=n.getLeft(n.currentSlide),!n.dragging||s&&1!==s.length?!1:(n.touchObject.curX=void 0!==s?s[0].pageX:i.clientX,n.touchObject.curY=void 0!==s?s[0].pageY:i.clientY,n.touchObject.swipeLength=Math.round(Math.sqrt(Math.pow(n.touchObject.curX-n.touchObject.startX,2))),t=n.swipeDirection(),"vertical"!==t?(void 0!==i.originalEvent&&n.touchObject.swipeLength>4&&i.preventDefault(),o=n.touchObject.curX>n.touchObject.startX?1:-1,n.swipeLeft=n.options.vertical===!1?e+n.touchObject.swipeLength*o:e+n.touchObject.swipeLength*(n.$list.height()/n.listWidth)*o,n.options.fade===!0||n.options.touchMove===!1?!1:n.animating===!0?(n.swipeLeft=null,!1):(n.setCSS(n.swipeLeft),void 0)):void 0)},e.prototype.swipeStart=function(i){var e,t=this;return 1!==t.touchObject.fingerCount||t.slideCount<=t.options.slidesToShow?(t.touchObject={},!1):(void 0!==i.originalEvent&&void 0!==i.originalEvent.touches&&(e=i.originalEvent.touches[0]),t.touchObject.startX=t.touchObject.curX=void 0!==e?e.pageX:i.clientX,t.touchObject.startY=t.touchObject.curY=void 0!==e?e.pageY:i.clientY,t.dragging=!0,void 0)},e.prototype.unfilterSlides=function(){var i=this;null!==i.$slidesCache&&(i.unload(),i.$slideTrack.children(this.options.slide).detach(),i.$slidesCache.appendTo(i.$slideTrack),i.reinit())},e.prototype.unload=function(){var e=this;i(".slick-cloned",e.$slider).remove(),e.$dots&&e.$dots.remove(),e.$prevArrow&&(e.$prevArrow.remove(),e.$nextArrow.remove()),e.$slides.removeClass("slick-slide slick-active slick-visible").removeAttr("style")},e.prototype.updateArrows=function(){var i=this;i.options.arrows===!0&&i.options.infinite!==!0&&i.slideCount>i.options.slidesToShow&&(i.$prevArrow.removeClass("slick-disabled"),i.$nextArrow.removeClass("slick-disabled"),0===i.currentSlide?(i.$prevArrow.addClass("slick-disabled"),i.$nextArrow.removeClass("slick-disabled")):i.currentSlide>=i.slideCount-i.options.slidesToShow&&(i.$nextArrow.addClass("slick-disabled"),i.$prevArrow.removeClass("slick-disabled")))},e.prototype.updateDots=function(){var i=this;null!==i.$dots&&(i.$dots.find("li").removeClass("slick-active"),i.$dots.find("li").eq(Math.floor(i.currentSlide/i.options.slidesToScroll)).addClass("slick-active"))},i.fn.slick=function(i){var t=this;return t.each(function(t,o){o.slick=new e(o,i)})},i.fn.slickAdd=function(i,e,t){var o=this;return o.each(function(o,s){s.slick.addSlide(i,e,t)})},i.fn.slickCurrentSlide=function(){var i=this;return i.get(0).slick.getCurrent()},i.fn.slickFilter=function(i){var e=this;return e.each(function(e,t){t.slick.filterSlides(i)})},i.fn.slickGoTo=function(e){var t=this;return t.each(function(t,o){var s=null!=o.slick.options.asNavFor?i(o.slick.options.asNavFor):null;null!=s&&s.slickGoTo(e),o.slick.slideHandler(e)})},i.fn.slickNext=function(){var i=this;return i.each(function(i,e){e.slick.changeSlide({data:{message:"next"}})})},i.fn.slickPause=function(){var i=this;return i.each(function(i,e){e.slick.autoPlayClear(),e.slick.paused=!0})},i.fn.slickPlay=function(){var i=this;return i.each(function(i,e){e.slick.paused=!1,e.slick.autoPlay()})},i.fn.slickPrev=function(){var i=this;return i.each(function(i,e){e.slick.changeSlide({data:{message:"previous"}})})},i.fn.slickRemove=function(i,e){var t=this;return t.each(function(t,o){o.slick.removeSlide(i,e)})},i.fn.slickGetOption=function(i){var e=this;return e.get(0).slick.options[i]},i.fn.slickSetOption=function(i,e,t){var o=this;return o.each(function(o,s){s.slick.options[i]=e,t===!0&&(s.slick.unload(),s.slick.reinit())})},i.fn.slickUnfilter=function(){var i=this;return i.each(function(i,e){e.slick.unfilterSlides()})},i.fn.unslick=function(){var i=this;return i.each(function(i,e){e.slick&&e.slick.destroy()})},i.fn.getSlick=function(){var i=null,e=this;return e.each(function(e,t){i=t.slick}),i}});