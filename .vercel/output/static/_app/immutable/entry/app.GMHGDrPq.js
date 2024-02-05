import{s as B,h as U,o as q,i as D,t as j}from"../chunks/scheduler.CisLO15p.js";import{S as z,i as M,s as W,v as h,n as F,b as k,f as E,z as L,t as v,d as g,e as G,c as H,a as J,r as I,A as d,k as K,l as Q,p as X,B as A,C as w,g as b,h as O,m as R,j as P}from"../chunks/index.twK4Xdmn.js";const Y="modulepreload",Z=function(a,e){return new URL(a,e).href},T={},f=function(e,i,n){let r=Promise.resolve();if(i&&i.length>0){const u=document.getElementsByTagName("link");r=Promise.all(i.map(t=>{if(t=Z(t,n),t in T)return;T[t]=!0;const s=t.endsWith(".css"),_=s?'[rel="stylesheet"]':"";if(!!n)for(let m=u.length-1;m>=0;m--){const p=u[m];if(p.href===t&&(!s||p.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${t}"]${_}`))return;const o=document.createElement("link");if(o.rel=s?"stylesheet":Y,s||(o.as="script",o.crossOrigin=""),o.href=t,document.head.appendChild(o),s)return new Promise((m,p)=>{o.addEventListener("load",m),o.addEventListener("error",()=>p(new Error(`Unable to preload CSS for ${t}`)))})}))}return r.then(()=>e()).catch(u=>{const t=new Event("vite:preloadError",{cancelable:!0});if(t.payload=u,window.dispatchEvent(t),!t.defaultPrevented)throw u})},se={};function $(a){let e,i,n;var r=a[1][0];function u(t,s){return{props:{data:t[3],form:t[2]}}}return r&&(e=w(r,u(a)),a[12](e)),{c(){e&&b(e.$$.fragment),i=h()},l(t){e&&O(e.$$.fragment,t),i=h()},m(t,s){e&&R(e,t,s),k(t,i,s),n=!0},p(t,s){if(s&2&&r!==(r=t[1][0])){if(e){A();const _=e;E(_.$$.fragment,1,0,()=>{P(_,1)}),L()}r?(e=w(r,u(t)),t[12](e),b(e.$$.fragment),v(e.$$.fragment,1),R(e,i.parentNode,i)):e=null}else if(r){const _={};s&8&&(_.data=t[3]),s&4&&(_.form=t[2]),e.$set(_)}},i(t){n||(e&&v(e.$$.fragment,t),n=!0)},o(t){e&&E(e.$$.fragment,t),n=!1},d(t){t&&g(i),a[12](null),e&&P(e,t)}}}function x(a){let e,i,n;var r=a[1][0];function u(t,s){return{props:{data:t[3],$$slots:{default:[ee]},$$scope:{ctx:t}}}}return r&&(e=w(r,u(a)),a[11](e)),{c(){e&&b(e.$$.fragment),i=h()},l(t){e&&O(e.$$.fragment,t),i=h()},m(t,s){e&&R(e,t,s),k(t,i,s),n=!0},p(t,s){if(s&2&&r!==(r=t[1][0])){if(e){A();const _=e;E(_.$$.fragment,1,0,()=>{P(_,1)}),L()}r?(e=w(r,u(t)),t[11](e),b(e.$$.fragment),v(e.$$.fragment,1),R(e,i.parentNode,i)):e=null}else if(r){const _={};s&8&&(_.data=t[3]),s&8215&&(_.$$scope={dirty:s,ctx:t}),e.$set(_)}},i(t){n||(e&&v(e.$$.fragment,t),n=!0)},o(t){e&&E(e.$$.fragment,t),n=!1},d(t){t&&g(i),a[11](null),e&&P(e,t)}}}function ee(a){let e,i,n;var r=a[1][1];function u(t,s){return{props:{data:t[4],form:t[2]}}}return r&&(e=w(r,u(a)),a[10](e)),{c(){e&&b(e.$$.fragment),i=h()},l(t){e&&O(e.$$.fragment,t),i=h()},m(t,s){e&&R(e,t,s),k(t,i,s),n=!0},p(t,s){if(s&2&&r!==(r=t[1][1])){if(e){A();const _=e;E(_.$$.fragment,1,0,()=>{P(_,1)}),L()}r?(e=w(r,u(t)),t[10](e),b(e.$$.fragment),v(e.$$.fragment,1),R(e,i.parentNode,i)):e=null}else if(r){const _={};s&16&&(_.data=t[4]),s&4&&(_.form=t[2]),e.$set(_)}},i(t){n||(e&&v(e.$$.fragment,t),n=!0)},o(t){e&&E(e.$$.fragment,t),n=!1},d(t){t&&g(i),a[10](null),e&&P(e,t)}}}function V(a){let e,i=a[6]&&y(a);return{c(){e=G("div"),i&&i.c(),this.h()},l(n){e=H(n,"DIV",{id:!0,"aria-live":!0,"aria-atomic":!0,style:!0});var r=J(e);i&&i.l(r),r.forEach(g),this.h()},h(){I(e,"id","svelte-announcer"),I(e,"aria-live","assertive"),I(e,"aria-atomic","true"),d(e,"position","absolute"),d(e,"left","0"),d(e,"top","0"),d(e,"clip","rect(0 0 0 0)"),d(e,"clip-path","inset(50%)"),d(e,"overflow","hidden"),d(e,"white-space","nowrap"),d(e,"width","1px"),d(e,"height","1px")},m(n,r){k(n,e,r),i&&i.m(e,null)},p(n,r){n[6]?i?i.p(n,r):(i=y(n),i.c(),i.m(e,null)):i&&(i.d(1),i=null)},d(n){n&&g(e),i&&i.d()}}}function y(a){let e;return{c(){e=K(a[7])},l(i){e=Q(i,a[7])},m(i,n){k(i,e,n)},p(i,n){n&128&&X(e,i[7])},d(i){i&&g(e)}}}function te(a){let e,i,n,r,u;const t=[x,$],s=[];function _(o,m){return o[1][1]?0:1}e=_(a),i=s[e]=t[e](a);let c=a[5]&&V(a);return{c(){i.c(),n=W(),c&&c.c(),r=h()},l(o){i.l(o),n=F(o),c&&c.l(o),r=h()},m(o,m){s[e].m(o,m),k(o,n,m),c&&c.m(o,m),k(o,r,m),u=!0},p(o,[m]){let p=e;e=_(o),e===p?s[e].p(o,m):(A(),E(s[p],1,1,()=>{s[p]=null}),L(),i=s[e],i?i.p(o,m):(i=s[e]=t[e](o),i.c()),v(i,1),i.m(n.parentNode,n)),o[5]?c?c.p(o,m):(c=V(o),c.c(),c.m(r.parentNode,r)):c&&(c.d(1),c=null)},i(o){u||(v(i),u=!0)},o(o){E(i),u=!1},d(o){o&&(g(n),g(r)),s[e].d(o),c&&c.d(o)}}}function ie(a,e,i){let{stores:n}=e,{page:r}=e,{constructors:u}=e,{components:t=[]}=e,{form:s}=e,{data_0:_=null}=e,{data_1:c=null}=e;U(n.page.notify);let o=!1,m=!1,p=null;q(()=>{const l=n.page.subscribe(()=>{o&&(i(6,m=!0),j().then(()=>{i(7,p=document.title||"untitled page")}))});return i(5,o=!0),l});function N(l){D[l?"unshift":"push"](()=>{t[1]=l,i(0,t)})}function S(l){D[l?"unshift":"push"](()=>{t[0]=l,i(0,t)})}function C(l){D[l?"unshift":"push"](()=>{t[0]=l,i(0,t)})}return a.$$set=l=>{"stores"in l&&i(8,n=l.stores),"page"in l&&i(9,r=l.page),"constructors"in l&&i(1,u=l.constructors),"components"in l&&i(0,t=l.components),"form"in l&&i(2,s=l.form),"data_0"in l&&i(3,_=l.data_0),"data_1"in l&&i(4,c=l.data_1)},a.$$.update=()=>{a.$$.dirty&768&&n.page.set(r)},[t,u,s,_,c,o,m,p,n,r,N,S,C]}class oe extends z{constructor(e){super(),M(this,e,ie,te,B,{stores:8,page:9,constructors:1,components:0,form:2,data_0:3,data_1:4})}}const ae=[()=>f(()=>import("../nodes/0.csYWeQFC.js"),__vite__mapDeps([0,1,2]),import.meta.url),()=>f(()=>import("../nodes/1.4ozTKCkn.js"),__vite__mapDeps([3,1,2,4]),import.meta.url),()=>f(()=>import("../nodes/2.0Bz5TL2s.js"),__vite__mapDeps([5,1,2,6,7,8,9,10]),import.meta.url),()=>f(()=>import("../nodes/3.Zh55WRri.js"),__vite__mapDeps([11,1,2,6,7,12,8,9,13]),import.meta.url),()=>f(()=>import("../nodes/4.K5tIoQIH.js"),__vite__mapDeps([14,1,2,6,7,15]),import.meta.url),()=>f(()=>import("../nodes/5.x574yqj9.js"),__vite__mapDeps([16,1,2,12,6,7,17]),import.meta.url),()=>f(()=>import("../nodes/6.XMGycLDJ.js"),__vite__mapDeps([18,1,2,6,7,19]),import.meta.url),()=>f(()=>import("../nodes/7.M23VrAEr.js"),__vite__mapDeps([20,1,2,21]),import.meta.url),()=>f(()=>import("../nodes/8.EflHusD2.js"),__vite__mapDeps([22,1,2,6,7,8,9,21,23]),import.meta.url),()=>f(()=>import("../nodes/9.qtwenEC9.js"),__vite__mapDeps([24,1,2,6,7,8,9,25]),import.meta.url),()=>f(()=>import("../nodes/10.bxe09dig.js"),__vite__mapDeps([26,1,2,6,7,27]),import.meta.url),()=>f(()=>import("../nodes/11.wbVLcjus.js"),__vite__mapDeps([28,1,2,6,7,29]),import.meta.url),()=>f(()=>import("../nodes/12.guocDZ7u.js"),__vite__mapDeps([30,1,2,6,7,31]),import.meta.url),()=>f(()=>import("../nodes/13.vyDVkbGM.js"),__vite__mapDeps([32,1,2,6,7,33]),import.meta.url),()=>f(()=>import("../nodes/14.aejNgh2a.js"),__vite__mapDeps([34,1,2,6,7,8,9,35]),import.meta.url),()=>f(()=>import("../nodes/15.YIDE8HHc.js"),__vite__mapDeps([36,1,2,6,7,12,8,9,37]),import.meta.url),()=>f(()=>import("../nodes/16.k3QKNj3N.js"),__vite__mapDeps([38,1,2,12,6,7,8,9,39]),import.meta.url),()=>f(()=>import("../nodes/17.jk2Aw2S1.js"),__vite__mapDeps([40,1,2,12,6,7,8,9,41]),import.meta.url),()=>f(()=>import("../nodes/18.YUMGyb9u.js"),__vite__mapDeps([42,1,2,12,6,7,8,9,43]),import.meta.url),()=>f(()=>import("../nodes/19.2A6OshcT.js"),__vite__mapDeps([44,1,2,8,9,6,7,45]),import.meta.url)],_e=[],le={"/":[-3],"/artikelen":[-4],"/artikelen/interview":[4],"/artikelen/tekenenspelen":[-6],"/artikelen/tekenmethode":[-7],"/carousel":[-8],"/kennisclips":[-9],"/minicursussen":[9],"/minicursussen/basisvormen":[10],"/minicursussen/handlettering":[11],"/minicursussen/mensen-tekenen":[12],"/minicursussen/structuur-en-kleur":[13],"/over":[14],"/tekenmethodes":[-16],"/tekenmethodes/[slug]":[-17],"/tekenmethodes/[slug]/stappenplan":[-18],"/tekenmethodes/[slug]/voorbeelden":[-19],"/tekenruimte":[19]},ue={handleError:({error:a})=>{console.error(a)}};export{le as dictionary,ue as hooks,se as matchers,ae as nodes,oe as root,_e as server_loads};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["../nodes/0.csYWeQFC.js","../chunks/scheduler.CisLO15p.js","../chunks/index.twK4Xdmn.js","../nodes/1.4ozTKCkn.js","../chunks/entry.7jxS7SXT.js","../nodes/2.0Bz5TL2s.js","../chunks/header.RNyCXWo2.js","../assets/header.KLtqvJeT.css","../chunks/footer.4Ce-n7mO.js","../assets/footer.zHsNu2no.css","../assets/2.nXSSKCp6.css","../nodes/3.Zh55WRri.js","../chunks/each.-oqiv04n.js","../assets/3.-1aQzt5C.css","../nodes/4.K5tIoQIH.js","../assets/4.LcNDamtW.css","../nodes/5.x574yqj9.js","../assets/5.ZgEGjh_S.css","../nodes/6.XMGycLDJ.js","../assets/6.DoRfybDt.css","../nodes/7.M23VrAEr.js","../chunks/carousel.XCRzeT6i.js","../nodes/8.EflHusD2.js","../assets/8.fsnuZfqq.css","../nodes/9.qtwenEC9.js","../assets/9.lkBA_L_D.css","../nodes/10.bxe09dig.js","../assets/10.iZLSIb1Y.css","../nodes/11.wbVLcjus.js","../assets/11.abfAlOij.css","../nodes/12.guocDZ7u.js","../assets/12.sa-IXysz.css","../nodes/13.vyDVkbGM.js","../assets/13.OZb6_1a2.css","../nodes/14.aejNgh2a.js","../assets/14.2I64SSMR.css","../nodes/15.YIDE8HHc.js","../assets/15.JxYmCy6V.css","../nodes/16.k3QKNj3N.js","../assets/16.PXI4Z7Tm.css","../nodes/17.jk2Aw2S1.js","../assets/17.0MxMTT9f.css","../nodes/18.YUMGyb9u.js","../assets/18.1oubb_4v.css","../nodes/19.2A6OshcT.js","../assets/19.AFj0rZp-.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
