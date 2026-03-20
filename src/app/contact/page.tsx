'use client';

import { motion } from 'framer-motion';
import { ArrowDown, MapPin, Phone, Mail, Globe, MessageSquarePlus, Plus } from 'lucide-react';

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.8 }
};

const campuses = [
  { name: "Global Headquarters", loc: "New York, USA", img: "https://images.unsplash.com/photo-1496442226666-8d4de0ae20ad?auto=format&fit=crop&q=80&w=800", times: "Sun 9AM & 11AM" },
  { name: "European Center", loc: "London, UK", img: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&q=80&w=800", times: "Sun 10AM" },
  { name: "African Outreach Hub", loc: "Nairobi, Kenya", img: "https://images.unsplash.com/photo-1547471080-7cb2ac647a50?auto=format&fit=crop&q=80&w=800", times: "Sun 8AM & 10AM" },
  { name: "South American Campus", loc: "São Paulo, Brazil", img: "https://images.unsplash.com/photo-1483729558449-99ef09a8c325?auto=format&fit=crop&q=80&w=800", times: "Sun 10AM & 6PM" }
];

const faqs = [
  { q: "What should I wear to a Sunday gathering?", a: "Come exactly as you are. You'll see everything from suits to jeans and t-shirts. We care about you, not what you're wearing." },
  { q: "Do you have programs for children?", a: "Yes! Our Peace Kids ministry offers age-appropriate learning in a safe, fun, and secure environment during all adult services." },
  { q: "How can I volunteer for global missions?", a: "Visit our Ministries page to learn about our outreach programs, or fill out the contact form below and select 'Global Missions' as your inquiry type." },
  { q: "Is leadership counseling available?", a: "We offer pastoral care and professional counseling referrals for couples, individuals, and families. Please reach out to our Pastoral Care team." }
];

export default function ContactPage() {
  return (
    <div className="flex flex-col w-full bg-cream min-h-screen">
      
      {/* 1. Hero / Quick Info (100vh) */}
      <section className="relative min-h-screen w-full flex flex-col justify-center items-center text-center px-6 md:px-12 bg-primary-900 overflow-hidden">
        {/* Abstract Background Element */}
        <div className="absolute top-0 right-0 w-[80vw] h-[80vw] rounded-full bg-light-sage/10 blur-[150px] -z-10 translate-x-1/3 -translate-y-1/3" />
        
        <div className="relative z-10 max-w-5xl mx-auto flex flex-col items-center">
          <motion.div
             initial={{ opacity: 0, scale: 0.95 }}
             animate={{ opacity: 1, scale: 1 }}
             transition={{ duration: 1 }}
          >
             <h2 className="text-[12px] font-bold uppercase tracking-[0.4em] text-light-sage mb-6">Get In Touch</h2>
             <h1 className="font-serif text-6xl md:text-8xl lg:text-9xl font-bold text-cream mb-8 leading-none">
                Reach The Community.
             </h1>
             <p className="text-xl md:text-2xl font-medium leading-relaxed text-cream/70 mb-16 max-w-2xl mx-auto">
                Whether you have a question, need prayer, or want to partner with our global initiatives, our doors and inboxes are always open.
             </p>

             {/* Quick Connect Cards */}
             <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full text-left">
                <div className="bg-white/5 border border-white/10 p-6 rounded-2xl flex items-start gap-4 hover:bg-white/10 transition-colors cursor-pointer">
                   <div className="w-12 h-12 bg-light-sage/20 rounded-full flex items-center justify-center shrink-0">
                      <Phone className="w-5 h-5 text-light-sage" />
                   </div>
                   <div>
                      <h4 className="font-bold text-cream mb-1">Call Us</h4>
                      <p className="text-sm text-cream/60">+1 (800) PEACE-NOW</p>
                   </div>
                </div>
                <div className="bg-white/5 border border-white/10 p-6 rounded-2xl flex items-start gap-4 hover:bg-white/10 transition-colors cursor-pointer">
                   <div className="w-12 h-12 bg-light-sage/20 rounded-full flex items-center justify-center shrink-0">
                      <Mail className="w-5 h-5 text-light-sage" />
                   </div>
                   <div>
                      <h4 className="font-bold text-cream mb-1">Email Us</h4>
                      <p className="text-sm text-cream/60">hello@globalpeace.org</p>
                   </div>
                </div>
                <div className="bg-white/5 border border-white/10 p-6 rounded-2xl flex items-start gap-4 hover:bg-white/10 transition-colors cursor-pointer">
                   <div className="w-12 h-12 bg-light-sage/20 rounded-full flex items-center justify-center shrink-0">
                      <MessageSquarePlus className="w-5 h-5 text-light-sage" />
                   </div>
                   <div>
                      <h4 className="font-bold text-cream mb-1">Pastoral Care</h4>
                      <p className="text-sm text-cream/60">Request Prayer</p>
                   </div>
                </div>
             </div>
          </motion.div>
        </div>
        
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 text-light-sage animate-bounce">
            <ArrowDown className="w-8 h-8 opacity-70" />
        </div>
      </section>

      {/* 2. Campuses & Locations (100vh Interactive Cards) */}
      <section className="min-h-screen flex flex-col justify-center py-24 px-6 md:px-12 bg-cream text-primary-900 border-b border-muted-teal/20">
        <div className="max-w-7xl mx-auto w-full">
           <div className="text-center mb-16 md:mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8">
              <motion.div {...fadeInUp}>
                 <h2 className="text-[12px] font-bold uppercase tracking-[0.3em] text-muted-teal mb-4 text-left">Our Reach</h2>
                 <h3 className="font-serif text-5xl md:text-6xl font-bold text-left">Global Campuses</h3>
              </motion.div>
              <motion.div {...fadeInUp}>
                 <p className="text-lg text-primary-900/70 max-w-sm text-left md:text-right">Find a local community gathering near you. We are expanding rapidly to serve more nations.</p>
              </motion.div>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {campuses.map((campus, i) => (
                 <motion.div 
                    key={i} 
                    {...fadeInUp}
                    transition={{ delay: i * 0.1 }}
                    className="group relative h-[400px] rounded-2xl overflow-hidden cursor-pointer shadow-lg"
                 >
                    <div className="absolute inset-0 bg-primary-900/40 mix-blend-multiply z-10 group-hover:bg-primary-900/20 transition-colors duration-700" />
                    <img src={campus.img} alt={campus.name} className="absolute inset-0 w-full h-full object-cover grayscale-[0.5] group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000" />
                    
                    <div className="absolute inset-x-0 bottom-0 p-8 z-20 flex flex-col justify-end bg-gradient-to-t from-primary-900 via-primary-900/80 to-transparent pt-20">
                       <div className="flex items-center gap-2 text-light-sage mb-2">
                          <MapPin className="w-4 h-4" />
                          <span className="text-[10px] uppercase tracking-widest font-bold">{campus.loc}</span>
                       </div>
                       <h4 className="font-serif text-2xl font-bold text-cream mb-2 leading-tight">{campus.name}</h4>
                       <p className="text-sm font-medium text-cream/70 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                          Gatherings: {campus.times}
                       </p>
                    </div>
                 </motion.div>
              ))}
           </div>
        </div>
      </section>

      {/* 3. Contact Form & FAQ (100vh Split) */}
      <section className="min-h-screen flex flex-col justify-center py-24 px-6 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
           
           {/* FAQ Column */}
           <div className="flex flex-col justify-center">
              <motion.div {...fadeInUp}>
                 <h2 className="text-[12px] font-bold uppercase tracking-[0.3em] text-primary-600 border border-primary-600/30 rounded-full px-4 py-2 inline-block mb-6 bg-cream">Common Queries</h2>
                 <h3 className="font-serif text-4xl md:text-5xl font-bold text-primary-900 mb-10 leading-snug">Frequently Asked<br/>Questions.</h3>
                 
                 <div className="space-y-4">
                    {faqs.map((faq, idx) => (
                       <div key={idx} className="border border-muted-teal/20 rounded-2xl p-6 hover:shadow-md transition-shadow cursor-pointer group bg-cream/30 hover:bg-cream">
                          <h4 className="font-bold text-primary-900 flex justify-between items-center mb-0 group-hover:mb-4 transition-all">
                             {faq.q}
                             <Plus className="w-5 h-5 text-muted-teal group-hover:rotate-45 transition-transform shrink-0" />
                          </h4>
                          <p className="text-primary-900/70 text-sm leading-relaxed max-h-0 overflow-hidden opacity-0 group-hover:max-h-[200px] group-hover:opacity-100 transition-all duration-500 ease-in-out">
                             {faq.a}
                          </p>
                       </div>
                    ))}
                 </div>
              </motion.div>
           </div>
           
           {/* Contact Form Column */}
           <div className="bg-primary-900 p-10 md:p-16 rounded-[2rem] shadow-2xl relative overflow-hidden flex flex-col justify-center">
              {/* Form Background Pattern */}
              <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#fdffd6_2px,transparent_2px)] [background-size:24px_24px]" />
              
              <motion.div {...fadeInUp} className="relative z-10 w-full">
                 <h3 className="font-serif text-3xl font-bold text-cream mb-2">Send a Message</h3>
                 <p className="text-cream/60 mb-10 text-sm">Fill out the form below and our team will get back to you within 24 hours.</p>

                 <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                       <div className="flex flex-col">
                          <label className="text-[10px] font-bold uppercase tracking-widest text-light-sage mb-2">First Name</label>
                          <input type="text" className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-cream focus:outline-none focus:border-light-sage/50 transition-colors" />
                       </div>
                       <div className="flex flex-col">
                          <label className="text-[10px] font-bold uppercase tracking-widest text-light-sage mb-2">Last Name</label>
                          <input type="text" className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-cream focus:outline-none focus:border-light-sage/50 transition-colors" />
                       </div>
                    </div>
                    
                    <div className="flex flex-col">
                       <label className="text-[10px] font-bold uppercase tracking-widest text-light-sage mb-2">Email Address</label>
                       <input type="email" className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-cream focus:outline-none focus:border-light-sage/50 transition-colors" />
                    </div>

                    <div className="flex flex-col">
                       <label className="text-[10px] font-bold uppercase tracking-widest text-light-sage mb-2">Inquiry Type</label>
                       <select className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-cream/70 focus:outline-none focus:border-light-sage/50 transition-colors appearance-none">
                          <option>General Support</option>
                          <option>Pastoral Care / Prayer</option>
                          <option>Global Missions Partnership</option>
                          <option>Press & Media</option>
                       </select>
                    </div>
                    
                    <div className="flex flex-col">
                       <label className="text-[10px] font-bold uppercase tracking-widest text-light-sage mb-2">Your Message</label>
                       <textarea rows={4} className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-cream focus:outline-none focus:border-light-sage/50 transition-colors resize-none"></textarea>
                    </div>
                    
                    <button type="button" className="w-full bg-cream text-primary-900 font-bold uppercase tracking-[0.2em] text-sm py-4 rounded-xl hover:bg-light-sage transition-colors shadow-lg mt-4">
                       Submit Message
                    </button>
                 </form>
              </motion.div>
           </div>
        </div>
      </section>

    </div>
  );
}
