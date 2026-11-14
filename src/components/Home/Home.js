import React, { useState } from "react";
import "./Home.css";
import Services from "../Services/Services";
import Doctor from "../Doctor/Doctor";
import Carousel, { carouselCollections } from "../Carousel/Carousel";

const faqs = [
 ["How can I book an appointment?","Use the Book Appointment button and submit your preferred date, time and contact details. The clinic team will contact you to confirm availability."],
 ["Is my appointment confirmed immediately?","Submitting the form sends an appointment request. Your time is confirmed only after the clinic team contacts you."],
 ["Can I discuss my skin concerns before choosing a treatment?","Yes. You can select Skin Consultation and share a short note about your concern in the booking form."],
 ["Where is Aimfit Dermaluxe located?","The clinic address shown on this demo is K-12, near Redtape, Baraula, Sector 49, Noida, Uttar Pradesh – 201301."],
 ["How do I change my preferred appointment time?","Please call the clinic at 092660 84538 so the team can help with availability and changes."]
];

function FAQSection(){
 const [open,setOpen] = useState(0);
 return <section className="faq-section"><div className="container faq-layout">
  <div><div className="eyebrow">GOOD TO KNOW</div><h2 className="section-title">A few things you may want to ask.</h2><p className="section-copy">A little clarity before your first visit can make the experience feel easier.</p><a className="text-link" href="tel:09266084538">Still have a question? Call us ↗</a></div>
  <div className="faq-list">{faqs.map((item,i)=><div className={`faq-item ${open===i?"faq-open":""}`} key={item[0]}><button onClick={()=>setOpen(open===i?-1:i)}><span>{item[0]}</span><b>{open===i?"−":"+"}</b></button>{open===i&&<p>{item[1]}</p>}</div>)}</div>
 </div></section>
}

function Testimonials(){
 const quotes=[
  ["A welcoming experience","The team made the consultation process feel comfortable and easy to understand.","Clinic experience"],
  ["Personal attention matters","I appreciated being able to discuss my concerns and ask questions before deciding on next steps.","Consultation experience"],
  ["A calm space for self-care","The overall look and feel of the clinic is warm, calm and inviting.","Clinic ambience"]
 ];
 return <section className="testimonials-section"><div className="container"><div className="center-heading"><div className="eyebrow">KIND WORDS & EXPERIENCES</div><h2 className="section-title">Care should feel as good as it looks.</h2><p className="section-copy">A beautiful experience begins with listening, clarity and thoughtful attention.</p></div><div className="testimonial-grid">{quotes.map((q,i)=><article className="testimonial-card" key={q[0]}><div className="quote-mark">“</div><div className="quote-stars">★★★★★</div><h3>{q[0]}</h3><p>{q[1]}</p><small>{q[2]}</small></article>)}</div></div></section>
}

export default function Home({onNavigate}){
 return <>
  <section className="hero hero-long">
   <div className="hero-photo"></div><div className="hero-decor hero-decor-one"></div><div className="hero-decor hero-decor-two"></div>
   <div className="container hero-content">
    <div className="hero-kicker"><span></span> A NEW LEVEL OF SKINCARE <span></span></div>
    <h1>Discover the beauty<br/>of <em>feeling confident.</em></h1>
    <p>Thoughtful skin and aesthetic care, personal attention and a welcoming clinic experience — at Aimfit Dermaluxe, Noida.</p>
    <div className="hero-actions"><button className="primary-btn hero-btn" onClick={()=>onNavigate("booking")}>Book Your Consultation <span>→</span></button><a href="tel:09266084538">☎ &nbsp;092660 84538</a></div>
    <div className="hero-rating"><b>★ 4.8/5</b><span>Google rating</span><i></i><span>24 reviews</span></div>
   </div>
   <div className="hero-side-note"><span>✿</span><b>BEAUTY IS</b><small>personal</small></div>
   <a href="#welcome" className="scroll-cue">SCROLL TO EXPLORE <span>↓</span></a>
  </section>

  <section className="welcome-section container" id="welcome">
   <div className="welcome-image-wrap"><div className="welcome-image"><img src="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=1200&q=90" alt="Relaxing skincare treatment"/></div><div className="welcome-image-stamp">A LITTLE<br/><b>SELF-CARE</b><br/>GOES A LONG WAY</div></div>
   <div className="welcome-copy"><div className="eyebrow">WELCOME TO AIMFIT DERMALUXE</div><h2 className="section-title">Your skin deserves<br/><em>thoughtful care.</em></h2><p className="section-copy">Every skin journey is personal. We believe in taking time to understand your concerns, answer your questions and help you explore suitable care options with confidence.</p><p className="section-copy">Step into a calm, welcoming space where your consultation and comfort come first.</p><button className="primary-btn" onClick={()=>onNavigate("booking")}>Begin Your Journey →</button></div>
  </section>

  <div className="wide-pink-ribbon"><span>PERSONALISED ATTENTION</span><i>✦</i><span>SKINCARE & WELLNESS</span><i>✦</i><span>YOUR JOURNEY, YOUR WAY</span><i>✦</i><span>PERSONALISED ATTENTION</span></div>

  <Carousel collection={carouselCollections[0]}/>

  <section className="experience-section"><div className="container"><div className="center-heading"><div className="eyebrow">THE AIMFIT EXPERIENCE</div><h2 className="section-title">A space to pause, refresh<br/>and focus on you.</h2><p className="section-copy">From the first conversation to your visit, we want every step to feel welcoming and considered.</p></div><div className="experience-grid"><article className="experience-card experience-card-large"><img src="https://images.unsplash.com/photo-1600334129128-685c5582fd35?auto=format&fit=crop&w=1000&q=85" alt="Spa treatment room"/><div><span>01 / THE SPACE</span><h3>A calm clinic experience</h3><p>A welcoming setting where you can take a breath and focus on yourself.</p></div></article><article className="experience-card"><img src="https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?auto=format&fit=crop&w=900&q=85" alt="Skincare consultation"/><div><span>02 / THE CONVERSATION</span><h3>We start by listening</h3><p>Your concerns and questions help shape the conversation.</p></div></article><article className="experience-card"><img src="https://images.unsplash.com/photo-1556229010-6c3f2c9ca5f8?auto=format&fit=crop&w=900&q=85" alt="Skincare products"/><div><span>03 / THE NEXT STEP</span><h3>Clarity at every step</h3><p>Understand available options before deciding what feels right.</p></div></article></div></div></section>

  <Carousel collection={carouselCollections[1]}/>

  <section className="number-strip"><div className="container number-grid"><div><b>01</b><span>Personal attention</span></div><div><b>♡</b><span>Consultation-led approach</span></div><div><b>4.8<span className="tiny-star">★</span></b><span>Google rating shown</span></div><div><b>100%</b><span>Focused on your journey</span></div></div></section>

  <Services onBook={()=>onNavigate("booking")}/>

  <Carousel collection={carouselCollections[2]}/>

  <section className="doctor-feature"><div className="container doctor-feature-inner"><div className="doctor-feature-art doctor-feature-photo"><img src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=1100&q=90" alt="Representative stock portrait of a woman doctor"/><span className="doctor-photo-tag">REPRESENTATIVE IMAGE</span><div className="doctor-art-label">YOUR CONSULTATION<br/><b>STARTS HERE</b></div></div><div className="doctor-feature-copy"><div className="eyebrow">MEET YOUR DOCTOR</div><h2 className="section-title">Dr. Radha Rai</h2><p className="doctor-designation">Aimfit Dermaluxe · Noida</p><p className="section-copy">Your consultation is a chance to discuss your concerns, understand your options and ask the questions that matter to you. The clinic team can guide you through the appointment process.</p><div className="doctor-signoff">A personal conversation is the first step.</div><button className="primary-btn" onClick={()=>onNavigate("booking")}>Request a Consultation →</button></div></div></section>

  <Carousel collection={carouselCollections[3]}/>

  <section className="journey-section"><div className="container"><div className="center-heading"><div className="eyebrow">SIMPLE FROM THE START</div><h2 className="section-title">Your visit, step by step.</h2><p className="section-copy">A clear and easy way to request your appointment.</p></div><div className="journey-steps"><div className="journey-step"><b>01</b><h3>Choose a date</h3><p>Select the day and time that work best for you.</p></div><div className="journey-step"><b>02</b><h3>Share your details</h3><p>Tell us how the clinic team can reach you.</p></div><div className="journey-step"><b>03</b><h3>Get confirmation</h3><p>The team contacts you to confirm availability.</p></div><div className="journey-step"><b>04</b><h3>Visit the clinic</h3><p>Come in for your scheduled consultation.</p></div></div></div></section>

  <Testimonials/>

  <Carousel collection={carouselCollections[4]}/>

  <section className="why-section"><div className="container why-inner"><div className="why-image"><img src="https://images.unsplash.com/photo-1614859324967-bdf7f5d6e7a7?auto=format&fit=crop&w=1100&q=85" alt="Soft pink skincare setting"/></div><div><div className="eyebrow">WHY AIMFIT DERMALUXE</div><h2 className="section-title">Because your care<br/>should feel personal.</h2><div className="why-list"><div><b>01</b><span><strong>Listen first</strong><small>Your concerns guide the consultation.</small></span></div><div><b>02</b><span><strong>Clear conversations</strong><small>Understand the next steps and ask questions.</small></span></div><div><b>03</b><span><strong>Comfort matters</strong><small>A welcoming experience from the first visit.</small></span></div></div><button className="primary-btn" onClick={()=>onNavigate("booking")}>Book Your Visit →</button></div></div></section>

  <Carousel collection={carouselCollections[5]}/>

  <FAQSection/>

  <section className="journal-section"><div className="container"><div className="journal-heading"><div><div className="eyebrow">THE DERMALUXE JOURNAL</div><h2 className="section-title">Little reminders for your<br/>self-care journey.</h2></div><span>INSPIRE · LEARN · CARE</span></div><div className="journal-grid"><article><img src="https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=900&q=85" alt="Skincare routine"/><small>SKINCARE NOTES</small><h3>Start with understanding your skin</h3><p>A thoughtful consultation can help you ask the right questions about your skin goals.</p></article><article><img src="https://images.unsplash.com/photo-1601049541289-9b1b7bbbfe19?auto=format&fit=crop&w=900&q=85" alt="Self care"/><small>WELLNESS & YOU</small><h3>Make a little room for self-care</h3><p>Small moments dedicated to yourself can become a meaningful routine.</p></article><article><img src="https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?auto=format&fit=crop&w=900&q=85" alt="Beauty products"/><small>YOUR FIRST VISIT</small><h3>Questions are always welcome</h3><p>Bring your questions to your consultation and take time to understand your options.</p></article></div><p className="journal-disclaimer">Editorial-style demo content. Please confirm clinic-approved educational content before publishing.</p></div></section>

  <section className="big-cta"><div className="big-cta-image"></div><div className="container big-cta-content"><div className="eyebrow">A MOMENT FOR YOU</div><h2>Ready to feel a little<br/><em>more like yourself?</em></h2><p>Request your consultation at Aimfit Dermaluxe, Noida.</p><button className="primary-btn" onClick={()=>onNavigate("booking")}>Book Your Appointment <span>→</span></button></div></section>

  <section className="location-section container"><div><div className="eyebrow">COME SAY HELLO</div><h2 className="section-title">Find us in Noida.</h2><p className="section-copy">K-12, near Redtape, Baraula, Sector 49, Noida, Uttar Pradesh – 201301</p><p><b>Phone:</b> <a href="tel:09266084538">092660 84538</a></p><a className="map-link" target="_blank" rel="noreferrer" href="https://www.google.com/maps/search/?api=1&query=Aimfit+Dermaluxe+Noida">Get directions ↗</a></div><div className="map-placeholder"><span>📍</span><b>Aimfit Dermaluxe</b><small>Sector 49 · Noida</small><a target="_blank" rel="noreferrer" href="https://www.google.com/maps/search/?api=1&query=Aimfit+Dermaluxe+Noida">Open in Google Maps ↗</a></div></section>
 </>
}
