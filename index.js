import{S as f,i as n}from"./assets/vendor-BrddEoy-.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function a(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=a(e);fetch(e.href,t)}})();const p="53143785-3d26ca9fafc478fbd760d25ea",m="https://pixabay.com/api/";async function h(o){const r=new URLSearchParams({key:p,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0}),a=await fetch(`${m}?${r}`);if(!a.ok)throw new Error("Error fetching images");return a.json()}function y(o){return o.map(({webformatURL:r,largeImageURL:a,tags:i,likes:e,views:t,comments:s,downloads:d})=>`
  <a class="gallery-item" href="${a}" data-caption="${i}">
    <div class="photo-card">
      <img src="${r}" alt="${i}" loading="lazy" />
      <ul class="image-stats">
        <li><span>Likes:</span> ${e}</li>
        <li><span>Views:</span> ${t}</li>
        <li><span>Comments:</span> ${s}</li>
        <li><span>Downloads:</span> ${d}</li>
      </ul>
    </div>
  </a>`).join("")}function g(o){o.innerHTML=""}function L(o,r){o.insertAdjacentHTML("beforeend",r)}const l=document.querySelector("#search-form"),u=document.querySelector(".gallery"),c=document.querySelector(".loader");let w=new f(".gallery a",{captionsData:"alt",captionPosition:"bottom",captionDelay:250});l.addEventListener("submit",async o=>{o.preventDefault();const r=l.elements.query.value.trim();if(r===""){n.warning({title:"Warning",message:"Please enter a search query",position:"topRight"});return}g(u),c.classList.remove("hidden");try{const a=await h(r);if(c.classList.add("hidden"),a.hits.length===0){n.info({title:"No results",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}const i=y(a.hits);L(u,i),w.refresh()}catch{c.classList.add("hidden"),n.error({title:"Error",message:"Something went wrong. Please try again later.",position:"topRight"})}});
//# sourceMappingURL=index.js.map
