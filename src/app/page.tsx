'use client';

import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Play, ArrowRight, MapPin, Clock, Heart, Globe, BookOpen, Users } from 'lucide-react';
import Counter from '@/components/ui/Counter';

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.8 }
};

export default function Home() {
  const mapSectionRef = useRef(null);
  // (Scroll progress if needed for future effects, though unused for threads now)
  const { scrollYProgress: _ } = useScroll({
    target: mapSectionRef,
    offset: ["start end", "end start"]
  });


  return (
    <div className="flex flex-col w-full bg-cream min-h-screen">

      {/* 1. Hero Section (Minimal & Open - 100vh) */}
      <section className="relative min-h-screen w-full flex flex-col justify-end pb-16 px-6 md:px-12 bg-cream">
        <div className="absolute inset-0 z-0">
          <img
            src="finalfinalhero.webp"
            alt="Global Peace Community Gather"
            className="w-full h-full object-cover brightness-[0.85] contrast-[1.1]"
          />
        </div>

        <div className="relative z-10 max-w-7xl w-full mx-auto pb-10">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, delay: 0.3 }}
            className="max-w-2xl bg-cream/90 backdrop-blur-sm p-8 md:p-12 border-l-4 border-primary-900 shadow-xl"
          >
            <h1 className="text-primary-900 font-serif text-5xl md:text-7xl font-bold mb-4 leading-tight">
              Welcome Home.
            </h1>
            <p className="text-primary-900/80 font-medium text-lg mb-8 leading-relaxed">
              We are a movement of faith, uniting locally to spread peace globally.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/about" className="btn-primary">
                Discover Our 'Why'
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. Empathy & Belonging (100vh) */}
      <section className="min-h-screen flex flex-col justify-center px-6 md:px-12 bg-cream border-b border-light-sage/30 relative overflow-hidden">
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <motion.div {...fadeInUp}>
            <h2 className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold text-primary-900 mb-10 leading-snug">
              "You belong here, exactly as you are. We are building a community where faith meets real life."
            </h2>
            <div className="flex justify-center mb-8">
              <div className="w-24 h-1 bg-primary-600 rounded-full" />
            </div>
            <p className="text-xl md:text-2xl text-primary-900/70 font-medium max-w-3xl mx-auto">
              In a world of constant motion, find a place to pause, reflect, and grow alongside people who care about your journey.
            </p>
          </motion.div>
        </div>

        {/* Infinite Looping People Image Marquee */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden z-0 pointer-events-none opacity-40 mix-blend-multiply">
          <div className="flex w-max animate-marquee">
            {/* Block 1 */}
            <div className="flex shrink-0">
              <img src="/peoples_line.webp" alt="Community" className="h-16 sm:h-20 md:h-28 lg:h-32 w-auto max-w-none" />
              <img src="/peoples_line.webp" alt="Community" className="h-16 sm:h-20 md:h-28 lg:h-32 w-auto max-w-none" />
            </div>
            {/* Block 2 (identical duplicate to ensure perfect seamless loop) */}
            <div className="flex shrink-0">
              <img src="/peoples_line.webp" alt="Community" className="h-16 sm:h-20 md:h-28 lg:h-32 w-auto max-w-none" />
              <img src="/peoples_line.webp" alt="Community" className="h-16 sm:h-20 md:h-28 lg:h-32 w-auto max-w-none" />
            </div>
          </div>
        </div>
      </section>

      {/* 3. Core Values Grid (NEW - 100vh) */}
      <section className="min-h-screen flex flex-col justify-center py-20 px-6 md:px-12 bg-primary-900 text-cream">
        <div className="max-w-7xl mx-auto w-full">
          <div className="text-center mb-20">
            <motion.div {...fadeInUp}>
              <h2 className="text-[12px] font-bold uppercase tracking-[0.3em] text-light-sage mb-4">Our Foundation</h2>
              <h3 className="font-serif text-4xl md:text-6xl font-bold text-cream">The Four Pillars</h3>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: BookOpen, title: "Biblical Truth", desc: "Rooted deeply in scripture, seeking wisdom for modern challenges." },
              { icon: Heart, title: "Authentic Love", desc: "A culture of grace, where everyone is seen, known, and loved." },
              { icon: Globe, title: "Global Impact", desc: "Reaching beyond our walls to serve communities worldwide." },
              { icon: Users, title: "Uncommon Unity", desc: "Celebrating diversity while uniting under a singular mission of peace." }
            ].map((value, idx) => (
              <motion.div
                key={idx}
                {...fadeInUp}
                transition={{ delay: idx * 0.1 }}
                className="flex flex-col items-center text-center p-8 border border-muted-teal/30 bg-primary-900/50 rounded-xl hover:bg-muted-teal/10 transition-colors duration-500"
              >
                <div className="w-16 h-16 rounded-full bg-light-sage/10 flex items-center justify-center mb-6 border border-light-sage/20">
                  <value.icon className="w-8 h-8 text-light-sage" />
                </div>
                <h4 className="font-serif text-2xl font-bold mb-4">{value.title}</h4>
                <p className="text-cream/70 text-sm leading-relaxed">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Authority & Daily Word (Combined - 100vh) */}
      <section className="min-h-screen flex flex-col justify-center py-20 px-6 md:px-12 bg-light-sage/10 relative overflow-hidden">
        {/* Background Decorative Graphic */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-white opacity-40 rounded-full blur-3xl -z-10" />

        <div className="max-w-7xl mx-auto w-full space-y-24">
          {/* The Daily Word */}
          <motion.div {...fadeInUp} className="max-w-4xl mx-auto bg-white p-10 md:p-16 rounded-2xl shadow-xl shadow-muted-teal/10 border border-muted-teal/20 relative z-10 flex flex-col md:flex-row items-center gap-10 text-center md:text-left">
            <div className="flex flex-col justify-center items-center px-8 py-6 bg-cream rounded-xl border border-muted-teal/30 shadow-inner text-primary-900 shrink-0">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-muted-teal mb-1">Daily</span>
              <span className="font-serif text-3xl font-bold">Word</span>
            </div>
            {(() => {
              const { dailyWords } = require('@/data/dailyWords');
              // Simple hash-based selection to pick a verse for the day
              const today = new Date();
              const start = new Date(today.getFullYear(), 0, 0);
              const diff = (today.getTime() - start.getTime()) + ((start.getTimezoneOffset() - today.getTimezoneOffset()) * 60 * 1000);
              const oneDay = 1000 * 60 * 60 * 24;
              const dayOfYear = Math.floor(diff / oneDay);
              const verse = dailyWords[dayOfYear % dailyWords.length];

              return (
                <div className="flex-1">
                  <p className="font-serif text-primary-900 text-2xl md:text-3xl font-bold italic mb-3 leading-snug">
                    "{verse.text}"
                  </p>
                  <div className="flex items-center justify-center md:justify-start gap-4">
                    <div className="h-px bg-primary-600/30 w-12" />
                    <p className="text-primary-900/80 font-medium tracking-wider uppercase text-xs">
                      {verse.reference}
                    </p>
                  </div>
                </div>
              );
            })()}
          </motion.div>

          {/* Stats Grid */}
          <motion.div
            {...fadeInUp}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-16 pt-10 border-t border-muted-teal/20"
          >
            {[
              { target: 50, suffix: "+", label: "Countries Reached" },
              { target: 1, suffix: "M+", label: "Meals Served" },
              { target: 10, suffix: "k+", label: "Weekly Attendees" },
              { target: 1, suffix: "", label: "Global Mission" }
            ].map((stat, idx) => (
              <div key={idx} className="text-center flex flex-col items-center justify-center">
                <div className="font-serif text-6xl md:text-8xl font-bold text-primary-900 mb-4">
                  <Counter target={stat.target} suffix={stat.suffix} />
                </div>
                <div className="text-xs font-bold uppercase tracking-[0.2em] text-muted-teal">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 5. Media Hub (100vh) */}
      <section className="min-h-screen flex flex-col justify-center py-20 px-6 md:px-12 bg-cream border-t border-light-sage/30">
        <div className="max-w-7xl mx-auto w-full">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <motion.div {...fadeInUp}>
              <h2 className="text-[12px] font-bold uppercase tracking-[0.3em] text-muted-teal mb-4 block">Media Hub</h2>
              <h3 className="font-serif text-5xl md:text-6xl font-bold text-primary-900">Watch &amp; Listen</h3>
            </motion.div>
            <Link href="/ministries" className="text-xs font-bold uppercase tracking-[0.2em] text-primary-600 hover:text-primary-900 transition-colors border-b-2 border-primary-600 pb-1 shrink-0">
              View Directory
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Featured Video */}
            <motion.div {...fadeInUp} className="group border border-muted-teal/30 rounded-xl bg-white overflow-hidden shadow-[0_10px_40px_-10px_rgba(0,0,0,0.05)] hover-card flex flex-col h-[500px]">
              <div className="h-[280px] w-full relative overflow-hidden bg-primary-900/10 shrink-0">
                <img src="/media_sermon.png" alt="Featured Video" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-primary-900/20 group-hover:bg-primary-900/40 transition-colors flex items-center justify-center">
                  <div className="w-16 h-16 bg-white/90 backdrop-blur rounded-full flex items-center justify-center pl-1 shadow-[0_0_30px_rgba(0,0,0,0.2)]">
                    <Play className="w-8 h-8 text-primary-900" fill="currentColor" />
                  </div>
                </div>
              </div>
              <div className="p-8 flex-grow flex flex-col bg-white">
                <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted-teal mb-4">Featured Sermon</div>
                <h4 className="font-serif text-2xl md:text-3xl font-bold text-primary-900 mb-4 leading-snug">The Architecture of Peace</h4>
                <p className="text-sm text-primary-900/70 font-medium mt-auto leading-relaxed line-clamp-3">A deep look into navigating today's cultural anxieties with anchored faith and resilience.</p>
              </div>
            </motion.div>

            {/* Podcasts */}
            <motion.div {...fadeInUp} transition={{ delay: 0.1 }} className="group border border-muted-teal/30 rounded-xl bg-white overflow-hidden shadow-[0_10px_40px_-10px_rgba(0,0,0,0.05)] hover-card flex flex-col h-[500px]">
              <div className="h-[280px] w-full relative overflow-hidden bg-primary-900/10 shrink-0">
                <img src="/media_podcast.png" alt="Recent Podcast" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="p-8 flex-grow flex flex-col bg-white">
                <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted-teal mb-4">Audio Series</div>
                <h4 className="font-serif text-2xl md:text-3xl font-bold text-primary-900 mb-4 leading-snug">Global Harmony Podcast</h4>
                <p className="text-sm text-primary-900/70 font-medium mt-auto leading-relaxed line-clamp-3">Conversations with leaders around the world on fostering community resilience and faith-driven impact.</p>
              </div>
            </motion.div>

            {/* Articles */}
            <motion.div {...fadeInUp} transition={{ delay: 0.2 }} className="group border border-muted-teal/30 rounded-xl bg-white overflow-hidden shadow-[0_10px_40px_-10px_rgba(0,0,0,0.05)] hover-card flex flex-col h-[500px]">
              <div className="h-[280px] w-full relative overflow-hidden bg-primary-900/10 shrink-0">
                <img src="/media_article.png" alt="Word of Faith Article" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="p-8 flex-grow flex flex-col bg-white">
                <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted-teal mb-4">Written Word</div>
                <h4 className="font-serif text-2xl md:text-3xl font-bold text-primary-900 mb-4 leading-snug">Living According to the Word</h4>
                <p className="text-sm text-primary-900/70 font-medium mt-auto leading-relaxed line-clamp-3">Practical steps for everyday spiritual growth, community building, and finding joy in the mundane.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 6. Training & Schools (100vh) */}
      <section className="min-h-screen flex flex-col justify-center py-20 px-6 md:px-12 bg-white border-y border-muted-teal/20">
        <div className="max-w-7xl mx-auto w-full">
          <div className="text-center mb-20">
            <motion.div {...fadeInUp}>
              <h2 className="text-[12px] font-bold uppercase tracking-[0.3em] text-primary-600 mb-6 inline-block px-6 py-2 border border-primary-600/30 rounded-full bg-light-sage/10">Global Peace Training Center</h2>
              <h3 className="font-serif text-5xl md:text-6xl font-bold text-primary-900">Equipping the Next Generation</h3>
            </motion.div>
          </div>

          <motion.div {...fadeInUp} className="flex flex-col lg:flex-row shadow-2xl shadow-primary-900/10 rounded-2xl overflow-hidden border border-muted-teal/20 bg-cream">
            {/* Card 1 */}
            <div className="flex-1 p-10 lg:p-16 hover:bg-white transition-colors duration-700 group relative border-b lg:border-b-0 lg:border-r border-muted-teal/20">
              <div className="absolute top-0 left-0 w-full h-1 bg-primary-600 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500" />
              <h4 className="font-serif font-bold text-3xl md:text-4xl text-primary-600 mb-8 flex items-center gap-6">
                <span className="text-sm font-sans font-bold tracking-[0.2em] text-muted-teal border border-muted-teal/50 rounded-full w-12 h-12 flex items-center justify-center group-hover:bg-primary-600 group-hover:text-white group-hover:border-primary-600 transition-all duration-500">I</span>
                Biblical Studies
              </h4>
              <p className="text-primary-900/80 leading-relaxed text-lg font-medium">
                Deep dive into theological foundations and practical scriptural application for navigating modern complexities with grace.
              </p>
            </div>

            {/* Card 2 */}
            <div className="flex-1 p-10 lg:p-16 hover:bg-white transition-colors duration-700 group relative border-b lg:border-b-0 lg:border-r border-muted-teal/20">
              <div className="absolute top-0 left-0 w-full h-1 bg-primary-600 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500" />
              <h4 className="font-serif font-bold text-3xl md:text-4xl text-primary-600 mb-8 flex items-center gap-6">
                <span className="text-sm font-sans font-bold tracking-[0.2em] text-muted-teal border border-muted-teal/50 rounded-full w-12 h-12 flex items-center justify-center group-hover:bg-primary-600 group-hover:text-white group-hover:border-primary-600 transition-all duration-500">II</span>
                Missions
              </h4>
              <p className="text-primary-900/80 leading-relaxed text-lg font-medium">
                Comprehensive preparation for global outreach, cultural adaptation, and sustainable community peacebuilding initiatives.
              </p>
            </div>

            {/* Card 3 */}
            <div className="flex-1 p-10 lg:p-16 hover:bg-white transition-colors duration-700 group relative">
              <div className="absolute top-0 left-0 w-full h-1 bg-primary-600 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500" />
              <h4 className="font-serif font-bold text-3xl md:text-4xl text-primary-600 mb-8 flex items-center gap-6">
                <span className="text-sm font-sans font-bold tracking-[0.2em] text-muted-teal border border-muted-teal/50 rounded-full w-12 h-12 flex items-center justify-center group-hover:bg-primary-600 group-hover:text-white group-hover:border-primary-600 transition-all duration-500">III</span>
                Leadership
              </h4>
              <p className="text-primary-900/80 leading-relaxed text-lg font-medium">
                Developing ethical, organizational, and deeply spiritual leadership paradigms for the directors and visionaries of tomorrow.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 7. Interactive Global Map Placeholder (NEW - 100vh) */}
      <section ref={mapSectionRef} className="min-h-screen flex flex-col justify-center py-20 px-6 md:px-12 bg-cream text-primary-900 relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-10 pointer-events-none flex items-center justify-center">
          {/* abstract map shape placeholder using css boundaries */}
          <div className="w-[120vw] h-[120vh] border-[40px] border-primary-900/20 rounded-full blur-[100px]" />
        </div>

        <div className="max-w-7xl mx-auto w-full relative z-10 flex flex-col items-center">
          <div className="text-center mb-16 max-w-3xl">
            <motion.div {...fadeInUp}>
              <h2 className="text-[12px] font-bold uppercase tracking-[0.3em] text-muted-teal mb-4">Global Reach</h2>
              <h3 className="font-serif text-5xl md:text-7xl font-bold mb-8">Peace Across Borders</h3>
              <p className="text-xl text-primary-900/70">From our local campus to international missions, we are actively working to build faith-based communities in over 50 nations.</p>
            </motion.div>
          </div>

          {/* Map Visualization Simulation */}
          <motion.div {...fadeInUp} className="w-full max-w-5xl aspect-video rounded-3xl border border-muted-teal/30 overflow-hidden relative shadow-2xl">
            <img 
              src="24a088e.webp" 
              alt="Global Peace Map" 
              className="w-full h-full object-cover opacity-80" 
            />
            
            {/* SVG Threads Overlay */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none z-10" viewBox="0 0 1000 562">
              <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="4" result="blur" />
                <feComposite in="SourceGraphic" in2="blur" operator="over" />
              </filter>

              {/* Path 1: Top-Left to Top-Right */}
              <motion.path
                d="M 250 140 Q 500 100 750 187"
                fill="none"
                stroke="white"
                strokeWidth="3"
                strokeLinecap="round"
                filter="url(#glow)"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1.5, delay: 0.5, ease: "easeInOut" }}
              />
              {/* Path 2: Top-Right to Bottom-Rightish */}
              <motion.path
                d="M 750 187 Q 800 350 666 421"
                fill="none"
                stroke="white"
                strokeWidth="3"
                strokeLinecap="round"
                filter="url(#glow)"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1.5, delay: 1.2, ease: "easeInOut" }}
              />
              {/* Path 3: Bottom to Top-Left */}
              <motion.path
                d="M 666 421 Q 400 450 250 140"
                fill="none"
                stroke="white"
                strokeWidth="3"
                strokeLinecap="round"
                filter="url(#glow)"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1.5, delay: 1.9, ease: "easeInOut" }}
              />
            </svg>

            {/* Decorative Pointers */}
            <div className="absolute top-[25%] left-[25%] w-4 h-4 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary-600 animate-pulse shadow-[0_0_20px_rgba(47,72,88,0.5)] z-20" />
            <div className="absolute top-[33%] right-[25%] w-6 h-6 translate-x-1/2 -translate-y-1/2 rounded-full bg-light-sage/80 animate-pulse shadow-[0_0_20px_rgba(100,145,143,0.5)] delay-300 z-20" />
            <div className="absolute bottom-[25%] left-[66.6%] w-3 h-3 -translate-x-1/2 translate-y-1/2 rounded-full bg-primary-900 animate-pulse shadow-[0_0_20px_rgba(47,72,88,0.8)] delay-700 z-20" />
            
            {/* Overlay Gradient for depth */}
            <div className="absolute inset-0 bg-gradient-to-t from-primary-900/20 to-transparent pointer-events-none z-15" />
          </motion.div>
        </div>
      </section>

      {/* 8. Action / Upcoming Gatherings (100vh) */}
      <section className="min-h-screen flex flex-col justify-center py-20 px-6 md:px-12 bg-light-sage/20 border-t border-muted-teal/30">
        <div className="max-w-5xl mx-auto w-full">
          <motion.div {...fadeInUp} className="bg-white border text-center md:text-left border-primary-600/20 rounded-3xl p-10 md:p-16 shadow-2xl shadow-primary-900/5 flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="flex-1">
              <h2 className="text-[12px] font-bold uppercase tracking-[0.3em] text-primary-600 mb-4 block">Join Us This Week</h2>
              <h3 className="font-serif text-5xl md:text-6xl font-bold text-primary-900 mb-8 leading-tight">Sunday<br />Gatherings</h3>

              <div className="space-y-6">
                <div className="flex flex-col md:flex-row items-center md:items-start gap-4 text-primary-900/80">
                  <Clock className="w-8 h-8 text-muted-teal shrink-0 mt-1" />
                  <div>
                    <p className="text-xl font-bold text-primary-900">9:00 AM &amp; 11:30 AM</p>
                    <p className="text-base mt-1">Traditional &amp; Contemporary Services</p>
                  </div>
                </div>
                <div className="flex flex-col md:flex-row items-center md:items-start gap-4 text-primary-900/80">
                  <MapPin className="w-8 h-8 text-muted-teal shrink-0 mt-1" />
                  <div>
                    <p className="text-xl font-bold text-primary-900">Main Campus</p>
                    <p className="text-base mt-1">789 Harmony Circle, Peace City</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex-1 w-full flex justify-end">
              <div className="w-full max-w-md bg-cream p-8 md:p-10 rounded-2xl border border-muted-teal/20 text-center flex flex-col items-center">
                <h4 className="font-serif text-2xl font-bold text-primary-900 mb-4">First Time Here?</h4>
                <p className="text-sm text-primary-900/70 mb-8 leading-relaxed">Let us know you're coming and our welcome team will meet you at the doors.</p>
                <Link href="/plan-a-visit" className="w-full text-center group flex items-center justify-center gap-4 bg-primary-900 text-cream px-10 py-5 rounded-lg hover:bg-primary-600 transition-colors duration-500 font-bold uppercase tracking-[0.2em] text-sm shadow-lg">
                  Plan Your Visit
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
}
