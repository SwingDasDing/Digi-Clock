parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"QVnC":[function(require,module,exports) {
var define;
var t,r=function(t){"use strict";var r,e=Object.prototype,n=e.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",a=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function u(t,r,e){return Object.defineProperty(t,r,{value:e,enumerable:!0,configurable:!0,writable:!0}),t[r]}try{u({},"")}catch(P){u=function(t,r,e){return t[r]=e}}function h(t,r,e,n){var o=r&&r.prototype instanceof d?r:d,i=Object.create(o.prototype),a=new G(n||[]);return i._invoke=function(t,r,e){var n=l;return function(o,i){if(n===p)throw new Error("Generator is already running");if(n===y){if("throw"===o)throw i;return F()}for(e.method=o,e.arg=i;;){var a=e.delegate;if(a){var c=j(a,e);if(c){if(c===v)continue;return c}}if("next"===e.method)e.sent=e._sent=e.arg;else if("throw"===e.method){if(n===l)throw n=y,e.arg;e.dispatchException(e.arg)}else"return"===e.method&&e.abrupt("return",e.arg);n=p;var u=f(t,r,e);if("normal"===u.type){if(n=e.done?y:s,u.arg===v)continue;return{value:u.arg,done:e.done}}"throw"===u.type&&(n=y,e.method="throw",e.arg=u.arg)}}}(t,e,a),i}function f(t,r,e){try{return{type:"normal",arg:t.call(r,e)}}catch(P){return{type:"throw",arg:P}}}t.wrap=h;var l="suspendedStart",s="suspendedYield",p="executing",y="completed",v={};function d(){}function g(){}function m(){}var w={};w[i]=function(){return this};var L=Object.getPrototypeOf,x=L&&L(L(N([])));x&&x!==e&&n.call(x,i)&&(w=x);var b=m.prototype=d.prototype=Object.create(w);function E(t){["next","throw","return"].forEach(function(r){u(t,r,function(t){return this._invoke(r,t)})})}function _(t,r){var e;this._invoke=function(o,i){function a(){return new r(function(e,a){!function e(o,i,a,c){var u=f(t[o],t,i);if("throw"!==u.type){var h=u.arg,l=h.value;return l&&"object"==typeof l&&n.call(l,"__await")?r.resolve(l.__await).then(function(t){e("next",t,a,c)},function(t){e("throw",t,a,c)}):r.resolve(l).then(function(t){h.value=t,a(h)},function(t){return e("throw",t,a,c)})}c(u.arg)}(o,i,e,a)})}return e=e?e.then(a,a):a()}}function j(t,e){var n=t.iterator[e.method];if(n===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=r,j(t,e),"throw"===e.method))return v;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return v}var o=f(n,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,v;var i=o.arg;return i?i.done?(e[t.resultName]=i.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=r),e.delegate=null,v):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,v)}function O(t){var r={tryLoc:t[0]};1 in t&&(r.catchLoc=t[1]),2 in t&&(r.finallyLoc=t[2],r.afterLoc=t[3]),this.tryEntries.push(r)}function k(t){var r=t.completion||{};r.type="normal",delete r.arg,t.completion=r}function G(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(O,this),this.reset(!0)}function N(t){if(t){var e=t[i];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var o=-1,a=function e(){for(;++o<t.length;)if(n.call(t,o))return e.value=t[o],e.done=!1,e;return e.value=r,e.done=!0,e};return a.next=a}}return{next:F}}function F(){return{value:r,done:!0}}return g.prototype=b.constructor=m,m.constructor=g,g.displayName=u(m,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var r="function"==typeof t&&t.constructor;return!!r&&(r===g||"GeneratorFunction"===(r.displayName||r.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,m):(t.__proto__=m,u(t,c,"GeneratorFunction")),t.prototype=Object.create(b),t},t.awrap=function(t){return{__await:t}},E(_.prototype),_.prototype[a]=function(){return this},t.AsyncIterator=_,t.async=function(r,e,n,o,i){void 0===i&&(i=Promise);var a=new _(h(r,e,n,o),i);return t.isGeneratorFunction(e)?a:a.next().then(function(t){return t.done?t.value:a.next()})},E(b),u(b,c,"Generator"),b[i]=function(){return this},b.toString=function(){return"[object Generator]"},t.keys=function(t){var r=[];for(var e in t)r.push(e);return r.reverse(),function e(){for(;r.length;){var n=r.pop();if(n in t)return e.value=n,e.done=!1,e}return e.done=!0,e}},t.values=N,G.prototype={constructor:G,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=r,this.done=!1,this.delegate=null,this.method="next",this.arg=r,this.tryEntries.forEach(k),!t)for(var e in this)"t"===e.charAt(0)&&n.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=r)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function o(n,o){return c.type="throw",c.arg=t,e.next=n,o&&(e.method="next",e.arg=r),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],c=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var u=n.call(a,"catchLoc"),h=n.call(a,"finallyLoc");if(u&&h){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!h)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(t,r){for(var e=this.tryEntries.length-1;e>=0;--e){var o=this.tryEntries[e];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=r&&r<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=r,i?(this.method="next",this.next=i.finallyLoc,v):this.complete(a)},complete:function(t,r){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&r&&(this.next=r),v},finish:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.finallyLoc===t)return this.complete(e.completion,e.afterLoc),k(e),v}},catch:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.tryLoc===t){var n=e.completion;if("throw"===n.type){var o=n.arg;k(e)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:N(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=r),v}},t}("object"==typeof module?module.exports:{});try{regeneratorRuntime=r}catch(e){Function("r","regeneratorRuntime = r")(r)}
},{}],"bwRh":[function(require,module,exports) {
"use strict";function t(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function e(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function i(t,i,n){return i&&e(t.prototype,i),n&&e(t,n),t}Object.defineProperty(exports,"__esModule",{value:!0}),exports.Segment=void 0;var n=function(){function e(i,n,o){t(this,e),this.context=i,this.position=n,this.direction=o,this.active=!0}return i(e,[{key:"draw",value:function(){this.context.save(),this.context.fillStyle="rgba(".concat(e.red,",").concat(e.green,",").concat(e.blue,",").concat(this.active?.8:.04,")"),this.context.translate(this.position.x,this.position.y),"horizontal"!==this.direction&&this.context.rotate(Math.PI/2),this.context.beginPath(),this.context.moveTo(e.padding,0),this.context.lineTo(e.height/2,-e.height/2+e.padding),this.context.lineTo(e.width-e.height/2,-e.height/2+e.padding),this.context.lineTo(e.width-e.padding,0),this.context.lineTo(e.width-e.height/2,e.height/2-e.padding),this.context.lineTo(e.height/2,e.height/2-e.padding),this.context.closePath(),this.context.fill(),this.context.restore()}},{key:"update",value:function(){this.draw()}}],[{key:"calculateSizes",value:function(){e.height=e.wid*e.mult,e.width=e.len*e.mult,e.padding=.08*e.height}}]),e}();exports.Segment=n,n.wid=.23,n.len=1,n.mult=100,n.height=n.wid*n.mult,n.width=n.len*n.mult,n.padding=.08*n.height,n.red=255,n.green=255,n.blue=255;
},{}],"ha8W":[function(require,module,exports) {
"use strict";function t(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function e(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function n(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}Object.defineProperty(exports,"__esModule",{value:!0}),exports.Colon=void 0;var i=require("./Segment.class"),o=function(){function e(n,o){t(this,e),this.context=n,this.position=o,this.size=i.Segment.height/2,this.active=!0}return n(e,[{key:"draw",value:function(){this.context.save(),this.context.fillStyle="rgba(".concat(i.Segment.red,",").concat(i.Segment.green,",").concat(i.Segment.blue,",").concat(this.active?.8:.04,")"),this.context.translate(this.position.x,this.position.y),this.context.beginPath(),this.context.arc(0,-i.Segment.width/2,this.size,0,2*Math.PI),this.context.arc(0,i.Segment.width/2,this.size,0,2*Math.PI),this.context.closePath(),this.context.fill(),this.context.restore()}},{key:"update",value:function(){this.draw()}}]),e}();exports.Colon=o;
},{"./Segment.class":"bwRh"}],"NKg9":[function(require,module,exports) {
"use strict";function t(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function e(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function n(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}Object.defineProperty(exports,"__esModule",{value:!0}),exports.Point=void 0;var r=function(){function e(n,r){t(this,e),this.x=n,this.y=r}return n(e,[{key:"distanceTo",value:function(t){var e=this.x-t.x,n=this.y-t.y;return Math.hypot(e,n)}},{key:"offset",value:function(t){return new e(this.x+t.x,this.y+t.y)}},{key:"rotate",value:function(t,n){var r=Math.cos(n),i=Math.sin(n);return new e(r*(this.x-t.x)+i*(this.y-t.y)+t.x,r*(this.y-t.y)-i*(this.x-t.x)+t.y)}},{key:"isInside",value:function(t){for(var e=this.x,n=this.y,r=!1,i=0,o=t.length-1;i<t.length;o=i++){var a=t[i].x,u=t[i].y,s=t[o].x,y=t[o].y;u>n!=y>n&&e<(s-a)*(n-u)/(y-u)+a&&(r=!r)}return r}},{key:"toString",value:function(){return"(".concat(this.x,",").concat(this.y,")")}}],[{key:"Empty",get:function(){return new e(0,0)}}]),e}();exports.Point=r;
},{}],"ZdUg":[function(require,module,exports) {
"use strict";function e(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function t(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function n(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}Object.defineProperty(exports,"__esModule",{value:!0}),exports.SegNumber=void 0;var i=require("../classes/point.class"),o=require("./Segment.class"),s=function(){function t(n,s){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;e(this,t),this.context=n,this.position=s,this.number=r,this.segments=[],this.segments.push(new o.Segment(this.context,new i.Point(0,0),"horizontal"),new o.Segment(this.context,new i.Point(o.Segment.width,0),"vertical"),new o.Segment(this.context,new i.Point(o.Segment.width,o.Segment.width),"vertical"),new o.Segment(this.context,new i.Point(0,2*o.Segment.width),"horizontal"),new o.Segment(this.context,new i.Point(0,o.Segment.width),"vertical"),new o.Segment(this.context,new i.Point(0,0),"vertical"),new o.Segment(this.context,new i.Point(0,o.Segment.width),"horizontal"))}return n(t,[{key:"draw",value:function(){this.context.save(),this.context.translate(this.position.x,this.position.y),this.segments.forEach(function(e){e.update()}),this.context.restore()}},{key:"update",value:function(){var e=this;this.segments.forEach(function(n,i){n.active=!!(t.encoding.get(e.number)>>6-i&1)}),this.draw()}}]),t}();exports.SegNumber=s,s.encoding=new Map([[0,126],[1,48],[2,109],[3,121],[4,51],[5,91],[6,95],[7,112],[8,127],[9,123]]);
},{"../classes/point.class":"NKg9","./Segment.class":"bwRh"}],"QCba":[function(require,module,exports) {
"use strict";function e(e){return r(e)||i(e)||n(e)||t()}function t(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function n(e,t){if(e){if("string"==typeof e)return s(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?s(e,t):void 0}}function i(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}function r(e){if(Array.isArray(e))return s(e)}function s(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,i=new Array(t);n<t;n++)i[n]=e[n];return i}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function c(e,t,n){return t&&a(e.prototype,t),n&&a(e,n),e}Object.defineProperty(exports,"__esModule",{value:!0}),require("regenerator-runtime/runtime");var u=require("./canvas-assets/colon.class"),l=require("./canvas-assets/seg-number.class"),h=require("./canvas-assets/Segment.class"),g=require("./classes/point.class"),d=function(){function t(){o(this,t),this._canvas=document.querySelector("#canvasEl"),this.initialiseControls(),this.init()}return c(t,[{key:"init",value:function(){var e=this;this._context=this._canvas.getContext("2d"),this._canvas.width=window.innerWidth,this._canvas.height=window.innerHeight,this.createControls(),setInterval(function(){e.setDigits()},1e3),this.ref=requestAnimationFrame(function(){return e.update()})}},{key:"update",value:function(){var e=this;this._context.save(),this._context.fillStyle="black",this._context.fillRect(0,0,this._canvas.width,this._canvas.height),this._context.translate(-this.clockCenter.x,-this.clockCenter.y),this._context.translate(this._canvas.width/2,this._canvas.height/2),this.numbers.forEach(function(e){e.update()}),this.colons.forEach(function(e){e.update()}),this._context.restore(),this.ref=requestAnimationFrame(function(){return e.update()})}},{key:"numToDigits",value:function(e){return e.toString().padStart(2,"0").split("")}},{key:"initialiseControls",value:function(){var e=this;this._redSlider=document.querySelector("#colorRRange"),this._greenSlider=document.querySelector("#colorGRange"),this._blueSlider=document.querySelector("#colorBRange"),this._sizeSlider=document.querySelector("#sizeRange"),this._hideButton=document.querySelector("#hideControlsBtn"),this._controlsDiv=document.querySelector("#controls"),this._redSlider.oninput=function(){return h.Segment.red=parseInt(e._redSlider.value)},this._greenSlider.oninput=function(){return h.Segment.green=parseInt(e._greenSlider.value)},this._blueSlider.oninput=function(){return h.Segment.blue=parseInt(e._blueSlider.value)},this._sizeSlider.oninput=function(){h.Segment.mult=parseInt(e._sizeSlider.value),h.Segment.calculateSizes(),e.createControls()},this._hideButton.onclick=function(){e._controlsDiv.style.display="flex"===e._controlsDiv.style.display?"none":"flex"}}},{key:"createControls",value:function(){this.segSpacing=1.4*h.Segment.width,this.clockCenter=new g.Point(3*this.segSpacing+1.8*h.Segment.height/2,h.Segment.width),this.colons=[new u.Colon(this._context,new g.Point(2*this.segSpacing,h.Segment.width)),new u.Colon(this._context,new g.Point(4*this.segSpacing+1.8*h.Segment.height,h.Segment.width))],this.numbers=[new l.SegNumber(this._context,new g.Point(0,0)),new l.SegNumber(this._context,new g.Point(this.segSpacing,0)),new l.SegNumber(this._context,new g.Point(2*this.segSpacing+1.8*h.Segment.height,0)),new l.SegNumber(this._context,new g.Point(3*this.segSpacing+1.8*h.Segment.height,0)),new l.SegNumber(this._context,new g.Point(4*this.segSpacing+3.6*h.Segment.height,0)),new l.SegNumber(this._context,new g.Point(5*this.segSpacing+3.6*h.Segment.height,0))],this.setDigits()}},{key:"setDigits",value:function(){var t=this;this.numbers.forEach(function(n,i){var r,s,o,a=new Date;t.digits=[],(r=t.digits).push.apply(r,e(t.numToDigits(a.getHours()))),(s=t.digits).push.apply(s,e(t.numToDigits(a.getMinutes()))),(o=t.digits).push.apply(o,e(t.numToDigits(a.getSeconds()))),n.number=parseInt(t.digits[i])})}}]),t}(),S=new d;
},{"regenerator-runtime/runtime":"QVnC","./canvas-assets/colon.class":"ha8W","./canvas-assets/seg-number.class":"ZdUg","./canvas-assets/Segment.class":"bwRh","./classes/point.class":"NKg9"}]},{},["QCba"], null)
//# sourceMappingURL=src.bcc88784.js.map