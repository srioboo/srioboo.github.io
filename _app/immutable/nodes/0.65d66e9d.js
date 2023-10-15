import{_ as G}from"../chunks/preload-helper.a4192956.js";import{r as B,i as J,$ as K,w as Q,a as W}from"../chunks/runtime.esm.163256d4.js";import{s as V,n as b,c as X,d as Y,u as Z,g as ee,e as te}from"../chunks/scheduler.571a1093.js";import{S as k,i as S,g as f,s as y,m as ae,h as _,j as $,x as M,c as T,n as se,f as u,k as p,a as D,y as c,o as ne,r as F,u as N,v as U,d as H,t as I,w as q}from"../chunks/index.54d92eec.js";const z="es";B("en",()=>G(()=>import("../chunks/en.6c21009f.js"),[],import.meta.url));B("es",()=>G(()=>import("../chunks/es.0766cb96.js"),[],import.meta.url));J({fallbackLocale:z,initialLocale:z});const oe=!0,ie=async()=>{K.set(window.navigator.language),await Q()},$e=Object.freeze(Object.defineProperty({__proto__:null,load:ie,prerender:oe},Symbol.toStringTag,{value:"Module"}));function re(r){let e,s,a,o='<span class="image avatar48"><img src="/images/avatar.jpg" alt=""/></span> <h1 id="title">Salvador Rioboo</h1> <p>Full Stack Developer</p>',l,d,n,t,i,g,L=r[0]("header_component.nav.intro")+"",w,x,v,P='<ul class="icons"><li><a href="https://github.com/srioboo" class="icon brands fa-github"><span class="label">Github</span></a></li> <li><a href="https://www.linkedin.com/in/salvador-rioboo-naranjo/" class="icon brands fa-linkedin"><span class="label">Linkedin</span></a></li></ul>';return{c(){e=f("div"),s=f("div"),a=f("div"),a.innerHTML=o,l=y(),d=f("nav"),n=f("ul"),t=f("li"),i=f("a"),g=f("span"),w=ae(L),x=y(),v=f("div"),v.innerHTML=P,this.h()},l(h){e=_(h,"DIV",{id:!0});var m=$(e);s=_(m,"DIV",{class:!0});var E=$(s);a=_(E,"DIV",{id:!0,"data-svelte-h":!0}),M(a)!=="svelte-1nxpxt4"&&(a.innerHTML=o),l=T(E),d=_(E,"NAV",{id:!0});var j=$(d);n=_(j,"UL",{});var A=$(n);t=_(A,"LI",{});var C=$(t);i=_(C,"A",{href:!0,id:!0});var O=$(i);g=_(O,"SPAN",{class:!0});var R=$(g);w=se(R,L),R.forEach(u),O.forEach(u),C.forEach(u),A.forEach(u),j.forEach(u),E.forEach(u),x=T(m),v=_(m,"DIV",{class:!0,"data-svelte-h":!0}),M(v)!=="svelte-wamouv"&&(v.innerHTML=P),m.forEach(u),this.h()},h(){p(a,"id","logo"),p(g,"class","icon solid fa-home"),p(i,"href","#top"),p(i,"id","top-link"),p(d,"id","nav"),p(s,"class","top"),p(v,"class","bottom"),p(e,"id","header")},m(h,m){D(h,e,m),c(e,s),c(s,a),c(s,l),c(s,d),c(d,n),c(n,t),c(t,i),c(i,g),c(g,w),c(e,x),c(e,v)},p(h,[m]){m&1&&L!==(L=h[0]("header_component.nav.intro")+"")&&ne(w,L)},i:b,o:b,d(h){h&&u(e)}}}function le(r,e,s){let a;return X(r,W,o=>s(0,a=o)),[a]}class ce extends k{constructor(e){super(),S(this,e,le,re,V,{})}}function ue(r){let e,s='<ul class="copyright"><li>Design: <a href="http://html5up.net">HTML5 UP</a></li></ul>';return{c(){e=f("div"),e.innerHTML=s,this.h()},l(a){e=_(a,"DIV",{id:!0,"data-svelte-h":!0}),M(e)!=="svelte-6lcgr4"&&(e.innerHTML=s),this.h()},h(){p(e,"id","footer")},m(a,o){D(a,e,o)},p:b,i:b,o:b,d(a){a&&u(e)}}}class de extends k{constructor(e){super(),S(this,e,null,ue,V,{})}}function fe(r){let e,s,a,o,l;e=new ce({});const d=r[1].default,n=Y(d,r,r[0],null);return o=new de({}),{c(){F(e.$$.fragment),s=y(),n&&n.c(),a=y(),F(o.$$.fragment)},l(t){N(e.$$.fragment,t),s=T(t),n&&n.l(t),a=T(t),N(o.$$.fragment,t)},m(t,i){U(e,t,i),D(t,s,i),n&&n.m(t,i),D(t,a,i),U(o,t,i),l=!0},p(t,[i]){n&&n.p&&(!l||i&1)&&Z(n,d,t,t[0],l?te(d,t[0],i,null):ee(t[0]),null)},i(t){l||(H(e.$$.fragment,t),H(n,t),H(o.$$.fragment,t),l=!0)},o(t){I(e.$$.fragment,t),I(n,t),I(o.$$.fragment,t),l=!1},d(t){t&&(u(s),u(a)),q(e,t),n&&n.d(t),q(o,t)}}}function _e(r,e,s){let{$$slots:a={},$$scope:o}=e;return r.$$set=l=>{"$$scope"in l&&s(0,o=l.$$scope)},[o,a]}class ge extends k{constructor(e){super(),S(this,e,_e,fe,V,{})}}export{ge as component,$e as universal};
