import React from "react";
import "./Services.css";
const services=[
 ["01","Skin Consultation","A one-to-one discussion to understand your skin concerns and care goals."],
 ["02","Skin & Glow Care","Explore suitable skin-care options based on your consultation."],
 ["03","Aesthetic Care","Personalised guidance for aesthetic and appearance-related concerns."],
 ["04","Wellness Guidance","Supportive care conversations focused on your individual needs."]
];
export default function Services({onBook}){return <section className="services-section" id="treatments"><div className="container"><div className="eyebrow">OUR APPROACH</div><h2 className="section-title">Care designed around you.</h2><p className="section-copy">Start with a consultation. The right treatment plan should always begin with understanding your needs.</p><div className="service-grid">{services.map(s=><article className="service-card" key={s[0]}><span>{s[0]}</span><h3>{s[1]}</h3><p>{s[2]}</p><button onClick={onBook}>Enquire / Book ↗</button></article>)}</div></div></section>}
