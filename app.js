const IMG={
  wedding:"https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1800&q=85",
  event:"https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1800&q=85",
  portrait:"https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1600&q=85",
  camera:"https://images.pexels.com/photos/2681751/pexels-photo-2681751.jpeg?auto=compress&cs=tinysrgb&w=1800",
  braid1:"https://images.pexels.com/photos/3992874/pexels-photo-3992874.jpeg?auto=compress&cs=tinysrgb&w=1600",
  braid2:"https://images.pexels.com/photos/3993449/pexels-photo-3993449.jpeg?auto=compress&cs=tinysrgb&w=1600",
  braid3:"https://images.pexels.com/photos/3065209/pexels-photo-3065209.jpeg?auto=compress&cs=tinysrgb&w=1600",
  braid4:"https://images.unsplash.com/photo-1507501336603-6e31db2be093?auto=format&fit=crop&w=1600&q=85",
  braid5:"https://images.unsplash.com/photo-1523438885200-e635ba2c371e?auto=format&fit=crop&w=1600&q=85"
};
const VIDEO="https://videos.pexels.com/video-files/39402053/16776793_2560_1440_60fps.mp4";
const sites={
  "will-cinematic":{
    person:"Will",brand:"W / Motion",kind:"will",kicker:"Photography · Film · Indianapolis",
    title:"Stories<br>in motion.",intro:"Cinematic photography and film for celebrations, brands, and stories worth keeping.",
    hero:IMG.event,video:true,about:"I approach every project like a short film—intentional, atmospheric, and centered on the people inside the frame.",
    quote:"Images should do more than document the moment. They should bring you back to it.",
    gallery:[["After Dark",IMG.event,"video"],["The Vow",IMG.wedding,"wedding"],["Editorial Study",IMG.portrait,"portrait"],["Behind the Lens",IMG.camera,"brand"],["City Stories",IMG.event,"video"],["Quiet Portraits",IMG.portrait,"portrait"]]
  },
  "will-editorial":{
    person:"Will",brand:"William Studio",kind:"will",kicker:"Photographer + filmmaker",
    title:"Honest images.<br>Beautifully told.",intro:"A modern visual studio creating warm, expressive photography and films for people and purposeful brands.",
    hero:IMG.portrait,about:"My work is rooted in observation: thoughtful direction when you need it, and room for the real moments to happen.",
    quote:"Polished enough for the wall. Honest enough to still feel like you.",
    gallery:[["A Sunday Ceremony",IMG.wedding,"wedding"],["Studio Portrait 04",IMG.portrait,"portrait"],["Night Market",IMG.event,"brand"],["Working Notes",IMG.camera,"brand"],["First Dance",IMG.wedding,"video"],["The Maker",IMG.portrait,"portrait"]]
  },
  "myla-catalog":{
    person:"Myla",brand:"Styled by Myla",kind:"myla",kicker:"Braids · protective styles · Indianapolis",
    title:"Find your<br>next look.",intro:"Clean parts, thoughtful care, and a style that feels completely like you.",
    hero:IMG.braid1,about:"Every appointment starts with healthy-hair care and ends with a style designed for your life—not just the photo.",
    quote:"Your style should feel effortless long after you leave the chair.",
    gallery:[["Knotless, waist length",IMG.braid1,"knotless"],["Soft locs",IMG.braid2,"locs"],["Feed-in detail",IMG.braid3,"feed-in"],["Natural finish",IMG.braid4,"knotless"],["Protective styling",IMG.braid5,"locs"],["Braided pony",IMG.braid3,"feed-in"]]
  },
  "myla-studio":{
    person:"Myla",brand:"MYLA / BRAID STUDIO",kind:"myla",kicker:"Plan your appointment with confidence",
    title:"Beautiful hair.<br>Clear plan.",intro:"Compare styles, understand the time and preparation, then choose an appointment that works.",
    hero:IMG.braid2,about:"A calm, professional braiding experience built around clear expectations, hair care, and beautiful results.",
    quote:"Know the price, the timing, and how to prepare—before you ever sit down.",
    gallery:[["Medium knotless",IMG.braid1,"knotless"],["Soft loc finish",IMG.braid2,"locs"],["Feed-in pattern",IMG.braid3,"feed-in"],["Long knotless",IMG.braid4,"knotless"],["Textured locs",IMG.braid5,"locs"],["Detailed cornrows",IMG.braid3,"feed-in"]]
  }
};
const id=document.documentElement.dataset.site,s=sites[id];
document.body.className=id;
const willServices=[
  {name:"Portrait Story",meta:"90 min · 1 location",price:"From $325",desc:"A directed portrait session with a curated final gallery."},
  {name:"Event Film + Photo",meta:"4 hours · hybrid coverage",price:"From $1,450",desc:"Photography and a cinematic highlight film in one package."},
  {name:"Brand Campaign",meta:"Custom scope",price:"Inquire",desc:"Creative planning, production, and polished assets for your launch."}
];
const mylaServices=[
  {name:"Medium Knotless",meta:"4–5 hours · hair included",price:"From $220",desc:"Lightweight, versatile knotless braids with a clean finish."},
  {name:"Feed-in Braids",meta:"2–3 hours · 6–8 braids",price:"From $110",desc:"Sleek, protective styling with customizable parting."},
  {name:"Soft Locs",meta:"5–6 hours · consultation",price:"From $260",desc:"A soft, dimensional loc style with natural movement."}
];
const services=s.kind==="will"?willServices:mylaServices;
const filters=s.kind==="will"?["all","wedding","portrait","video","brand"]:["all","knotless","feed-in","locs"];

document.querySelector("#app").innerHTML=`
<nav class="site-nav"><a class="brand" href="index.html">${s.brand}</a><button class="menu" aria-label="Open menu">☰</button><div class="nav-links"><a href="#work">Work</a><a href="#services">Services</a><a href="#about">About</a>${s.kind==="will"?'<button class="text-button" data-flow="recommend">Help me choose</button>':""}<button class="nav-cta" data-flow="booking">Book now</button></div></nav>
<main>
  <section class="hero">
    <div class="hero-media">${s.video?`<video autoplay muted loop playsinline poster="${s.hero}" aria-label="Sample cinematic studio showreel"><source src="${VIDEO}" type="video/mp4"></video><span class="video-label">Sample showreel · muted</span>`:`<img src="${s.hero}" alt="">`}</div>
    <div class="hero-copy"><p class="eyebrow">${s.kicker}</p><h1>${s.title}</h1><p>${s.intro}</p><div class="hero-actions"><button class="button" data-flow="booking">${s.kind==="will"?"Book a package":"Explore appointments"}</button>${s.kind==="will"?'<button class="button ghost" data-flow="inquiry">Discuss a project</button>':'<a class="button ghost" href="#work">Browse styles</a>'}</div></div>
  </section>
  ${s.kind==="will"?`<section class="section"><div class="section-head"><div><p class="eyebrow">Start your way</p><h2>Three clear paths.</h2></div><p>No account required. Choose a package, get a recommendation, or start with a custom conversation.</p></div><div class="path-grid">
    <article class="path-card"><span>01</span><h3>Book a package</h3><p>Know what you need? Compare coverage, answer a few service questions, and choose a date.</p><button class="text-button" data-flow="booking">View packages</button></article>
    <article class="path-card"><span>02</span><h3>Help me choose</h3><p>A short, optional guide recommends a fit while keeping every package available.</p><button class="text-button" data-flow="recommend">Find my fit</button></article>
    <article class="path-card"><span>03</span><h3>Discuss a project</h3><p>Share the vision, timing, location, and budget for a custom response.</p><button class="text-button" data-flow="inquiry">Start an inquiry</button></article>
  </div></section>`:""}
  <section class="section" id="work"><div class="section-head"><div><p class="eyebrow">${s.kind==="will"?"Selected work":"Style gallery"}</p><h2>${s.kind==="will"?"Recent stories.":"Choose by look."}</h2></div><p>${s.kind==="will"?"Placeholder projects demonstrate a mixed photography and film portfolio.":"Filter styles, open details, then move directly into booking."}</p></div>
    <div class="filters">${filters.map((f,i)=>`<button class="filter ${i===0?"active":""}" data-filter="${f}">${f.replace("-"," ")}</button>`).join("")}</div>
    <div class="gallery">${s.gallery.map(([name,img,cat],i)=>`<button class="gallery-card" data-cat="${cat}" data-image="${img}" aria-label="Open ${name}"><img src="${img}" alt="${name}" loading="lazy"><figcaption>${name}<br><small>${cat}</small></figcaption></button>`).join("")}</div>
  </section>
  <section class="section" id="services"><div class="section-head"><div><p class="eyebrow">${s.kind==="will"?"Coverage options":"Service menu"}</p><h2>${s.kind==="will"?"Made to fit the story.":"Pick your starting point."}</h2></div><p>Sample pricing and service details for design review only.</p></div>
    <div class="service-grid">${services.map((x,i)=>`<article class="service-card"><div class="service-meta"><span>0${i+1}</span><span>${x.meta}</span></div><h3>${x.name}</h3><p>${x.desc}</p><p class="price">${x.price}</p><button class="button" data-flow="${i===2&&s.kind==="will"?"inquiry":"booking"}" data-service="${x.name}">${i===2&&s.kind==="will"?"Request a proposal":"Choose this service"}</button></article>`).join("")}</div>
    ${s.kind==="myla"?`<div class="prep"><div><p class="eyebrow">Before your visit</p><h3>Arrive ready. Leave confident.</h3><p>Preparation details appear before checkout and again in confirmation.</p></div><ul><li>Hair washed and fully detangled</li><li>Blow-dried unless your service says otherwise</li><li>In-shop and mobile options shown per service</li><li>Exact timing confirmed before booking</li></ul></div>`:""}
  </section>
  <section class="section about" id="about"><img src="${s.kind==="will"?IMG.camera:IMG.braid3}" alt="${s.person} at work" loading="lazy"><div><p class="eyebrow">About ${s.person}</p><p class="quote">${s.quote}</p><p>${s.about}</p><button class="text-button" data-flow="${s.kind==="will"?"inquiry":"booking"}">${s.kind==="will"?"Tell me about your project":"Plan your appointment"}</button></div></section>
  <section class="section final-cta"><p class="eyebrow">Ready when you are</p><h2>${s.kind==="will"?"Let’s make something worth replaying.":"Your next style starts here."}</h2><p>${s.kind==="will"?"Choose a package or share the project you have in mind.":"Compare services, review preparation, and find your date."}</p><button class="button" data-flow="booking">Continue to Handled</button></section>
</main>
<footer class="site-footer"><span>© Prototype for ${s.brand}</span><span>Powered by Handled · <a href="index.html">Compare concepts</a></span></footer>
<div class="simulation">Interactive prototype</div><div class="modal-backdrop" id="modal"></div><div class="toast" role="status">Simulation complete — nothing was submitted.</div>`;

const modal=document.querySelector("#modal");
function openModal(html,extra=""){modal.className=`modal-backdrop open ${extra}`;modal.innerHTML=`<div class="modal" role="dialog" aria-modal="true"><button class="close" aria-label="Close">×</button>${html}</div>`;modal.querySelector(".close").onclick=closeModal;modal.onclick=e=>{if(e.target===modal)closeModal()};document.addEventListener("keydown",escapeModal);modal.querySelector("button:not(.close),input,select")?.focus()}
function closeModal(){modal.className="modal-backdrop";modal.innerHTML="";document.removeEventListener("keydown",escapeModal)}
function escapeModal(e){if(e.key==="Escape")closeModal()}
function toast(){const t=document.querySelector(".toast");t.classList.add("show");setTimeout(()=>t.classList.remove("show"),2600)}

function booking(service=services[0].name,step=1){
  const screens={
    1:`<p class="eyebrow">Handled booking · Step 1 of 3</p><h2>Choose your service</h2><div class="choice-grid">${services.map(x=>`<button class="choice ${x.name===service?"selected":""}" data-pick="${x.name}"><strong>${x.name}</strong><br><small>${x.meta} · ${x.price}</small></button>`).join("")}</div><div class="modal-actions"><span></span><button class="button next">Continue</button></div>`,
    2:`<p class="eyebrow">Handled booking · Step 2 of 3</p><h2>A few service details</h2><div class="booking-shell"><div class="booking-brand">Handled · ${s.person}</div><div class="booking-body"><strong>${service}</strong><label class="field">${s.kind==="will"?"What are you creating?":"Preferred length"}<select><option>${s.kind==="will"?"Celebration or event":"Mid-back"}</option><option>${s.kind==="will"?"Portrait session":"Waist length"}</option><option>Something else</option></select></label><label class="field">${s.kind==="will"?"Where will it take place?":"Will you need hair provided?"}<input placeholder="${s.kind==="will"?"Venue or city":"Yes / No"}"></label></div></div><div class="modal-actions"><button class="button ghost back">Back</button><button class="button next">Find a time</button></div>`,
    3:`<p class="eyebrow">Handled booking · Step 3 of 3</p><h2>Choose a time</h2><p><strong>${service}</strong> · Simulated availability</p><div class="dates">${["Thu 14","Sat 16","Tue 19","Fri 22"].map((x,i)=>`<button class="date ${i===1?"selected":""}">${x}<br><small>${i%2?"2:30 PM":"10:00 AM"}</small></button>`).join("")}</div><label class="field">Guest email or phone<input placeholder="No account required"></label><p><small>Next in the live flow: review, payment (when enabled), and confirmation.</small></p><div class="modal-actions"><button class="button ghost back">Back</button><button class="button done">Preview confirmation</button></div>`
  };
  openModal(screens[step]);
  modal.querySelectorAll("[data-pick]").forEach(b=>b.onclick=()=>booking(b.dataset.pick,1));
  modal.querySelector(".next")?.addEventListener("click",()=>booking(service,step+1));
  modal.querySelector(".back")?.addEventListener("click",()=>booking(service,step-1));
  modal.querySelector(".done")?.addEventListener("click",()=>{closeModal();toast()});
}
const questions=[
  ["What should the final result include?",["Photography","Videography","Both"]],
  ["What are you planning?",["Wedding or celebration","Portrait or milestone","Brand or commercial","Something custom"]],
  ["How much coverage feels right?",["Up to 2 hours","Half day","Full day","Not sure yet"]]
];
let answers=[];
function recommend(step=0){
  if(step<questions.length){
    const [q,choices]=questions[step];
    openModal(`<p class="eyebrow">Package guide · ${step+1} of ${questions.length}</p><div class="progress"><i style="width:${(step+1)/questions.length*100}%"></i></div><h2>${q}</h2><p>This guide is optional and does not limit the packages you can book.</p><div class="choice-grid">${choices.map(x=>`<button class="choice" data-answer="${x}">${x}</button>`).join("")}</div><div class="modal-actions">${step?'<button class="button ghost back">Back</button>':"<span></span>"}<button class="button next" disabled>Continue</button></div>`);
    modal.querySelectorAll("[data-answer]").forEach(b=>b.onclick=()=>{modal.querySelectorAll(".choice").forEach(x=>x.classList.remove("selected"));b.classList.add("selected");answers[step]=b.dataset.answer;modal.querySelector(".next").disabled=false});
    modal.querySelector(".next").onclick=()=>recommend(step+1);
    modal.querySelector(".back")?.addEventListener("click",()=>recommend(step-1));
  }else{
    const best=answers[0]==="Both"?"Event Film + Photo":answers[1]==="Brand or commercial"?"Brand Campaign":"Portrait Story";
    openModal(`<p class="eyebrow">Your recommendation</p><h2>${best}</h2><p>Based on <strong>${answers[0]?.toLowerCase()}</strong>, a <strong>${answers[1]?.toLowerCase()}</strong>, and <strong>${answers[2]?.toLowerCase()}</strong>, this option gives you a practical starting scope without locking you into more coverage than you need.</p><div class="booking-shell"><div class="booking-body"><strong>Why it fits</strong><p>It balances your requested format and coverage. Final scope and availability are confirmed before payment.</p></div></div><p><small>You can still choose any other package.</small></p><div class="modal-actions"><button class="button ghost all">See all packages</button><button class="button book">Book this fit</button></div>`);
    modal.querySelector(".book").onclick=()=>booking(best);
    modal.querySelector(".all").onclick=()=>{closeModal();document.querySelector("#services").scrollIntoView()};
  }
}
function inquiry(){
  openModal(`<p class="eyebrow">Custom project inquiry</p><h2>Tell ${s.person} what you’re imagining.</h2><p>No account required. This is separate from direct package booking.</p><form id="inquiry"><div class="choice-grid"><label class="field">Project type<select><option>Photography + video</option><option>Photography</option><option>Video</option></select></label><label class="field">Preferred date<input type="date"></label></div><label class="field">Location<input placeholder="City, venue, or undecided"></label><label class="field">Project details<textarea rows="4" placeholder="Goals, hours, deliverables, creative direction..."></textarea></label><div class="choice-grid"><label class="field">Budget range<select><option>Still deciding</option><option>Under $1,000</option><option>$1,000–$2,500</option><option>$2,500+</option></select></label><label class="field">Email or phone<input required placeholder="How should we respond?"></label></div><button class="button" type="submit">Send simulated inquiry</button></form>`);
  modal.querySelector("form").onsubmit=e=>{e.preventDefault();closeModal();toast()};
}
document.querySelector(".menu").onclick=()=>document.querySelector(".nav-links").classList.toggle("open");
document.querySelectorAll("[data-flow]").forEach(b=>b.onclick=()=>{const f=b.dataset.flow;if(f==="booking")booking(b.dataset.service||services[0].name);if(f==="recommend")recommend();if(f==="inquiry")inquiry()});
document.querySelectorAll(".filter").forEach(b=>b.onclick=()=>{document.querySelectorAll(".filter").forEach(x=>x.classList.remove("active"));b.classList.add("active");document.querySelectorAll(".gallery-card").forEach(card=>card.hidden=b.dataset.filter!=="all"&&card.dataset.cat!==b.dataset.filter)});
document.querySelectorAll(".gallery-card").forEach(card=>card.onclick=()=>openModal(`<img src="${card.dataset.image}" alt="${card.ariaLabel.replace("Open ","")}">`,"lightbox"));
