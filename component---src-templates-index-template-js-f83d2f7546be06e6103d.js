(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{230:function(e,t,a){"use strict";a.r(t),a.d(t,"query",function(){return m});var n=a(0),l=a.n(n),i=a(234),r=a(240),o=a(244),c=a(241),u=a(245),s=a(232),m="167617260";t.default=function(e){var t=e.data,a=e.pageContext,n=Object(s.b)(),m=n.title,d=n.subtitle,f=a.currentPage,p=a.hasNextPage,h=a.hasPrevPage,v=a.prevPagePath,g=a.nextPagePath,E=t.allMarkdownRemark.edges,_=f>0?"Posts - Page "+f+" - "+m:m;return l.a.createElement(i.a,{title:_,description:d},l.a.createElement(r.a,{isIndex:!0}),l.a.createElement(c.a,null,l.a.createElement(o.a,{edges:E}),l.a.createElement(u.a,{prevPagePath:v,nextPagePath:g,hasPrevPage:h,hasNextPage:p})))}},232:function(e,t,a){"use strict";var n=a(235),l=function(){return n.data.site.siteMetadata},i=a(236),r=function(){return i.data.allMarkdownRemark.group},o=a(237),c=function(){return o.data.allMarkdownRemark.group};a.d(t,"b",function(){return l}),a.d(t,"a",function(){return r}),a.d(t,"c",function(){return c})},233:function(e,t,a){"use strict";var n={TWITTER:{path:"M25.312 6.375c-0.688 1-1.547 1.891-2.531 2.609 0.016 0.219 0.016 0.438 0.016 0.656 0 6.672-5.078 14.359-14.359 14.359-2.859 0-5.516-0.828-7.75-2.266 0.406 0.047 0.797 0.063 1.219 0.063 2.359 0 4.531-0.797 6.266-2.156-2.219-0.047-4.078-1.5-4.719-3.5 0.313 0.047 0.625 0.078 0.953 0.078 0.453 0 0.906-0.063 1.328-0.172-2.312-0.469-4.047-2.5-4.047-4.953v-0.063c0.672 0.375 1.453 0.609 2.281 0.641-1.359-0.906-2.25-2.453-2.25-4.203 0-0.938 0.25-1.797 0.688-2.547 2.484 3.062 6.219 5.063 10.406 5.281-0.078-0.375-0.125-0.766-0.125-1.156 0-2.781 2.25-5.047 5.047-5.047 1.453 0 2.766 0.609 3.687 1.594 1.141-0.219 2.234-0.641 3.203-1.219-0.375 1.172-1.172 2.156-2.219 2.781 1.016-0.109 2-0.391 2.906-0.781z",viewBox:"0 0 26 28"},FACEBOOK:{path:"M14.984 0.187v4.125h-2.453c-1.922 0-2.281 0.922-2.281 2.25v2.953h4.578l-0.609 4.625h-3.969v11.859h-4.781v-11.859h-3.984v-4.625h3.984v-3.406c0-3.953 2.422-6.109 5.953-6.109 1.687 0 3.141 0.125 3.563 0.187z",viewBox:"0 0 16 28"},TELEGRAM:{path:"M27.563 0.172c0.328 0.234 0.484 0.609 0.422 1l-4 24c-0.047 0.297-0.234 0.547-0.5 0.703-0.141 0.078-0.313 0.125-0.484 0.125-0.125 0-0.25-0.031-0.375-0.078l-7.078-2.891-3.781 4.609c-0.187 0.234-0.469 0.359-0.766 0.359-0.109 0-0.234-0.016-0.344-0.063-0.391-0.141-0.656-0.516-0.656-0.938v-5.453l13.5-16.547-16.703 14.453-6.172-2.531c-0.359-0.141-0.594-0.469-0.625-0.859-0.016-0.375 0.172-0.734 0.5-0.922l26-15c0.156-0.094 0.328-0.141 0.5-0.141 0.203 0 0.406 0.063 0.562 0.172z",viewBox:"0 0 28 28"},VKONTAKTE:{path:"M29.953 8.125c0.234 0.641-0.5 2.141-2.344 4.594-3.031 4.031-3.359 3.656-0.859 5.984 2.406 2.234 2.906 3.313 2.984 3.453 0 0 1 1.75-1.109 1.766l-4 0.063c-0.859 0.172-2-0.609-2-0.609-1.5-1.031-2.906-3.703-4-3.359 0 0-1.125 0.359-1.094 2.766 0.016 0.516-0.234 0.797-0.234 0.797s-0.281 0.297-0.828 0.344h-1.797c-3.953 0.25-7.438-3.391-7.438-3.391s-3.813-3.938-7.156-11.797c-0.219-0.516 0.016-0.766 0.016-0.766s0.234-0.297 0.891-0.297l4.281-0.031c0.406 0.063 0.688 0.281 0.688 0.281s0.25 0.172 0.375 0.5c0.703 1.75 1.609 3.344 1.609 3.344 1.563 3.219 2.625 3.766 3.234 3.437 0 0 0.797-0.484 0.625-4.375-0.063-1.406-0.453-2.047-0.453-2.047-0.359-0.484-1.031-0.625-1.328-0.672-0.234-0.031 0.156-0.594 0.672-0.844 0.766-0.375 2.125-0.391 3.734-0.375 1.266 0.016 1.625 0.094 2.109 0.203 1.484 0.359 0.984 1.734 0.984 5.047 0 1.062-0.203 2.547 0.562 3.031 0.328 0.219 1.141 0.031 3.141-3.375 0 0 0.938-1.625 1.672-3.516 0.125-0.344 0.391-0.484 0.391-0.484s0.25-0.141 0.594-0.094l4.5-0.031c1.359-0.172 1.578 0.453 1.578 0.453z",viewBox:"0 0 31 28"},GITHUB:{path:"M10 19c0 1.141-0.594 3-2 3s-2-1.859-2-3 0.594-3 2-3 2 1.859 2 3zM20 19c0 1.141-0.594 3-2 3s-2-1.859-2-3 0.594-3 2-3 2 1.859 2 3zM22.5 19c0-2.391-1.453-4.5-4-4.5-1.031 0-2.016 0.187-3.047 0.328-0.812 0.125-1.625 0.172-2.453 0.172s-1.641-0.047-2.453-0.172c-1.016-0.141-2.016-0.328-3.047-0.328-2.547 0-4 2.109-4 4.5 0 4.781 4.375 5.516 8.188 5.516h2.625c3.813 0 8.188-0.734 8.188-5.516zM26 16.25c0 1.734-0.172 3.578-0.953 5.172-2.063 4.172-7.734 4.578-11.797 4.578-4.125 0-10.141-0.359-12.281-4.578-0.797-1.578-0.969-3.437-0.969-5.172 0-2.281 0.625-4.438 2.125-6.188-0.281-0.859-0.422-1.766-0.422-2.656 0-1.172 0.266-2.344 0.797-3.406 2.469 0 4.047 1.078 5.922 2.547 1.578-0.375 3.203-0.547 4.828-0.547 1.469 0 2.953 0.156 4.375 0.5 1.859-1.453 3.437-2.5 5.875-2.5 0.531 1.062 0.797 2.234 0.797 3.406 0 0.891-0.141 1.781-0.422 2.625 1.5 1.766 2.125 3.938 2.125 6.219z",viewBox:"0 0 26 28"},EMAIL:{path:"M26 23.5v-12c-0.328 0.375-0.688 0.719-1.078 1.031-2.234 1.719-4.484 3.469-6.656 5.281-1.172 0.984-2.625 2.188-4.25 2.188h-0.031c-1.625 0-3.078-1.203-4.25-2.188-2.172-1.813-4.422-3.563-6.656-5.281-0.391-0.313-0.75-0.656-1.078-1.031v12c0 0.266 0.234 0.5 0.5 0.5h23c0.266 0 0.5-0.234 0.5-0.5zM26 7.078c0-0.391 0.094-1.078-0.5-1.078h-23c-0.266 0-0.5 0.234-0.5 0.5 0 1.781 0.891 3.328 2.297 4.438 2.094 1.641 4.188 3.297 6.266 4.953 0.828 0.672 2.328 2.109 3.422 2.109h0.031c1.094 0 2.594-1.437 3.422-2.109 2.078-1.656 4.172-3.313 6.266-4.953 1.016-0.797 2.297-2.531 2.297-3.859zM28 6.5v17c0 1.375-1.125 2.5-2.5 2.5h-23c-1.375 0-2.5-1.125-2.5-2.5v-17c0-1.375 1.125-2.5 2.5-2.5h23c1.375 0 2.5 1.125 2.5 2.5z",viewBox:"0 0 28 28"},RSS:{path:"M6 21c0 1.656-1.344 3-3 3s-3-1.344-3-3 1.344-3 3-3 3 1.344 3 3zM14 22.922c0.016 0.281-0.078 0.547-0.266 0.75-0.187 0.219-0.453 0.328-0.734 0.328h-2.109c-0.516 0-0.938-0.391-0.984-0.906-0.453-4.766-4.234-8.547-9-9-0.516-0.047-0.906-0.469-0.906-0.984v-2.109c0-0.281 0.109-0.547 0.328-0.734 0.172-0.172 0.422-0.266 0.672-0.266h0.078c3.328 0.266 6.469 1.719 8.828 4.094 2.375 2.359 3.828 5.5 4.094 8.828zM22 22.953c0.016 0.266-0.078 0.531-0.281 0.734-0.187 0.203-0.438 0.313-0.719 0.313h-2.234c-0.531 0-0.969-0.406-1-0.938-0.516-9.078-7.75-16.312-16.828-16.844-0.531-0.031-0.938-0.469-0.938-0.984v-2.234c0-0.281 0.109-0.531 0.313-0.719 0.187-0.187 0.438-0.281 0.688-0.281h0.047c5.469 0.281 10.609 2.578 14.484 6.469 3.891 3.875 6.188 9.016 6.469 14.484z",viewBox:"0 0 22 28"}},l={PREV_PAGE:"← PREV",NEXT_PAGE:"→ NEXT"};a.d(t,"a",function(){return n}),a.d(t,"b",function(){return l})},234:function(e,t,a){"use strict";var n=a(0),l=a.n(n),i=a(242),r=a.n(i),o=a(208),c=a.n(o),u=function(e){var t=e.children,a=e.title,n=e.description;return l.a.createElement("div",{className:c.a.layout},l.a.createElement(r.a,null,l.a.createElement("html",{lang:"en"}),l.a.createElement("title",null,a),l.a.createElement("meta",{name:"description",content:n}),l.a.createElement("meta",{property:"og:site_name",content:a}),l.a.createElement("meta",{name:"twitter:card",content:"summary"}),l.a.createElement("meta",{name:"twitter:title",content:a})),t)};a.d(t,"a",function(){return u})},235:function(e){e.exports={data:{site:{siteMetadata:{author:{name:"둘둘",bio:"안녕하세요. 말 많은 블로그에 오신걸 환영합니다~ 위코드에서 개발자 꿈나무로 무럭무럭 자라는중입니다!",photo:"/photo.jpg",contacts:{email:"doori.alice.kim@gmail.com",github:"/gollumnima"}},menu:[{label:"Articles",path:"/"},{label:"About me",path:"/pages/about"},{label:"Contact me",path:"/pages/contacts"}],url:"https://gollumnima.github.io/",title:"둘둘`s dooreplay!",subtitle:"Doo Reply!",copyright:"© All rights reserved.",disqusShortname:"dooreplay"}}}}},236:function(e){e.exports={data:{allMarkdownRemark:{group:[{fieldValue:"HTML/CSS",totalCount:4},{fieldValue:"Javascript",totalCount:10},{fieldValue:"aws",totalCount:2},{fieldValue:"crawling",totalCount:1},{fieldValue:"css",totalCount:4},{fieldValue:"daily",totalCount:1},{fieldValue:"git",totalCount:1},{fieldValue:"html",totalCount:1},{fieldValue:"javascript",totalCount:4},{fieldValue:"linux",totalCount:3},{fieldValue:"next",totalCount:2},{fieldValue:"nodeJS",totalCount:1},{fieldValue:"project",totalCount:2},{fieldValue:"react",totalCount:18},{fieldValue:"redux",totalCount:3},{fieldValue:"typescript",totalCount:2},{fieldValue:"web",totalCount:2}]}}}},237:function(e){e.exports={data:{allMarkdownRemark:{group:[{fieldValue:"ES6",totalCount:1},{fieldValue:"aws",totalCount:2},{fieldValue:"backend",totalCount:3},{fieldValue:"codingbootcamp",totalCount:49},{fieldValue:"crawling",totalCount:2},{fieldValue:"css",totalCount:9},{fieldValue:"daily",totalCount:2},{fieldValue:"design",totalCount:1},{fieldValue:"emmet",totalCount:1},{fieldValue:"error",totalCount:2},{fieldValue:"fetch",totalCount:1},{fieldValue:"frontend",totalCount:5},{fieldValue:"git",totalCount:3},{fieldValue:"google",totalCount:1},{fieldValue:"grid",totalCount:2},{fieldValue:"html",totalCount:7},{fieldValue:"javascript",totalCount:8},{fieldValue:"json",totalCount:1},{fieldValue:"lifecycle",totalCount:1},{fieldValue:"linux",totalCount:3},{fieldValue:"mobx",totalCount:1},{fieldValue:"next",totalCount:3},{fieldValue:"nodeJS",totalCount:1},{fieldValue:"postman",totalCount:1},{fieldValue:"project",totalCount:13},{fieldValue:"react",totalCount:20},{fieldValue:"recursion",totalCount:1},{fieldValue:"redux",totalCount:1},{fieldValue:"seo",totalCount:1},{fieldValue:"signup",totalCount:1},{fieldValue:"typescript",totalCount:2},{fieldValue:"web",totalCount:6},{fieldValue:"wecode",totalCount:53},{fieldValue:"위코드",totalCount:53}]}}}},238:function(e,t,a){"use strict";var n=a(233),l=function(e){var t;switch(e){case"twitter":t=n.a.TWITTER;break;case"github":t=n.a.GITHUB;break;case"vkontakte":t=n.a.VKONTAKTE;break;case"telegram":t=n.a.TELEGRAM;break;case"email":t=n.a.EMAIL;break;case"rss":t=n.a.RSS;break;default:t={}}return t},i=function(e,t){var a;switch(e){case"twitter":a="https://www.twitter.com/"+t;break;case"github":a="https://github.com/"+t;break;case"vkontakte":a="https://vk.com/"+t;break;case"telegram":a="https://t.me/"+t;break;case"email":a="mailto:"+t;break;default:a=t}return a};a.d(t,"b",function(){return l}),a.d(t,"a",function(){return i})},239:function(e,t,a){"use strict";var n=a(0),l=a.n(n),i=a(94),r=a(207),o=a.n(r),c=function(e){var t=e.tags,a=e.tagSlugs;return l.a.createElement("div",{className:o.a.tags},l.a.createElement("ul",{className:o.a.tags__list},a&&a.map(function(e,a){return l.a.createElement("li",{className:o.a["tags__list-item"],key:t[a]},l.a.createElement(i.Link,{to:e,className:o.a["tags__list-item-link"]},t[a]))})))};a.d(t,"a",function(){return c})},240:function(e,t,a){"use strict";var n=a(0),l=a.n(n),i=(a(38),a(94)),r=a(209),o=a.n(r),c=function(e){var t=e.author,a=e.isIndex;return l.a.createElement("div",{className:o.a.author},l.a.createElement(i.Link,{to:"/"},l.a.createElement("img",{src:Object(i.withPrefix)(t.photo),className:o.a.author__photo,width:"75",height:"75",alt:t.name})),!0===a?l.a.createElement("h1",{className:o.a.author__title},l.a.createElement(i.Link,{className:o.a["author__title-link"],to:"/"},t.name)):l.a.createElement("h2",{className:o.a.author__title},l.a.createElement(i.Link,{className:o.a["author__title-link"],to:"/"},t.name)),l.a.createElement("p",{className:o.a.author__subtitle},t.bio))},u=(a(30),a(31),a(16),a(50),a(238)),s=a(210),m=a.n(s),d=function(e){var t=e.name,a=e.icon;return l.a.createElement("svg",{className:m.a.icon,viewBox:a.viewBox},l.a.createElement("title",null,t),l.a.createElement("path",{d:a.path}))},f=a(211),p=a.n(f),h=function(e){var t=e.contacts;return l.a.createElement("div",{className:p.a.contacts},l.a.createElement("ul",{className:p.a.contacts__list},Object.keys(t).map(function(e){return t[e]?l.a.createElement("li",{className:p.a["contacts__list-item"],key:e},l.a.createElement("a",{className:p.a["contacts__list-item-link"],href:Object(u.a)(e,t[e]),rel:"noopener noreferrer",target:"_blank"},l.a.createElement(d,{name:e,icon:Object(u.b)(e)}))):null})))},v=a(212),g=a.n(v),E=function(e){var t=e.copyright;return l.a.createElement("div",{className:g.a.copyright},t)},_=a(213),b=a.n(_),V=function(e){var t=e.menu;return l.a.createElement("nav",{className:b.a.menu},l.a.createElement("ul",{className:b.a.menu__list},t.map(function(e){return l.a.createElement("li",{className:b.a["menu__list-item"],key:e.path},l.a.createElement(i.Link,{to:e.path,className:b.a["menu__list-item-link"],activeClassName:b.a["menu__list-item-link--active"]},e.label))})))},k=a(214),C=a.n(k),N=a(232),w=a(239),x=function(e){var t=e.isIndex,a=Object(N.b)(),n=a.author,i=a.copyright,r=a.menu,o=Object(N.c)();return l.a.createElement("div",{className:C.a.sidebar},l.a.createElement("div",{className:C.a.sidebar__inner},l.a.createElement(c,{author:n,isIndex:t}),l.a.createElement(V,{menu:r}),l.a.createElement(h,{contacts:n.contacts}),l.a.createElement(E,{copyright:i}),l.a.createElement(w.a,{tags:o.map(function(e){return e.fieldValue}),tagSlugs:o.map(function(e){return"/tag/"+e.fieldValue}),inSidebar:!0})))};a.d(t,"a",function(){return x})},241:function(e,t,a){"use strict";var n=a(0),l=a.n(n),i=a(215),r=a.n(i),o=function(e){var t=e.title,a=e.children,i=Object(n.useRef)();return Object(n.useEffect)(function(){i.current.scrollIntoView()}),l.a.createElement("div",{ref:i,className:r.a.page},l.a.createElement("div",{className:r.a.page__inner},t&&l.a.createElement("h1",{className:r.a.page__title},t),l.a.createElement("div",{className:r.a.page__body},a)))};a.d(t,"a",function(){return o})},243:function(e,t,a){var n;a(69),function(){"use strict";var a={}.hasOwnProperty;function l(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var i=typeof n;if("string"===i||"number"===i)e.push(this&&this[n]||n);else if(Array.isArray(n))e.push(l.apply(this,n));else if("object"===i)for(var r in n)a.call(n,r)&&n[r]&&e.push(this&&this[r]||r)}}return e.join(" ")}e.exports?(l.default=l,e.exports=l):void 0===(n=function(){return l}.apply(t,[]))||(e.exports=n)}()},244:function(e,t,a){"use strict";var n=a(0),l=a.n(n),i=a(246),r=a.n(i),o=a(94),c=a(216),u=a.n(c),s=function(e){var t=e.edges;return l.a.createElement("div",{className:u.a.feed},t.map(function(e){return l.a.createElement("div",{className:u.a.feed__item,key:e.node.fields.slug},l.a.createElement("div",{className:u.a["feed__item-meta"]},l.a.createElement("time",{className:u.a["feed__item-meta-time"],dateTime:r()(e.node.frontmatter.date).format("MMMM D, YYYY")},r()(e.node.frontmatter.date).format("MMMM YYYY")),l.a.createElement("span",{className:u.a["feed__item-meta-divider"]}),l.a.createElement("span",{className:u.a["feed__item-meta-category"]},l.a.createElement(o.Link,{to:e.node.fields.categorySlug,className:u.a["feed__item-meta-category-link"]},e.node.frontmatter.category))),l.a.createElement("h2",{className:u.a["feed__item-title"]},l.a.createElement(o.Link,{className:u.a["feed__item-title-link"],to:e.node.fields.slug},e.node.frontmatter.title)),l.a.createElement("p",{className:u.a["feed__item-description"]},e.node.frontmatter.description),l.a.createElement(o.Link,{className:u.a["feed__item-readmore"],to:e.node.fields.slug},"Read"))}))};a.d(t,"a",function(){return s})},245:function(e,t,a){"use strict";var n=a(0),l=a.n(n),i=a(243),r=a.n(i),o=a(94),c=a(233),u=a(217),s=a.n(u),m=r.a.bind(s.a),d=function(e){var t=e.prevPagePath,a=e.nextPagePath,n=e.hasNextPage,i=e.hasPrevPage,r=m({"pagination__prev-link":!0,"pagination__prev-link--disable":!i}),u=m({"pagination__next-link":!0,"pagination__next-link--disable":!n});return l.a.createElement("div",{className:s.a.pagination},l.a.createElement("div",{className:s.a.pagination__prev},l.a.createElement(o.Link,{rel:"prev",to:i?t:"/",className:r},c.b.PREV_PAGE)),l.a.createElement("div",{className:s.a.pagination__next},l.a.createElement(o.Link,{rel:"next",to:n?a:"/",className:u},c.b.NEXT_PAGE)))};a.d(t,"a",function(){return d})}}]);
//# sourceMappingURL=component---src-templates-index-template-js-f83d2f7546be06e6103d.js.map