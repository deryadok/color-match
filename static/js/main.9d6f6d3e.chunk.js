(this["webpackJsonpcolor-match"]=this["webpackJsonpcolor-match"]||[]).push([[0],[,,,,function(e,t,n){e.exports=n(12)},,,,,function(e,t,n){},function(e,t,n){},,function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(3),c=n.n(r),l=(n(9),n(1));n(10),n(11);var i=["red","blue","green","yellow","white","pink","purple","brown","coral","chocolate","cyan","gray","magenta","olive","orange"],m=function(e){return"YES"===e.message?o.a.createElement("button",{onClick:function(){return e.onClick(e.message)},className:"btn btn-outline-success mr-md-2"},"EVET"):o.a.createElement("button",{onClick:function(){return e.onClick(e.message)},className:"btn btn-outline-danger"},"HAYIR")},s=function(e){return o.a.createElement("p",{className:"label text-uppercase",style:{color:e.color}},e.text)},u=function(e){return o.a.createElement("div",{className:"col-md-12 board text-center"},o.a.createElement("p",{className:"endGame"},"Puan\u0131n\u0131z: ",e.point),o.a.createElement("button",{onClick:e.onClick,className:"btn btn-outline-warning replay"},"TEKRAR OYNA"))},d=function(e){return o.a.createElement("div",{className:"col-md-12 board"},o.a.createElement("div",{className:"d-inline point"},"Puan: ",e.point),o.a.createElement("div",{className:"d-inline float-right timer"},"S\xfcre: ",e.secondsLeft),o.a.createElement("div",{className:"game text-center"},o.a.createElement("p",{className:"info"},"Yukar\u0131da yazan renk a\u015fa\u011f\u0131daki yaz\u0131n\u0131n rengiyle e\u015fle\u015fiyor mu?"),o.a.createElement(s,{color:"white",text:e.topColor}),o.a.createElement(s,{color:e.randomColor,text:e.bottomColor})),o.a.createElement("div",{className:"mt-md-5 text-center"},o.a.createElement(m,{message:"YES",onClick:e.onButtonClick}),o.a.createElement(m,{message:"NO",onClick:e.onButtonClick})))},f=function(e){var t=function(){var e=Object(a.useState)(i[E.random(0,i.length-1)]),t=Object(l.a)(e,2),n=t[0],o=t[1],r=Object(a.useState)(i[E.random(0,i.length-1)]),c=Object(l.a)(r,2),m=c[0],s=c[1],u=Object(a.useState)(E.arr(n,m)),d=Object(l.a)(u,2),f=d[0],b=d[1],g=Object(a.useState)(0),p=Object(l.a)(g,2),C=p[0],h=p[1],k=Object(a.useState)(10),v=Object(l.a)(k,2),N=v[0],w=v[1];Object(a.useEffect)((function(){if(N>0){var e=setTimeout((function(){w(N-1)}),1e3);return function(){return clearTimeout(e)}}}));return{topColor:n,bottomColor:m,randomColor:f,point:C,secondsLeft:N,onButtonClick:function(e){"YES"===e&&n===f?(h(C+10),w(N+1)):"NO"===e&&n!==f?(h(C+10),w(N+1)):(h(C>0?C-10:0),w(N-2)),o(i[E.random(0,i.length-1)]),s(i[E.random(0,i.length-1)]),b(i[E.random(0,i.length-1)])},setGameState:function(){o(i[E.random(0,i.length-1)]),s(i[E.random(0,i.length-1)]),b(i[E.random(0,i.length-1)]),h(0),w(10)}}}(),n=t.topColor,r=t.bottomColor,c=t.randomColor,m=t.point,s=t.secondsLeft,f=t.onButtonClick,b=t.setGameState,g=s<=0;return o.a.createElement("div",{className:"container-fluid"},o.a.createElement("div",{className:"row"},g?o.a.createElement(u,{onClick:function(){return e.startNewGame(b())},point:m}):o.a.createElement(d,{point:m,secondsLeft:s,topColor:n,bottomColor:r,randomColor:c,onButtonClick:f})))},b=function(){var e=Object(a.useState)(1),t=Object(l.a)(e,2),n=t[0],r=t[1];return o.a.createElement(f,{keys:n,startNewGame:function(){r(n+1)}})},E={random:function(e,t){return Math.floor(Math.random()*(t-e+1))+e},arr:function(e,t){var n=[e,t];return n[E.random(0,1)]}},g=function(){return o.a.createElement(b,null)};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(g,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[4,1,2]]]);
//# sourceMappingURL=main.9d6f6d3e.chunk.js.map