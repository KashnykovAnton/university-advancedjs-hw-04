import{a}from"./vendor-4c86d853.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const c="https://pixabay.com/api/",f="23089683-10e6383e94187ff47334541d4",l={key:f,per_page:40,image_type:"photo",orientation:"horizontal",safesearch:!0},u=new URLSearchParams(l);async function p(i,r){const{data:o}=await a(`${c}?${u}&page=${i}&q=${r}`);return o}export{p as f};
//# sourceMappingURL=api-bb30e552.js.map