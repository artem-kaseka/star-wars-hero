(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,,,function(e,t,n){e.exports=n(23)},,,,,,function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(3),o=n.n(c),i=(n(16),n(1)),s=n.n(i),l=n(4),u=n(5),m=n(6),h=n(8),f=n(7),p=n(9),d=(n(18),n(19),n(20),function(e){var t=e.title,n=e.handleClick;return r.a.createElement("button",{className:"btn",type:"button",onClick:n},t)}),v=function(e){var t=e.url,n=e.heroId,a=e.prev,c=e.next;return r.a.createElement("div",{className:"hero"},r.a.createElement("img",{className:"hero__img",src:"https://starwars-visualguide.com/assets/img/characters/".concat(n,".jpg"),alt:"hero img"}),r.a.createElement("div",{className:"hero__buttons"},r.a.createElement(d,{title:"Prev",handleClick:function(){return a(n,t)}}),r.a.createElement(d,{title:"Next",handleClick:function(){return c(n,t)}})))},E=(n(21),function(e){var t=e.hero;return r.a.createElement("ul",{className:"hero-information"},["name","height","mass","hair_color","skin_color","eye_color","birth_year","gender"].map(function(e){return r.a.createElement("li",{key:e},r.a.createElement("span",null,"".concat(e.replace("_"," "),": ")),t[e])}))}),g=(n(22),function(e){var t=e.films.map(function(e){return r.a.createElement("li",null,e.title)});return r.a.createElement("ul",{className:"hero-filmography"},t)}),b=function(e){function t(){var e;return Object(u.a)(this,t),(e=Object(h.a)(this,Object(f.a)(t).call(this))).getData=function(){var t=Object(l.a)(s.a.mark(function t(n,a){var r,c,o;return s.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("".concat(n).concat(a));case 2:return r=t.sent,t.next=5,r.json();case 5:if(c=t.sent,e.setState({hero:c}),!c.films){t.next=12;break}return t.next=10,Promise.all(c.films.map(function(e){return fetch(e).then(function(e){return e.json()})}));case 10:o=t.sent,e.setState({films:o});case 12:case"end":return t.stop()}},t)}));return function(e,n){return t.apply(this,arguments)}}(),e.prev=function(t,n){t>=2&&e.setState({heroId:t-1},function(){return e.getData(n,t-1)})},e.next=function(t,n){e.setState({heroId:t+1},function(){return e.getData(n,t+1)})},e.state={hero:[],heroId:1,url:"https://swapi.co/api/people/",films:[]},e}return Object(p.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=this.state,t=e.url,n=e.heroId;this.getData(t,n)}},{key:"render",value:function(){var e=this.state,t=e.hero,n=e.heroId,a=e.url,c=e.films;return r.a.createElement("div",{className:"app"},r.a.createElement("h3",{className:"app__title"},"Star Wars Heroes"),r.a.createElement("div",{className:"app__wrapper"},r.a.createElement(v,{heroId:n,url:a,getData:this.getData,prev:this.prev,next:this.next}),r.a.createElement(E,{hero:t}),r.a.createElement(g,{films:c})))}}]),t}(a.Component);o.a.render(r.a.createElement(b,null),document.getElementById("root"))}],[[10,1,2]]]);
//# sourceMappingURL=main.1292efe8.chunk.js.map