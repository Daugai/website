(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{2167:function(e,n,t){"use strict";var r=t(3038);n.default=void 0;var o,a=(o=t(7294))&&o.__esModule?o:{default:o},u=t(1063),i=t(4651),c=t(7426);var l={};function s(e,n,t,r){if(e&&u.isLocalURL(n)){e.prefetch(n,t,r).catch((function(e){0}));var o=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;l[n+"%"+t+(o?"%"+o:"")]=!0}}var f=function(e){var n,t=!1!==e.prefetch,o=i.useRouter(),f=a.default.useMemo((function(){var n=u.resolveHref(o,e.href,!0),t=r(n,2),a=t[0],i=t[1];return{href:a,as:e.as?u.resolveHref(o,e.as):i||a}}),[o,e.href,e.as]),d=f.href,p=f.as,v=e.children,m=e.replace,h=e.shallow,b=e.scroll,g=e.locale;"string"===typeof v&&(v=a.default.createElement("a",null,v));var y=(n=a.default.Children.only(v))&&"object"===typeof n&&n.ref,x=c.useIntersection({rootMargin:"200px"}),w=r(x,2),E=w[0],j=w[1],O=a.default.useCallback((function(e){E(e),y&&("function"===typeof y?y(e):"object"===typeof y&&(y.current=e))}),[y,E]);a.default.useEffect((function(){var e=j&&t&&u.isLocalURL(d),n="undefined"!==typeof g?g:o&&o.locale,r=l[d+"%"+p+(n?"%"+n:"")];e&&!r&&s(o,d,p,{locale:n})}),[p,d,j,g,t,o]);var S={ref:O,onClick:function(e){n.props&&"function"===typeof n.props.onClick&&n.props.onClick(e),e.defaultPrevented||function(e,n,t,r,o,a,i,c){("A"!==e.currentTarget.nodeName||!function(e){var n=e.currentTarget.target;return n&&"_self"!==n||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&u.isLocalURL(t))&&(e.preventDefault(),null==i&&r.indexOf("#")>=0&&(i=!1),n[o?"replace":"push"](t,r,{shallow:a,locale:c,scroll:i}))}(e,o,d,p,m,h,b,g)},onMouseEnter:function(e){u.isLocalURL(d)&&(n.props&&"function"===typeof n.props.onMouseEnter&&n.props.onMouseEnter(e),s(o,d,p,{priority:!0}))}};if(e.passHref||"a"===n.type&&!("href"in n.props)){var C="undefined"!==typeof g?g:o&&o.locale,P=o&&o.isLocaleDomain&&u.getDomainLocale(p,C,o&&o.locales,o&&o.domainLocales);S.href=P||u.addBasePath(u.addLocale(p,C,o&&o.defaultLocale))}return a.default.cloneElement(n,S)};n.default=f},7426:function(e,n,t){"use strict";var r=t(3038);Object.defineProperty(n,"__esModule",{value:!0}),n.useIntersection=function(e){var n=e.rootMargin,t=e.disabled||!u,c=o.useRef(),l=o.useState(!1),s=r(l,2),f=s[0],d=s[1],p=o.useCallback((function(e){c.current&&(c.current(),c.current=void 0),t||f||e&&e.tagName&&(c.current=function(e,n,t){var r=function(e){var n=e.rootMargin||"",t=i.get(n);if(t)return t;var r=new Map,o=new IntersectionObserver((function(e){e.forEach((function(e){var n=r.get(e.target),t=e.isIntersecting||e.intersectionRatio>0;n&&t&&n(t)}))}),e);return i.set(n,t={id:n,observer:o,elements:r}),t}(t),o=r.id,a=r.observer,u=r.elements;return u.set(e,n),a.observe(e),function(){u.delete(e),a.unobserve(e),0===u.size&&(a.disconnect(),i.delete(o))}}(e,(function(e){return e&&d(e)}),{rootMargin:n}))}),[t,n,f]);return o.useEffect((function(){if(!u&&!f){var e=a.requestIdleCallback((function(){return d(!0)}));return function(){return a.cancelIdleCallback(e)}}}),[f]),[p,f]};var o=t(7294),a=t(3447),u="undefined"!==typeof IntersectionObserver;var i=new Map},1981:function(e,n,t){"use strict";function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}t.r(n),t.d(n,{default:function(){return Fe}});var o,a,u,i=t(9008),c=t(1664),l=t(7294);function s(){return(s=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}function f(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}function d(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function p(e,n){var t;if("undefined"===typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(t=function(e,n){if(e){if("string"===typeof e)return d(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?d(e,n):void 0}}(e))||n&&e&&"number"===typeof e.length){t&&(e=t);var r=0;return function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}return(t=e[Symbol.iterator]()).next.bind(t)}function v(e,n){if(e in n){for(var t=n[e],r=arguments.length,o=new Array(r>2?r-2:0),a=2;a<r;a++)o[a-2]=arguments[a];return"function"===typeof t?t.apply(void 0,o):t}var u=new Error('Tried to handle "'+e+'" but there is no handler defined. Only defined handlers are: '+Object.keys(n).map((function(e){return'"'+e+'"'})).join(", ")+".");throw Error.captureStackTrace&&Error.captureStackTrace(u,v),u}function m(e){var n=e.props,t=e.slot,r=e.defaultTag,u=e.features,i=e.visible,c=void 0===i||i,l=e.name;if(c)return h(n,t,r,l);var d=null!=u?u:o.None;if(d&o.Static){var p=n.static,m=void 0!==p&&p,b=f(n,["static"]);if(m)return h(b,t,r,l)}if(d&o.RenderStrategy){var g,y=n.unmount,x=void 0===y||y,w=f(n,["unmount"]);return v(x?a.Unmount:a.Hidden,((g={})[a.Unmount]=function(){return null},g[a.Hidden]=function(){return h(s({},w,{hidden:!0,style:{display:"none"}}),t,r,l)},g))}return h(n,t,r,l)}function h(e,n,t,r){var o;void 0===n&&(n={});var a=g(e,["unmount","static"]),u=a.as,i=void 0===u?t:u,c=a.children,s=a.refName,d=void 0===s?"ref":s,v=f(a,["as","children","refName"]),m=void 0!==e.ref?((o={})[d]=e.ref,o):{},h="function"===typeof c?c(n):c;if(v.className&&"function"===typeof v.className&&(v.className=v.className(n)),i===l.Fragment&&Object.keys(v).length>0){if(!(0,l.isValidElement)(h)||Array.isArray(h)&&h.length>1)throw new Error(['Passing props on "Fragment"!',"","The current component <"+r+' /> is rendering a "Fragment".',"However we need to passthrough the following props:",Object.keys(v).map((function(e){return"  - "+e})).join("\n"),"","You can apply a few solutions:",['Add an `as="..."` prop, to ensure that we render an actual element instead of a "Fragment".',"Render a single element as the child so that we can forward the props onto that element."].map((function(e){return"  - "+e})).join("\n")].join("\n"));return(0,l.cloneElement)(h,Object.assign({},function(e,n,t){for(var r,o=Object.assign({},e),a=function(){var t,a=r.value;void 0!==e[a]&&void 0!==n[a]&&Object.assign(o,((t={})[a]=function(t){t.defaultPrevented||e[a](t),t.defaultPrevented||n[a](t)},t))},u=p(t);!(r=u()).done;)a();return o}(function(e){var n=Object.assign({},e);for(var t in n)void 0===n[t]&&delete n[t];return n}(g(v,["ref"])),h.props,["onClick"]),m))}return(0,l.createElement)(i,Object.assign({},g(v,["ref"]),i!==l.Fragment&&m),h)}function b(e){var n;return Object.assign((0,l.forwardRef)(e),{displayName:null!=(n=e.displayName)?n:e.name})}function g(e,n){void 0===n&&(n=[]);for(var t,r=Object.assign({},e),o=p(n);!(t=o()).done;){var a=t.value;a in r&&delete r[a]}return r}function y(){for(var e=arguments.length,n=new Array(e),t=0;t<e;t++)n[t]=arguments[t];var r=(0,l.useRef)(n);return(0,l.useEffect)((function(){r.current=n}),[n]),(0,l.useCallback)((function(e){for(var n,t=p(r.current);!(n=t()).done;){var o=n.value;null!=o&&("function"===typeof o?o(e):o.current=e)}}),[r])}function x(e){for(var n,t,r=e.parentElement,o=null;r&&!(r instanceof HTMLFieldSetElement);)r instanceof HTMLLegendElement&&(o=r),r=r.parentElement;var a=null!=(n=""===(null==(t=r)?void 0:t.getAttribute("disabled")))&&n;return(!a||!function(e){if(!e)return!1;var n=e.previousElementSibling;for(;null!==n;){if(n instanceof HTMLLegendElement)return!1;n=n.previousElementSibling}return!0}(o))&&a}!function(e){e[e.None=0]="None",e[e.RenderStrategy=1]="RenderStrategy",e[e.Static=2]="Static"}(o||(o={})),function(e){e[e.Unmount=0]="Unmount",e[e.Hidden=1]="Hidden"}(a||(a={})),function(e){e.Space=" ",e.Enter="Enter",e.Escape="Escape",e.Backspace="Backspace",e.ArrowLeft="ArrowLeft",e.ArrowUp="ArrowUp",e.ArrowRight="ArrowRight",e.ArrowDown="ArrowDown",e.Home="Home",e.End="End",e.PageUp="PageUp",e.PageDown="PageDown",e.Tab="Tab"}(u||(u={}));var w="undefined"!==typeof window?l.useLayoutEffect:l.useEffect,E={serverHandoffComplete:!1};function j(){var e=(0,l.useState)(E.serverHandoffComplete),n=e[0],t=e[1];return(0,l.useEffect)((function(){!0!==n&&t(!0)}),[n]),(0,l.useEffect)((function(){!1===E.serverHandoffComplete&&(E.serverHandoffComplete=!0)}),[]),n}var O=0;function S(){return++O}function C(){var e=j(),n=(0,l.useState)(e?S:null),t=n[0],r=n[1];return w((function(){null===t&&r(S())}),[t]),null!=t?""+t:void 0}var P,N,k,T,L=["[contentEditable=true]","[tabindex]","a[href]","area[href]","button:not([disabled])","iframe","input:not([disabled])","select:not([disabled])","textarea:not([disabled])"].map((function(e){return e+":not([tabindex='-1'])"})).join(",");function F(e){return void 0===e&&(e=document.body),null==e?[]:Array.from(e.querySelectorAll(L))}function I(e,n){var t=Array.isArray(e)?e:F(e),r=document.activeElement,o=function(){if(n&(P.First|P.Next))return k.Next;if(n&(P.Previous|P.Last))return k.Previous;throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")}(),a=function(){if(n&P.First)return 0;if(n&P.Previous)return Math.max(0,t.indexOf(r))-1;if(n&P.Next)return Math.max(0,t.indexOf(r))+1;if(n&P.Last)return t.length-1;throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")}(),u=n&P.NoScroll?{preventScroll:!0}:{},i=0,c=t.length,l=void 0;do{var s;if(i>=c||i+c<=0)return N.Error;var f=a+i;if(n&P.WrapAround)f=(f+c)%c;else{if(f<0)return N.Underflow;if(f>=c)return N.Overflow}null==(s=l=t[f])||s.focus(u),i+=o}while(l!==document.activeElement);return l.hasAttribute("tabindex")||l.setAttribute("tabindex","0"),N.Success}function A(e,n,t){var r=(0,l.useRef)(n);r.current=n,(0,l.useEffect)((function(){function n(e){r.current.call(window,e)}return window.addEventListener(e,n,t),function(){return window.removeEventListener(e,n,t)}}),[e,t])}!function(e){e[e.First=1]="First",e[e.Previous=2]="Previous",e[e.Next=4]="Next",e[e.Last=8]="Last",e[e.WrapAround=16]="WrapAround",e[e.NoScroll=32]="NoScroll"}(P||(P={})),function(e){e[e.Error=0]="Error",e[e.Overflow=1]="Overflow",e[e.Success=2]="Success",e[e.Underflow=3]="Underflow"}(N||(N={})),function(e){e[e.Previous=-1]="Previous",e[e.Next=1]="Next"}(k||(k={})),function(e){e[e.Strict=0]="Strict",e[e.Loose=1]="Loose"}(T||(T={}));var M,R,D,H,B=(0,l.createContext)(null);function U(){return(0,l.useContext)(B)}function V(e){var n=e.value,t=e.children;return l.createElement(B.Provider,{value:n},t)}function _(e){var n;if(e.type)return e.type;var t=null!=(n=e.as)?n:"button";return"string"===typeof t&&"button"===t.toLowerCase()?"button":void 0}B.displayName="OpenClosedContext",function(e){e[e.Open=0]="Open",e[e.Closed=1]="Closed"}(M||(M={})),function(e){e[e.Open=0]="Open",e[e.Closed=1]="Closed"}(D||(D={})),function(e){e[e.TogglePopover=0]="TogglePopover",e[e.ClosePopover=1]="ClosePopover",e[e.SetButton=2]="SetButton",e[e.SetButtonId=3]="SetButtonId",e[e.SetPanel=4]="SetPanel",e[e.SetPanelId=5]="SetPanelId"}(H||(H={}));var K=((R={})[H.TogglePopover]=function(e){var n;return s({},e,{popoverState:v(e.popoverState,(n={},n[D.Open]=D.Closed,n[D.Closed]=D.Open,n))})},R[H.ClosePopover]=function(e){return e.popoverState===D.Closed?e:s({},e,{popoverState:D.Closed})},R[H.SetButton]=function(e,n){return e.button===n.button?e:s({},e,{button:n.button})},R[H.SetButtonId]=function(e,n){return e.buttonId===n.buttonId?e:s({},e,{buttonId:n.buttonId})},R[H.SetPanel]=function(e,n){return e.panel===n.panel?e:s({},e,{panel:n.panel})},R[H.SetPanelId]=function(e,n){return e.panelId===n.panelId?e:s({},e,{panelId:n.panelId})},R),z=(0,l.createContext)(null);function W(e){var n=(0,l.useContext)(z);if(null===n){var t=new Error("<"+e+" /> is missing a parent <"+Q.name+" /> component.");throw Error.captureStackTrace&&Error.captureStackTrace(t,W),t}return n}z.displayName="PopoverContext";var q=(0,l.createContext)(null);function G(e){var n=(0,l.useContext)(q);if(null===n){var t=new Error("<"+e+" /> is missing a parent <"+Q.name+" /> component.");throw Error.captureStackTrace&&Error.captureStackTrace(t,G),t}return n}q.displayName="PopoverAPIContext";var X=(0,l.createContext)(null);function Y(){return(0,l.useContext)(X)}X.displayName="PopoverGroupContext";var $=(0,l.createContext)(null);function J(e,n){return v(n.type,K,e,n)}$.displayName="PopoverPanelContext";function Q(e){var n,t="headlessui-popover-button-"+C(),r="headlessui-popover-panel-"+C(),o=(0,l.useReducer)(J,{popoverState:D.Closed,button:null,buttonId:t,panel:null,panelId:r}),a=o[0],u=a.popoverState,i=a.button,c=a.panel,s=o[1];(0,l.useEffect)((function(){return s({type:H.SetButtonId,buttonId:t})}),[t,s]),(0,l.useEffect)((function(){return s({type:H.SetPanelId,panelId:r})}),[r,s]);var f=(0,l.useMemo)((function(){return{buttonId:t,panelId:r,close:function(){return s({type:H.ClosePopover})}}}),[t,r,s]),d=Y(),p=null==d?void 0:d.registerPopover,h=(0,l.useCallback)((function(){var e;return null!=(e=null==d?void 0:d.isFocusWithinPopoverGroup())?e:(null==i?void 0:i.contains(document.activeElement))||(null==c?void 0:c.contains(document.activeElement))}),[d,i,c]);(0,l.useEffect)((function(){return null==p?void 0:p(f)}),[p,f]),A("focus",(function(){u===D.Open&&(h()||i&&c&&s({type:H.ClosePopover}))}),!0),A("mousedown",(function(e){var n=e.target;u===D.Open&&((null==i?void 0:i.contains(n))||(null==c?void 0:c.contains(n))||(s({type:H.ClosePopover}),function(e,n){var t;return void 0===n&&(n=T.Strict),e!==document.body&&v(n,((t={})[T.Strict]=function(){return e.matches(L)},t[T.Loose]=function(){for(var n=e;null!==n;){if(n.matches(L))return!0;n=n.parentElement}return!1},t))}(n,T.Loose)||(e.preventDefault(),null==i||i.focus())))}));var b=(0,l.useCallback)((function(e){s({type:H.ClosePopover});var n=e?e instanceof HTMLElement?e:e.current instanceof HTMLElement?e.current:i:i;null==n||n.focus()}),[s,i]),g=(0,l.useMemo)((function(){return{close:b}}),[b]),y=(0,l.useMemo)((function(){return{open:u===D.Open,close:b}}),[u,b]);return l.createElement(z.Provider,{value:o},l.createElement(q.Provider,{value:g},l.createElement(V,{value:v(u,(n={},n[D.Open]=M.Open,n[D.Closed]=M.Closed,n))},m({props:e,slot:y,defaultTag:"div",name:"Popover"}))))}var Z,ee=b((function e(n,t){var r=W([Q.name,e.name].join(".")),o=r[0],a=r[1],i=(0,l.useRef)(null),c=Y(),f=null==c?void 0:c.closeOthers,d=(0,l.useContext)($),p=null!==d&&d===o.panelId,v=y(i,t,p?null:function(e){return a({type:H.SetButton,button:e})}),h=y(i,t),b=(0,l.useRef)(null),g=(0,l.useRef)("undefined"===typeof window?null:document.activeElement);A("focus",(function(){g.current=b.current,b.current=document.activeElement}),!0);var E=(0,l.useCallback)((function(e){var n;if(p){if(o.popoverState===D.Closed)return;switch(e.key){case u.Space:case u.Enter:e.preventDefault(),e.stopPropagation(),a({type:H.ClosePopover}),null==(n=o.button)||n.focus()}}else switch(e.key){case u.Space:case u.Enter:e.preventDefault(),e.stopPropagation(),o.popoverState===D.Closed&&(null==f||f(o.buttonId)),a({type:H.TogglePopover});break;case u.Escape:if(o.popoverState!==D.Open)return null==f?void 0:f(o.buttonId);if(!i.current)return;if(!i.current.contains(document.activeElement))return;a({type:H.ClosePopover});break;case u.Tab:if(o.popoverState!==D.Open)return;if(!o.panel)return;if(!o.button)return;if(e.shiftKey){var t;if(!g.current)return;if(null==(t=o.button)?void 0:t.contains(g.current))return;if(o.panel.contains(g.current))return;var r=F(),c=r.indexOf(g.current);if(r.indexOf(o.button)>c)return;e.preventDefault(),e.stopPropagation(),I(o.panel,P.Last)}else e.preventDefault(),e.stopPropagation(),I(o.panel,P.First)}}),[a,o.popoverState,o.buttonId,o.button,o.panel,i,f,p]),j=(0,l.useCallback)((function(e){var n;if(!p&&(e.key===u.Space&&e.preventDefault(),o.popoverState===D.Open&&o.panel&&o.button))switch(e.key){case u.Tab:if(!g.current)return;if(null==(n=o.button)?void 0:n.contains(g.current))return;if(o.panel.contains(g.current))return;var t=F(),r=t.indexOf(g.current);if(t.indexOf(o.button)>r)return;e.preventDefault(),e.stopPropagation(),I(o.panel,P.Last)}}),[o.popoverState,o.panel,o.button,p]),O=(0,l.useCallback)((function(e){var t,r;x(e.currentTarget)||(n.disabled||(p?(a({type:H.ClosePopover}),null==(t=o.button)||t.focus()):(o.popoverState===D.Closed&&(null==f||f(o.buttonId)),null==(r=o.button)||r.focus(),a({type:H.TogglePopover}))))}),[a,o.button,o.popoverState,o.buttonId,n.disabled,f,p]),S=(0,l.useMemo)((function(){return{open:o.popoverState===D.Open}}),[o]),C=function(e,n){var t=(0,l.useState)((function(){return _(e)})),r=t[0],o=t[1];return w((function(){o(_(e))}),[e.type,e.as]),w((function(){r||n.current&&n.current instanceof HTMLButtonElement&&!n.current.hasAttribute("type")&&o("button")}),[r,n]),r}(n,i);return m({props:s({},n,p?{ref:h,type:C,onKeyDown:E,onClick:O}:{ref:v,id:o.buttonId,type:C,"aria-expanded":n.disabled?void 0:o.popoverState===D.Open,"aria-controls":o.panel?o.panelId:void 0,onKeyDown:E,onKeyUp:j,onClick:O}),slot:S,defaultTag:"button",name:"Popover.Button"})})),ne=o.RenderStrategy|o.Static,te=b((function e(n,t){var r=W([Q.name,e.name].join(".")),o=r[0].popoverState,a=r[1],u=y(t),i="headlessui-popover-overlay-"+C(),c=U(),f=null!==c?c===M.Open:o===D.Open,d=(0,l.useCallback)((function(e){if(x(e.currentTarget))return e.preventDefault();a({type:H.ClosePopover})}),[a]),p=(0,l.useMemo)((function(){return{open:o===D.Open}}),[o]);return m({props:s({},n,{ref:u,id:i,"aria-hidden":!0,onClick:d}),slot:p,defaultTag:"div",features:ne,visible:f,name:"Popover.Overlay"})})),re=o.RenderStrategy|o.Static,oe=b((function e(n,t){var r=n.focus,o=void 0!==r&&r,a=f(n,["focus"]),i=W([Q.name,e.name].join(".")),c=i[0],d=i[1],p=G([Q.name,e.name].join(".")).close,v=(0,l.useRef)(null),h=y(v,t,(function(e){d({type:H.SetPanel,panel:e})})),b=U(),g=null!==b?b===M.Open:c.popoverState===D.Open,x=(0,l.useCallback)((function(e){var n;switch(e.key){case u.Escape:if(c.popoverState!==D.Open)return;if(!v.current)return;if(!v.current.contains(document.activeElement))return;e.preventDefault(),d({type:H.ClosePopover}),null==(n=c.button)||n.focus()}}),[c,v,d]);(0,l.useEffect)((function(){return function(){return d({type:H.SetPanel,panel:null})}}),[d]),(0,l.useEffect)((function(){var e;c.popoverState!==D.Closed||null!=(e=n.unmount)&&!e||d({type:H.SetPanel,panel:null})}),[c.popoverState,n.unmount,d]),(0,l.useEffect)((function(){if(o&&c.popoverState===D.Open&&v.current){var e=document.activeElement;v.current.contains(e)||I(v.current,P.First)}}),[o,v,c.popoverState]),A("keydown",(function(e){if(c.popoverState===D.Open&&v.current&&e.key===u.Tab&&document.activeElement&&v.current&&v.current.contains(document.activeElement)){e.preventDefault();var n,t=I(v.current,e.shiftKey?P.Previous:P.Next);if(t===N.Underflow)return null==(n=c.button)?void 0:n.focus();if(t===N.Overflow){if(!c.button)return;var r=F(),o=r.indexOf(c.button);I(r.splice(o+1).filter((function(e){var n;return!(null==(n=v.current)?void 0:n.contains(e))})),P.First)===N.Error&&I(document.body,P.First)}}})),A("focus",(function(){var e;o&&c.popoverState===D.Open&&v.current&&((null==(e=v.current)?void 0:e.contains(document.activeElement))||d({type:H.ClosePopover}))}),!0);var w=(0,l.useMemo)((function(){return{open:c.popoverState===D.Open,close:p}}),[c,p]),E={ref:h,id:c.panelId,onKeyDown:x};return l.createElement($.Provider,{value:c.panelId},m({props:s({},a,E),slot:w,defaultTag:"div",features:re,visible:g,name:"Popover.Panel"}))}));function ae(){var e=(0,l.useRef)(!0);return(0,l.useEffect)((function(){e.current=!1}),[]),e.current}function ue(){var e=[],n={requestAnimationFrame:function(e){function n(){return e.apply(this,arguments)}return n.toString=function(){return e.toString()},n}((function(){var e=requestAnimationFrame.apply(void 0,arguments);n.add((function(){return cancelAnimationFrame(e)}))})),nextFrame:function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];n.requestAnimationFrame((function(){n.requestAnimationFrame.apply(n,t)}))},setTimeout:function(e){function n(){return e.apply(this,arguments)}return n.toString=function(){return e.toString()},n}((function(){var e=setTimeout.apply(void 0,arguments);n.add((function(){return clearTimeout(e)}))})),add:function(n){e.push(n)},dispose:function(){for(var n,t=p(e.splice(0));!(n=t()).done;){var r=n.value;r()}}};return n}function ie(e){for(var n,t=arguments.length,r=new Array(t>1?t-1:0),o=1;o<t;o++)r[o-1]=arguments[o];e&&r.length>0&&(n=e.classList).add.apply(n,r)}function ce(e){for(var n,t=arguments.length,r=new Array(t>1?t-1:0),o=1;o<t;o++)r[o-1]=arguments[o];e&&r.length>0&&(n=e.classList).remove.apply(n,r)}function le(e,n,t,r,o,a){var u=ue(),i=void 0!==a?function(e){var n={called:!1};return function(){if(!n.called)return n.called=!0,e.apply(void 0,arguments)}}(a):function(){};return ce.apply(void 0,[e].concat(o)),ie.apply(void 0,[e].concat(n,t)),u.nextFrame((function(){ce.apply(void 0,[e].concat(t)),ie.apply(void 0,[e].concat(r)),u.add(function(e,n){var t=ue();if(!e)return t.dispose;var r=getComputedStyle(e),o=[r.transitionDuration,r.transitionDelay].map((function(e){var n=e.split(",").filter(Boolean).map((function(e){return e.includes("ms")?parseFloat(e):1e3*parseFloat(e)})).sort((function(e,n){return n-e}))[0];return void 0===n?0:n})),a=o[0],u=o[1];return 0!==a?t.setTimeout((function(){n(Z.Finished)}),a+u):n(Z.Finished),t.add((function(){return n(Z.Cancelled)})),t.dispose}(e,(function(t){return ce.apply(void 0,[e].concat(r,n)),ie.apply(void 0,[e].concat(o)),i(t)})))})),u.add((function(){return ce.apply(void 0,[e].concat(n,t,r,o))})),u.add((function(){return i(Z.Cancelled)})),u.dispose}function se(e){return void 0===e&&(e=""),(0,l.useMemo)((function(){return e.split(" ").filter((function(e){return e.trim().length>1}))}),[e])}Q.Button=ee,Q.Overlay=te,Q.Panel=oe,Q.Group=function(e){var n=(0,l.useRef)(null),t=(0,l.useState)([]),r=t[0],o=t[1],a=(0,l.useCallback)((function(e){o((function(n){var t=n.indexOf(e);if(-1!==t){var r=n.slice();return r.splice(t,1),r}return n}))}),[o]),u=(0,l.useCallback)((function(e){return o((function(n){return[].concat(n,[e])})),function(){return a(e)}}),[o,a]),i=(0,l.useCallback)((function(){var e,t=document.activeElement;return!!(null==(e=n.current)?void 0:e.contains(t))||r.some((function(e){var n,r;return(null==(n=document.getElementById(e.buttonId))?void 0:n.contains(t))||(null==(r=document.getElementById(e.panelId))?void 0:r.contains(t))}))}),[n,r]),c=(0,l.useCallback)((function(e){for(var n,t=p(r);!(n=t()).done;){var o=n.value;o.buttonId!==e&&o.close()}}),[r]),f=(0,l.useMemo)((function(){return{registerPopover:u,unregisterPopover:a,isFocusWithinPopoverGroup:i,closeOthers:c}}),[u,a,i,c]),d=(0,l.useMemo)((function(){return{}}),[]),v={ref:n},h=e;return l.createElement(X.Provider,{value:f},m({props:s({},h,v),slot:d,defaultTag:"div",name:"Popover.Group"}))},function(e){e.Finished="finished",e.Cancelled="cancelled"}(Z||(Z={}));var fe,de=(0,l.createContext)(null);de.displayName="TransitionContext",function(e){e.Visible="visible",e.Hidden="hidden"}(fe||(fe={}));var pe=(0,l.createContext)(null);function ve(e){return"children"in e?ve(e.children):e.current.filter((function(e){return e.state===fe.Visible})).length>0}function me(e){var n=(0,l.useRef)(e),t=(0,l.useRef)([]),r=function(){var e=(0,l.useRef)(!1);return(0,l.useEffect)((function(){return e.current=!0,function(){e.current=!1}}),[]),e}();(0,l.useEffect)((function(){n.current=e}),[e]);var o=(0,l.useCallback)((function(e,o){var u;void 0===o&&(o=a.Hidden);var i=t.current.findIndex((function(n){return n.id===e}));-1!==i&&(v(o,((u={})[a.Unmount]=function(){t.current.splice(i,1)},u[a.Hidden]=function(){t.current[i].state=fe.Hidden},u)),!ve(t)&&r.current&&(null==n.current||n.current()))}),[n,r,t]),u=(0,l.useCallback)((function(e){var n=t.current.find((function(n){return n.id===e}));return n?n.state!==fe.Visible&&(n.state=fe.Visible):t.current.push({id:e,state:fe.Visible}),function(){return o(e,a.Unmount)}}),[t,o]);return(0,l.useMemo)((function(){return{children:t,register:u,unregister:o}}),[u,o,t])}function he(){}pe.displayName="NestingContext";var be=["beforeEnter","afterEnter","beforeLeave","afterLeave"];function ge(e){for(var n,t={},r=p(be);!(n=r()).done;){var o,a=n.value;t[a]=null!=(o=e[a])?o:he}return t}var ye=o.RenderStrategy;function xe(e){var n,t=e.beforeEnter,r=e.afterEnter,o=e.beforeLeave,u=e.afterLeave,i=e.enter,c=e.enterFrom,d=e.enterTo,p=e.entered,h=e.leave,b=e.leaveFrom,g=e.leaveTo,y=f(e,["beforeEnter","afterEnter","beforeLeave","afterLeave","enter","enterFrom","enterTo","entered","leave","leaveFrom","leaveTo"]),x=(0,l.useRef)(null),E=(0,l.useState)(fe.Visible),O=E[0],S=E[1],P=y.unmount?a.Unmount:a.Hidden,N=function(){var e=(0,l.useContext)(de);if(null===e)throw new Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");return e}(),k=N.show,T=N.appear,L=function(){var e=(0,l.useContext)(pe);if(null===e)throw new Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");return e}(),F=L.register,I=L.unregister,A=ae(),R=C(),D=(0,l.useRef)(!1),H=me((function(){D.current||(S(fe.Hidden),I(R),G.current.afterLeave())}));w((function(){if(R)return F(R)}),[F,R]),w((function(){var e;P===a.Hidden&&R&&(k&&O!==fe.Visible?S(fe.Visible):v(O,((e={})[fe.Hidden]=function(){return I(R)},e[fe.Visible]=function(){return F(R)},e)))}),[O,R,F,I,k,P]);var B=se(i),U=se(c),_=se(d),K=se(p),z=se(h),W=se(b),q=se(g),G=function(e){var n=(0,l.useRef)(ge(e));return(0,l.useEffect)((function(){n.current=ge(e)}),[e]),n}({beforeEnter:t,afterEnter:r,beforeLeave:o,afterLeave:u}),X=j();(0,l.useEffect)((function(){if(X&&O===fe.Visible&&null===x.current)throw new Error("Did you forget to passthrough the `ref` to the actual DOM node?")}),[x,O,X]);var Y=A&&!T;w((function(){var e=x.current;if(e&&!Y)return D.current=!0,k&&G.current.beforeEnter(),k||G.current.beforeLeave(),k?le(e,B,U,_,K,(function(e){D.current=!1,e===Z.Finished&&G.current.afterEnter()})):le(e,z,W,q,K,(function(e){D.current=!1,e===Z.Finished&&(ve(H)||(S(fe.Hidden),I(R),G.current.afterLeave()))}))}),[G,R,D,I,H,x,Y,k,B,U,_,z,W,q]);var $={ref:x},J=y;return l.createElement(pe.Provider,{value:H},l.createElement(V,{value:v(O,(n={},n[fe.Visible]=M.Open,n[fe.Hidden]=M.Closed,n))},m({props:s({},J,$),defaultTag:"div",features:ye,visible:O===fe.Visible,name:"Transition.Child"})))}function we(e){var n,t=e.show,r=e.appear,o=void 0!==r&&r,a=e.unmount,u=f(e,["show","appear","unmount"]),i=U();void 0===t&&null!==i&&(t=v(i,((n={})[M.Open]=!0,n[M.Closed]=!1,n)));if(![!0,!1].includes(t))throw new Error("A <Transition /> is used but it is missing a `show={true | false}` prop.");var c=(0,l.useState)(t?fe.Visible:fe.Hidden),d=c[0],p=c[1],h=me((function(){p(fe.Hidden)})),b=ae(),g=(0,l.useMemo)((function(){return{show:t,appear:o||!b}}),[t,o,b]);(0,l.useEffect)((function(){t?p(fe.Visible):ve(h)||p(fe.Hidden)}),[t,h]);var y={unmount:a};return l.createElement(pe.Provider,{value:h},l.createElement(de.Provider,{value:g},m({props:s({},y,{as:l.Fragment,children:l.createElement(xe,Object.assign({},y,u))}),defaultTag:l.Fragment,features:ye,visible:d===fe.Visible,name:"Transition"})))}we.Child=function(e){var n=null!==(0,l.useContext)(de),t=null!==U();return!n&&t?l.createElement(we,Object.assign({},e)):l.createElement(xe,Object.assign({},e))},we.Root=we;var Ee=function(e){return l.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","aria-hidden":"true"},e),l.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M4 6h16M4 12h16M4 18h16"}))};var je=function(e){return l.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","aria-hidden":"true"},e),l.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M6 18L18 6M6 6l12 12"}))};var Oe=t(5893);function Se(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function Ce(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?Se(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):Se(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var Pe=[{name:"Apie Daugus",href:"/apie-daugus"},{name:"Pramogauk Daugusoe",href:"/pramogauk-dauguose"},{name:"Kontaktai",href:"/kontaktai"}],Ne=[{name:"Facebook",href:"https://facebook.com/Daugai",icon:function(e){return(0,Oe.jsx)("svg",Ce(Ce({fill:"currentColor",viewBox:"0 0 24 24"},e),{},{children:(0,Oe.jsx)("path",{fillRule:"evenodd",d:"M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z",clipRule:"evenodd"})}))}},{name:"Instagram",href:"https://www.instagram.com/daugai.lt",icon:function(e){return(0,Oe.jsx)("svg",Ce(Ce({fill:"currentColor",viewBox:"0 0 24 24"},e),{},{children:(0,Oe.jsx)("path",{fillRule:"evenodd",d:"M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z",clipRule:"evenodd"})}))}}];var ke=function(e){var n=e.children;return(0,Oe.jsxs)("div",{className:"bg-white",children:[(0,Oe.jsx)(i.default,{children:(0,Oe.jsx)("link",{rel:"stylesheet",href:"https://rsms.me/inter/inter.css"})}),(0,Oe.jsx)("header",{children:(0,Oe.jsxs)(Q,{className:"relative bg-white",children:[(0,Oe.jsxs)("div",{className:"flex justify-between items-center max-w-7xl mx-auto px-4 py-6 sm:px-6 md:justify-start md:space-x-10 lg:px-8",children:[(0,Oe.jsx)("div",{className:"flex justify-start lg:w-0 lg:flex-1",children:(0,Oe.jsx)(c.default,{href:"/",children:(0,Oe.jsx)("a",{children:(0,Oe.jsx)("img",{className:"h-8 w-auto sm:h-12",src:"/images/logo.png",alt:""})})})}),(0,Oe.jsx)("div",{className:"-mr-2 -my-2 md:hidden",children:(0,Oe.jsxs)(Q.Button,{className:"bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500",children:[(0,Oe.jsx)("span",{className:"sr-only",children:"Atidaryti meniu"}),(0,Oe.jsx)(Ee,{className:"h-6 w-6","aria-hidden":"true"})]})}),(0,Oe.jsx)(Q.Group,{as:"nav",className:"hidden md:flex space-x-10",children:Pe.map((function(e){return(0,Oe.jsx)("a",{href:e.href,className:"text-base font-medium text-gray-500 hover:text-gray-900",children:e.name},e.name)}))})]}),(0,Oe.jsx)(we,{as:l.Fragment,enter:"duration-200 ease-out",enterFrom:"opacity-0 scale-95",enterTo:"opacity-100 scale-100",leave:"duration-100 ease-in",leaveFrom:"opacity-100 scale-100",leaveTo:"opacity-0 scale-95",children:(0,Oe.jsx)(Q.Panel,{focus:!0,className:"absolute z-30 top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden",children:(0,Oe.jsxs)("div",{className:"rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50",children:[(0,Oe.jsx)("div",{className:"pt-5 pb-6 px-5",children:(0,Oe.jsxs)("div",{className:"flex items-center justify-between",children:[(0,Oe.jsx)(c.default,{href:"/",children:(0,Oe.jsx)("img",{className:"h-8 w-auto",src:"/images/logo.png",alt:"Daugai"})}),(0,Oe.jsx)("div",{className:"-mr-2",children:(0,Oe.jsxs)(Q.Button,{className:"bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500",children:[(0,Oe.jsx)("span",{className:"sr-only",children:"U\u017edaryti meniu"}),(0,Oe.jsx)(je,{className:"h-6 w-6","aria-hidden":"true"})]})})]})}),(0,Oe.jsx)("div",{className:"py-6 px-5",children:(0,Oe.jsx)("div",{className:"flex flex-col space-y-4 text-right",children:Pe.map((function(e){return(0,Oe.jsx)("a",{href:e.href,className:"text-base font-medium text-gray-900 hover:text-gray-700",children:e.name},e.name)}))})})]})})})]})}),(0,Oe.jsx)("main",{children:(0,Oe.jsx)("div",{className:"max-w-7xl mx-auto px-4 py-6 sm:px-6 md:justify-start md:space-x-10 lg:px-8",children:n})}),(0,Oe.jsx)("footer",{className:"bg-gray-800 mt-4 lg:mt-12","aria-labelledby":"footer-heading",children:(0,Oe.jsx)("div",{className:"max-w-7xl mx-auto py-2 px-4 sm:px-6 lg:py-16 lg:px-8",children:(0,Oe.jsxs)("div",{className:"mt-2 border-t border-gray-700 pt-8 md:flex md:items-center md:justify-between",children:[(0,Oe.jsx)("div",{className:"flex space-x-6 md:order-2",children:Ne.map((function(e){return(0,Oe.jsxs)("a",{href:e.href,className:"text-gray-400 hover:text-gray-300",children:[(0,Oe.jsx)("span",{className:"sr-only",children:e.name}),(0,Oe.jsx)(e.icon,{className:"h-6 w-6","aria-hidden":"true"})]},e.name)}))}),(0,Oe.jsx)("p",{className:"mt-8 text-base text-gray-400 md:mt-0 md:order-1",children:"\xa9 Visos teis\u0117s saugomos \xa9 2014 Daugai.lt"})]})})})]})};t(3498);function Te(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function Le(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?Te(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):Te(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var Fe=function(e){var n=e.Component,t=e.pageProps;return(0,Oe.jsx)(ke,{children:(0,Oe.jsx)(n,Le({},t))})}},6363:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return t(1981)}])},3498:function(){},9008:function(e,n,t){e.exports=t(639)},1664:function(e,n,t){e.exports=t(2167)}},function(e){var n=function(n){return e(e.s=n)};e.O(0,[774,179],(function(){return n(6363),n(4651)}));var t=e.O();_N_E=t}]);