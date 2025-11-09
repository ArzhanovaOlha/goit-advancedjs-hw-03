import{S as f,i as n}from"./assets/vendor-BrddEoy-.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&a(s)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();const p="53143785-3d26ca9fafc478fbd760d25ea",m="https://pixabay.com/api/";async function h(o){const r=new URLSearchParams({key:p,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0}),i=await fetch(`${m}?${r}`);if(!i.ok)throw new Error("Error fetching images");return i.json()}function g(o){return o.map(({webformatURL:r,largeImageURL:i,tags:a,likes:e,views:t,comments:s,downloads:d})=>`
  <li class="gallery-item">
    <div class="photo-card">
      <a href="${i}" data-caption="${a}" class="img-link"><img src="${r}" alt="${a}" loading="lazy" /></a>
      <ul class="image-stats">
        <li><span>Likes:</span> ${e}</li>
        <li><span>Views:</span> ${t}</li>
        <li><span>Comments:</span> ${s}</li>
        <li><span>Downloads:</span> ${d}</li>
      </ul>
    </div>
  </li>`).join("")}function y(o){o.innerHTML=""}function L(o,r){o.insertAdjacentHTML("beforeend",r)}const c=document.querySelector("#search-form"),u=document.querySelector(".gallery"),l=document.querySelector(".loader");let w=new f(".gallery a",{captionsData:"alt",captionPosition:"bottom",captionDelay:250});c.addEventListener("submit",async o=>{o.preventDefault();const r=c.elements.query.value.trim();if(r===""){n.warning({title:"Warning",message:"Please enter a search query",position:"topRight"});return}y(u),l.classList.remove("hidden");try{const i=await h(r);if(l.classList.add("hidden"),i.hits.length===0){n.info({title:"No results",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}const a=g(i.hits);L(u,a),w.refresh()}catch{l.classList.add("hidden"),n.error({title:"Error",message:"Something went wrong. Please try again later.",position:"topRight"})}});
//# sourceMappingURL=index.js.map
