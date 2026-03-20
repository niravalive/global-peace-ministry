'use client';

import { motion } from 'framer-motion';
import { ArrowDown, CheckCircle2 } from 'lucide-react';

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.8 }
};

export default function AboutPage() {
  return (
    <div className="flex flex-col w-full bg-cream min-h-screen">
      
      {/* 1. Hero Section (100vh) */}
      <section className="relative min-h-screen w-full flex flex-col justify-center items-center text-center px-6 md:px-12 bg-primary-900 border-b-8 border-primary-600">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=2000" 
            alt="Community collaborate" 
            className="w-full h-full object-cover opacity-20 mix-blend-overlay"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary-900 to-transparent" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center">
          <motion.div
             initial={{ opacity: 0, scale: 0.95 }}
             animate={{ opacity: 1, scale: 1 }}
             transition={{ duration: 1 }}
          >
             <h2 className="text-[12px] font-bold uppercase tracking-[0.4em] text-light-sage mb-6">About Us</h2>
             <h1 className="font-serif text-6xl md:text-8xl lg:text-9xl font-bold text-cream mb-8 leading-none">
                Our Story.
             </h1>
             <p className="text-xl md:text-2xl font-medium leading-relaxed text-cream/80 mb-12 max-w-2xl mx-auto">
                A borderless collective dedicated to the pursuit of global harmony through conscious living and community action.
             </p>
          </motion.div>
        </div>
        
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 text-light-sage animate-bounce">
            <ArrowDown className="w-8 h-8 opacity-70" />
        </div>
      </section>

      {/* 2. Mission & Vision (100vh Split Layout) */}
      <section className="min-h-screen flex flex-col lg:flex-row bg-cream">
        {/* Vision */}
        <div className="flex-1 flex flex-col justify-center p-12 md:p-24 lg:p-32 border-b lg:border-b-0 lg:border-r border-muted-teal/30 relative group overflow-hidden">
           <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-light-sage/10 rounded-full blur-[80px] -z-10 group-hover:scale-110 transition-transform duration-1000" />
           <motion.div {...fadeInUp}>
              <h3 className="text-[10px] font-bold uppercase tracking-[0.3em] text-muted-teal border border-muted-teal/30 rounded-full px-4 py-2 inline-block mb-8">01. Our Vision</h3>
              <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-primary-900 mb-8 leading-snug">
                 A Planet Living In Dignity &amp; Grace.
              </h2>
              <p className="text-lg md:text-xl text-primary-900/70 font-medium leading-relaxed">
                 To create a planet where every individual lives in dignity, where conflict is resolved through dialogue, and where spiritual peace is a shared, tangible human experience in every community.
              </p>
           </motion.div>
        </div>

        {/* Mission */}
        <div className="flex-1 flex flex-col justify-center p-12 md:p-24 lg:p-32 bg-white relative group overflow-hidden">
           <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-muted-teal/5 rounded-full blur-[80px] -z-10 group-hover:scale-110 transition-transform duration-1000" />
           <motion.div {...fadeInUp} transition={{ delay: 0.2 }}>
              <h3 className="text-[10px] font-bold uppercase tracking-[0.3em] text-primary-600 border border-primary-600/30 rounded-full px-4 py-2 inline-block mb-8">02. Our Mission</h3>
              <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-primary-900 mb-8 leading-snug">
                 Mobilizing Hearts For Real Action.
              </h2>
              <p className="text-lg md:text-xl text-primary-900/70 font-medium leading-relaxed">
                 Mobilizing resources and hearts to build sustainable infrastructures for peace, providing trauma-informed care, and fostering worldclass intercultural education for the next generation.
              </p>
           </motion.div>
        </div>
      </section>

      {/* 3. History & Timeline (100vh Visual Journey) */}
      <section className="min-h-screen flex flex-col justify-center py-24 px-6 md:px-12 bg-primary-900 text-cream relative overflow-hidden">
         {/* Background noise/texture simulation via faint borders */}
         <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#fdffd6_1px,transparent_1px)] [background-size:20px_20px]" />
         
         <div className="max-w-7xl mx-auto w-full relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-5">
               <motion.div {...fadeInUp}>
                  <h2 className="text-[12px] font-bold uppercase tracking-[0.3em] text-light-sage mb-6">Our Journey</h2>
                  <h3 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold text-cream mb-8 leading-tight">A Legacy of Harmony.</h3>
                  <div className="w-20 h-1 bg-light-sage rounded-full mb-10" />
                  <p className="text-lg text-cream/70 leading-relaxed mb-6">
                     Initiated in 1995 as a small dialogue group, Global Peace Community has evolved into a worldwide movement. What started as local conversations about inclusion and respect has blossomed into a sophisticated network of educators, activists, and spiritual leaders.
                  </p>
                  <p className="text-lg text-cream/70 leading-relaxed">
                     Today, we operate in over 50 countries, facilitating peace summits and local stabilizing programs. Our history is written by the thousands who chose compassion over conflict.
                  </p>
               </motion.div>
            </div>
            
            <div className="lg:col-span-7 relative">
               {/* Vertical Timeline Line */}
               <div className="absolute left-8 top-0 bottom-0 w-px bg-light-sage/20 hidden md:block" />
               
               <div className="space-y-12">
                  {[
                     { year: "1995", title: "The First Gathering", desc: "A group of 12 individuals met in a living room to pray for systemic peace." },
                     { year: "2008", title: "Global Expansion", desc: "Our first international outreach branch opened, focusing on education in developing regions." },
                     { year: "2020", title: "The Digital Assembly", desc: "Launched online ministries reaching 100,000+ daily attendees during global lockdowns." },
                     { year: "Present", title: "Sustainable Peacebuilding", desc: "Implementing long-term infrastructural support and trauma care worldwide." }
                  ].map((epoch, idx) => (
                     <motion.div 
                       key={idx}
                       initial={{ opacity: 0, x: 20 }}
                       whileInView={{ opacity: 1, x: 0 }}
                       viewport={{ once: true }}
                       transition={{ delay: idx * 0.15 }}
                       className="relative pl-0 md:pl-24"
                     >
                        {/* Timeline Node */}
                        <div className="absolute left-6 top-2 w-4 h-4 rounded-full bg-light-sage hidden md:block outline outline-4 outline-primary-900 border border-cream" />
                        
                        <div className="bg-primary-900/50 border border-muted-teal/30 p-8 rounded-2xl hover:bg-muted-teal/10 transition-colors duration-300">
                           <span className="font-serif text-3xl font-bold text-light-sage block mb-2">{epoch.year}</span>
                           <h4 className="text-xl font-bold text-cream mb-3">{epoch.title}</h4>
                           <p className="text-cream/70 text-sm leading-relaxed">{epoch.desc}</p>
                        </div>
                     </motion.div>
                  ))}
               </div>
            </div>
         </div>
      </section>

      {/* 4. Statement of Faith (100vh Dense Grid) */}
      <section className="min-h-screen flex flex-col justify-center py-24 px-6 md:px-12 bg-light-sage/10 text-primary-900 border-t border-muted-teal/20">
         <div className="max-w-7xl mx-auto w-full">
            <div className="text-center mb-20 max-w-3xl mx-auto">
               <motion.div {...fadeInUp}>
                  <h2 className="text-[12px] font-bold uppercase tracking-[0.3em] text-muted-teal mb-6">Statement of Faith</h2>
                  <h3 className="font-serif text-5xl md:text-6xl font-bold mb-8">What We Believe</h3>
                  <p className="text-xl text-primary-900/70">
                     Our convictions shape our culture. These core tenets anchor our community, guiding our global impact and our local grace.
                  </p>
               </motion.div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
               {[
                  "We believe in the transformative power of divine grace.",
                  "We believe that every human being is inherently valuable and worthy of dignity.",
                  "We believe in resolving conflict through active, empathetic dialogue.",
                  "We believe in the stewardship of our planet and its resources.",
                  "We believe peace is an actionable lifestyle, not just a passive wish.",
                  "We believe in uniting across denominational lines for the greater good."
               ].map((belief, idx) => (
                  <motion.div 
                     key={idx}
                     initial={{ opacity: 0, scale: 0.95 }}
                     whileInView={{ opacity: 1, scale: 1 }}
                     viewport={{ once: true }}
                     transition={{ delay: idx * 0.1 }}
                     className="bg-white p-8 rounded-2xl border border-muted-teal/20 shadow-[0_10px_30px_-15px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] transition-all duration-300 flex items-start gap-4"
                  >
                     <CheckCircle2 className="w-6 h-6 text-primary-600 shrink-0 mt-1" />
                     <p className="text-lg font-medium text-primary-900/80 leading-relaxed font-serif italic">
                        "{belief}"
                     </p>
                  </motion.div>
               ))}
            </div>
         </div>
      </section>

    </div>
  );
}
