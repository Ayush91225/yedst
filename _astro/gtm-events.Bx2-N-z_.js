function r({eventName:o,eventParams:n,targetUrl:a,eventTimeout:t=1e3}){if(!a){console.error("trackCtaEventNavigation requires a targetUrl.");return}const e=t+100;let i=setTimeout(()=>{console.warn(`GTM eventCallback for "${o}" timed out or GTM not loaded. Navigating via fallback.`),window.location.href=a},e);window.dataLayer=window.dataLayer||[],window.dataLayer.push({event:o,eventParams:n,eventCallback:function(){clearTimeout(i),window.location.href=a},eventTimeout:t},{eventParams:void 0})}export{r as t};
