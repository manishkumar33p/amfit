import React, { useEffect, useState } from "react";
import "./Carousel.css";

export const carouselCollections = [
 {eyebrow:"A GLIMPSE OF THE EXPERIENCE",title:"Beauty, care & a little pink.",slides:[
  ["https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=1600&q=90","A moment just for you","Take a pause and make time for your skin."],
  ["https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?auto=format&fit=crop&w=1600&q=90","Thoughtful skincare","A consultation-led approach to your skin goals."],
  ["https://images.unsplash.com/photo-1600334129128-685c5582fd35?auto=format&fit=crop&w=1600&q=90","Relax. Refresh. Rejuvenate.","Enjoy a calm and welcoming clinic experience."],
  ["https://images.unsplash.com/photo-1611930022073-b7a4ba5fcccd?auto=format&fit=crop&w=1600&q=90","Your glow, your way","Care that begins by listening to you."],
  ["https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?auto=format&fit=crop&w=1600&q=90","Feel beautiful inside out","Explore personalised care options with confidence."],
  ["https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&w=1600&q=90","Make self-care a ritual","Small moments of care can make a big difference."]]},
 {eyebrow:"THE ART OF SELF-CARE",title:"Little rituals. Lovely moments.",slides:[
  ["https://images.unsplash.com/photo-1556229010-6c3f2c9ca5f8?auto=format&fit=crop&w=1600&q=90","A fresh perspective","Make space for a thoughtful skincare routine."],
  ["https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=1600&q=90","The everyday essentials","Build habits that feel right for your skin."],
  ["https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?auto=format&fit=crop&w=1600&q=90","A softer kind of glow","Explore care with patience and consistency."],
  ["https://images.unsplash.com/photo-1601049541289-9b1b7bbbfe19?auto=format&fit=crop&w=1600&q=90","A little time for you","Self-care can start with one small step."],
  ["https://images.unsplash.com/photo-1611930022073-b7a4ba5fcccd?auto=format&fit=crop&w=1600&q=90","Thoughtful details","Choose your next step with confidence."],
  ["https://images.unsplash.com/photo-1596755389378-c31d21fd1273?auto=format&fit=crop&w=1600&q=90","Your own rhythm","Your journey is personal, and so is your routine."]]},
 {eyebrow:"INSIDE THE CLINIC EXPERIENCE",title:"A welcoming space to unwind.",slides:[
  ["https://images.unsplash.com/photo-1600334129128-685c5582fd35?auto=format&fit=crop&w=1600&q=90","A calm atmosphere","A welcoming setting for your visit."],
  ["https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?auto=format&fit=crop&w=1600&q=90","Careful conversations","Your questions are an important part of care."],
  ["https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=1600&q=90","A moment to reset","Make time to focus on yourself."],
  ["https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1600&q=90","Rest and recharge","Enjoy a little pause in your day."],
  ["https://images.unsplash.com/photo-1560750588-73207b1ef5b8?auto=format&fit=crop&w=1600&q=90","The details matter","Comfort and clarity at every step."],
  ["https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?auto=format&fit=crop&w=1600&q=90","Welcome to your moment","Your clinic visit starts with a conversation."]]},
 {eyebrow:"SKINCARE INSPIRATION",title:"A fresh take on feeling radiant.",slides:[
  ["https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=1600&q=90","Care that feels considered","Start with what your skin needs."],
  ["https://images.unsplash.com/photo-1556229010-6c3f2c9ca5f8?auto=format&fit=crop&w=1600&q=90","Keep it personal","Your concerns deserve individual attention."],
  ["https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?auto=format&fit=crop&w=1600&q=90","A little glow of joy","Feel confident in your own skin."],
  ["https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?auto=format&fit=crop&w=1600&q=90","The beauty of consistency","Thoughtful routines begin with small steps."],
  ["https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&w=1600&q=90","Your skin, your story","There is no one-size-fits-all journey."],
  ["https://images.unsplash.com/photo-1601049541289-9b1b7bbbfe19?auto=format&fit=crop&w=1600&q=90","Choose what feels right","Ask questions and explore your options."]]},
 {eyebrow:"THE PINK EDIT",title:"Soft tones. Beautiful details.",slides:[
  ["https://images.unsplash.com/photo-1611930022073-b7a4ba5fcccd?auto=format&fit=crop&w=1600&q=90","The little things","Make room for moments that make you smile."],
  ["https://images.unsplash.com/photo-1596755389378-c31d21fd1273?auto=format&fit=crop&w=1600&q=90","A softer routine","Find a rhythm that works for you."],
  ["https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?auto=format&fit=crop&w=1600&q=90","Beauty in simplicity","Keep your care thoughtful and personal."],
  ["https://images.unsplash.com/photo-1556229010-6c3f2c9ca5f8?auto=format&fit=crop&w=1600&q=90","Your daily pause","A small ritual can be a lovely reset."],
  ["https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=1600&q=90","A fresh start","Let your next chapter begin with a conversation."],
  ["https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?auto=format&fit=crop&w=1600&q=90","Feel like you","Celebrate your own version of confidence."]]},
 {eyebrow:"YOUR SELF-CARE GALLERY",title:"Make time for what matters.",slides:[
  ["https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=1600&q=90","A welcoming hello","Your experience begins with a warm welcome."],
  ["https://images.unsplash.com/photo-1600334129128-685c5582fd35?auto=format&fit=crop&w=1600&q=90","Slow down a little","Give yourself a moment to pause."],
  ["https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?auto=format&fit=crop&w=1600&q=90","Listen to your skin","Understand your concerns before choosing a path."],
  ["https://images.unsplash.com/photo-1601049541289-9b1b7bbbfe19?auto=format&fit=crop&w=1600&q=90","A moment of calm","Make self-care part of your story."],
  ["https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1600&q=90","Rest, reset, repeat","Your wellbeing deserves attention."],
  ["https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&w=1600&q=90","The journey is yours","Take the next step when you are ready."]]}
];

export default function Carousel({collection}){
 const [active,setActive]=useState(0);
 useEffect(()=>{const timer=setInterval(()=>setActive(v=>(v+1)%collection.slides.length),4200);return()=>clearInterval(timer)},[collection]);
 const previous=()=>setActive(v=>(v-1+collection.slides.length)%collection.slides.length);
 const next=()=>setActive(v=>(v+1)%collection.slides.length);
 return <section className="gallery-section"><div className="container">
  <div className="gallery-heading"><div><div className="eyebrow">{collection.eyebrow}</div><h2 className="section-title">{collection.title}</h2></div><div className="gallery-arrows"><button onClick={previous} aria-label="Previous photo">←</button><button onClick={next} aria-label="Next photo">→</button></div></div>
  <div className="gallery-frame">{collection.slides.map((slide,index)=><div className={`gallery-slide ${index===active?"is-active":""}`} key={slide[0]} aria-hidden={index!==active}><img src={slide[0]} alt={slide[1]}/><div className="gallery-caption"><span>0{index+1} / 06</span><h3>{slide[1]}</h3><p>{slide[2]}</p></div></div>)}<div className="gallery-counter">{String(active+1).padStart(2,"0")} <i>/ 06</i></div></div>
  <div className="gallery-dots">{collection.slides.map((s,i)=><button key={s[0]} className={i===active?"active":""} onClick={()=>setActive(i)} aria-label={`Show photo ${i+1}`}/>)}</div>
 </div></section>
}
