(this["webpackJsonppersonal-site"]=this["webpackJsonppersonal-site"]||[]).push([[0],{21:function(e,t,n){"use strict";var c=n(1),i=n(16),l=n(3),a=n(12),r=Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_GA_TRACKING_ID:"UA-198212164-2"}),s=r.NODE_ENV,o=r.REACT_APP_GA_TRACKING_ID;"production"===s&&a.a.initialize(o);var j=function(){var e=Object(l.f)().pathname;return Object(c.useEffect)((function(){"production"===s&&(a.a.set({page:e}),a.a.pageview(e))}),[e]),null},b=n(5),u=n(36),h=[{index:!0,label:"Arpit Goyal",path:"/"},{label:"About",path:"/about"},{label:"Resume",path:"/resume"},{label:"Projects",path:"/projects"},{label:"Contact",path:"/contact"}],d=n(0),O=Object(c.lazy)((function(){return n.e(4).then(n.t.bind(null,170,7))})),p=function(){var e=Object(c.useState)(!1),t=Object(u.a)(e,2),n=t[0],i=t[1];return Object(d.jsxs)("div",{className:"hamburger-container",children:[Object(d.jsx)("nav",{className:"main",id:"hambuger-nav",children:Object(d.jsx)("ul",{children:n?Object(d.jsx)("li",{className:"menu close-menu",children:Object(d.jsx)("div",{onClick:function(){return i(!n)},className:"menu-hover",children:"\u2715"})}):Object(d.jsx)("li",{className:"menu open-menu",children:Object(d.jsx)("div",{onClick:function(){return i(!n)},className:"menu-hover",children:"\u2630"})})})}),Object(d.jsx)(c.Suspense,{fallback:Object(d.jsx)(d.Fragment,{}),children:Object(d.jsx)(O,{right:!0,isOpen:n,children:Object(d.jsx)("ul",{className:"hamburger-ul",children:h.map((function(e){return Object(d.jsx)("li",{children:Object(d.jsx)(b.b,{to:e.path,onClick:function(){return i(!n)},children:Object(d.jsx)("h3",{className:e.index&&"index-li",children:e.label})})},e.label)}))})})})]})},m=function(){return Object(d.jsxs)("header",{id:"header",children:[Object(d.jsx)("h1",{className:"index-link",children:h.filter((function(e){return e.index})).map((function(e){return Object(d.jsx)(b.b,{to:e.path,children:e.label},e.label)}))}),Object(d.jsx)("nav",{className:"links",children:Object(d.jsxs)("ul",{children:[h.filter((function(e){return!e.index})).map((function(e){return Object(d.jsx)("li",{children:Object(d.jsx)(b.b,{to:e.path,children:e.label})},e.label)})),Object(d.jsx)("li",{children:Object(d.jsx)("a",{href:"https://arpitgoyalkgp.medium.com",target:"_blank",rel:"noreferrer",children:"My Blog"})},"Blogs")]})}),Object(d.jsx)(p,{})]})},x=n(24),f=function(){return Object(d.jsxs)("section",{id:"sidebar",children:[Object(d.jsxs)("section",{id:"intro",children:[Object(d.jsx)(b.b,{to:"/",className:"logo",children:Object(d.jsx)("img",{src:"".concat("","/images/me.jpg"),alt:""})}),Object(d.jsxs)("header",{children:[Object(d.jsx)("h2",{children:"Arpit Goyal"}),Object(d.jsx)("p",{children:Object(d.jsx)("a",{href:"mailto:arpitgoyal.iitkgp@gmail.com",children:"arpitgoyal.iitkgp@gmail.com"})})]})]}),Object(d.jsxs)("section",{className:"blurb",children:[Object(d.jsx)("h2",{children:"About"}),Object(d.jsxs)("p",{children:["Hi, I'm Arpit. I like building things and solving problems. I am an ",Object(d.jsx)("a",{href:"https://iitkgp.ac.in/",target:"_blank",rel:"noreferrer",children:"IIT Kharagpur"})," graduate, and the co-founder and CTO of ",Object(d.jsx)("a",{href:"https://www.ey.com/en_in/consulting/spotmentor-digital-learning-solutions",target:"_blank",rel:"noreferrer",children:"Spotmentor "}),"that got acquired by Ernst & Young LLP. Before Spotmentor, I was a developer with HT Media (Shine.com)"]}),Object(d.jsx)("ul",{className:"actions",children:Object(d.jsx)("li",{children:window.location.pathname.includes("/resume")?Object(d.jsx)(b.b,{to:"/about",className:"button",children:"About Me"}):Object(d.jsx)(b.b,{to:"/resume",className:"button",children:"Learn More"})})})]}),Object(d.jsxs)("section",{id:"footer",children:[Object(d.jsx)(x.a,{}),Object(d.jsxs)("p",{className:"copyright",children:["\xa9 Arpit Goyal ",Object(d.jsx)(b.b,{to:"/",children:"arpitgoyal.in"}),"."]})]})]})},g=function(){var e=Object(l.f)().pathname;return Object(c.useEffect)((function(){window.scrollTo(0,0)}),[e]),null},k=function(e){return Object(d.jsxs)(i.b,{children:[Object(d.jsx)(j,{}),Object(d.jsx)(g,{}),Object(d.jsxs)(i.a,{titleTemplate:"%s | Arpit Goyal",defaultTitle:"Arpit Goyal",children:[e.title&&Object(d.jsx)("title",{children:e.title}),Object(d.jsx)("meta",{name:"description",content:e.description})]}),Object(d.jsxs)("div",{id:"wrapper",children:[Object(d.jsx)(m,{}),Object(d.jsx)("div",{id:"main",children:e.children}),e.fullPage?null:Object(d.jsx)(f,{})]})]})};k.defaultProps={children:null,fullPage:!1,title:null,description:"Arpit Goyal's personal website."};t.a=k},24:function(e,t,n){"use strict";n(1);var c=n(28),i=n(29),l=n(30),a=n(31),r=n(32),s=n(33),o=n(34),j=n(35),b=[{link:"https://github.com/argoyal",label:"Github",icon:i.faGithub},{link:"https://facebook.com/arpitgoyal.iitkgp/",label:"Facebook",icon:l.faFacebookF},{link:"https://www.instagram.com/_._appy_._/",label:"Instagram",icon:a.faInstagram},{link:"https://www.linkedin.com/in/arpitgoyalkgp",label:"LinkedIn",icon:r.faLinkedinIn},{link:"https://twitter.com/_arpitgoyal_",label:"Twitter",icon:s.faTwitter},{link:"https://stackoverflow.com/users/4719293/arpit-goyal",label:"Stack Overflow",icon:o.faStackOverflow},{link:"mailto:arpitgoyal.iitkgp@gmail.com",label:"Email",icon:j.faEnvelope}],u=n(0);t.a=function(){return Object(u.jsx)("ul",{className:"icons",children:b.map((function(e){return Object(u.jsx)("li",{children:Object(u.jsx)("a",{href:e.link,target:"_blank",rel:"noreferrer",children:Object(u.jsx)(c.a,{icon:e.icon})})},e.label)}))})}},49:function(e,t,n){},50:function(e,t,n){"use strict";n.r(t);var c=n(1),i=n.n(c),l=n(15),a=n(5),r=n(3),s=n(21),o=(n(49),n(0)),j=Object(c.lazy)((function(){return Promise.all([n.e(2),n.e(7)]).then(n.bind(null,166))})),b=Object(c.lazy)((function(){return n.e(8).then(n.bind(null,167))})),u=Object(c.lazy)((function(){return n.e(9).then(n.bind(null,168))})),h=Object(c.lazy)((function(){return n.e(10).then(n.bind(null,169))})),d=Object(c.lazy)((function(){return n.e(6).then(n.bind(null,172))})),O=Object(c.lazy)((function(){return n.e(5).then(n.bind(null,171))})),p=function(){return Object(o.jsx)(a.a,{basename:"",children:Object(o.jsx)(c.Suspense,{fallback:Object(o.jsx)(s.a,{}),children:Object(o.jsxs)(r.c,{children:[Object(o.jsx)(r.a,{exact:!0,path:"/",component:u}),Object(o.jsx)(r.a,{path:"/about",component:j}),Object(o.jsx)(r.a,{path:"/projects",component:d}),Object(o.jsx)(r.a,{path:"/contact",component:b}),Object(o.jsx)(r.a,{path:"/resume",component:O}),Object(o.jsx)(r.a,{component:h,status:404})]})})})},m=function(){return Object(o.jsx)(i.a.StrictMode,{children:Object(o.jsx)(p,{})})},x=document.getElementById("root");x.hasChildNodes()?Object(l.hydrate)(Object(o.jsx)(m,{}),x):Object(l.render)(Object(o.jsx)(m,{}),x)}},[[50,1,3]]]);
//# sourceMappingURL=main.a9f79f17.chunk.js.map