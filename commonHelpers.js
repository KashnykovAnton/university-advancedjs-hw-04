import{a as u}from"./assets/vendor-a61d8330.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const l of t.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&i(l)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();const a="23089683-10e6383e94187ff47334541d4",f="https://pixabay.com/api/",s={input:document.querySelector("input"),button:document.querySelector("button"),list:document.querySelector(".img-list")};s.input.addEventListener("input",d);s.button.addEventListener("click",p);let c="";function d(o){o.preventDefault(),c=o.target.value}function p(o){o.preventDefault(),m(c)}async function m(o){return await u(`${f}?key=${a}&per_page=40&image_type=photo&orientation=horizontal&safesearch=true&q=${o}`).then(({data:n})=>g(n)).catch(n=>console.log(n.message)).finally(()=>console.log("Finally"))}function g(o){s.list.innerHTML="";const n="",{hits:r}=o;console.log(r),r.map(({largeImageURL:i,tags:e})=>{const t=`<li>
      <img src=${i} alt=${e} width="200px">
    </li>`;s.list.insertAdjacentHTML("beforeend",t)}),console.log("markup: ",n)}
//# sourceMappingURL=commonHelpers.js.map
