function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o=/^\s+|\s+$/g,i=/^[-+]0x[0-9a-f]+$/i,r=/^0b[01]+$/i,a=/^0o[0-7]+$/i,u=parseInt,f="object"==typeof n&&n&&n.Object===Object&&n,l="object"==typeof self&&self&&self.Object===Object&&self,c=f||l||Function("return this")(),s=Object.prototype.toString,d=Math.max,m=Math.min,g=function(){return c.Date.now()};function v(e,t,n){var o,i,r,a,u,f,l=0,c=!1,s=!1,v=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function b(t){var n=o,r=i;return o=i=void 0,l=t,a=e.apply(r,n)}function h(e){return l=e,u=setTimeout(w,t),c?b(e):a}function j(e){var n=e-f;return void 0===f||n>=t||n<0||s&&e-l>=r}function w(){var e=g();if(j(e))return O(e);u=setTimeout(w,function(e){var n=t-(e-f);return s?m(n,r-(e-l)):n}(e))}function O(e){return u=void 0,v&&o?b(e):(o=i=void 0,a)}function S(){var e=g(),n=j(e);if(o=arguments,i=this,f=e,n){if(void 0===u)return h(f);if(s)return u=setTimeout(w,t),b(f)}return void 0===u&&(u=setTimeout(w,t)),a}return t=y(t)||0,p(n)&&(c=!!n.leading,r=(s="maxWait"in n)?d(y(n.maxWait)||0,t):r,v="trailing"in n?!!n.trailing:v),S.cancel=function(){void 0!==u&&clearTimeout(u),l=0,o=f=i=u=void 0},S.flush=function(){return void 0===u?a:O(g())},S}function p(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function y(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==s.call(e)}(e))return NaN;if(p(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=p(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(o,"");var n=r.test(e);return n||a.test(e)?u(e.slice(2),n?2:8):i.test(e)?NaN:+e}t=function(e,t,n){var o=!0,i=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return p(n)&&(o="leading"in n?!!n.leading:o,i="trailing"in n?!!n.trailing:i),v(e,t,{leading:o,maxWait:t,trailing:i})};const b=document.querySelector(".feedback-form");!function(){try{const e=JSON.parse(localStorage.getItem("feedback-form-state"));b.elements.email.value=e.email,b.elements.message.value=e.message}catch(e){console.log("localStorage empty")}}(),b.addEventListener("submit",(function(e){e.preventDefault(),console.log(h),b.reset(),localStorage.clear()})),b.addEventListener("input",e(t)((function(e){h[e.target.name]=e.target.value,localStorage.setItem("feedback-form-state",JSON.stringify(h))}),1e3));const h={email:b.elements.email.value||"",message:b.elements.message.value||""};
//# sourceMappingURL=03-feedback.7664438d.js.map
