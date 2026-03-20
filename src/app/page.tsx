'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <div className="flex flex-col w-full bg-white">
      {/* Hero Section - Elegant Serif & Overlapping Card */}
      <section className="relative h-[90vh] w-full flex flex-col justify-end pb-12 md:pb-24 px-6 md:px-12">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&q=80&w=2000" 
            alt="Global Peace Community Gather" 
            className="w-full h-full object-cover grayscale-[0.2]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/40" />
        </div>
        
        <div className="relative z-10 max-w-[1400px] w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="lg:col-span-8"
          >
            <h2 className="text-white/80 heading-sub mb-6 block">
              Global Peace Community
            </h2>
            <h1 className="text-white heading-display mb-8">
              Harmony is here.
            </h1>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/about" className="btn-primary !bg-white !text-black hover:!bg-black hover:!text-white">
                Our Story
              </Link>
            </div>
          </motion.div>

          {/* Overlapping Info Card on Hero */}
          <motion.div 
             initial={{ opacity: 0, x: 20 }}
             animate={{ opacity: 1, x: 0 }}
             transition={{ duration: 1, delay: 0.6 }}
             className="hidden lg:block lg:col-span-4"
          >
             <div className="formal-card bg-white/95 backdrop-blur-sm -mb-24 relative z-20">
                <h3 className="heading-sub text-gray-400 mb-4 border-b border-gray-200 pb-3">Next Gathering</h3>
                <p className="font-serif text-2xl text-primary-900 mb-2 leading-snug">Sunday Morning Peace Reflection</p>
                <p className="text-sm text-gray-600 mb-6">10:00 AM &middot; The Sanctuary</p>
                <Link href="/events" className="text-xs font-bold uppercase tracking-widest text-primary-600 hover:text-primary-900 transition-colors">
                  View All Events &rarr;
                </Link>
             </div>
          </motion.div>
        </div>
      </section>

      {/* Intro Section - Reduced Padding, Elegant Headers */}
      <section className="section-padding px-6 md:px-12 bg-white text-primary-900 lg:pt-36">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="heading-primary mb-6">A House of Peace.</h2>
            <p className="text-lg md:text-xl font-medium leading-relaxed max-w-xl text-gray-600">
              We are a borderless collective dedicated to the pursuit of global harmony through conscious living and community action.
            </p>
          </div>
          <div className="flex flex-col items-start lg:items-end">
            <Link href="/about" className="group flex items-center gap-4 text-primary-900">
              <span className="text-xs font-bold uppercase tracking-[0.2em] group-hover:mr-2 transition-all duration-500">Discover More</span>
              <div className="w-12 h-px bg-primary-900 group-hover:w-20 transition-all duration-500" />
            </Link>
          </div>
        </div>
      </section>

      {/* Overlapping Features Section */}
      <section className="bg-gray-50 relative pb-24">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative">
          
          <div className="w-full h-[50vh] md:h-[60vh] relative -mt-16 mb-24 z-10 shadow-xl">
             <img 
               src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&q=80&w=1600" 
               alt="Community Impact" 
               className="w-full h-full object-cover"
             />
             {/* Overlapping Card Bottom Right */}
             <div className="absolute -bottom-10 right-10 formal-card w-72 hidden md:block z-20 border-l-4 border-l-primary-900">
                <p className="font-serif text-xl text-primary-900 italic">"Peace begins with a smile."</p>
             </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 mt-16 md:mt-0">
            {[
              { title: "Inclusion", desc: "Embracing diverse cultures to form a unified front for peace.", number: "01" },
              { title: "Empowerment", desc: "Equipping individuals with tools for inner tranquility.", number: "02" },
              { title: "Safeguarding", desc: "Protecting the vulnerable in global community structures.", number: "03" }
            ].map((item, i) => (
              <div key={i} className="group border-t border-black/10 pt-8 hover-card">
                <div className="text-gray-300 font-bold text-xs tracking-widest mb-4">{item.number}</div>
                <h4 className="font-serif text-2xl mb-3 text-primary-900">{item.title}</h4>
                <p className="text-gray-600 font-medium leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Split Section - High Contrast, Reduced Space */}
      <section className="flex flex-col lg:flex-row bg-primary-900 text-white">
        <div className="w-full lg:w-1/2 p-12 md:p-24 flex flex-col justify-center">
          <h2 className="heading-sub text-gray-400 mb-6">Listen Now</h2>
          <h3 className="heading-primary mb-8 text-white">Latest Messages</h3>
          <p className="text-lg md:text-xl font-light text-gray-300 mb-12 leading-relaxed">
            Wisdom for the journey. Tune into our latest broadcast on finding peace amidst global static.
          </p>
          <Link href="/ministries" className="btn-secondary !border-white !text-white hover:!bg-white hover:!text-primary-900 w-max">
            Watch Here
          </Link>
        </div>
        <div className="w-full lg:w-1/2 h-[50vh] lg:h-auto overflow-hidden relative">
          <img 
            src="https://images.unsplash.com/photo-1510070112810-d4e9a46d9e91?auto=format&fit=crop&q=80&w=1200" 
            alt="Latest Message" 
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000"
          />
          {/* Audio/Video overlapping play button card */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-white/90 rounded-full flex items-center justify-center shadow-2xl cursor-pointer hover:bg-white transition-colors">
            <div className="w-0 h-0 border-t-8 border-t-transparent border-l-[14px] border-l-primary-900 border-b-8 border-b-transparent ml-2"></div>
          </div>
        </div>
      </section>

      {/* Donate Banner - Less Brutal, More Elegant */}
      <section className="section-padding px-6 md:px-12 text-center max-w-[800px] mx-auto">
        <h2 className="heading-sub text-gray-400 mb-6">Make an Impact</h2>
        <h3 className="heading-display mb-8 text-primary-900">Fuel the movement.</h3>
        <p className="text-lg text-gray-600 font-medium mb-12 leading-relaxed">
          Your contribution goes directly to peace-building projects, disaster relief, and community education programs worldwide.
        </p>
        <Link href="/donate" className="btn-primary">
          Give Online
        </Link>
      </section>
    </div>
  );
}
