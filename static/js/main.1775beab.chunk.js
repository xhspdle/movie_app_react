(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,,,,function(e,t,n){e.exports=n(30)},,,,,,function(e,t,n){},,,function(e,t,n){},,,function(e,t,n){},function(e,t,n){var a={"./frozen.jpg":25,"./fullmetaljacket.jpg":26,"./matrix.jpg":27,"./oldboy.jpg":28,"./starwars.jpg":29};function r(e){var t=o(e);return n(t)}function o(e){var t=a[e];if(!(t+1)){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}return t}r.keys=function(){return Object.keys(a)},r.resolve=o,e.exports=r,r.id=24},function(e,t,n){e.exports=n.p+"static/media/frozen.28f43c52.jpg"},function(e,t,n){e.exports=n.p+"static/media/fullmetaljacket.08196c43.jpg"},function(e,t,n){e.exports=n.p+"static/media/matrix.bc3401a4.jpg"},function(e,t,n){e.exports=n.p+"static/media/oldboy.92f9190a.jpg"},function(e,t,n){e.exports=n.p+"static/media/starwars.d0e73923.jpg"},function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(8),i=n.n(o),s=(n(17),n(6)),c=n.n(s),l=n(9),u=n(1),p=n(2),m=n(4),v=n(3),f=n(5),d=(n(20),n(10)),h=n.n(d);n(23);function g(e){var t=e.poster,n=e.alt;return r.a.createElement("img",{src:t,alt:n,title:n,className:"Movie__Poster"})}function j(e){var t=e.genre;return r.a.createElement("span",{className:"Movie__Genre"},t," ")}var _=function(e){function t(){return Object(u.a)(this,t),Object(m.a)(this,Object(v.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"Movie"},r.a.createElement("div",{className:"Movie__Column"},r.a.createElement(g,{poster:this.props.poster,alt:this.props.title})),r.a.createElement("div",{className:"Movie__Column"},r.a.createElement("h1",null,this.props.title),r.a.createElement("div",{className:"Movie__Genres"},this.props.genres.map(function(e,t){return r.a.createElement(j,{genre:e,key:t})})),r.a.createElement("div",{className:"Movie__Synopsis"},r.a.createElement(h.a,{text:this.props.synopsis,maxLine:"3",ellipsis:" ...",trimRight:!0,basedOn:"letters"}))))}}]),t}(a.Component);!function(e){var t={};e.keys().map(function(n,a){return t[n.replace("./","")]=e(n)})}(n(24));var y=function(e){function t(){var e,n;Object(u.a)(this,t);for(var a=arguments.length,o=new Array(a),i=0;i<a;i++)o[i]=arguments[i];return(n=Object(m.a)(this,(e=Object(v.a)(t)).call.apply(e,[this].concat(o)))).state={},n._renderMovies=function(){return n.state.movies.map(function(e,t){return r.a.createElement(_,{title:e.title_english,poster:e.medium_cover_image,key:e.id,genres:e.genres,synopsis:e.synopsis})})},n._getMovies=Object(l.a)(c.a.mark(function e(){var t;return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n._callApi();case 2:t=e.sent,n.setState({movies:t});case 4:case"end":return e.stop()}},e,this)})),n._callApi=function(){return fetch("https://yts.am/api/v2/list_movies.json?sort_by=download_count").then(function(e){return e.json()}).then(function(e){return e.data.movies}).catch(function(e){return console.error(e)})},n}return Object(f.a)(t,e),Object(p.a)(t,[{key:"componentDidMount",value:function(){this._getMovies()}},{key:"render",value:function(){console.log("render");var e=this.state.movies;return r.a.createElement("div",{className:e?"App":"App--loading"},e?this._renderMovies():"Loading")}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(y,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[11,1,2]]]);
//# sourceMappingURL=main.1775beab.chunk.js.map