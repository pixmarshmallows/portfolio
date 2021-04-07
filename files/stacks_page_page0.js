//
// vein
//

!function(e,t){"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define("vein",t):this.vein=t()}(0,function(){var e=function(){},t=function(e,t,n){var s,r,l=[],i=[],u=t[document.all?"rules":"cssRules"],o=e.replace(/\s/g,"");for(s=0,r=u.length;s<r;s++)(u[s].selectorText===e||4===u[s].type&&u[s].cssText.replace(/\s/g,"").substring(0,o.length)==o)&&(null===n?i.push(s):l.push(u[s]));for(s=0,r=i.length;s<r;s++)t.deleteRule(i[s]);return l},n=function(e){var t=[];for(var n in e)e.hasOwnProperty(n)&&t.push(n+": "+e[n]+";");return t.join("")};e.getStylesheet=function(){return this.element&&document.getElementById("vein")||(this.element=document.createElement("style"),this.element.setAttribute("type","text/css"),this.element.setAttribute("id","vein"),document.getElementsByTagName("head")[0].appendChild(this.element),this.stylesheet=this.element.sheet),this.stylesheet};var s=function(e){return e[document.all?"rules":"cssRules"]},r=function(e,t,n){var r=s(n);n.insertRule?n.insertRule(e+"{"+t+"}",r.length):n.addRule(e,t,r.length)};return e.inject=function(e,l,i){var u,o,h,f,c,a,y,d,g,p,m=(i=function(e){e=e||{};for(var t=1;t<arguments.length;t++)if(arguments[t])for(var n in arguments[t])arguments[t].hasOwnProperty(n)&&(e[n]=arguments[t][n]);return e}({},i)).stylesheet||this.getStylesheet();s(m);for("string"==typeof e&&(e=[e]),u=0,o=e.length;u<o;u++)if("object"==typeof e[u]&&m.insertRule)for(h in e[u])if(0===(f=t(h,m,l)).length)for(c=n(l),g=0,p=e[u][h].length;g<p;g++)r(h,e[u][h][g]+"{"+c+"}",m);else for(y=0,d=f.length;y<d;y++)this.inject(e[u][h],l,{stylesheet:f[y]});else{if(f=t(e[u],m,l),null===l)return;if(0===f.length)c=n(l),r(e[u],c,m);else for(y=0,d=f.length;y<d;y++)for(a in l)l.hasOwnProperty(a)&&(f[y].style.setProperty?f[y].style.setProperty(a,l[a],""):f[y].style.setAttribute(a,l[a],""))}return this},e});


//
// jwlib-utils
//

(function($){"use strict";jQuery.fn.exists=function(){return jQuery(this).length>0;};jQuery.getParameterByName=function(name,url){if(!url)url=window.location.href;name=name.replace(/[[\]]/g,"\\$&");var regex=new RegExp("[?&]"+name+"(=([^&#]*)|&|#|$)"),results=regex.exec(url);if(!results)return null;if(!results[2])return"";return decodeURIComponent(results[2].replace(/\+/g," "));};jQuery.debug=function(){if(window.debug===true)window.debug=1;var maxlevel=parseInt($.getParameterByName("debug")||window.debug)||0;if(maxlevel===0)return;var args=Array.prototype.slice.call(arguments),group="debug",loglevel=1;if(args.length>1&&typeof(args[args.length-1])==="number"){loglevel=args.pop();}
if(loglevel>maxlevel)return;if(args.length>1&&typeof(args[0])==="string"){group=args.shift();}
var debugGroup=$.getParameterByName("debugGroup")||window.debugGroup;if(debugGroup&&!group.match(debugGroup))return;console.group(group);args.forEach(function(arg){if(Array.isArray(arg)&&typeof arg[0]!=="object"){console.table(arg);}
else{console.log(arg);}});console.groupEnd();};jQuery.isMobile=jQuery.isTouch=function(){return"ontouchstart"in window||window.DocumentTouch&&document instanceof DocumentTouch||false;};if(jQuery.isTouch())document.documentElement.classList.add("touch");jQuery.clearBrowserCache=function(){$(window).on("pageshow",function(event){if(event.originalEvent.persisted){window.location.reload();}});};jQuery.preloadImages=function(){for(var i=0;i<arguments.length;i++){$("<img />").attr("src",arguments[i]);}};var triggerWindowResize=function(){$(window).trigger("resize");};if(typeof(orientationEvent)==undefined){var orientationEvent=0;}
$(window).on(orientationEvent,triggerWindowResize).on("load",triggerWindowResize);})(jQuery);


/*! jQuery Migrate v1.2.1 | (c) 2005, 2013 jQuery Foundation, Inc. and other contributors | jquery.org/license */
jQuery.migrateMute===void 0&&(jQuery.migrateMute=!0),function(e,t,n){function r(n){var r=t.console;i[n]||(i[n]=!0,e.migrateWarnings.push(n),r&&r.warn&&!e.migrateMute&&(r.warn("JQMIGRATE: "+n),e.migrateTrace&&r.trace&&r.trace()))}function a(t,a,i,o){if(Object.defineProperty)try{return Object.defineProperty(t,a,{configurable:!0,enumerable:!0,get:function(){return r(o),i},set:function(e){r(o),i=e}}),n}catch(s){}e._definePropertyBroken=!0,t[a]=i}var i={};e.migrateWarnings=[],!e.migrateMute&&t.console&&t.console.log&&t.console.log("JQMIGRATE: Logging is active"),e.migrateTrace===n&&(e.migrateTrace=!0),e.migrateReset=function(){i={},e.migrateWarnings.length=0},"BackCompat"===document.compatMode&&r("jQuery is not compatible with Quirks Mode");var o=e("<input/>",{size:1}).attr("size")&&e.attrFn,s=e.attr,u=e.attrHooks.value&&e.attrHooks.value.get||function(){return null},c=e.attrHooks.value&&e.attrHooks.value.set||function(){return n},l=/^(?:input|button)$/i,d=/^[238]$/,p=/^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,f=/^(?:checked|selected)$/i;a(e,"attrFn",o||{},"jQuery.attrFn is deprecated"),e.attr=function(t,a,i,u){var c=a.toLowerCase(),g=t&&t.nodeType;return u&&(4>s.length&&r("jQuery.fn.attr( props, pass ) is deprecated"),t&&!d.test(g)&&(o?a in o:e.isFunction(e.fn[a])))?e(t)[a](i):("type"===a&&i!==n&&l.test(t.nodeName)&&t.parentNode&&r("Can't change the 'type' of an input or button in IE 6/7/8"),!e.attrHooks[c]&&p.test(c)&&(e.attrHooks[c]={get:function(t,r){var a,i=e.prop(t,r);return i===!0||"boolean"!=typeof i&&(a=t.getAttributeNode(r))&&a.nodeValue!==!1?r.toLowerCase():n},set:function(t,n,r){var a;return n===!1?e.removeAttr(t,r):(a=e.propFix[r]||r,a in t&&(t[a]=!0),t.setAttribute(r,r.toLowerCase())),r}},f.test(c)&&r("jQuery.fn.attr('"+c+"') may use property instead of attribute")),s.call(e,t,a,i))},e.attrHooks.value={get:function(e,t){var n=(e.nodeName||"").toLowerCase();return"button"===n?u.apply(this,arguments):("input"!==n&&"option"!==n&&r("jQuery.fn.attr('value') no longer gets properties"),t in e?e.value:null)},set:function(e,t){var a=(e.nodeName||"").toLowerCase();return"button"===a?c.apply(this,arguments):("input"!==a&&"option"!==a&&r("jQuery.fn.attr('value', val) no longer sets properties"),e.value=t,n)}};var g,h,v=e.fn.init,m=e.parseJSON,y=/^([^<]*)(<[\w\W]+>)([^>]*)$/;e.fn.init=function(t,n,a){var i;return t&&"string"==typeof t&&!e.isPlainObject(n)&&(i=y.exec(e.trim(t)))&&i[0]&&("<"!==t.charAt(0)&&r("$(html) HTML strings must start with '<' character"),i[3]&&r("$(html) HTML text after last tag is ignored"),"#"===i[0].charAt(0)&&(r("HTML string cannot start with a '#' character"),e.error("JQMIGRATE: Invalid selector string (XSS)")),n&&n.context&&(n=n.context),e.parseHTML)?v.call(this,e.parseHTML(i[2],n,!0),n,a):v.apply(this,arguments)},e.fn.init.prototype=e.fn,e.parseJSON=function(e){return e||null===e?m.apply(this,arguments):(r("jQuery.parseJSON requires a valid JSON string"),null)},e.uaMatch=function(e){e=e.toLowerCase();var t=/(chrome)[ \/]([\w.]+)/.exec(e)||/(webkit)[ \/]([\w.]+)/.exec(e)||/(opera)(?:.*version|)[ \/]([\w.]+)/.exec(e)||/(msie) ([\w.]+)/.exec(e)||0>e.indexOf("compatible")&&/(mozilla)(?:.*? rv:([\w.]+)|)/.exec(e)||[];return{browser:t[1]||"",version:t[2]||"0"}},e.browser||(g=e.uaMatch(navigator.userAgent),h={},g.browser&&(h[g.browser]=!0,h.version=g.version),h.chrome?h.webkit=!0:h.webkit&&(h.safari=!0),e.browser=h),a(e,"browser",e.browser,"jQuery.browser is deprecated"),e.sub=function(){function t(e,n){return new t.fn.init(e,n)}e.extend(!0,t,this),t.superclass=this,t.fn=t.prototype=this(),t.fn.constructor=t,t.sub=this.sub,t.fn.init=function(r,a){return a&&a instanceof e&&!(a instanceof t)&&(a=t(a)),e.fn.init.call(this,r,a,n)},t.fn.init.prototype=t.fn;var n=t(document);return r("jQuery.sub() is deprecated"),t},e.ajaxSetup({converters:{"text json":e.parseJSON}});var b=e.fn.data;e.fn.data=function(t){var a,i,o=this[0];return!o||"events"!==t||1!==arguments.length||(a=e.data(o,t),i=e._data(o,t),a!==n&&a!==i||i===n)?b.apply(this,arguments):(r("Use of jQuery.fn.data('events') is deprecated"),i)};var j=/\/(java|ecma)script/i,w=e.fn.andSelf||e.fn.addBack;e.fn.andSelf=function(){return r("jQuery.fn.andSelf() replaced by jQuery.fn.addBack()"),w.apply(this,arguments)},e.clean||(e.clean=function(t,a,i,o){a=a||document,a=!a.nodeType&&a[0]||a,a=a.ownerDocument||a,r("jQuery.clean() is deprecated");var s,u,c,l,d=[];if(e.merge(d,e.buildFragment(t,a).childNodes),i)for(c=function(e){return!e.type||j.test(e.type)?o?o.push(e.parentNode?e.parentNode.removeChild(e):e):i.appendChild(e):n},s=0;null!=(u=d[s]);s++)e.nodeName(u,"script")&&c(u)||(i.appendChild(u),u.getElementsByTagName!==n&&(l=e.grep(e.merge([],u.getElementsByTagName("script")),c),d.splice.apply(d,[s+1,0].concat(l)),s+=l.length));return d});var Q=e.event.add,x=e.event.remove,k=e.event.trigger,N=e.fn.toggle,T=e.fn.live,M=e.fn.die,S="ajaxStart|ajaxStop|ajaxSend|ajaxComplete|ajaxError|ajaxSuccess",C=RegExp("\\b(?:"+S+")\\b"),H=/(?:^|\s)hover(\.\S+|)\b/,A=function(t){return"string"!=typeof t||e.event.special.hover?t:(H.test(t)&&r("'hover' pseudo-event is deprecated, use 'mouseenter mouseleave'"),t&&t.replace(H,"mouseenter$1 mouseleave$1"))};e.event.props&&"attrChange"!==e.event.props[0]&&e.event.props.unshift("attrChange","attrName","relatedNode","srcElement"),e.event.dispatch&&a(e.event,"handle",e.event.dispatch,"jQuery.event.handle is undocumented and deprecated"),e.event.add=function(e,t,n,a,i){e!==document&&C.test(t)&&r("AJAX events should be attached to document: "+t),Q.call(this,e,A(t||""),n,a,i)},e.event.remove=function(e,t,n,r,a){x.call(this,e,A(t)||"",n,r,a)},e.fn.error=function(){var e=Array.prototype.slice.call(arguments,0);return r("jQuery.fn.error() is deprecated"),e.splice(0,0,"error"),arguments.length?this.bind.apply(this,e):(this.triggerHandler.apply(this,e),this)},e.fn.toggle=function(t,n){if(!e.isFunction(t)||!e.isFunction(n))return N.apply(this,arguments);r("jQuery.fn.toggle(handler, handler...) is deprecated");var a=arguments,i=t.guid||e.guid++,o=0,s=function(n){var r=(e._data(this,"lastToggle"+t.guid)||0)%o;return e._data(this,"lastToggle"+t.guid,r+1),n.preventDefault(),a[r].apply(this,arguments)||!1};for(s.guid=i;a.length>o;)a[o++].guid=i;return this.click(s)},e.fn.live=function(t,n,a){return r("jQuery.fn.live() is deprecated"),T?T.apply(this,arguments):(e(this.context).on(t,this.selector,n,a),this)},e.fn.die=function(t,n){return r("jQuery.fn.die() is deprecated"),M?M.apply(this,arguments):(e(this.context).off(t,this.selector||"**",n),this)},e.event.trigger=function(e,t,n,a){return n||C.test(e)||r("Global events are undocumented and deprecated"),k.call(this,e,t,n||document,a)},e.each(S.split("|"),function(t,n){e.event.special[n]={setup:function(){var t=this;return t!==document&&(e.event.add(document,n+"."+e.guid,function(){e.event.trigger(n,null,t,!0)}),e._data(this,n,e.guid++)),!1},teardown:function(){return this!==document&&e.event.remove(document,n+"."+e._data(this,n)),!1}}})}(jQuery,window);
var stacks = {};
stacks.jQuery = jQuery.noConflict(true);
stacks.com_bigwhiteduck_stacks_headerpro = {};
stacks.com_bigwhiteduck_stacks_headerpro = (function(stack) {
var jQuery = stacks.jQuery;var $ = jQuery; var elements=document.getElementsByClassName('hp-slice');while(elements.length>0){elements[0].parentNode.removeChild(elements[0]);}

return stack;})(stacks.com_bigwhiteduck_stacks_headerpro);
stacks.com_bigwhiteduck_stacks_magicgellan_s3 = {};
stacks.com_bigwhiteduck_stacks_magicgellan_s3 = (function(stack) {
var jQuery = stacks.jQuery;var $ = jQuery; if('addEventListener'in document){document.addEventListener('DOMContentLoaded',function(){FastClick.attach(document.body);},false);}

return stack;})(stacks.com_bigwhiteduck_stacks_magicgellan_s3);
stacks.com_bigwhiteduck_stacks_scrollmate2 = {};
stacks.com_bigwhiteduck_stacks_scrollmate2 = (function(stack) {
var jQuery = stacks.jQuery;var $ = jQuery;
if(!Date.now)
Date.now=function(){return new Date().getTime();};(function(){'use strict';var vendors=['webkit','moz'];for(var i=0;i<vendors.length&&!window.requestAnimationFrame;++i){var vp=vendors[i];window.requestAnimationFrame=window[vp+'RequestAnimationFrame'];window.cancelAnimationFrame=(window[vp+'CancelAnimationFrame']||window[vp+'CancelRequestAnimationFrame']);}
if(/iP(ad|hone|od).*OS 6/.test(window.navigator.userAgent)||!window.requestAnimationFrame||!window.cancelAnimationFrame){var lastTime=0;window.requestAnimationFrame=function(callback){var now=Date.now();var nextTime=Math.max(lastTime+16,now);return setTimeout(function(){callback(lastTime=nextTime);},nextTime-now);};window.cancelAnimationFrame=clearTimeout;}}());var scrollmate=(function($)
{var _this={};var $document=$(document);var $window=$(window);_this.body_height=0;_this.viewport_height=0;_this.viewport_top=0;_this.viewport_bottom=0;_this.viewport_top_previous=-1;_this.elements=[];_this.elements_in_view=[];_this.onetime=[];_this.done_once=[];_this.property_defaults={'opacity':1,'translatex':0,'translatey':0,'translatez':0,'rotatex':0,'rotatey':0,'rotatez':0,'scale':1,'scalex':1,'scaley':1,'scalez':1,'onetime':false,'hideafter':false,'inertia':'ease','inertiatime':650,'delay':0,};_this.scrollmate_selector='.scrollmate';_this.animatesm_selector='.animate-sm';_this.update_interval=10;_this.easing_functions={'linear':function(x)
{return x;},'easeout':function(x)
{return x*x*x;},'easein':function(x)
{x=1-x;return 1-(x*x*x);},'easeinout':function(x)
{if(x<0.5)
{return(4*x*x*x);}
else
{x=1-x;return 1-(4*x*x*x);}}};_this.init_events=['load','DOMContentLoaded','page:load','page:change'];_this.init_if=function(){return true;}
_this.init=function()
{if(!_this.init_if())return false;_this.init_elements();_this.find_only_once_elements();_this.on_resize();$window.on('resize orientationchange',function(){_this.on_resize();});$window.on('load',function(){setTimeout(function(){_this.on_resize();},100)});setInterval(_this.update,_this.update_interval);return true;}
_this.init_elements=function()
{$(_this.scrollmate_selector).each(function()
{var element={};element.element=$(this);var effects=[];$(this).find(_this.animatesm_selector).addBack(_this.animatesm_selector).each(function()
{var effect={};effect.element=$(this);effect.direc=effect.element.data('direc');effect.when=effect.element.data('when');effect.from=effect.element.data('from');effect.to=effect.element.data('to');effect.onetime=effect.element.data('onetime');effect.hideafter=effect.element.data('hideafter');effect.inertia=effect.element.data('inertia');effect.inertiatime=effect.element.data('inertiatime');effect.delay=effect.element.data('delay');effect.isFresh=true;if(effect.element.is('[data-crop]'))
{effect.crop=effect.element.data('crop');}
else
{effect.crop=true;}
if(effect.element.is('[data-easing]'))
{effect.easing=_this.easing_functions[effect.element.data('easing')]}
else
{effect.easing=_this.easing_functions['easeout'];}
var properties={};if(effect.element.is('[data-opacity]'))properties.opacity=effect.element.data('opacity');if(effect.element.is('[data-translatex]'))properties.translatex=effect.element.data('translatex');if(effect.element.is('[data-translatey]'))properties.translatey=effect.element.data('translatey');if(effect.element.is('[data-translatez]'))properties.translatez=effect.element.data('translatez');if(effect.element.is('[data-rotatex]'))properties.rotatex=effect.element.data('rotatex');if(effect.element.is('[data-rotatey]'))properties.rotatey=effect.element.data('rotatey');if(effect.element.is('[data-rotatez]'))properties.rotatez=effect.element.data('rotatez');if(effect.element.is('[data-scale]'))properties.scale=effect.element.data('scale');if(effect.element.is('[data-scalex]'))properties.scalex=effect.element.data('scalex');if(effect.element.is('[data-scaley]'))properties.scaley=effect.element.data('scaley');if(effect.element.is('[data-scalez]'))properties.scalez=effect.element.data('scalez');if(effect.element.is('[data-inertiatime]'))properties.inertiatime=effect.element.data('inertiatime');if(effect.element.is('[data-inertia]'))properties.inertia=effect.element.data('inertia');if(effect.element.is('[data-delay]'))properties.delay=effect.element.data('delay');effect.properties=properties;effects.push(effect);if(effect.direc=='on-exit'){setTimeout(function(){effect.element.removeClass('is-fresh');effect.isFresh=false;effect.element.css({'transition':'transform '+effect.inertiatime+'ms '+effect.delay+'ms '+effect.inertia+', opacity '+effect.inertiatime+'ms '+effect.delay+'ms '+effect.inertia});},effect.inertiatime);}});element.effects=effects;_this.elements.push(element);});}
_this.update=function()
{window.requestAnimationFrame(function()
{_this.update_viewport_position();if(_this.viewport_top_previous!=_this.viewport_top)
{_this.update_elements_in_view();_this.animate();}
_this.viewport_top_previous=_this.viewport_top;});}
_this.animate=function()
{var elements_in_view_length=_this.elements_in_view.length;for(var i=0;i<elements_in_view_length;i++)
{var element=_this.elements_in_view[i];var effects_length=element.effects.length;for(var e=0;e<effects_length;e++)
{var effect=element.effects[e];switch(effect.when)
{case'view':case'span':var start=element.top-_this.viewport_height;var end=element.bottom;break;case'exit':var start=element.bottom-_this.viewport_height;var end=element.bottom;break;default:var start=element.top-_this.viewport_height;var end=element.top;break;}
if(effect.crop)
{if(start<0)start=0;if(end>(_this.body_height-_this.viewport_height))end=_this.body_height-_this.viewport_height;}
var scroll=(_this.viewport_top-start)/(end-start);var from=effect['from'];var to=effect['to'];var length=to-from;var scroll_relative=(scroll-from)/length;var scroll_eased=effect.easing(scroll_relative);var opacity=_this.animate_value(scroll,scroll_eased,from,to,effect,'opacity');var translatey=_this.animate_value(scroll,scroll_eased,from,to,effect,'translatey');var translatex=_this.animate_value(scroll,scroll_eased,from,to,effect,'translatex');var translatez=_this.animate_value(scroll,scroll_eased,from,to,effect,'translatez');var rotatex=_this.animate_value(scroll,scroll_eased,from,to,effect,'rotatex');var rotatey=_this.animate_value(scroll,scroll_eased,from,to,effect,'rotatey');var rotatez=_this.animate_value(scroll,scroll_eased,from,to,effect,'rotatez');var scale=_this.animate_value(scroll,scroll_eased,from,to,effect,'scale');var scalex=_this.animate_value(scroll,scroll_eased,from,to,effect,'scalex');var scaley=_this.animate_value(scroll,scroll_eased,from,to,effect,'scaley');var scalez=_this.animate_value(scroll,scroll_eased,from,to,effect,'scalez');if('scale'in effect.properties)
{scalex=scale;scaley=scale;scalez=scale;}
effect.element.css({'will-change':'transform, opacity','opacity':opacity,'transform':'translate3d( '+translatex+', '+translatey+', '+translatez+') rotateX( '+rotatex+') rotateY( '+rotatey+') rotateZ( '+rotatez+') scale3d( '+scalex+' , '+scaley+' , '+scalez+' )'});if(effect.isFresh){effect.isFresh=false;effect.element.removeClass('is-fresh');}else{effect.element.css({'transition':'transform '+effect.inertiatime+'ms '+effect.delay+'ms '+effect.inertia+', opacity '+effect.inertiatime+'ms '+effect.delay+'ms '+effect.inertia});}}}}
_this.animate_value=function(scroll,scroll_eased,from,to,effect,property)
{var value_default=_this.property_defaults[property];if(!(property in effect.properties))return value_default;var value_target=effect.properties[property];var forwards=(to>from)?true:false;var percentages=(property.indexOf('translate')>=0&&typeof value_target=='string'&&value_target.charAt(value_target.length-1)=='%');var px=(property.indexOf('translate')>=0&&typeof value_target=='string'&&value_target.substr(value_target.length-2)=='px');var vw=(property.indexOf('translate')>=0&&typeof value_target=='string'&&value_target.substr(value_target.length-2)=='vw');var vh=(property.indexOf('translate')>=0&&typeof value_target=='string'&&value_target.substr(value_target.length-2)=='vh');var translate_unit='px';if(px){value_target=parseFloat(value_target.slice(0,-2),10);translate_unit='px';}
if(percentages){value_target=parseFloat(value_target.slice(0,-1),10);translate_unit='%';}
if(vw){value_target=parseFloat(value_target.slice(0,-2),10);translate_unit='vw';}
if(vh){value_target=parseFloat(value_target.slice(0,-2),10);translate_unit='vh';}
var value_default_bnd,value_target_bnd;switch(property)
{case'opacity':value_default_bnd=value_default.toFixed(2);value_target_bnd=value_target;break;case'translatex':value_default_bnd=value_default.toFixed(2)+translate_unit;value_target_bnd=value_target.toFixed(2)+translate_unit;break;case'translatey':value_default_bnd=value_default.toFixed(2)+translate_unit;value_target_bnd=value_target.toFixed(2)+translate_unit;break;case'translatez':value_default_bnd=value_default.toFixed(2)+translate_unit;value_target_bnd=value_target.toFixed(2)+translate_unit;break;case'rotatex':value_default_bnd=value_default.toFixed(1)+'deg';value_target_bnd=value_target+'deg';break;case'rotatey':value_default_bnd=value_default.toFixed(1)+'deg';value_target_bnd=value_target+'deg';break;case'rotatez':value_default_bnd=value_default.toFixed(1)+'deg';value_target_bnd=value_target+'deg';break;case'scale':value_default_bnd=value_default.toFixed(3);value_target_bnd=value_target;break;default:break;}
if(scroll<from&&forwards){return value_default_bnd;}
if(scroll>to&&forwards){return value_target_bnd;}
if(scroll>from&&!forwards){return value_default_bnd;}
if(scroll<to&&!forwards){return value_target_bnd;}
var new_value=value_default+(scroll_eased*(value_target-value_default));switch(property)
{case'opacity':new_value=new_value.toFixed(2);break;case'translatex':new_value=new_value.toFixed(2)+translate_unit;break;case'translatey':new_value=new_value.toFixed(2)+translate_unit;break;case'translatez':new_value=new_value.toFixed(2)+translate_unit;break;case'rotatex':new_value=new_value.toFixed(1)+'deg';break;case'rotatey':new_value=new_value.toFixed(1)+'deg';break;case'rotatez':new_value=new_value.toFixed(1)+'deg';break;case'scale':new_value=new_value.toFixed(3);break;default:break;}
return new_value;}
_this.update_viewport_position=function()
{_this.viewport_top=$window.scrollTop();_this.viewport_bottom=_this.viewport_top+_this.viewport_height;}
_this.update_elements_in_view=function()
{_this.elements_in_view=[];var elements_length=_this.elements.length;for(var i=0;i<elements_length;i++)
{if((_this.elements[i].bottom<_this.viewport_top)&&(_this.onetime[i]==true))
{if(_this.elements[i].effects[0].hideafter&&!_this.done_once[i]){_this.elements[i].element.css({'display':'none','visibility':'hidden'});}
_this.done_once[i]=true;}
if(_this.done_once[i]!=true){if((_this.elements[i].top<_this.viewport_bottom)&&(_this.elements[i].bottom>_this.viewport_top))
{_this.elements_in_view.push(_this.elements[i]);}}}}
_this.on_resize=function()
{_this.update_viewport();_this.update_element_heights();_this.update_viewport_position();_this.update_elements_in_view();_this.animate();}
_this.update_viewport=function()
{_this.body_height=$document.height();_this.viewport_height=$window.height();}
_this.update_element_heights=function()
{var elements_length=_this.elements.length;for(var i=0;i<elements_length;i++)
{var element_height=_this.elements[i].element.outerHeight();var position=_this.elements[i].element.offset();_this.elements[i].height=element_height;_this.elements[i].top=position.top;_this.elements[i].bottom=position.top+element_height;}}
_this.find_only_once_elements=function()
{var elements_length=_this.elements.length;for(var i=0;i<elements_length;i++)
{_this.onetime[i]=_this.elements[i].element.hasClass('onceOnly')}}
$document.one(_this.init_events.join(' '),function(){_this.init();});return _this;})(jQuery);

$(function(){function isTouchDevice(){return true==("ontouchstart"in window||window.DocumentTouch&&document instanceof DocumentTouch)}
$('html').addClass('bwd-js')
if(isTouchDevice()){$('html').addClass('bwd-touch')}});

return stack;})(stacks.com_bigwhiteduck_stacks_scrollmate2);
stacks.stacks_in_535411 = {};
stacks.stacks_in_535411 = (function(stack) {
var jQuery = stacks.jQuery;var $ = jQuery;
stacks.fInit=function(stack){return stack;}
window.wowjsmobile=true;window.revealAnimation='fadeAndPop';window.revealNoScroll=false;$(document).on('opened.fndtn.reveal','[data-reveal]',function(){$(window).trigger('resize')});$(document).ready(function(){if($.isMobile()){$('.show-for-touch').fadeIn('fast');$("a[data-dropdown],a.menu-icon,a.touchfix").on('touchend',function(){$(this).trigger('click')});}});var useCustomSelector='False',stacksTrue='True',headerFamily='Open Sans'==='custom'?'':"Open Sans",headerFamilyFallback='sans-serif',headerSelector='h1'+',.font-family-h1',headerStyle='normal',headerGoogle=headerFamily==='Open Sans'?stacksTrue:'Open Sans'==='custom'?'False':'false',headerWeight=headerStyle==='italic'?'300italic':'300',headerWeight=headerWeight+',400'.replace(/\s/g,''),header2Family='Open Sans'==='custom'?'':'Open Sans',header2FamilyFallback='sans-serif',header2Selector='h2, h3, h4, h5, h6'+',.font-family-h2',header2Style='normal',header2Google=header2Family==='Open Sans'?stacksTrue:'Open Sans'==='custom'?'False':'false',header2Weight=header2Style==='italic'?'600italic':'600',header2Weight=header2Weight+',400'.replace(/\s/g,''),fontFamily='\'Helvetica Neue\', Helvetica, Arial, sans-serif'==='custom'?'':'\'Helvetica Neue\', Helvetica, Arial, sans-serif',fontFamilyFallback='sans-serif',fontSelector='p'+',.font-family-text',fontGoogle=fontFamily==='Open Sans'?stacksTrue:'\'Helvetica Neue\', Helvetica, Arial, sans-serif'==='custom'?'False':'false',fontWeight='400,400'.replace(/\s/g,''),getGoogleUrls=function(fontStore){var googleFonts=[];for(var family in fontStore){var weights=fontStore[family].join().replace(/,,/g,',').replace(/,$/,'');googleFonts.push('https://fonts.googleapis.com/css?family='+family+':'+weights);}
return googleFonts;},isGFont=function(family,google){if(google===stacksTrue)return family;return false;},getGoogleFonts=function(data){var fonts=data.fonts,weights=data.weights,google=data.google,fontStore=new Object();for(var i=0;i<fonts.length;i++){if(isGFont(fonts[i],google[i])===false)continue;(fontStore[fonts[i]]=fontStore[fonts[i]]||[]).push(weights[i]);}
return getGoogleUrls(fontStore);};headerFamily=$.trim(headerFamily);header2Family=$.trim(header2Family);fontFamily=$.trim(fontFamily);var cssFontFiles=getGoogleFonts({fonts:[headerFamily,header2Family,fontFamily],weights:[headerWeight,header2Weight,fontWeight],google:[headerGoogle,header2Google,fontGoogle]});for(var i=0;i<cssFontFiles.length;i++){loadCSS(decodeURIComponent(cssFontFiles[i]));}
if(useCustomSelector===stacksTrue){fontFamily='"'+fontFamily+'"';headerFamily='"'+headerFamily+'"';header2Family='"'+header2Family+'"';var customFontStyles={'font-family':[fontFamily,fontFamilyFallback].join()+'!important','font-weight':fontWeight.split(',')[0]+'!important'},customHeaderSyles={'font-family':[headerFamily,headerFamilyFallback].join()+'!important','font-weight':headerWeight.split(',')[0]+'!important','font-style':headerStyle+'!important'},customHeader2Syles={'font-family':[header2Family,header2FamilyFallback].join()+'!important','font-weight':header2Weight.split(',')[0]+'!important','font-style':header2Style+'!important'};if(fontFamily!=='fontpro'){$.debug('Custom Font Selectors:'+fontSelector,customFontStyles);vein.inject(fontSelector,customFontStyles);}
if(headerFamily!=='fontpro'){$.debug('Custom Header Selectors:'+headerSelector,customHeaderSyles);vein.inject(headerSelector,customHeaderSyles);}
if(header2Family!=='fontpro'){$.debug('Custom Header2 Selectors:'+header2Selector,customHeader2Syles);vein.inject(header2Selector,customHeader2Syles);}}eval(function(p,a,c,k,e,d){e=function(c){return(c<a?'':e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p}('(7($){b $p=$(\'<q />\').1l(\'6-p\'),$f=$(\'<1N />\').1l(\'6-f\'),$g=$(\'<1N />\').1l(\'6-g\'),$a=$(),B=y,c=[],4=0,v=2B,o=7(){},M,V={1o:7(9){b 3={m:1z(),I:\'15\',L:\'15\',w:0,g:N,T:7(){},1k:7(){}};$.14(3,$.6.U.p,9);5(3.g){g()}b $x=$p.2A();$x.t({\'1J\':\'1I\',\'z\':\'19\',\'A\':\'19\'}).1M(\'T\',7(){5($x==$a){8}$(W).1M(\'T S.6\',7(e){S($x,3)});5($a.2z(\'q\')){$a.1G();$x.1L().2y($a).1b(3.w,7(){$(\'.6-p\').1m(r).R();$(\'d\').n(\'1K\',[r,4-1]);3.1k.E($x,[4-1])})}l{$x.1L().1c(\'d\').1b(3.w,7(){$(\'d\').n(\'1K\',[r,4-1]);3.1k.E(r,[4-1])})}$a=$x;S($a,3);5(3.g){1A()}$(\'d\').n(\'2x\',[$a.h(0),4-1]);3.T.E($a.h(0),[4-1]);5(4){$(\'d\').n(\'2w\',[$a.h(0),4-1]);3.o.E($a.h(0),[4-1])}}).2v(\'m\',3.m);8 $.6},2u:7(k){5(!k||k==\'p\'){$(\'.6-p, .6-g\').R();$(W).2t(\'*.6\');$a=$()}5(!k||k==\'f\'){$(\'.6-f\').R()}17(M);8 $.6},f:7(9){b 3={m:y,18:y};$.14(3,$.6.U.f,9);$f.R();$f.t({\'2s\':\'0\',\'2r\':\'0\',\'1J\':\'1I\',\'z\':\'19\',\'A\':\'19\',\'Q\':\'11%\',\'F\':\'11%\'});5(3.m===1i){$f.t(\'X\',\'2q\')}5(3.m){$f.t(\'X\',\'1y(\'+3.m+\')\')}5(3.18){$f.t(\'18\',3.18)}$f.1c(\'d\');8 $.6},C:7(9,1H){b 3={4:4,v:v,16:1i,g:N,c:c,o:o};$.14(3,$.6.U.C,9);5(3.c!=c){5(!9.4){3.4=0}5(!9.o){3.o=7(){}}5(3.16){$.6(\'16\',3.c)}}c=3.c;v=3.v;4=3.4;o=3.o;17(M);5(!c.1j){8 $.6}b 1h=7(){5(4<0){4=c.1j-1}5(4>=c.1j||!c[4-1]){4=0}b 9=c[4++];9.o=3.o;9.g=3.g;5(1p(9.w)==\'2p\'){9.w=3.w}5(9.w>3.v){9.w=3.v}$.6(9)};1h();5(!1H){B=1i;$(\'d\').n(\'2o\',[$a.h(0),4-1])}5(!B){M=2n(1h,3.v)}8 $.6},2m:7(){b u=4;5(4){$.6(\'C\',{4:4},N);$(\'d\').n(\'2l\',[$a.h(0),4-1,u-1])}8 $.6},2k:7(){b u=4;5(4){$.6(\'C\',{4:4-2},N);$(\'d\').n(\'2j\',[$a.h(0),4-1,u-1])}8 $.6},2i:7(s){b u=4;5(4){$.6(\'C\',{4:s},N);$(\'d\').n(\'2h\',[$a.h(0),4-1,u-1])}8 $.6},1G:7(){b u=4;4=0;B=y;17(M);$(\'d\').n(\'2g\',[$a.h(0),u-1]);8 $.6},2f:7(){B=N;17(M);$(\'d\').n(\'2e\',[$a.h(0),4-1]);8 $.6},h:7(k){5(k===y||k==\'p\'){8 $a.h(0)}5(k==\'f\'){8 $f.h(0)}5(k==\'4\'){8 4-1}5(k==\'B\'){8 B}},16:7(c){b 1F=[];2d(b i 1t c){5(c[i].m){b 1g=1a.2c(\'q\');1g.m=c[i].m;1F.2b(1g)}}8 $.6}};7 S($q,9){b 3={I:\'15\',L:\'15\'};$.14(3,9);5($q.F()===0){$q.T(7(){S($(r),9)});8}b 1f=1x(),H=1f.Q,K=1f.F,1D=$q.Q(),1E=$q.F(),1C=K/H,13=1E/1D,G,J,2a,29,j;5(1C>13){G=K/13;J=K}l{G=H;J=H*13}j={\'Q\':G+\'Y\',\'F\':J+\'Y\',\'A\':\'12\',\'1e\':\'12\',\'z\':\'12\',\'1d\':\'12\'};5(!1B(Z(3.L,10))){j.A=(0-(J-K)/11*Z(3.L,10))+\'Y\'}l 5(3.L==\'A\'){j.A=0}l 5(3.L==\'1e\'){j.1e=0}l{j.A=(K-J)/2}5(!1B(Z(3.I,10))){j.z=(0-(G-H)/11*Z(3.I,10))+\'Y\'}l 5(3.I==\'z\'){j.z=0}l 5(3.I==\'1d\'){j.1d=0}l{j.z=(H-G)/2}$q.t(j)}7 g(){$g.1c(\'d\').1b()}7 1A(){$g.28(\'27\',7(){$(r).R()})}7 1z(){5($(\'d\').t(\'X\')){8 $(\'d\').t(\'X\').26(/1y\\("?(.*?)"?\\)/i,\'$1\')}}7 1x(){b P=W,O=\'25\',1s=(1w.1v.1u(/24/i)!==y)||(1w.1v.1u(/23/i)!==y),1r=22;5(!(\'21\'1t W)){P=1a.20||1a.d;O=\'1Z\'}8{Q:P[O+"1Y"],F:1s?P[O+"1q"]+1r:P[O+"1q"]}}$.6=7(D){5(V[D]){8 V[D].E(r,1X.1W.1V.1U(1n,1))}l 5(1p D===\'1T\'||!D){8 V.1o.E(r,1n)}l{$.1S(\'1R \'+D+\' 1Q 1m 1P\')}};$.6.U={p:{},C:{},f:{}}})(1O);',62,162,'|||options|step|if|vegas|function|return|settings|current|var|backgrounds|body||overlay|loading|get||properties|what|else|src|trigger|walk|background|img|this||css|from|delay|fade|new|null|left|top|paused|slideshow|method|apply|height|newWidth|ww|align|newHeight|wh|valign|timer|true|prop|elmt|width|remove|resize|load|defaults|methods|window|backgroundImage|px|parseInt||100|auto|ri|extend|center|preload|clearInterval|opacity|0px|document|fadeIn|prependTo|right|bottom|vp|cacheImage|doSlideshow|false|length|complete|addClass|not|arguments|init|typeof|Height|height_offset|is_iphone|in|match|userAgent|navigator|getViewportSize|url|getBackground|loaded|isNaN|rw|iw|ih|cache|stop|keepPause|fixed|position|vegascomplete|hide|bind|div|jQuery|exist|does|Method|error|object|call|slice|prototype|Array|Width|client|documentElement|innerWidth|76|iPod|iPhone|inner|replace|fast|fadeOut|newTop|newLeft|push|createElement|for|vegaspause|pause|vegasstop|vegasjump|jump|vegasprevious|previous|vegasnext|next|setInterval|vegasstart|undefined|none|padding|margin|unbind|destroy|attr|vegaswalk|vegasload|insertAfter|is|clone|5000'.split('|')))
$(document).ready(function(){var browserWidth=$(window).width(),mediaQueryMedium=$('meta.foundation-mq-medium').first().width(),mediaQueryLarge=$('meta.foundation-mq-large').first().width(),onSmall=browserWidth<mediaQueryMedium?true:false;var backgroundImage=window.backgroundImage||'files/bodyCover-535411.jpg',overlayImage='',fade=500,opacity=0.80;if(!onSmall&&''!=='')backgroundImage='';$.vegas({src:backgroundImage,fade:fade,loading:false});if(overlayImage!='')
$.vegas('overlay',{src:overlayImage,opacity:opacity});});

return stack;})(stacks.stacks_in_535411);
stacks.stacks_in_609723 = {};
stacks.stacks_in_609723 = (function(stack) {
var jQuery = stacks.jQuery;var $ = jQuery;
var autoscroll=false,automarker='';if(window.location.hash){automarker=location.hash.replace('#','');window.location.hash="";autoscroll=true;}$(document).ready(function(){var includeInMenu=function(selector){switch(selector){case'all':useMarkers=true;useZones=true;break;case'markers':useMarkers=true;useZones=false;break;case'zones':useMarkers=false;useZones=true;break;}}
function firstMarkerOffset(){return firstMarker.offset().top;}
function generateMenu(){var i=0;$('[data-magellan-destination]').each(function(){var
that=$(this),isZone=false,destination=that.data('magellan-destination'),magicName=that.data('magic-name'),magicHide=typeof that.data('magic-hide')==='undefined'?' ':that.data('magic-hide'),magicIcon=that.data('magic-icon'),iconSet=that.data('magic-icon-set'),magicZType=that.data('magic-zone-type'),magicClass=that.data('magic-class'),magicZLink=that.data('magic-zone-link'),magicLinkTarget=that.data('magic-link-target'),magicZOrigin=that.data('magic-zone-origin'),magicZFont=that.data('magic-font'),magicPopDrop=that.data('magic-popdrop'),magicLL=that.data('magic-ll'),magicRevealID=that.data('magic-reveal-id'),magicDropdown=that.data('magic-dropdown'),tipPopDrop=that.data('pop-drop-tip'),magicDDOptions=that.data('magic-options'),doNotMenu=that.data('magic-inmenu'),zonelink='<li class="mag-item zone-item mag-zone-'+magicZOrigin+' '+magicZFont+'">',item='<li class="mag-item mag-scroll '+magicHide+' '+magicZFont+'" data-pop-drop="'+tipPopDrop+'">';if(typeof magicZOrigin!="undefined"){destination=magicZOrigin;isZone=true;if(magicName==""&&magicIcon.length!=0){magicName=' ';}}
if(typeof magicName==="undefined"){magicName=destination;}
if(typeof magicIcon==="undefined"){magicIcon='';}
if(magicName.length==0&&magicIcon.length==0){magicName=destination;}
if(magicIcon.length>0){magicName='<i class="magic-icon '+iconSet+' '+magicIcon+' mgicon-'+destination+'"></i>'+magicName;}
if(doNotMenu==='not-in-menu')return true;if(isZone&&useZones){if(magicZType==='link'){$(magicNav).append($(zonelink).attr('data-magic-zone-link',magicZType).attr('data-pop-drop',tipPopDrop).append($('<a class ="mag-link mag-zone '+magicClass+'">').attr({'href':magicZLink,'target':magicLinkTarget}).append($('<span class="dot-tip ">').append(magicName))));}else if(magicZType==='reveal'){$(magicNav).append($(zonelink).attr('data-magic-zone-link',magicZType).append($('<a class ="mag-link mag-zone '+magicClass+'">').attr('data-reveal-id',magicRevealID).append($('<span class="dot-tip ">').append(magicName))));}else if(magicZType==='dropdown'){$(magicNav).append($(zonelink).attr('data-magic-zone-link',magicZType).append($('<a class ="mag-link mag-zone '+magicClass+'">').attr({'data-dropdown':magicDropdown,'data-options':magicDDOptions,'aria-expanded':false}).append($('<span class="dot-tip ">').append(magicName))));var dropdownID='#'+magicDropdown;dme.append($(dropdownID).parent());}else if(magicZType==='popdrop'){$(magicNav).append($(zonelink).attr('data-magic-zone-link',magicZType).append($('<a class ="mag-link mag-zone '+magicClass+'">').attr({'data-pop-drop':magicPopDrop}).append($('<span class="dot-tip ">').append(magicName))));}else if(magicZType==='limelight'){$(magicNav).append($(zonelink).attr('data-magic-zone-link',magicZType).append($('<a class ="mag-link mag-zone '+magicLL+' '+magicClass+'">').append($('<span class="dot-tip ">').append(magicName))));}}
else{if(useMarkers&&!isZone){$(magicNav).append($(item).attr('data-magellan-arrival',destination).append($('<a class ="mag-link">').attr('href',('#'+destination)).append($('<span class="dot-tip ">').append(magicName))));}}
i++;});return(i);}
function checkLanding(){if($(window).scrollTop()<landingRefPt){$('#stacks_in_609723 [data-magellan-expedition]').addClass('mag-landing');}else{$('#stacks_in_609723 [data-magellan-expedition]').removeClass('mag-landing');}}
function hasScrolled(){if($('#stacks_in_609723 .magic-nav>.mag-item.active').length>0){if($('#stacks_in_609723 .magic-nav>.mag-item.active').hasClass('hide-when-active')){$('#stacks_in_609723 [data-magellan-expedition]').addClass('mag-hidden');}else{$('#stacks_in_609723 [data-magellan-expedition]').removeClass('mag-hidden');}}}var mobileToggle=function(action){switch(action){case'toggle':if(dme.hasClass('toggle-open')){dme.removeClass('toggle-open');menuItems.slideUp(toggleSpeed,function(){});}else{dme.addClass('toggle-open');menuItems.slideDown(toggleSpeed,function(){});}
break;case'desktop':menuItems.css('display','');dme.removeClass('toggle-open');break;}}
var isToggleActive=function(){var win=$(window).width();if(win<mobBreakpoint){return true;}else{return false;}}
var toggleRespond=function(){if(isToggleActive()){dme.addClass('mag-toggle');if(dropdowns)dropdowns.removeClass('open');}else{dme.removeClass('mag-toggle');mobileToggle('desktop');}}
var stack=$('#stacks_in_609723'),dme=$('[data-magellan-expedition]',stack),toggleTarget=$('.toggle-target',stack),toggleSpeed=169,burgerWrap=$('.burgWrapper',stack),burger=$('.burg',burgerWrap),menuItems=$('.side-nav.magic-nav',stack),mobBreakpoint=1000,orientation='mag-horizontal',itemInclude='all',useMarkers,useZones,magicNav=$('.magic-nav',stack),magicDot=$('.magic-dots',stack),landingAction='browser-height',firstMarker=$('body').find('[data-magellan-destination]').eq(0),firstMarker=firstMarker.length?firstMarker:$('body'),landingRefPt,didScroll=false,padBody=true,dropdowns,i=0;if($('#foundation-loader').length){$('#foundation-loader').after('<div class="f-magicgellan-fixed"></div');}else{$('body').prepend('<div class="f-magicgellan-fixed"></div');}
$('li',stack).each(function(){var id=$(this).data('magellan-arrival')
$('a',this).attr('href','#'+id);});includeInMenu(itemInclude);var numMarkers=generateMenu();$('#stacks_in_609723 .magic-nav').find('.mag-scroll').eq(0).addClass('active');$('#stacks_in_609723 .magic-dots').find('.mag-scroll').eq(0).addClass('active');hasScrolled();toggleTarget.on('click',function(e){mobileToggle('toggle');});$('.mag-item:not(.zone-item)',menuItems).on('click',function(){if(isToggleActive()){mobileToggle('toggle');}});var resizeTimer;$(window).on('resize',function(e){clearTimeout(resizeTimer);resizeTimer=setTimeout(function(){toggleRespond();},20);});$(window).scroll(function(event){didScroll=true});setInterval(function(){if(didScroll){hasScrolled();didScroll=false;}},100);$(window).load(function(){setTimeout(function(){try{foundation&&foundation.jQuery
var f=foundation.jQuery;f(document).foundation('dropdown','reflow');f(document).foundation('magellan','reflow');dropdowns=stack.find('.f-dropdown');}
catch(e){console.log('Foundation not found');}
$('#stacks_in_609723 [data-magellan-expedition]').removeClass('mag-preload');},100);if(autoscroll){$('.mag-item[data-magellan-arrival="'+automarker+'"]>a').trigger('click');}});});
;(function(){'use strict';function FastClick(layer,options){var oldOnClick;options=options||{};this.trackingClick=false;this.trackingClickStart=0;this.targetElement=null;this.touchStartX=0;this.touchStartY=0;this.lastTouchIdentifier=0;this.touchBoundary=options.touchBoundary||10;this.layer=layer;this.tapDelay=options.tapDelay||200;this.tapTimeout=options.tapTimeout||700;if(FastClick.notNeeded(layer)){return;}
function bind(method,context){return function(){return method.apply(context,arguments);};}
var methods=['onMouse','onClick','onTouchStart','onTouchMove','onTouchEnd','onTouchCancel'];var context=this;for(var i=0,l=methods.length;i<l;i++){context[methods[i]]=bind(context[methods[i]],context);}
if(deviceIsAndroid){layer.addEventListener('mouseover',this.onMouse,true);layer.addEventListener('mousedown',this.onMouse,true);layer.addEventListener('mouseup',this.onMouse,true);}
layer.addEventListener('click',this.onClick,true);layer.addEventListener('touchstart',this.onTouchStart,false);layer.addEventListener('touchmove',this.onTouchMove,false);layer.addEventListener('touchend',this.onTouchEnd,false);layer.addEventListener('touchcancel',this.onTouchCancel,false);if(!Event.prototype.stopImmediatePropagation){layer.removeEventListener=function(type,callback,capture){var rmv=Node.prototype.removeEventListener;if(type==='click'){rmv.call(layer,type,callback.hijacked||callback,capture);}else{rmv.call(layer,type,callback,capture);}};layer.addEventListener=function(type,callback,capture){var adv=Node.prototype.addEventListener;if(type==='click'){adv.call(layer,type,callback.hijacked||(callback.hijacked=function(event){if(!event.propagationStopped){callback(event);}}),capture);}else{adv.call(layer,type,callback,capture);}};}
if(typeof layer.onclick==='function'){oldOnClick=layer.onclick;layer.addEventListener('click',function(event){oldOnClick(event);},false);layer.onclick=null;}}
var deviceIsWindowsPhone=navigator.userAgent.indexOf("Windows Phone")>=0;var deviceIsAndroid=navigator.userAgent.indexOf('Android')>0&&!deviceIsWindowsPhone;var deviceIsIOS=/iP(ad|hone|od)/.test(navigator.userAgent)&&!deviceIsWindowsPhone;var deviceIsIOS4=deviceIsIOS&&(/OS 4_\d(_\d)?/).test(navigator.userAgent);var deviceIsIOSWithBadTarget=deviceIsIOS&&(/OS [6-7]_\d/).test(navigator.userAgent);var deviceIsBlackBerry10=navigator.userAgent.indexOf('BB10')>0;FastClick.prototype.needsClick=function(target){switch(target.nodeName.toLowerCase()){case'button':case'select':case'textarea':if(target.disabled){return true;}
break;case'input':if((deviceIsIOS&&target.type==='file')||target.disabled){return true;}
break;case'label':case'iframe':case'video':return true;}
return(/\bneedsclick\b/).test(target.className);};FastClick.prototype.needsFocus=function(target){switch(target.nodeName.toLowerCase()){case'textarea':return true;case'select':return!deviceIsAndroid;case'input':switch(target.type){case'button':case'checkbox':case'file':case'image':case'radio':case'submit':return false;}
return!target.disabled&&!target.readOnly;default:return(/\bneedsfocus\b/).test(target.className);}};FastClick.prototype.sendClick=function(targetElement,event){var clickEvent,touch;if(document.activeElement&&document.activeElement!==targetElement){document.activeElement.blur();}
touch=event.changedTouches[0];clickEvent=document.createEvent('MouseEvents');clickEvent.initMouseEvent(this.determineEventType(targetElement),true,true,window,1,touch.screenX,touch.screenY,touch.clientX,touch.clientY,false,false,false,false,0,null);clickEvent.forwardedTouchEvent=true;targetElement.dispatchEvent(clickEvent);};FastClick.prototype.determineEventType=function(targetElement){if(deviceIsAndroid&&targetElement.tagName.toLowerCase()==='select'){return'mousedown';}
return'click';};FastClick.prototype.focus=function(targetElement){var length;if(deviceIsIOS&&targetElement.setSelectionRange&&targetElement.type.indexOf('date')!==0&&targetElement.type!=='time'&&targetElement.type!=='month'){length=targetElement.value.length;targetElement.setSelectionRange(length,length);}else{targetElement.focus();}};FastClick.prototype.updateScrollParent=function(targetElement){var scrollParent,parentElement;scrollParent=targetElement.fastClickScrollParent;if(!scrollParent||!scrollParent.contains(targetElement)){parentElement=targetElement;do{if(parentElement.scrollHeight>parentElement.offsetHeight){scrollParent=parentElement;targetElement.fastClickScrollParent=parentElement;break;}
parentElement=parentElement.parentElement;}while(parentElement);}
if(scrollParent){scrollParent.fastClickLastScrollTop=scrollParent.scrollTop;}};FastClick.prototype.getTargetElementFromEventTarget=function(eventTarget){if(eventTarget.nodeType===Node.TEXT_NODE){return eventTarget.parentNode;}
return eventTarget;};FastClick.prototype.onTouchStart=function(event){var targetElement,touch,selection;if(event.targetTouches.length>1){return true;}
targetElement=this.getTargetElementFromEventTarget(event.target);touch=event.targetTouches[0];if(deviceIsIOS){selection=window.getSelection();if(selection.rangeCount&&!selection.isCollapsed){return true;}
if(!deviceIsIOS4){if(touch.identifier&&touch.identifier===this.lastTouchIdentifier){event.preventDefault();return false;}
this.lastTouchIdentifier=touch.identifier;this.updateScrollParent(targetElement);}}
this.trackingClick=true;this.trackingClickStart=event.timeStamp;this.targetElement=targetElement;this.touchStartX=touch.pageX;this.touchStartY=touch.pageY;if((event.timeStamp-this.lastClickTime)<this.tapDelay){event.preventDefault();}
return true;};FastClick.prototype.touchHasMoved=function(event){var touch=event.changedTouches[0],boundary=this.touchBoundary;if(Math.abs(touch.pageX-this.touchStartX)>boundary||Math.abs(touch.pageY-this.touchStartY)>boundary){return true;}
return false;};FastClick.prototype.onTouchMove=function(event){if(!this.trackingClick){return true;}
if(this.targetElement!==this.getTargetElementFromEventTarget(event.target)||this.touchHasMoved(event)){this.trackingClick=false;this.targetElement=null;}
return true;};FastClick.prototype.findControl=function(labelElement){if(labelElement.control!==undefined){return labelElement.control;}
if(labelElement.htmlFor){return document.getElementById(labelElement.htmlFor);}
return labelElement.querySelector('button, input:not([type=hidden]), keygen, meter, output, progress, select, textarea');};FastClick.prototype.onTouchEnd=function(event){var forElement,trackingClickStart,targetTagName,scrollParent,touch,targetElement=this.targetElement;if(!this.trackingClick){return true;}
if((event.timeStamp-this.lastClickTime)<this.tapDelay){this.cancelNextClick=true;return true;}
if((event.timeStamp-this.trackingClickStart)>this.tapTimeout){return true;}
this.cancelNextClick=false;this.lastClickTime=event.timeStamp;trackingClickStart=this.trackingClickStart;this.trackingClick=false;this.trackingClickStart=0;if(deviceIsIOSWithBadTarget){touch=event.changedTouches[0];targetElement=document.elementFromPoint(touch.pageX-window.pageXOffset,touch.pageY-window.pageYOffset)||targetElement;targetElement.fastClickScrollParent=this.targetElement.fastClickScrollParent;}
targetTagName=targetElement.tagName.toLowerCase();if(targetTagName==='label'){forElement=this.findControl(targetElement);if(forElement){this.focus(targetElement);if(deviceIsAndroid){return false;}
targetElement=forElement;}}else if(this.needsFocus(targetElement)){if((event.timeStamp-trackingClickStart)>100||(deviceIsIOS&&window.top!==window&&targetTagName==='input')){this.targetElement=null;return false;}
this.focus(targetElement);this.sendClick(targetElement,event);if(!deviceIsIOS||targetTagName!=='select'){this.targetElement=null;event.preventDefault();}
return false;}
if(deviceIsIOS&&!deviceIsIOS4){scrollParent=targetElement.fastClickScrollParent;if(scrollParent&&scrollParent.fastClickLastScrollTop!==scrollParent.scrollTop){return true;}}
if(!this.needsClick(targetElement)){event.preventDefault();this.sendClick(targetElement,event);}
return false;};FastClick.prototype.onTouchCancel=function(){this.trackingClick=false;this.targetElement=null;};FastClick.prototype.onMouse=function(event){if(!this.targetElement){return true;}
if(event.forwardedTouchEvent){return true;}
if(!event.cancelable){return true;}
if(!this.needsClick(this.targetElement)||this.cancelNextClick){if(event.stopImmediatePropagation){event.stopImmediatePropagation();}else{event.propagationStopped=true;}
event.stopPropagation();event.preventDefault();return false;}
return true;};FastClick.prototype.onClick=function(event){var permitted;if(this.trackingClick){this.targetElement=null;this.trackingClick=false;return true;}
if(event.target.type==='submit'&&event.detail===0){return true;}
permitted=this.onMouse(event);if(!permitted){this.targetElement=null;}
return permitted;};FastClick.prototype.destroy=function(){var layer=this.layer;if(deviceIsAndroid){layer.removeEventListener('mouseover',this.onMouse,true);layer.removeEventListener('mousedown',this.onMouse,true);layer.removeEventListener('mouseup',this.onMouse,true);}
layer.removeEventListener('click',this.onClick,true);layer.removeEventListener('touchstart',this.onTouchStart,false);layer.removeEventListener('touchmove',this.onTouchMove,false);layer.removeEventListener('touchend',this.onTouchEnd,false);layer.removeEventListener('touchcancel',this.onTouchCancel,false);};FastClick.notNeeded=function(layer){var metaViewport;var chromeVersion;var blackberryVersion;var firefoxVersion;if(typeof window.ontouchstart==='undefined'){return true;}
chromeVersion=+(/Chrome\/([0-9]+)/.exec(navigator.userAgent)||[,0])[1];if(chromeVersion){if(deviceIsAndroid){metaViewport=document.querySelector('meta[name=viewport]');if(metaViewport){if(metaViewport.content.indexOf('user-scalable=no')!==-1){return true;}
if(chromeVersion>31&&document.documentElement.scrollWidth<=window.outerWidth){return true;}}}else{return true;}}
if(deviceIsBlackBerry10){blackberryVersion=navigator.userAgent.match(/Version\/([0-9]*)\.([0-9]*)/);if(blackberryVersion[1]>=10&&blackberryVersion[2]>=3){metaViewport=document.querySelector('meta[name=viewport]');if(metaViewport){if(metaViewport.content.indexOf('user-scalable=no')!==-1){return true;}
if(document.documentElement.scrollWidth<=window.outerWidth){return true;}}}}
if(layer.style.msTouchAction==='none'||layer.style.touchAction==='manipulation'){return true;}
firefoxVersion=+(/Firefox\/([0-9]+)/.exec(navigator.userAgent)||[,0])[1];if(firefoxVersion>=27){metaViewport=document.querySelector('meta[name=viewport]');if(metaViewport&&(metaViewport.content.indexOf('user-scalable=no')!==-1||document.documentElement.scrollWidth<=window.outerWidth)){return true;}}
if(layer.style.touchAction==='none'||layer.style.touchAction==='manipulation'){return true;}
return false;};FastClick.attach=function(layer,options){return new FastClick(layer,options);};if(typeof define==='function'&&typeof define.amd==='object'&&define.amd){define(function(){return FastClick;});}else if(typeof module!=='undefined'&&module.exports){module.exports=FastClick.attach;module.exports.FastClick=FastClick;}else{window.FastClick=FastClick;}}());

return stack;})(stacks.stacks_in_609723);
stacks.stacks_in_611836 = {};
stacks.stacks_in_611836 = (function(stack) {
var jQuery = stacks.jQuery;var $ = jQuery;
$(window).load(function(){setTimeout(function(){$('#stacks_in_611836 [data-magellan-expedition]').removeClass('mag-preload');},100);});$(document).ready(function(){var stack=$('#stacks_in_611836'),dme=$('[data-magellan-expedition]',stack),toggleTarget=$('.toggle-target',stack),burgerWrap=$('.burgWrapper',stack),burger=$('.burg',burgerWrap),menuItems=$('.side-nav.magic-nav',stack),mobBreakpoint=1100,magicNav=$('.magic-nav',stack),magicDot=$('.magic-dots',stack),dotAlign='right',landingAction='browser-height',firstMarker=$('body').find('[data-magellan-destination]').eq(0),firstMarker=firstMarker.length?firstMarker:$('body'),landingRefPt,didScroll=false,isFresh=true,i=0;$('li',stack).each(function(){var id=$(this).data('magellan-arrival')
$('a',this).attr('href','#'+id);});var numMarkers=generateMenu();$('#stacks_in_611836 .magic-dots').find('.mag-scroll').eq(0).addClass('active');hasScrolled();function firstMarkerOffset(){return firstMarker.offset().top;}
function generateMenu(){var i=0;$('[data-magellan-destination]').each(function(){var destination=$(this).data('magellan-destination'),magicName=$(this).data('magic-name'),magicHide=$(this).data('magic-hide'),magicIcon=$(this).data('magic-icon'),magicZType=$(this).data('magic-zone-type'),magicZLink=$(this).data('magic-zone-link'),magicLinkTarget=$(this).data('magic-link-target'),magicZOrigin=$(this).data('magic-zone-origin'),magicRevealID=$(this).data('magic-reveal-id'),magicDropdown=$(this).data('magic-dropdown'),magicDDOptions=$(this).data('magic-options'),doNotMenu=$(this).data('magic-inmenu'),zonelink='<li class="mag-item zone-item mag-zone-'+magicZOrigin+'">',item='<li class="mag-item mag-scroll '+magicHide+'">';if(magicIcon!=''){magicName='<i class="magic-icon fa '+magicIcon+' icon-'+destination+'"></i> '+magicName;}
if(doNotMenu==='not-in-menu')return true;if(typeof magicName==="undefined"||magicName===""){magicName=destination;}
if(typeof magicZOrigin!="undefined"){return true;}else{$(magicDot).append($(item).attr('data-magellan-arrival',destination).append($('<a class ="mag-link">').attr('href',('#'+destination)).append($('<span class="dot-tip ">').append(magicName))));}
i++;});$('li>.mag-link',magicDot).each(function(){that=$(this);if(dotAlign=='left'){that.prepend('<span class="mag-dot"></span>');}else{that.append('<span class="mag-dot"></span>');}});}
$(window).scroll(function(event){didScroll=true});setInterval(function(){if(didScroll){hasScrolled();didScroll=false;}},100);function checkLanding(){if($(window).scrollTop()<landingRefPt){$('#stacks_in_611836 [data-magellan-expedition]').addClass('mag-landing');}else{$('#stacks_in_611836 [data-magellan-expedition]').removeClass('mag-landing');}}
function hasScrolled(){if($('#stacks_in_611836 .magic-dot>.mag-item.active').length>0){if($('#stacks_in_611836 .magic-dot>.mag-item.active').hasClass('hide-when-active')){$('#stacks_in_611836 [data-magellan-expedition]').addClass('mag-hidden');}else{$('#stacks_in_611836 [data-magellan-expedition]').removeClass('mag-hidden');}}}});

return stack;})(stacks.stacks_in_611836);
stacks.stacks_in_624982 = {};
stacks.stacks_in_624982 = (function(stack) {
var jQuery = stacks.jQuery;var $ = jQuery;
$(function(){$(window).on('load',function(){$('#stacks_in_624982>.s-pro:not(.vault-height)>.shear-wrapper').removeClass('preload-wrapper');$('#stacks_in_624982>.s-pro:not(.vault-height) .content').removeClass('preload-content');});});

return stack;})(stacks.stacks_in_624982);
stacks.stacks_in_624972 = {};
stacks.stacks_in_624972 = (function(stack) {
var jQuery = stacks.jQuery;var $ = jQuery;
$(function(){$(window).on('load',function(){$('#stacks_in_624972>.s-pro:not(.vault-height)>.shear-wrapper').removeClass('preload-wrapper');$('#stacks_in_624972>.s-pro:not(.vault-height) .content').removeClass('preload-content');});});

return stack;})(stacks.stacks_in_624972);
stacks.stacks_in_625008 = {};
stacks.stacks_in_625008 = (function(stack) {
var jQuery = stacks.jQuery;var $ = jQuery;
$(function(){$(window).on('load',function(){$('#stacks_in_625008>.s-pro:not(.vault-height)>.shear-wrapper').removeClass('preload-wrapper');$('#stacks_in_625008>.s-pro:not(.vault-height) .content').removeClass('preload-content');});});

return stack;})(stacks.stacks_in_625008);
stacks.stacks_in_625099 = {};
stacks.stacks_in_625099 = (function(stack) {
var jQuery = stacks.jQuery;var $ = jQuery;
$(function(){$(window).on('load',function(){$('#stacks_in_625099>.s-pro:not(.vault-height)>.shear-wrapper').removeClass('preload-wrapper');$('#stacks_in_625099>.s-pro:not(.vault-height) .content').removeClass('preload-content');});});

return stack;})(stacks.stacks_in_625099);
stacks.stacks_in_625066 = {};
stacks.stacks_in_625066 = (function(stack) {
var jQuery = stacks.jQuery;var $ = jQuery;
$(function(){$(window).on('load',function(){$('#stacks_in_625066>.s-pro:not(.vault-height)>.shear-wrapper').removeClass('preload-wrapper');$('#stacks_in_625066>.s-pro:not(.vault-height) .content').removeClass('preload-content');});});

return stack;})(stacks.stacks_in_625066);
stacks.stacks_in_625432 = {};
stacks.stacks_in_625432 = (function(stack) {
var jQuery = stacks.jQuery;var $ = jQuery;(function(a){if(typeof define==="function"&&define.amd&&define.amd.jQuery){define(["jquery"],a)}else{if(typeof module!=="undefined"&&module.exports){a(require("jquery"))}else{a(jQuery)}}}(function(f){var y="1.6.15",p="left",o="right",e="up",x="down",c="in",A="out",m="none",s="auto",l="swipe",t="pinch",B="tap",j="doubletap",b="longtap",z="hold",E="horizontal",u="vertical",i="all",r=10,g="start",k="move",h="end",q="cancel",a="ontouchstart" in window,v=window.navigator.msPointerEnabled&&!window.navigator.pointerEnabled&&!a,d=(window.navigator.pointerEnabled||window.navigator.msPointerEnabled)&&!a,C="TouchSwipe";var n={fingers:1,threshold:75,cancelThreshold:null,pinchThreshold:20,maxTimeThreshold:null,fingerReleaseThreshold:250,longTapThreshold:500,doubleTapThreshold:200,swipe:null,swipeLeft:null,swipeRight:null,swipeUp:null,swipeDown:null,swipeStatus:null,pinchIn:null,pinchOut:null,pinchStatus:null,click:null,tap:null,doubleTap:null,longTap:null,hold:null,triggerOnTouchEnd:true,triggerOnTouchLeave:false,allowPageScroll:"auto",fallbackToMouseEvents:true,excludedElements:"label, button, input, select, textarea, a, .noSwipe",preventDefaultEvents:true};f.fn.swipe=function(H){var G=f(this),F=G.data(C);if(F&&typeof H==="string"){if(F[H]){return F[H].apply(this,Array.prototype.slice.call(arguments,1))}else{f.error("Method "+H+" does not exist on jQuery.swipe")}}else{if(F&&typeof H==="object"){F.option.apply(this,arguments)}else{if(!F&&(typeof H==="object"||!H)){return w.apply(this,arguments)}}}return G};f.fn.swipe.version=y;f.fn.swipe.defaults=n;f.fn.swipe.phases={PHASE_START:g,PHASE_MOVE:k,PHASE_END:h,PHASE_CANCEL:q};f.fn.swipe.directions={LEFT:p,RIGHT:o,UP:e,DOWN:x,IN:c,OUT:A};f.fn.swipe.pageScroll={NONE:m,HORIZONTAL:E,VERTICAL:u,AUTO:s};f.fn.swipe.fingers={ONE:1,TWO:2,THREE:3,FOUR:4,FIVE:5,ALL:i};function w(F){if(F&&(F.allowPageScroll===undefined&&(F.swipe!==undefined||F.swipeStatus!==undefined))){F.allowPageScroll=m}if(F.click!==undefined&&F.tap===undefined){F.tap=F.click}if(!F){F={}}F=f.extend({},f.fn.swipe.defaults,F);return this.each(function(){var H=f(this);var G=H.data(C);if(!G){G=new D(this,F);H.data(C,G)}})}function D(a5,au){var au=f.extend({},au);var az=(a||d||!au.fallbackToMouseEvents),K=az?(d?(v?"MSPointerDown":"pointerdown"):"touchstart"):"mousedown",ax=az?(d?(v?"MSPointerMove":"pointermove"):"touchmove"):"mousemove",V=az?(d?(v?"MSPointerUp":"pointerup"):"touchend"):"mouseup",T=az?(d?"mouseleave":null):"mouseleave",aD=(d?(v?"MSPointerCancel":"pointercancel"):"touchcancel");var ag=0,aP=null,a2=null,ac=0,a1=0,aZ=0,H=1,ap=0,aJ=0,N=null;var aR=f(a5);var aa="start";var X=0;var aQ={};var U=0,a3=0,a6=0,ay=0,O=0;var aW=null,af=null;try{aR.bind(K,aN);aR.bind(aD,ba)}catch(aj){f.error("events not supported "+K+","+aD+" on jQuery.swipe")}this.enable=function(){aR.bind(K,aN);aR.bind(aD,ba);return aR};this.disable=function(){aK();return aR};this.destroy=function(){aK();aR.data(C,null);aR=null};this.option=function(bd,bc){if(typeof bd==="object"){au=f.extend(au,bd)}else{if(au[bd]!==undefined){if(bc===undefined){return au[bd]}else{au[bd]=bc}}else{if(!bd){return au}else{f.error("Option "+bd+" does not exist on jQuery.swipe.options")}}}return null};function aN(be){if(aB()){return}if(f(be.target).closest(au.excludedElements,aR).length>0){return}var bf=be.originalEvent?be.originalEvent:be;var bd,bg=bf.touches,bc=bg?bg[0]:bf;aa=g;if(bg){X=bg.length}else{if(au.preventDefaultEvents!==false){be.preventDefault()}}ag=0;aP=null;a2=null;aJ=null;ac=0;a1=0;aZ=0;H=1;ap=0;N=ab();S();ai(0,bc);if(!bg||(X===au.fingers||au.fingers===i)||aX()){U=ar();if(X==2){ai(1,bg[1]);a1=aZ=at(aQ[0].start,aQ[1].start)}if(au.swipeStatus||au.pinchStatus){bd=P(bf,aa)}}else{bd=false}if(bd===false){aa=q;P(bf,aa);return bd}else{if(au.hold){af=setTimeout(f.proxy(function(){aR.trigger("hold",[bf.target]);if(au.hold){bd=au.hold.call(aR,bf,bf.target)}},this),au.longTapThreshold)}an(true)}return null}function a4(bf){var bi=bf.originalEvent?bf.originalEvent:bf;if(aa===h||aa===q||al()){return}var be,bj=bi.touches,bd=bj?bj[0]:bi;var bg=aH(bd);a3=ar();if(bj){X=bj.length}if(au.hold){clearTimeout(af)}aa=k;if(X==2){if(a1==0){ai(1,bj[1]);a1=aZ=at(aQ[0].start,aQ[1].start)}else{aH(bj[1]);aZ=at(aQ[0].end,aQ[1].end);aJ=aq(aQ[0].end,aQ[1].end)}H=a8(a1,aZ);ap=Math.abs(a1-aZ)}if((X===au.fingers||au.fingers===i)||!bj||aX()){aP=aL(bg.start,bg.end);a2=aL(bg.last,bg.end);ak(bf,a2);ag=aS(bg.start,bg.end);ac=aM();aI(aP,ag);be=P(bi,aa);if(!au.triggerOnTouchEnd||au.triggerOnTouchLeave){var bc=true;if(au.triggerOnTouchLeave){var bh=aY(this);bc=F(bg.end,bh)}if(!au.triggerOnTouchEnd&&bc){aa=aC(k)}else{if(au.triggerOnTouchLeave&&!bc){aa=aC(h)}}if(aa==q||aa==h){P(bi,aa)}}}else{aa=q;P(bi,aa)}if(be===false){aa=q;P(bi,aa)}}function M(bc){var bd=bc.originalEvent?bc.originalEvent:bc,be=bd.touches;if(be){if(be.length&&!al()){G(bd);return true}else{if(be.length&&al()){return true}}}if(al()){X=ay}a3=ar();ac=aM();if(bb()||!am()){aa=q;P(bd,aa)}else{if(au.triggerOnTouchEnd||(au.triggerOnTouchEnd==false&&aa===k)){if(au.preventDefaultEvents!==false){bc.preventDefault()}aa=h;P(bd,aa)}else{if(!au.triggerOnTouchEnd&&a7()){aa=h;aF(bd,aa,B)}else{if(aa===k){aa=q;P(bd,aa)}}}}an(false);return null}function ba(){X=0;a3=0;U=0;a1=0;aZ=0;H=1;S();an(false)}function L(bc){var bd=bc.originalEvent?bc.originalEvent:bc;if(au.triggerOnTouchLeave){aa=aC(h);P(bd,aa)}}function aK(){aR.unbind(K,aN);aR.unbind(aD,ba);aR.unbind(ax,a4);aR.unbind(V,M);if(T){aR.unbind(T,L)}an(false)}function aC(bg){var bf=bg;var be=aA();var bd=am();var bc=bb();if(!be||bc){bf=q}else{if(bd&&bg==k&&(!au.triggerOnTouchEnd||au.triggerOnTouchLeave)){bf=h}else{if(!bd&&bg==h&&au.triggerOnTouchLeave){bf=q}}}return bf}function P(be,bc){var bd,bf=be.touches;if(J()||W()){bd=aF(be,bc,l)}if((Q()||aX())&&bd!==false){bd=aF(be,bc,t)}if(aG()&&bd!==false){bd=aF(be,bc,j)}else{if(ao()&&bd!==false){bd=aF(be,bc,b)}else{if(ah()&&bd!==false){bd=aF(be,bc,B)}}}if(bc===q){if(W()){bd=aF(be,bc,l)}if(aX()){bd=aF(be,bc,t)}ba(be)}if(bc===h){if(bf){if(!bf.length){ba(be)}}else{ba(be)}}return bd}function aF(bf,bc,be){var bd;if(be==l){aR.trigger("swipeStatus",[bc,aP||null,ag||0,ac||0,X,aQ,a2]);if(au.swipeStatus){bd=au.swipeStatus.call(aR,bf,bc,aP||null,ag||0,ac||0,X,aQ,a2);if(bd===false){return false}}if(bc==h&&aV()){clearTimeout(aW);clearTimeout(af);aR.trigger("swipe",[aP,ag,ac,X,aQ,a2]);if(au.swipe){bd=au.swipe.call(aR,bf,aP,ag,ac,X,aQ,a2);if(bd===false){return false}}switch(aP){case p:aR.trigger("swipeLeft",[aP,ag,ac,X,aQ,a2]);if(au.swipeLeft){bd=au.swipeLeft.call(aR,bf,aP,ag,ac,X,aQ,a2)}break;case o:aR.trigger("swipeRight",[aP,ag,ac,X,aQ,a2]);if(au.swipeRight){bd=au.swipeRight.call(aR,bf,aP,ag,ac,X,aQ,a2)}break;case e:aR.trigger("swipeUp",[aP,ag,ac,X,aQ,a2]);if(au.swipeUp){bd=au.swipeUp.call(aR,bf,aP,ag,ac,X,aQ,a2)}break;case x:aR.trigger("swipeDown",[aP,ag,ac,X,aQ,a2]);if(au.swipeDown){bd=au.swipeDown.call(aR,bf,aP,ag,ac,X,aQ,a2)}break}}}if(be==t){aR.trigger("pinchStatus",[bc,aJ||null,ap||0,ac||0,X,H,aQ]);if(au.pinchStatus){bd=au.pinchStatus.call(aR,bf,bc,aJ||null,ap||0,ac||0,X,H,aQ);if(bd===false){return false}}if(bc==h&&a9()){switch(aJ){case c:aR.trigger("pinchIn",[aJ||null,ap||0,ac||0,X,H,aQ]);if(au.pinchIn){bd=au.pinchIn.call(aR,bf,aJ||null,ap||0,ac||0,X,H,aQ)}break;case A:aR.trigger("pinchOut",[aJ||null,ap||0,ac||0,X,H,aQ]);if(au.pinchOut){bd=au.pinchOut.call(aR,bf,aJ||null,ap||0,ac||0,X,H,aQ)}break}}}if(be==B){if(bc===q||bc===h){clearTimeout(aW);clearTimeout(af);if(Z()&&!I()){O=ar();aW=setTimeout(f.proxy(function(){O=null;aR.trigger("tap",[bf.target]);if(au.tap){bd=au.tap.call(aR,bf,bf.target)}},this),au.doubleTapThreshold)}else{O=null;aR.trigger("tap",[bf.target]);if(au.tap){bd=au.tap.call(aR,bf,bf.target)}}}}else{if(be==j){if(bc===q||bc===h){clearTimeout(aW);clearTimeout(af);O=null;aR.trigger("doubletap",[bf.target]);if(au.doubleTap){bd=au.doubleTap.call(aR,bf,bf.target)}}}else{if(be==b){if(bc===q||bc===h){clearTimeout(aW);O=null;aR.trigger("longtap",[bf.target]);if(au.longTap){bd=au.longTap.call(aR,bf,bf.target)}}}}}return bd}function am(){var bc=true;if(au.threshold!==null){bc=ag>=au.threshold}return bc}function bb(){var bc=false;if(au.cancelThreshold!==null&&aP!==null){bc=(aT(aP)-ag)>=au.cancelThreshold}return bc}function ae(){if(au.pinchThreshold!==null){return ap>=au.pinchThreshold}return true}function aA(){var bc;if(au.maxTimeThreshold){if(ac>=au.maxTimeThreshold){bc=false}else{bc=true}}else{bc=true}return bc}function ak(bc,bd){if(au.preventDefaultEvents===false){return}if(au.allowPageScroll===m){bc.preventDefault()}else{var be=au.allowPageScroll===s;switch(bd){case p:if((au.swipeLeft&&be)||(!be&&au.allowPageScroll!=E)){bc.preventDefault()}break;case o:if((au.swipeRight&&be)||(!be&&au.allowPageScroll!=E)){bc.preventDefault()}break;case e:if((au.swipeUp&&be)||(!be&&au.allowPageScroll!=u)){bc.preventDefault()}break;case x:if((au.swipeDown&&be)||(!be&&au.allowPageScroll!=u)){bc.preventDefault()}break}}}function a9(){var bd=aO();var bc=Y();var be=ae();return bd&&bc&&be}function aX(){return !!(au.pinchStatus||au.pinchIn||au.pinchOut)}function Q(){return !!(a9()&&aX())}function aV(){var bf=aA();var bh=am();var be=aO();var bc=Y();var bd=bb();var bg=!bd&&bc&&be&&bh&&bf;return bg}function W(){return !!(au.swipe||au.swipeStatus||au.swipeLeft||au.swipeRight||au.swipeUp||au.swipeDown)}function J(){return !!(aV()&&W())}function aO(){return((X===au.fingers||au.fingers===i)||!a)}function Y(){return aQ[0].end.x!==0}function a7(){return !!(au.tap)}function Z(){return !!(au.doubleTap)}function aU(){return !!(au.longTap)}function R(){if(O==null){return false}var bc=ar();return(Z()&&((bc-O)<=au.doubleTapThreshold))}function I(){return R()}function aw(){return((X===1||!a)&&(isNaN(ag)||ag<au.threshold))}function a0(){return((ac>au.longTapThreshold)&&(ag<r))}function ah(){return !!(aw()&&a7())}function aG(){return !!(R()&&Z())}function ao(){return !!(a0()&&aU())}function G(bc){a6=ar();ay=bc.touches.length+1}function S(){a6=0;ay=0}function al(){var bc=false;if(a6){var bd=ar()-a6;if(bd<=au.fingerReleaseThreshold){bc=true}}return bc}function aB(){return !!(aR.data(C+"_intouch")===true)}function an(bc){if(!aR){return}if(bc===true){aR.bind(ax,a4);aR.bind(V,M);if(T){aR.bind(T,L)}}else{aR.unbind(ax,a4,false);aR.unbind(V,M,false);if(T){aR.unbind(T,L,false)}}aR.data(C+"_intouch",bc===true)}function ai(be,bc){var bd={start:{x:0,y:0},last:{x:0,y:0},end:{x:0,y:0}};bd.start.x=bd.last.x=bd.end.x=bc.pageX||bc.clientX;bd.start.y=bd.last.y=bd.end.y=bc.pageY||bc.clientY;aQ[be]=bd;return bd}function aH(bc){var be=bc.identifier!==undefined?bc.identifier:0;var bd=ad(be);if(bd===null){bd=ai(be,bc)}bd.last.x=bd.end.x;bd.last.y=bd.end.y;bd.end.x=bc.pageX||bc.clientX;bd.end.y=bc.pageY||bc.clientY;return bd}function ad(bc){return aQ[bc]||null}function aI(bc,bd){bd=Math.max(bd,aT(bc));N[bc].distance=bd}function aT(bc){if(N[bc]){return N[bc].distance}return undefined}function ab(){var bc={};bc[p]=av(p);bc[o]=av(o);bc[e]=av(e);bc[x]=av(x);return bc}function av(bc){return{direction:bc,distance:0}}function aM(){return a3-U}function at(bf,be){var bd=Math.abs(bf.x-be.x);var bc=Math.abs(bf.y-be.y);return Math.round(Math.sqrt(bd*bd+bc*bc))}function a8(bc,bd){var be=(bd/bc)*1;return be.toFixed(2)}function aq(){if(H<1){return A}else{return c}}function aS(bd,bc){return Math.round(Math.sqrt(Math.pow(bc.x-bd.x,2)+Math.pow(bc.y-bd.y,2)))}function aE(bf,bd){var bc=bf.x-bd.x;var bh=bd.y-bf.y;var be=Math.atan2(bh,bc);var bg=Math.round(be*180/Math.PI);if(bg<0){bg=360-Math.abs(bg)}return bg}function aL(bd,bc){var be=aE(bd,bc);if((be<=45)&&(be>=0)){return p}else{if((be<=360)&&(be>=315)){return p}else{if((be>=135)&&(be<=225)){return o}else{if((be>45)&&(be<135)){return x}else{return e}}}}}function ar(){var bc=new Date();return bc.getTime()}function aY(bc){bc=f(bc);var be=bc.offset();var bd={left:be.left,right:be.left+bc.outerWidth(),top:be.top,bottom:be.top+bc.outerHeight()};return bd}function F(bc,bd){return(bc.x>bd.left&&bc.x<bd.right&&bc.y>bd.top&&bc.y<bd.bottom)}}}));// Sort Batch grid thumb

$(document).ready(function(){

	$('<div id="ncdPhotoBase" class="cap-show style-default">\
		<div id="ncdPhotoCaption" data-bold-title="True" data-italic-title="True" data-hide-title="False" data-bold-caption="False" data-italic-caption="True" data-hide-caption="False"><p><span><b></b> <em></em></span></p></div>\
		<div id="ncdPhotoControls">\
		<div id="ncdPhotoCounter" class="ncd-ui" data-show-count="True">\
		<span class="lb-current"></span>\
		/ <span class="lb-total"></span>\
		</div>\
		<div ontouchstart id="ncdPhotoZoom" class="ncd-ui"></div>\
		<span ontouchstart id="ncdPhotoClose" class="ncd-ui"></span>\
		<span ontouchstart id="ncdPhotoNext" class="ncd-ui"></span>\
		<span ontouchstart id="ncdPhotoPrev" class="ncd-ui"></span>\
		</div>\
		<div id="ncdPhotoLoader"><div id="ncdPhotoLoaderSpinner"></div></div>\
		<div id="ncdPhotoOverlay" data-bold-title="True" data-italic-title="True" data-hide-title="False" data-bold-caption="False" data-italic-caption="True" data-hide-caption="False"></div></div>').prependTo('body');

	var bP = $('#ncdPhotoBase'),
	xP = $('#ncdPhotoClose'),
	nP = $('#ncdPhotoNext'),
	pP = $('#ncdPhotoPrev'),
	oP = $('#ncdPhotoOverlay'),
	zP = $('#ncdPhotoZoom'),
	cP = $('#ncdPhotoCaption'),
	iP = $('#ncdPhotoCounter'),
	photo = $('.ncd-photo'),
	photoIE = photo.parent().hasClass('lte-ie'),
	photoGroup = photo.not('.batch, .photo-tcms'),
	photoBatch = $('.ncd-photo.batch'),
	photoTotalCMS = $('.ncd-photo.photo-tcms'),
	photoLoop = "True" == "True",
	photoAutoStop = "True" == "True",
	photoAutoInt,
	photoZoom = "True" == "True",
	photoCount = "True" == "True",
	photoAutoPlayDelay = 0,
	lbCapHide = bP.hasClass('cap-hide') || oP.data('hide-title') == "True" && oP.data('hide-caption') == "True",
	controlTimeAnim = 300;

	

	if(lbCapHide){bP.addClass('cap-hide');}
	if(photoIE){ $('.lte-ie').find(photo).removeClass('photo-flow').addClass('photo-grid'); }

	// Batch

	photoBatch.each(function(){

		var iPi = $(this).find('img[data-photo-count]'),
		batch_album_name = $(this).data('photo-album-name'),
		thumb_gen = $(this).data('thumb-gen'),
		batch_album_name_parse = batch_album_name.replace(/[^a-z0-9\s]/gi, '').replace(/[_\s]/g, '-'),
		batch_orig_parent = iPi.parent().parent();
		batch_orig_src 	= iPi.attr('src'),
		batch_hide = batch_orig_parent.data('batch-hide') == "True",
		uImg = batch_orig_src.split("/").pop().replace(/\d+/g, '').replace('.jpg',''),
		uPath = batch_orig_src.substring(0, batch_orig_src.lastIndexOf("/") + 1);

		$('#out').append(uPath,uImg);

		$(this).children().attr('id',batch_album_name_parse);

		for (var i = 0; i < iPi.data('photo-count'); i++){
			batch_orig_parent.before('<li ontouchstart class="photo-stack '+batch_album_name_parse+'"><div class="img-wrapper" style="background-image: url(\''+uPath+uImg+''+(1+i)+'.jpg\')"><img class="batch t'+(i+1)+'" alt="photo" src="'+uPath+uImg+''+(1+i)+'.jpg" data-src="'+uPath+uImg+''+(1+i)+'.jpg" data-photo-group="'+batch_album_name_parse+'"><p><span><b>'+batch_album_name+'</b></span></p></div></li>');
		}
		if(batch_hide){
			batch_orig_parent.parent().addClass('batch-hide');
		}
		batch_orig_parent.remove();

	}).promise().done(function(){
		
	});

	// Total CMS

	photoTotalCMS.each(function(){

		var batch_album_name = $(this).data('photo-album-name'),
		batch_album_name_parse = batch_album_name.replace(/\s/g,"-"),
		tcms_hide = $(this).find('ol.photo-tcms-hidden').data('tcms-hide') == "True";

		$(this).find('ol.photo-tcms-hidden img').each(function(index){

			var batch_orig_src 	= $(this).attr('src');

			$(this).wrap('<li ontouchstart class="photo-stack '+batch_album_name_parse+'"><div class="img-wrapper" style="background-image: url('+batch_orig_src+')"></div></li>').addClass('batch t'+(index+1)+'').attr('data-src',batch_orig_src).attr('data-photo-group',batch_album_name_parse).after('<p><span><b>'+batch_album_name+'</b></span></p>');
		});

		$(this).find('ol.photo-tcms-hidden').children().unwrap().parent().attr('id',batch_album_name_parse);

		if(tcms_hide){$(this).children('ul').addClass('batch-hide');}

	});

	// Standard

	photoGroup.each(function(){

		var express_album_name = $(this).data('photo-album-name'),
		express_album_name_parse = express_album_name.replace(/[^a-z0-9\s]/gi, '').replace(/[_\s]/g, '-');

		$(this).children().attr('id',express_album_name_parse).find('li').addClass(express_album_name_parse);

		$(this).find('img').each(function(index,element){

			var isThumbGen = $(this).attr('data-photo-link') == "True";

			if(isThumbGen){
				var express_src = $(this).unwrap().addClass('t'+(index+1)).attr('data-photo-group',express_album_name).data('src-thumb').replace(/\s/g,"%20");
			}else{
				var express_src = $(this).unwrap().addClass('t'+(index+1)).attr('data-photo-group',express_album_name).data('src').replace(/\s/g,"%20");
			}
			
			if($(this).parent().parent().attr('data-thumb-gen') == "True"){
				$(this).parent().css({'background-image':'url('+ $(this).data('src-thumb').replace(/\s/g,"%20") +')'}).find('b').append(express_album_name);
			}else{
				$(this).parent().css({'background-image':'url('+express_src+')'}).find('b').append(express_album_name);
			}
			
		});

		$(this).find('li').each(function(){

			var isHidden = $(this).attr('data-photo-hide') == "True",
			isLinked = $(this).attr('data-photo-link') == "True",
			isEmpty = $(this).find('img').length < 1;

			if($(this).find('em').is(':empty') && $(this).find('b').css('display') == 'none'){
				$(this).find('span').addClass('empty');
			}
			if(isHidden){
				$(this).addClass('hide');
			}
			if(isLinked){
				$(this).clone().appendTo($('ul.group-link'));
				$(this).addClass(express_album_name_parse+' hide');
			}
			if(isEmpty){
				$(this).remove();
			}
		});
	}).promise().done(function(){
		
	});

	// LB

	function lightBox() {

		bP.addClass('on in');

		$('#ncdPhotoLoader').addClass('processing');

		var $trigger_lb = $(this),
		lbInc = 1,
		evLink = $trigger_lb.attr('data-photo-group'),
		imgGroup_lb;

		if(evLink){
			var group_lb = $(this).data("photo-group").replace(/\s/g,"-");
		}else{
			var lbImgClicked = $trigger_lb.children().children().attr("class").split(' ').pop();
			var group_lb = $trigger_lb.attr("class").split(" ")[1];
		}

		img_lb = $('ul[id='+group_lb+']').find('img');

		img_lb.each(function(index,element){

			var imgLink_tv_lb = $(this).addClass('t'+(index+1)).data('src').replace(/\s/g,"%20");
			var img_lb_src = $('<img src="'+imgLink_tv_lb+'">');
			var imgCap_lb = $(this).next().find('em').text();

			if(evLink) {
				imgGroup_lb = group_lb;
			}else{
				imgGroup_lb = $(this).data("photo-group");
			}

			oP.append($('\
				<div class="slide t'+(index+1)+'" data-index="'+(index+1)+'">\
				<div>\
				<img src="'+imgLink_tv_lb+'"><br>\
				<div class="img-caption-in invis">\
				<p><span><b>'+imgGroup_lb.replace(/-/g," ")+'</b> <em>'+imgCap_lb+'</em></span></p>\
				<p class="ncdPhotoCounter" data-show-count="True">\
				<span class="lb-current">'+(index+1)+'</span> \/\
				<span class="lb-total"></span>\
				</p>\
				</div>\
				</div>\
				</div>'));

			if('True' == 'True' ){ // Protect
				$('.slide').contextmenu(function(){
					return false;
				});
			}

			img_lb_src.on('load', function() {

				if(bP.find('.slide').length == lbInc++){

					$('html').addClass('ncd-photo-lock');
					bP.off().on('touchmove',function(){return false});
					$('#ncdPhotoLoader').removeClass('processing');
					setTimeout(function(){
						bP.removeClass('in');
						maxImgH();
						oP.find('.img-caption-in').addClass('ncd-show').removeClass('invis');
						setTimeout(function(){
							oP.find('.img-caption-in').removeClass('ncd-show');
						}, 600);
					}, 750);

					// Autoplay

					if(photoAutoPlayDelay != 0){
						
						function autoNext(){ nP.trigger("click"); }

						photoAutoInt = setInterval(autoNext, photoAutoPlayDelay);

						if(photoAutoStop){
							nP.add(pP).on("mouseenter",function(){ clearInterval(photoAutoInt); });
						}
					}
				}
			});
		});

		// Set Show

		(evLink) ? oP.children().first().addClass('ncd-show') : oP.find('div.'+lbImgClicked).addClass('ncd-show');
		
		var showLb = oP.find('.ncd-show'),
		imgLb = showLb.find('img'),
		imgLbAll = oP.find('img'),
		showGroup = showLb.find('b').text(),
		showCaption = showLb.find('em').text(),
		showIndex = showLb.data('index');
		iP.find('.lb-current').text(showIndex);

		if(lbCapHide){
			cP.remove();
		}else{
			cP.find('b').text(showGroup).next().text(showCaption);
		}

		var maxImgH = function(){
			
			var thisSlide = oP.find('.ncd-show'),
			imgLb = thisSlide.find('img');

			$("<img>").attr("src", imgLb.attr("src")).load(function() {
	      var imageWidth = this.width;
				var imageHeight = this.height;

				if(lbCapHide){ // No cap
					oP.find('img').css('max-height',bP.height());
				}else if(!lbCapHide){ // Has Cap
					var capH = thisSlide.find('.img-caption-in').outerHeight();
					imgLb.css({'max-height':(bP.height() - capH)});
					$('#ncdPhotoControls').css('bottom',cP.outerHeight());
				}

				if(photoZoom){
					if(imageWidth > $(window).width() || imageHeight > $(window).height()){
						zP.addClass('enable')
					}else{
						zP.removeClass('enable')
					}
				}
	    });
		}

		maxImgH();

		setTimeout(function(){ maxImgH(); }, 300); // stabilize zoom logic

		/*************************
		Controls
		*************************/

		var zoomIn = function(){

			oP.on('mousewheel', function(){return false;});

			var imgLb = oP.find('.ncd-show img'),
			imgParent = imgLb.parent().parent();

			$("<img>").attr("src", imgLb.attr("src")).load(function() {
	      var imageWidth = this.width;
				var imageHeight = this.height;
		
				zP.addClass('zoom');
				nP.add(pP).addClass('hide');
				imgParent.addClass('zoom transition');

				setTimeout(function(){
					imgLb.css('max-height','none');
					imgParent.css({'max-height':window.innerHeight+"px"}).on('mousemove', function(e){
						var offset = imgParent.offset();
						var x = e.pageX - offset.left;
						x = x * (imageWidth - imgParent.width()) / imgParent.width();

						var y = e.pageY - offset.top;
						y = y * (imageHeight - imgParent.height()) / imgParent.height();
						imgParent.scrollTop(y*1).scrollLeft(x*1);
					}).removeClass('transition').addClass('in');

					bP.off('touchmove');

				}, 250);
			});
		}

		var zoomOut = function(){
			var imgParent = oP.find('.ncd-show img').parent().parent();

			zP.removeClass('zoom');
			imgParent.addClass('transition out').off('mousemove');
			nP.add(pP).removeClass('hide');

			setTimeout(function(){

				maxImgH();
				imgParent.scrollLeft(0).scrollTop(0).css('max-height','').removeClass('in transition');

			}, 250);

			setTimeout(function(){

				imgParent.removeClass('zoom out');
				oP.off('mousewheel');
				bP.off().on('touchmove',function(){return false});

			}, 500);
		}

		// Count

		if(photoCount){$('.lb-total').text(oP.find('.slide').length);} 

		// Single Image

		if(imgLbAll.length < 2){ bP.addClass('single-image'); }

		// Zoom

		if(photoZoom){
			zP.off().on('click', function() {
				if(zP.hasClass('enable')){
					zP.hasClass('zoom') ? zoomOut() : zoomIn();
				}
			});
			oP.find('img').off().on('dblclick', function() {
				if(zP.hasClass('enable')){
					zP.hasClass('zoom') ? zoomOut() : zoomIn();
				}
			});
		}

		// Loop Init

		if(oP.children().first().hasClass('ncd-show')){
			!photoLoop ? pP.addClass('hide'): pP.removeClass('hide');
		}
		if(oP.children().last().hasClass('ncd-show')){
			!photoLoop ? nP.addClass('hide'): nP.removeClass('hide');
		}

		// NEXT

		nP.off().on('click', function() {

			zoomOut();

			var show = oP.find('.ncd-show');

			if (show.next().length == 0) {
				oP.children().removeClass('ncd-show');
				var firstSlide = oP.children().first();
				var showGroup = firstSlide.addClass('ncd-show').find('b').text(),
				showCaption = firstSlide.find('em').text(),
				showIndex = firstSlide.data('index');
				cP.find('b').text(showGroup).next().text(showCaption);
				iP.find('.lb-current').text(showIndex);

			} else {
				show.removeClass('ncd-show').next().addClass('ncd-show');

				var showGroup = show.next().find('b').text(),
				showCaption = show.next().find('em').text(),
				showIndex = show.next().data('index');
				cP.find('b').text(showGroup).next().text(showCaption);
				iP.find('.lb-current').text(showIndex);

				if(oP.children().last().hasClass('ncd-show')){
					!photoLoop ? nP.addClass('hide'): nP.removeClass('hide');
				}
			}

			maxImgH();

			bP.addClass('go-next'); // Animate Transition
			setTimeout(function() { bP.removeClass('go-next'); }, controlTimeAnim);
		});

		// PREV

		pP.off().on('click', function() {

			zoomOut();

			var show = oP.find('.ncd-show');

			if (show.prev().length == 0) {
				oP.children().removeClass('ncd-show');
				var lastSlide = oP.children().last();
				var showGroup = lastSlide.addClass('ncd-show').find('b').text(),
				showCaption = lastSlide.find('em').text(),
				showIndex = lastSlide.data('index');
				cP.find('b').text(showGroup).next().text(showCaption);
				iP.find('.lb-current').text(showIndex);

			} else {
				show.removeClass('ncd-show').prev().addClass('ncd-show');

				var showGroup = show.prev().find('b').text(),
				showCaption = show.prev().find('em').text(),
				showIndex = show.prev().data('index');
				cP.find('b').text(showGroup).next().text(showCaption);
				iP.find('.lb-current').text(showIndex);

				if(oP.children().first().hasClass('ncd-show')){
					!photoLoop ? pP.addClass('hide'): pP.removeClass('hide');
				}
			}

			maxImgH();

			bP.addClass('go-prev'); // Animate Transition
			setTimeout(function() {
				bP.removeClass('go-prev');
			}, controlTimeAnim);
		});

		// Keyboard

		$(document).off('keydown').on('keydown', function(e) {
			switch(e.which) {
				case 37: pP.trigger("click");
				break;
				case 38: if(zP.hasClass('enable')){zoomIn();}
				break;
				case 39: nP.trigger("click");
				break;
				case 40: if(zP.hasClass('enable')){zoomOut();}
				break;
				case 88: xP.trigger("click");
				break;
				case 27: xP.trigger("click");
				break;
				default: return;
			}
			e.preventDefault();
		});

		// Swipe

		oP.swipe("enable");

		oP.swipe({
			tap:function(e, target) {
				var img = oP.find('img');
				if (!img.is(e.target) && img.has(e.target).length === 0  && !$(e.target).hasClass('ncd-ui')){
					closeLb();
				}
				e.preventDefault();
			},
			hold:function() {
				
				if(zP.hasClass('enable') && !$('.ncd-show').hasClass('zoom')){
					bP.off('touchmove');
					zoomIn();
				}
				
			},
			swipeStatus:function(event, phase, direction, distance){

				if (phase=="end" && !$('.ncd-show').hasClass('zoom')){
					if(direction=="left"){
						nP.trigger("click");
					}
					if(direction=="right"){
						pP.trigger("click");
					}
				}
				if(direction=="right" && $('.ncd-show').hasClass('zoom') || direction=="left" && $('.ncd-show').hasClass('zoom')){
					bP.off('touchmove');
				}
				
				if(direction=="up" && zP.hasClass('enable') && !$('.ncd-show').hasClass('zoom')){
					bP.off('touchmove');
					zoomIn();
				}
				
				if(direction=="up" && $('.ncd-show').hasClass('zoom')){
					bP.off().on('touchmove',function(){return false});
				}
				
				if(direction=="down" && !$('.ncd-show').hasClass('zoom')){
					closeLb();
				}
				
				
				if(direction=="down" && $('.ncd-show').hasClass('zoom')){
					zoomOut();
					bP.off().on('touchmove',function(){return false});
				}
				
			},
			allowPageScroll:"auto",
			triggerOnTouchEnd:false,
			threshold:30,
		});

		// Close

		var closeLb = function (){

			zoomOut();

			clearInterval(photoAutoInt);
			oP.swipe("disable");
			$('html').removeClass('ncd-photo-lock');
			$('body').off('touchmove');
			nP.add(pP).removeClass('hide');
			oP.removeClass('ncd-show in transition zoom out');
			bP.removeClass('on ev-link event-photo single-image').addClass('out');
			
			setTimeout(function(){ 
				bP.removeClass('out');
				oP.find('.slide').remove();
			}, controlTimeAnim);
		}

		xP.off().on('click',function() {
			setTimeout(function() {
				closeLb();
			}, 100);
		});

		// Resize

		$(window).resize(function(){
			if(!zP.hasClass('zoom') && bP.hasClass('on')){
				maxImgH();
			}else if(bP.hasClass('on')){
				zoomOut();
			}
		});

	}

	// Lightbox Triggers

	$('li.photo-stack').not('[data-photo-group]').not('[data-ext-link="True"]').off().on('click', lightBox);
	$('img[data-photo-group]').off().on('click', lightBox);
	$('a[data-photo-group]').removeAttr("href").off().on('click', lightBox);
	if('True' == 'True' ){
		$('li.photo-stack').on('contextmenu dragstart drop selectstart', function(){return false;});
	}

	// IE 9

	if(photoIE){
		$(window).load(function(){
			photo.find('img').parent().css({'background-size':'cover'});
		});
	}

});



return stack;})(stacks.stacks_in_625432);
stacks.stacks_in_625033 = {};
stacks.stacks_in_625033 = (function(stack) {
var jQuery = stacks.jQuery;var $ = jQuery;
$(function(){$(window).on('load',function(){$('#stacks_in_625033>.s-pro:not(.vault-height)>.shear-wrapper').removeClass('preload-wrapper');$('#stacks_in_625033>.s-pro:not(.vault-height) .content').removeClass('preload-content');});});

return stack;})(stacks.stacks_in_625033);