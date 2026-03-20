'use client';

import { motion } from 'framer-motion';
import { ArrowDown, ArrowRight, HeartHandshake, Shield, Flame, Sparkles } from 'lucide-react';
import Link from 'next/link';

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.8 }
};

const featuredInitiatives = [
  {
    title: "Global Peace Education",
    desc: "Implementing peace-centric curricula in schools across conflict regions, fostering a new generation of understanding.",
    number: "01"
  },
  {
    title: "Eco-Peace Projects",
    desc: "Restoring the environment and community relations simultaneously through reforestation and sustainable water systems.",
    number: "02"
  },
  {
    title: "Intercultural Dialogue",
    desc: "Facilitating structured deep-listening sessions between traditionally opposing cultural groups.",
    number: "03"
  },
  {
    title: "Trauma-Healed Communities",
    desc: "Providing holistic healing and mental health support for regions recovering from collective trauma.",
    number: "04"
  }
];

const ageMinistries = [
  { name: "Peace Kids", age: "Infant - 5th Grade", icon: Sparkles, desc: "Building a foundation of love and acceptance early on through interactive storytelling and play." },
  { name: "Youth Impact", age: "Middle & High School", icon: Flame, desc: "Equipping teenagers to navigate modern challenges with unshakeable faith and a supportive peer community." },
  { name: "Young Adults", age: "Ages 18 - 30", icon: Shield, desc: "Navigating career, relationships, and deep theological questions in a safe, authentic environment." },
  { name: "Legacy Builders", age: "Seniors 60+", icon: HeartHandshake, desc: "Honoring the wisdom of our elders through continued fellowship, mentoring younger generations, and service." }
];

export default function MinistriesPage() {
  return (
    <div className="flex flex-col w-full bg-cream min-h-screen">
      
      {/* 1. Hero Section (100vh) */}
      <section className="relative min-h-screen w-full flex flex-col justify-center items-center text-center px-6 md:px-12 bg-primary-900 border-b-8 border-primary-600 overflow-hidden">
        {/* Abstract Topographic Lines Simulation */}
        <div className="absolute inset-0 opacity-[0.03] bg-[repeating-linear-gradient(45deg,transparent,transparent_10px,#fdffd6_10px,#fdffd6_11px)]" />

        <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center">
          <motion.div
             initial={{ opacity: 0, scale: 0.95 }}
             animate={{ opacity: 1, scale: 1 }}
             transition={{ duration: 1 }}
          >
             <h2 className="text-[12px] font-bold uppercase tracking-[0.4em] text-light-sage mb-6">Our Initiatives</h2>
             <h1 className="font-serif text-6xl md:text-8xl lg:text-9xl font-bold text-cream mb-8 leading-none">
                Serve &amp; Grow.
             </h1>
             <p className="text-xl md:text-2xl font-medium leading-relaxed text-cream/70 mb-12 max-w-2xl mx-auto">
                From grassroots community building to international policy advocacy, our programs are engineered to cultivate peace.
             </p>
          </motion.div>
        </div>
        
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 text-light-sage animate-bounce">
            <ArrowDown className="w-8 h-8 opacity-70" />
        </div>
      </section>

      {/* 2. Featured Ministries Grid (100vh) */}
      <section className="min-h-screen flex flex-col justify-center py-24 px-6 md:px-12 bg-cream text-primary-900 border-b border-light-sage/40">
        <div className="max-w-7xl mx-auto w-full">
           <div className="text-center md:text-left mb-20 flex flex-col md:flex-row md:items-end justify-between gap-8">
              <motion.div {...fadeInUp}>
                 <h2 className="text-[12px] font-bold uppercase tracking-[0.3em] text-muted-teal mb-4">Core Focus Areas</h2>
                 <h3 className="font-serif text-5xl md:text-6xl font-bold">Featured Intiatives</h3>
              </motion.div>
              <motion.div {...fadeInUp}>
                 <p className="text-lg text-primary-900/70 max-w-md">Driven by our mission to mobilize hearts for action across cultural divides.</p>
              </motion.div>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16 lg:gap-x-20 lg:gap-y-24">
              {featuredInitiatives.map((item, i) => (
                 <motion.div 
                    key={i} 
                    {...fadeInUp}
                    transition={{ delay: i * 0.1 }}
                    className="group border-t-2 border-primary-900/10 pt-8"
                 >
                    <div className="font-serif text-5xl md:text-7xl font-bold text-muted-teal/30 tracking-tighter mb-6 group-hover:text-primary-600 transition-colors duration-500">
                       {item.number}
                    </div>
                    <h4 className="font-serif text-3xl text-primary-900 mb-4 leading-tight">
                       {item.title}
                    </h4>
                    <p className="text-primary-900/70 font-medium leading-relaxed text-lg mb-10">
                       {item.desc}
                    </p>
                    <Link href="/contact" className="inline-flex items-center gap-4 text-[10px] font-bold uppercase tracking-[0.2em] text-primary-900 border-b-2 border-primary-900/20 pb-2 hover:border-primary-600 hover:text-primary-600 transition-all duration-300">
                       Get Involved <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                 </motion.div>
              ))}
           </div>
        </div>
      </section>

      {/* 3. Age-Based Ministries (100vh Split & Grid) */}
      <section className="min-h-screen flex flex-col justify-center py-24 px-6 md:px-12 bg-white relative overflow-hidden">
        {/* Decorative Circle */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-light-sage/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/4 pointer-events-none" />
        
        <div className="max-w-7xl mx-auto w-full flex flex-col xl:flex-row gap-16 xl:gap-24 items-center relative z-10">
           
           {/* Text Block */}
           <div className="flex-1 text-center xl:text-left">
              <motion.div {...fadeInUp}>
                 <h2 className="text-[12px] font-bold uppercase tracking-[0.3em] text-primary-600 border border-primary-600/30 rounded-full px-4 py-2 inline-block mb-6 bg-cream">Generations</h2>
                 <h3 className="font-serif text-5xl md:text-6xl font-bold text-primary-900 mb-8 leading-snug">Discipleship<br/>At Every Age.</h3>
                 <div className="w-16 h-1 bg-primary-600 rounded-full mb-8 mx-auto xl:mx-0" />
                 <p className="text-lg text-primary-900/70 font-medium leading-relaxed">
                    Faith is a lifelong journey. We provide dedicated environments tailored to the specific developmental and spiritual needs of every age group, ensuring no one walks alone.
                 </p>
              </motion.div>
           </div>
           
           {/* Grid Block */}
           <div className="flex-[1.5] w-full">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                 {ageMinistries.map((min, idx) => (
                    <motion.div 
                       key={idx}
                       initial={{ opacity: 0, x: 20 }}
                       whileInView={{ opacity: 1, x: 0 }}
                       viewport={{ once: true }}
                       transition={{ delay: idx * 0.1 }}
                       className="bg-cream/50 p-8 rounded-2xl border border-muted-teal/20 shadow-sm hover:bg-cream hover:shadow-md transition-all duration-300 group"
                    >
                       <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mb-6 shadow-sm border border-muted-teal/10 group-hover:scale-110 transition-transform duration-300">
                          <min.icon className="w-6 h-6 text-primary-600" />
                       </div>
                       <h4 className="font-serif text-2xl font-bold text-primary-900 mb-1">{min.name}</h4>
                       <span className="inline-block text-[10px] font-bold uppercase tracking-[0.2em] text-muted-teal mb-4">{min.age}</span>
                       <p className="text-primary-900/70 text-sm leading-relaxed font-medium">
                          {min.desc}
                       </p>
                    </motion.div>
                 ))}
              </div>
           </div>
        </div>
      </section>

      {/* 4. Outreach & Missions (100vh Split Image) */}
      <section className="min-h-screen flex flex-col lg:flex-row bg-primary-900">
        <div className="w-full lg:w-1/2 h-[50vh] lg:h-auto overflow-hidden relative">
           <div className="absolute inset-0 bg-primary-900/20 mix-blend-multiply z-10" />
           <img 
             src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=1200" 
             alt="Mountain peace" 
             className="w-full h-full object-cover grayscale-[0.3]"
           />
        </div>
        
        <div className="w-full lg:w-1/2 p-12 md:p-24 lg:p-32 flex flex-col justify-center text-cream">
           <motion.div {...fadeInUp}>
              <h2 className="text-[12px] font-bold uppercase tracking-[0.3em] text-light-sage mb-6">Missions</h2>
              <h3 className="font-serif text-5xl md:text-6xl font-bold mb-8">The Harmony Residencies.</h3>
              <p className="text-xl md:text-2xl font-light text-cream/70 mb-12 leading-relaxed">
                Our flagship retreat program where leaders from diverse sectors live together for 30 days to build the foundations of a new global peace initiative.
              </p>
              
              <div className="grid grid-cols-2 gap-8 mb-12 py-8 border-y border-cream/20">
                 <div>
                    <h4 className="font-serif text-4xl font-bold text-light-sage mb-2">30</h4>
                    <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-cream/70">Day Program</span>
                 </div>
                 <div>
                    <h4 className="font-serif text-4xl font-bold text-light-sage mb-2">12+</h4>
                    <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-cream/70">Nations Rep.</span>
                 </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-6">
                <Link href="/about" className="btn-primary text-center">
                  Learn More
                </Link>
                <Link href="/contact" className="btn-secondary !border-cream !text-cream hover:!bg-cream hover:!text-primary-900 text-center">
                  Apply Now
                </Link>
              </div>
           </motion.div>
        </div>
      </section>

    </div>
  );
}
