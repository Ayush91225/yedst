import{i as u,f as m,aq as h,h as y,d as _,a as $,j as v,ag as g}from"./template.C7aDORIM.js";import{h as b,m as x,u as j}from"./render.ByI1RcCX.js";import"./events.D6IWDMej.js";function c(e){return(a,...d)=>{var n=e(...d),t;if(y)t=_,$();else{var i=n.render().trim(),o=u(i);t=v(o),a.before(t)}const s=n.setup?.(t);m(t,t),typeof s=="function"&&h(s)}}const p=new WeakMap,M=e=>async(a,d,n,{client:t})=>{if(!e.hasAttribute("ssr"))return;let i,o,s={};for(const[r,f]of Object.entries(n))o??={},r==="default"?(o.default=!0,i=c(()=>({render:()=>`<astro-slot>${f}</astro-slot>`}))):o[r]=c(()=>({render:()=>`<astro-slot name="${r}">${f}</astro-slot>`})),r==="default"?s.children=c(()=>({render:()=>`<astro-slot>${f}</astro-slot>`})):s[r]=c(()=>({render:()=>`<astro-slot name="${r}">${f}</astro-slot>`}));const l={...d,children:i,$$slots:o,...s};if(p.has(e))p.get(e).setProps(l);else{const r=k(a,e,l,t!=="only");p.set(e,r),e.addEventListener("astro:unmount",()=>r.destroy(),{once:!0})}};function k(e,a,d,n){let t=g(d);const i=n?b:x;n||(a.innerHTML="");const o=i(e,{target:a,props:t});return{setProps(s){Object.assign(t,s);for(const l in t)l in s||delete t[l]},destroy(){j(o)}}}export{M as default};
