(this.webpackJsonpcinema=this.webpackJsonpcinema||[]).push([[0],{71:function(e,t,n){},72:function(e,t,n){"use strict";n.r(t);var c=n(0),r=n.n(c),a=n(19),s=n.n(a),o=n(11),i=n(2),u=n.n(i),l=n(5),v=n(38),h="/api/",p=n.n(v).a.create({withCredentials:!0}),j=function(e,t){return"undefined"===e&&(e=""),O(e,"GET",t)},d=function(e,t){return O(e,"POST",t)},b=function(e,t){return O(e,"DELETE",t)};function O(e){return f.apply(this,arguments)}function f(){return(f=Object(l.a)(u.a.mark((function e(t){var n,c,r,a=arguments;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=a.length>1&&void 0!==a[1]?a[1]:"get",c=a.length>2&&void 0!==a[2]?a[2]:null,e.prev=2,e.next=5,p({url:"".concat(h).concat(t),method:n,data:c});case 5:return r=e.sent,e.abrupt("return",r.data);case 9:throw e.prev=9,e.t0=e.catch(2),console.log("Had Issues ".concat(n,"ing to the backend, endpoint: ").concat(t,", with data: ").concat(c)),console.dir(e.t0),e.t0.response&&401===e.t0.response.status&&window.location.assign("/#/login"),e.t0;case 15:case"end":return e.stop()}}),e,null,[[2,9]])})))).apply(this,arguments)}function m(){return(m=Object(l.a)(u.a.mark((function e(t){var n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,d("movie/add",t);case 3:return n=e.sent,e.abrupt("return",n);case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}function x(){return(x=Object(l.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,j("movie/");case 3:return t=e.sent,e.abrupt("return",t);case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}function w(){return(w=Object(l.a)(u.a.mark((function e(t){var n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,b("movie/".concat(t));case 3:return n=e.sent,e.abrupt("return",n);case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}var g={addMov:function(e){return m.apply(this,arguments)},getAllMovies:function(){return x.apply(this,arguments)},removeMov:function(e){return w.apply(this,arguments)}};function M(){return(M=Object(l.a)(u.a.mark((function e(t){var n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,d("show/add",t);case 3:return n=e.sent,e.abrupt("return",n);case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}function N(){return(N=Object(l.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,j("show/");case 3:return t=e.sent,e.abrupt("return",t);case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}function _(){return(_=Object(l.a)(u.a.mark((function e(t){var n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,b("show/".concat(t));case 3:return n=e.sent,e.abrupt("return",n);case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}var y={addShow:function(e){return M.apply(this,arguments)},getAllShows:function(){return N.apply(this,arguments)},removeShow:function(e){return _.apply(this,arguments)}};var S=n(15),k=n(1);var A=function(){var e=Object(o.c)();return Object(c.useEffect)((function(){e(function(){var e=Object(l.a)(u.a.mark((function e(t){var n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,g.getAllMovies();case 3:n=e.sent,t({type:"LOAD_MOV",allMov:n}),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log("SettingsActions: err in getAllMovies",e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}()),e((console.log("action: get all shows"),function(){var e=Object(l.a)(u.a.mark((function e(t){var n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,y.getAllShows();case 3:n=e.sent,t({type:"LOAD_SHOW",allShow:n}),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log("SettingsActions: err in getAllShows",e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}())),console.log("nav-bar")}),[]),Object(k.jsxs)("div",{className:"nav-bar ca",children:[Object(k.jsx)("h1",{children:"Cinema Now"}),Object(k.jsx)(S.a,{to:"/",children:Object(k.jsx)("p",{className:"nav-btn",children:"Find Movies"})}),Object(k.jsx)(S.a,{to:"/movies",children:Object(k.jsx)("p",{className:"nav-btn",children:"Our Movies"})}),Object(k.jsx)(S.a,{to:"/shows",children:Object(k.jsx)("p",{className:"nav-btn",children:"Manage Shows"})})]})},E=n(16);var D={getMovie:function(e){return j("tmdb/".concat(e))}},R=n(7),V=Object(R.a)(),C=function(e){var t=e.mov,n=e.btnAdd,c=e.btnRemove,r=Object(o.c)();return Object(k.jsxs)("div",{className:"rb movie-strip",children:[Object(k.jsxs)("div",{className:"ral",children:[Object(k.jsxs)("div",{className:"add-button-col",children:[n?Object(k.jsxs)("button",{className:"btn2 lnk-btn",onClick:function(){r(function(e){return function(){var t=Object(l.a)(u.a.mark((function t(n){var c;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,g.addMov(e);case 3:c=t.sent,n({type:"ADD_MOV",_mov:c}),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),console.log("SettingsActions: err in addMov",t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}()}(t)),V.push("/movies")},children:[Object(k.jsx)("i",{className:"fas fa-plus"}),"Add to cinema"]}):null,c?Object(k.jsxs)("button",{className:"btn-del lnk-btn",onClick:function(){var e;r((e=t._id,function(){var t=Object(l.a)(u.a.mark((function t(n){return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,g.removeMov(e);case 3:n({type:"REMOVE_MOV",movId:e}),t.next=9;break;case 6:t.prev=6,t.t0=t.catch(0),console.log("AnnActions: err in removeMov",t.t0);case 9:case"end":return t.stop()}}),t,null,[[0,6]])})));return function(e){return t.apply(this,arguments)}}())),V.push("/movies")},children:[Object(k.jsx)("i",{className:"far fa-trash-alt"}),"Remove"]}):null]}),Object(k.jsx)("p",{className:"movie-title",children:t.name})]}),Object(k.jsxs)("p",{className:"movie-id",children:["id: ",t.id]})]})},T=function(){var e=Object(c.useState)(1),t=Object(E.a)(e,2),n=t[0],r=t[1],a=function(){r(n+1),console.log("refresh func activated")},s=Object(c.useState)("matr"),o=Object(E.a)(s,2),i=o[0],u=o[1],l=Object(c.useState)(Date.now()),v=Object(E.a)(l,2),h=v[0],p=v[1],j=Object(c.useState)(0),d=Object(E.a)(j,2),b=d[0],O=d[1],f=Object(c.useState)(),m=Object(E.a)(f,2),x=m[0],w=m[1];return Object(c.useEffect)((function(){i&&(Date.now()-h>2e3?(D.getMovie(i).then((function(e){w(e)})),p(Date.now())):(O(b+1),setTimeout((function(){(1===b||b<1)&&(D.getMovie(i).then((function(e){w(e)})),p(Date.now()),O(b-1))}),1e3)))}),[i]),Object(c.useEffect)((function(){}),[n]),Object(k.jsxs)("div",{className:"page-general",children:[Object(k.jsx)("h2",{children:"Explore new movies"}),Object(k.jsxs)("div",{className:"search-bar ral",children:[Object(k.jsx)("p",{children:"Search for new movies: "}),Object(k.jsx)("input",{className:"input",value:i,type:"text",onChange:function(e){u(e.target.value)}})]}),x?x.results.map((function(e,t){return Object(k.jsx)(C,{mov:e,btnAdd:!0,btnRemove:!1,doRefresh:a},t)})):null]})},L=n(39),I=n.n(L),H=function(e){var t=e.show;return console.log(t),Object(k.jsxs)("div",{className:"rb movie-strip",children:[Object(k.jsx)("p",{className:"movie-title",children:t.title}),Object(k.jsxs)("p",{className:"movie-title",children:["Hall: ",t.hall]}),Object(k.jsx)("p",{className:"movie-title",children:I.a.unix(t.time).format("dddd, MMMM Do, YYYY h:mm:ss A")})]})},F=function(){var e=Object(o.d)((function(e){return e.showReducer.show}));return console.log(e),Object(k.jsxs)("div",{className:"page-general",children:[Object(k.jsx)("div",{className:"hor-block",children:Object(k.jsx)("h1",{children:"Shows"})}),e?e.map((function(e,t){return Object(k.jsx)(H,{show:e},t)})):null]})},P=function(){var e=Object(o.d)((function(e){return e.movReducer.mov}));return Object(k.jsxs)("div",{className:"page-general",children:[Object(k.jsxs)("div",{className:"hor-block",children:[Object(k.jsx)("h1",{children:"Movies"}),Object(k.jsx)("p",{children:"This is our local movie library. Use the items below to create shows"})]}),e?e.map((function(e,t){return Object(k.jsx)(C,{mov:e,btnAdd:!1,btnRemove:!0},t)})):null]})},W=n(4),Y=Object(o.b)(null,null)(Object(W.f)((function(){return Object(k.jsx)("div",{className:"App",children:Object(k.jsx)("div",{className:"outter-container",children:Object(k.jsxs)("div",{className:"inner-container",children:[Object(k.jsx)(A,{}),Object(k.jsxs)(W.c,{children:[Object(k.jsx)(W.a,{exact:!0,component:T,path:"/"}),Object(k.jsx)(W.a,{exact:!0,component:F,path:"/shows"}),Object(k.jsx)(W.a,{exact:!0,component:P,path:"/movies"})]})]})})})}))),B=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,73)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,a=t.getLCP,s=t.getTTFB;n(e),c(e),r(e),a(e),s(e)}))},J=n(13),U=n(40),X=n(22),G=n(12),q={mov:[]};var z={show:[]};var K=Object(J.c)({movReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:q,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case"LOAD_MOV":return{mov:t.allMov};case"ADD_MOV":return Object(G.a)(Object(G.a)({},e),{},{mov:[].concat(Object(X.a)(e.mov),[e.mov.map((function(e){return t._mov._id===e._id?t._mov:e}))])});case"REMOVE_MOV":return Object(G.a)(Object(G.a)({},e),{},{mov:e.mov.filter((function(e){return e._id!==t.movId}))});default:return e}},showReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:z,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case"LOAD_SHOW":return{show:t.allShow};case"ADD_SHOW":return Object(G.a)(Object(G.a)({},e),{},{show:[].concat(Object(X.a)(e.show),[e.show.map((function(e){return t._show._id===e._id?t._show:e}))])});case"REMOVE_SHOW":return Object(G.a)(Object(G.a)({},e),{},{show:e.show.filter((function(e){return e._id!==t.showId}))});default:return e}}}),Q=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||J.d,Z=Object(J.e)(K,Q(Object(J.a)(U.a)));n(71);s.a.render(Object(k.jsx)(r.a.StrictMode,{children:Object(k.jsx)(W.b,{history:V,children:Object(k.jsx)(o.a,{store:Z,children:Object(k.jsx)(Y,{})})})}),document.getElementById("root")),B()}},[[72,1,2]]]);
//# sourceMappingURL=main.45ec4cb7.chunk.js.map