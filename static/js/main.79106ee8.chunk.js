(this.webpackJsonpdqflex=this.webpackJsonpdqflex||[]).push([[0],{35:function(e,t,n){},56:function(e,t,n){},57:function(e,t,n){},64:function(e,t,n){},65:function(e,t,n){},66:function(e,t,n){},68:function(e,t,n){"use strict";n.r(t);var c=n(0),s=n.n(c),a=n(10),o=n.n(a),i=(n(35),n(4)),r=n(14),l=n(5),d=n.n(l),j=n(11),u=n(24),b=n.n(u).a.create({baseURL:"https://hustlecoding.link/"}),h=(n(56),n(57),n(26)),m=n.n(h),f=n(12),v=n.n(f),O=n(25),p=n.n(O),x=n(1),g=function(e){var t=e.poster_path,n=e.movieId,c=e.title,s=e.genres,a=e.url,o=e.rating_avg,i=e.rating_count,r=e.setModalVisibility,l=e.setMyRating;return Object(x.jsx)("div",{className:"presentation",role:"presentation",children:Object(x.jsx)("div",{className:"wrapper-modal",children:Object(x.jsxs)("div",{className:"modal",children:[Object(x.jsx)("span",{onClick:function(){return r(!1)},className:"modal-close",children:Object(x.jsx)(m.a,{})}),Object(x.jsxs)("div",{className:"modal__header",children:[Object(x.jsx)("img",{className:"modal__poster-img",src:"".concat(t),alt:"".concat(c)}),Object(x.jsxs)("div",{className:"modal__content",children:[Object(x.jsxs)("p",{className:"modal__details",children:[Object(x.jsx)("span",{className:"modal__user-perc",children:"Genre: "})," ",s.replaceAll("|"," | ")]}),Object(x.jsx)("h4",{className:"modal__title",children:c}),Object(x.jsxs)("p",{className:"modal__overview",children:["Vote Average: ",o.toFixed(2)]}),Object(x.jsxs)("p",{className:"modal__overview",children:["Vote Count: ",i]}),Object(x.jsxs)("div",{className:"modal__header",children:[Object(x.jsxs)("button",{className:"banner__button play",onClick:function(){window.open(a)},children:[Object(x.jsx)(v.a,{}),"Detail"]}),Object(x.jsx)(p.a,{count:5,onChange:l,size:24,color2:"#ffd700"})]})]})]}),Object(x.jsx)(M,{title:"You may also like...",id:n,fetchUrl:"https://hustlecoding.link/item-based/".concat(n)})]})})})},_=n(29),w=n.n(_),N=n(28),k=n.n(N),M=function(e){var t=e.title,n=e.fetchUrl,s=e.id,a=Object(c.useState)([]),o=Object(i.a)(a,2),l=o[0],u=o[1],h=Object(c.useState)(!1),m=Object(i.a)(h,2),f=m[0],v=m[1],O=Object(c.useState)({}),p=Object(i.a)(O,2),_=p[0],N=p[1];Object(c.useEffect)((function(){function e(){return(e=Object(j.a)(d.a.mark((function e(){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.get(n);case 2:return t=e.sent,u(t.data.result),e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[n]);return Object(x.jsxs)("section",{className:"row",children:[Object(x.jsx)("h2",{children:t}),Object(x.jsxs)("div",{className:"slider",children:[Object(x.jsx)("div",{className:"slider__arrow-left",children:Object(x.jsx)("span",{className:"arrow",onClick:function(){document.getElementById(s).scrollLeft-=window.innerWidth-80},children:Object(x.jsx)(k.a,{})})}),Object(x.jsx)("div",{id:s,className:"row__posters",children:l.map((function(e,t){return Object(x.jsx)("img",{onClick:function(){return function(e){v(!0),N(e)}(e)},className:"row__poster row__posterLarge",src:"".concat("https://image.tmdb.org/t/p/original/").concat(e.poster_path),loading:"lazy",alt:e.title},t)}))}),Object(x.jsx)("div",{className:"slider__arrow-right",children:Object(x.jsx)("span",{className:"arrow",onClick:function(){document.getElementById(s).scrollLeft+=window.innerWidth-80},children:Object(x.jsx)(w.a,{})})})]}),f&&Object(x.jsx)(g,Object(r.a)(Object(r.a)({},_),{},{setModalVisibility:v}))]})},y={fetchDQsPick:"/all",fetchActionMovies:"/genres/action",fetchComedyMovies:"/genres/comedy",fetchHorrorMovies:"/genres/horror",fetchRomanceMovies:"/genres/romance"},C=(n(64),function(){var e,t,n=Object(c.useState)([]),s=Object(i.a)(n,2),a=s[0],o=s[1];return Object(c.useEffect)((function(){function e(){return(e=Object(j.a)(d.a.mark((function e(){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.get(y.fetchDQsPick);case 2:return t=e.sent,o(t.data.result[Math.floor(Math.random()*t.data.result.length-1)]),e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),Object(x.jsxs)("header",{className:"banner",style:{backgroundImage:'url(\n                    "https://image.tmdb.org/t/p/original/'.concat(null===a||void 0===a?void 0:a.poster_path,'"\n                    )'),backgroundPosition:"top center",backgroundSize:"cover"},children:[Object(x.jsxs)("div",{className:"banner__contents",children:[Object(x.jsx)("h1",{className:"banner__title",children:(null===a||void 0===a?void 0:a.title)||(null===a||void 0===a?void 0:a.name)||(null===a||void 0===a?void 0:a.original_name)}),Object(x.jsx)("div",{className:"banner__buttons",children:Object(x.jsxs)("button",{className:"banner__button play",children:[Object(x.jsx)(v.a,{}),"Play"]})}),Object(x.jsx)("h1",{className:"banner__description",children:(e=null===a||void 0===a?void 0:a.overview,t=150,(null===e||void 0===e?void 0:e.length)>t?e.substr(0,t-1)+"...":e)})]}),Object(x.jsx)("div",{className:"banner--fadeBottom"})]})}),E=(n(65),function(){var e=Object(c.useState)(!1),t=Object(i.a)(e,2),n=t[0],s=t[1];return Object(c.useEffect)((function(){return window.addEventListener("scroll",(function(){window.scrollY>50?s(!0):s(!1)})),function(){window.removeEventListener("scroll",(function(){}))}}),[]),Object(x.jsxs)("nav",{className:"nav ".concat(n&&"nav__black"),children:[Object(x.jsx)("img",{alt:"DQflex logo",src:"https://i.ibb.co/svtr2tD/dqflex-logo.png",className:"nav__logo"}),Object(x.jsx)("img",{alt:"User logged",src:"https://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_400x400.png",className:"nav__avatar"})]})}),U=(n(66),function(){var e=Object(c.useState)("https://hustlecoding.link/all"),t=Object(i.a)(e,2),n=t[0];t[1];return Object(c.useEffect)((function(){console.log(n)}),[]),Object(x.jsxs)("div",{className:"app",children:[Object(x.jsx)(E,{}),Object(x.jsx)(C,{}),Object(x.jsx)(M,{title:"Recommend For You",id:"RF",fetchUrl:n}),Object(x.jsx)(M,{title:"DQ's Pick",id:"DP",fetchUrl:y.fetchDQsPick}),Object(x.jsx)(M,{title:"Action Movies",id:"AM",fetchUrl:y.fetchActionMovies}),Object(x.jsx)(M,{title:"Comedy Movies",id:"CM",fetchUrl:y.fetchComedyMovies}),Object(x.jsx)(M,{title:"Horror Movies",id:"HM",fetchUrl:y.fetchHorrorMovies}),Object(x.jsx)(M,{title:"Romance  Movies",id:"RM",fetchUrl:y.fetchRomanceMovies})]})});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(Object(x.jsx)(s.a.StrictMode,{children:Object(x.jsx)(U,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[68,1,2]]]);
//# sourceMappingURL=main.79106ee8.chunk.js.map