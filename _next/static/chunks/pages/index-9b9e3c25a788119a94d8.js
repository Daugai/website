(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{7556:function(e,t,r){"use strict";r.d(t,{H2:function(){return i}});r(7294);var n=r(5893),i=function(e){var t=e.children,r=e.className,i=void 0===r?"":r;return(0,n.jsx)("h2",{className:"text-2xl font-extrabold text-gray-900 sm:text-3xl ".concat(i),children:t})}},6071:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return v}});var n=r(9008),i=r(1664),a=r(7294);function s(e,t){return(s=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var o="_2R-kh",c="_wPDyp",l="_vzTHL",u="_3xnQP",m="_3lhLL",d=function(e){var t,r;function n(t){var r;return(r=e.call(this,t)||this).state={feeds:[],isError:"",isLoaded:!1},r}r=e,(t=n).prototype=Object.create(r.prototype),t.prototype.constructor=t,s(t,r);var i=n.prototype;return i.componentDidMount=function(){var e=this,t="https://graph.instagram.com/me/media?fields=media_count,media_type,permalink,media_url&&access_token="+this.props.token;fetch(t).then((function(e){return e.json()})).then((function(t){t.hasOwnProperty("error")?e.setState({isLoaded:!0,isError:!0}):e.setState({isLoaded:!0,feeds:t.data,isError:!1})})).catch((function(t){console.error("Error:",t),e.setState({isLoaded:!0,isError:!0,error:t})}))},i.render=function(){var e=this.state,t=e.isError,r=e.isLoaded,n=e.feeds;return t?a.createElement("div",{className:m},a.createElement("p",null," the access token is not valid")):r?(console.log(n),a.createElement("div",{className:o},n.slice(0,this.props.counter).map((function(e,t){return a.createElement("div",{key:t,className:c},a.createElement("a",{key:t,href:e.permalink,className:"ig-instagram-link",target:"_blank",rel:"noreferrer"},"IMAGE"===e.media_type||"CAROUSEL_ALBUM"===e.media_type?a.createElement("img",{className:l,key:t,src:e.media_url,alt:"description"}):a.createElement("video",{className:l,key:t,src:e.media_url,type:"video/mp4"}),a.createElement("div",{className:u},a.createElement("div",{className:"instagram-count-item"},a.createElement("span",{className:"icon"},a.createElement("svg",{height:"18",viewBox:"0 0 512 512",width:"18"},a.createElement("path",{fill:"currentColor",d:"m256 386c-71.683 0-130-58.317-130-130 7.14-172.463 252.886-172.413 260 .001 0 71.682-58.317 129.999-130 129.999zm0-220c-49.626 0-90 40.374-90 90 4.944 119.397 175.074 119.362 180-.001 0-49.625-40.374-89.999-90-89.999zm236 346h-472c-11.046 0-20-8.954-20-20v-472c0-11.046 8.954-20 20-20h472c11.046 0 20 8.954 20 20v472c0 11.046-8.954 20-20 20zm-452-40h432v-432h-432zm372-392c-11.046 0-20 8.954-20 20 0 11.046 8.954 20 20 20 11.046 0 20-8.954 20-20 0-11.046-8.954-20-20-20z"})))))))})))):a.createElement("div",null," Loading... ")},n}(a.Component),h=(r(5179),r(7556)),f=r(5893),p=r(4155),x=function(){return p.env.NEXT_PUBLIC_IG_TK?(0,f.jsxs)("div",{className:"pt-12",children:[(0,f.jsxs)(h.H2,{children:["Naujausios nuotraukas i\u0161 ",(0,f.jsx)("a",{href:"https://www.instagram.com/daugai.lt/",target:"_blank",children:"@daugai.lt Instagram"})]}),(0,f.jsx)("div",{className:"mt-6",children:(0,f.jsx)(d,{token:p.env.NEXT_PUBLIC_IG_TK,counter:"6"})})]}):null};function v(){return(0,f.jsxs)("div",{children:[(0,f.jsxs)("div",{className:"relative",children:[(0,f.jsx)(n.default,{children:(0,f.jsx)("title",{children:"Daugai"})}),(0,f.jsx)("div",{children:(0,f.jsxs)("div",{className:"relative shadow-xl sm:rounded-2xl sm:overflow-hidden",children:[(0,f.jsx)("div",{className:"absolute inset-0",children:(0,f.jsx)("img",{className:"h-full w-full object-cover",src:"/images/homebg.jpg",alt:"Daugai"})}),(0,f.jsxs)("div",{className:"relative px-4 py-16 sm:px-6 sm:py-24 lg:py-32 lg:px-8",children:[(0,f.jsx)("h1",{className:"text-center text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl",children:(0,f.jsx)("span",{className:"block text-white",children:"Pa\u017eink Daugus"})}),(0,f.jsx)("p",{className:"mt-6 max-w-lg mx-auto text-center text-lg text-indigo-50 sm:max-w-3xl",children:"Daugai - miestas Alytaus rajone, 22 km \u012f rytus nuo Alytaus, prie Vilniaus-Alytaus magistralinio kelio. I\u0161 vis\u0173 pusi\u0173 j\u012f supa e\u017eerai, did\u017eiausias ir giliausias i\u0161 j\u0173 \u2013 Did\u017eiulio (Daug\u0173) e\u017eeras. Norint j\u012f apeiti, teks \u012fveikti 42 km. Vingiuotos e\u017eero pakrant\u0117s, pusiasaliai, \u012flankos, nedidel\u0117s apvalios salos \u2013 kur dar gali reg\u0117ti toki\u0105 viet\u0105, skirt\u0105 poilsiui, \u017e\u016bklei ir vandens pramogoms. Daug\u0173 apylink\u0117se net 12 e\u017eer\u0173."}),(0,f.jsx)("div",{className:"mt-10 max-w-sm mx-auto sm:max-w-none sm:flex sm:justify-center",children:(0,f.jsx)("div",{className:"sm:mx-auto",children:(0,f.jsx)(i.default,{href:"/apie-daugus",children:(0,f.jsx)("a",{className:"flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-500 bg-opacity-60 hover:bg-opacity-70 sm:px-8",children:"Su\u017einok daugiau"})})})})]})]})})]}),(0,f.jsx)(x,{})]})}},5301:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return r(6071)}])},5179:function(){},4155:function(e){var t,r,n=e.exports={};function i(){throw new Error("setTimeout has not been defined")}function a(){throw new Error("clearTimeout has not been defined")}function s(e){if(t===setTimeout)return setTimeout(e,0);if((t===i||!t)&&setTimeout)return t=setTimeout,setTimeout(e,0);try{return t(e,0)}catch(r){try{return t.call(null,e,0)}catch(r){return t.call(this,e,0)}}}!function(){try{t="function"===typeof setTimeout?setTimeout:i}catch(e){t=i}try{r="function"===typeof clearTimeout?clearTimeout:a}catch(e){r=a}}();var o,c=[],l=!1,u=-1;function m(){l&&o&&(l=!1,o.length?c=o.concat(c):u=-1,c.length&&d())}function d(){if(!l){var e=s(m);l=!0;for(var t=c.length;t;){for(o=c,c=[];++u<t;)o&&o[u].run();u=-1,t=c.length}o=null,l=!1,function(e){if(r===clearTimeout)return clearTimeout(e);if((r===a||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(e);try{r(e)}catch(t){try{return r.call(null,e)}catch(t){return r.call(this,e)}}}(e)}}function h(e,t){this.fun=e,this.array=t}function f(){}n.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var r=1;r<arguments.length;r++)t[r-1]=arguments[r];c.push(new h(e,t)),1!==c.length||l||s(d)},h.prototype.run=function(){this.fun.apply(null,this.array)},n.title="browser",n.browser=!0,n.env={},n.argv=[],n.version="",n.versions={},n.on=f,n.addListener=f,n.once=f,n.off=f,n.removeListener=f,n.removeAllListeners=f,n.emit=f,n.prependListener=f,n.prependOnceListener=f,n.listeners=function(e){return[]},n.binding=function(e){throw new Error("process.binding is not supported")},n.cwd=function(){return"/"},n.chdir=function(e){throw new Error("process.chdir is not supported")},n.umask=function(){return 0}}},function(e){e.O(0,[774,888,179],(function(){return t=5301,e(e.s=t);var t}));var t=e.O();_N_E=t}]);