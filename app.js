import {supabase} from "./supabase.js";
const esc=v=>String(v??"").replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;"}[c]));
const date=v=>v?new Intl.DateTimeFormat("en-NG",{day:"2-digit",month:"short",year:"numeric"}).format(new Date(v)):"";
async function projects(){
 const t=document.querySelector("[data-project-list]"); if(!t)return;
 const {data,error}=await supabase.from("projects").select("*").eq("published",true).order("created_at",{ascending:false});
 if(error){t.innerHTML="<div class='list-empty'>Projects could not load.</div>";return}
 if(!data?.length){t.innerHTML="<div class='list-empty'>No published projects yet. Add one in Admin.</div>";return}
 t.innerHTML=data.map(x=>`<a class="project-card" href="/work/${esc(x.slug)}.html"><div class="card-media">${x.cover_image?`<img src="${esc(x.cover_image)}" alt="${esc(x.title)}">`:"PROJECT VISUAL"}</div><div class="card-body"><div class="card-meta">${esc((x.tags||[]).join(" · "))}</div><h3>${esc(x.title)}</h3><p>${esc(x.description)}</p><span class="arrow">View case study →</span></div></a>`).join("");
}
async function articles(){
 const t=document.querySelector("[data-article-list]");if(!t)return;
 const {data}=await supabase.from("articles").select("*").eq("published",true).order("published_at",{ascending:false});
 t.innerHTML=data?.length?data.map(x=>`<a class="article-row" href="/articles/${esc(x.slug)}.html"><span class="article-date">${date(x.published_at||x.created_at)}</span><div><h3>${esc(x.title)}</h3><p>${esc(x.excerpt)}</p></div><span class="arrow-link">Read →</span></a>`).join(""):"<div class='list-empty'>No published articles yet.</div>";
}
async function settings(){
 const {data}=await supabase.from("site_settings").select("value").eq("key","homepage").maybeSingle();if(!data?.value)return;
 const v=typeof data.value==="string"?JSON.parse(data.value):data.value;
 document.querySelectorAll("[data-currently]").forEach(x=>x.textContent=v.currently||x.textContent);
 document.querySelectorAll("[data-current-copy]").forEach(x=>x.textContent=v.current_copy||x.textContent);
 document.querySelectorAll("[data-hero-title]").forEach(x=>x.textContent=v.hero_title||x.textContent);
}
async function feed(){
 const t=document.querySelector("[data-feed]");if(!t)return;
 const {data}=await supabase.from("feed_posts").select("*").order("created_at",{ascending:false});
 t.innerHTML=data?.length?data.map(x=>`<article class="article-row"><span class="article-date">${date(x.created_at)}</span><div><h3>${esc(x.title)}</h3><p>${esc(x.content)}</p></div><span class="arrow-link">${esc((x.tags||[]).join(" "))}</span></article>`).join(""):"<div class='list-empty'>Your build log is waiting for its first post.</div>";
}
async function handles(){
 const t=document.querySelector("[data-handles]");if(!t)return;
 const {data}=await supabase.from("handles").select("*").order("platform");
 t.innerHTML=data?.length?data.map(x=>`<a class="mini" href="${esc(x.url||"#")}" target="_blank" rel="noopener"><b>${esc(x.platform)}</b><span>${esc(x.label||x.url||"")}</span></a>`).join(""):"<div class='list-empty'>Handles can be added from Admin.</div>";
}
document.querySelectorAll("[data-year]").forEach(x=>x.textContent=new Date().getFullYear());
projects();articles();settings();feed();handles();
