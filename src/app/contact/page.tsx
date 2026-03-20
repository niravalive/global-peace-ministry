import { Globe } from 'lucide-react';

export default function ContactPage() {
  return (
    <div className="flex flex-col w-full bg-white">
      <section className="pt-48 pb-24 md:pt-64 md:pb-40 px-6 md:px-12 border-b border-black/10">
        <div className="max-w-[1400px] mx-auto text-center flex flex-col items-center">
          <h2 className="heading-sub text-gray-400 mb-6">Get In Touch</h2>
          <h1 className="heading-display text-primary-900 mb-8">Reach The <br/>Community.</h1>
        </div>
      </section>

      <section className="py-32 md:py-48 px-6 md:px-12 bg-white">
        <div className="max-w-[1400px] mx-auto">
          <div className="flex flex-col lg:flex-row gap-32">
            
            {/* Contact Info - Stark Typography */}
            <div className="w-full lg:w-1/3 space-y-24">
              <div>
                <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-gray-400 mb-8 border-b border-black/10 pb-4">Global Hub</h3>
                <div className="space-y-6 text-xl md:text-2xl font-black uppercase tracking-tight text-primary-900">
                  <p>789 Harmony Circle<br />Peace City, PC 54321</p>
                </div>
              </div>

              <div>
                <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-gray-400 mb-8 border-b border-black/10 pb-4">Direct Lines</h3>
                <div className="space-y-6 text-xl md:text-2xl font-black uppercase tracking-tight text-primary-900">
                  <p><a href="tel:+18007322366" className="hover:text-gray-400 transition-colors">+1 (800) PEACE-NOW</a></p>
                  <p><a href="mailto:hello@globalpeace.com" className="hover:text-gray-400 transition-colors">hello@globalpeace.com</a></p>
                </div>
              </div>

              <div>
                <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-gray-400 mb-8 border-b border-black/10 pb-4">Connect</h3>
                <div className="flex flex-col space-y-6 text-xl md:text-2xl font-black uppercase tracking-tight text-primary-900">
                  {['Instagram', 'YouTube', 'Facebook'].map((social) => (
                    <a key={social} href="#" className="hover:text-gray-400 transition-colors flex items-center justify-between group border-b border-black/5 pb-2">
                       {social}
                       <Globe className="w-5 h-5 text-gray-300 group-hover:text-primary-900 opacity-0 group-hover:opacity-100 transition-all -translate-x-4 group-hover:translate-x-0" />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Form - Ultra Clean Inputs */}
            <div className="w-full lg:w-2/3 lg:pl-20 border-t lg:border-t-0 lg:border-l border-black/10 pt-20 lg:pt-0">
              <h3 className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-primary-900 mb-16 leading-none">
                Start A <br/>Dialogue.
              </h3>
              
              <form className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
                <div className="relative group">
                  <input type="text" id="name" required className="peer w-full bg-transparent border-b-2 border-black/20 text-xl py-4 focus:outline-none focus:border-primary-900 transition-colors placeholder-transparent" placeholder="Name" />
                  <label htmlFor="name" className="absolute left-0 -top-6 text-xs font-bold uppercase tracking-[0.2em] text-gray-400 peer-placeholder-shown:text-xl peer-placeholder-shown:top-4 peer-placeholder-shown:text-gray-300 peer-focus:-top-6 peer-focus:text-xs peer-focus:text-primary-900 peer-focus:tracking-[0.2em] transition-all duration-300">
                    Full Name
                  </label>
                </div>
                
                <div className="relative group">
                  <input type="email" id="email" required className="peer w-full bg-transparent border-b-2 border-black/20 text-xl py-4 focus:outline-none focus:border-primary-900 transition-colors placeholder-transparent" placeholder="Email" />
                  <label htmlFor="email" className="absolute left-0 -top-6 text-xs font-bold uppercase tracking-[0.2em] text-gray-400 peer-placeholder-shown:text-xl peer-placeholder-shown:top-4 peer-placeholder-shown:text-gray-300 peer-focus:-top-6 peer-focus:text-xs peer-focus:text-primary-900 peer-focus:tracking-[0.2em] transition-all duration-300">
                    Email Address
                  </label>
                </div>
                
                <div className="md:col-span-2 relative group mt-8">
                  <select id="topic" required className="peer w-full bg-transparent border-b-2 border-black/20 text-xl py-4 focus:outline-none focus:border-primary-900 transition-colors appearance-none cursor-pointer text-primary-900">
                    <option value="" disabled selected hidden>Select a Topic</option>
                    <option>Global Partnership</option>
                    <option>Press Inquiry</option>
                    <option>General Support</option>
                  </select>
                  <label htmlFor="topic" className="absolute left-0 -top-6 text-xs font-bold uppercase tracking-[0.2em] text-primary-900 transition-all duration-300">
                    Inquiry Type
                  </label>
                </div>
                
                <div className="md:col-span-2 relative group mt-8">
                  <textarea id="message" required rows={4} className="peer w-full bg-transparent border-b-2 border-black/20 text-xl py-4 focus:outline-none focus:border-primary-900 transition-colors placeholder-transparent resize-none" placeholder="Message"></textarea>
                  <label htmlFor="message" className="absolute left-0 -top-6 text-xs font-bold uppercase tracking-[0.2em] text-gray-400 peer-placeholder-shown:text-xl peer-placeholder-shown:top-4 peer-placeholder-shown:text-gray-300 peer-focus:-top-6 peer-focus:text-xs peer-focus:text-primary-900 peer-focus:tracking-[0.2em] transition-all duration-300">
                    Your Message
                  </label>
                </div>
                
                <div className="md:col-span-2 pt-8">
                  <button type="button" className="btn-primary w-full sm:w-auto">
                    Submit Inquiry
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section - Stark B&W */}
      <section className="w-full h-[50vh] bg-gray-200 relative">
         <img 
            src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80&w=2000" 
            alt="HQ Location Map Placeholder" 
            className="w-full h-full object-cover grayscale-[0.8] opacity-60"
         />
         <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="px-10 py-6 bg-white border border-black/10 text-center">
               <h4 className="text-xl font-black uppercase tracking-tighter text-primary-900 mb-2">Peace Hub HQ</h4>
               <p className="text-xs font-bold uppercase tracking-[0.2em] text-gray-500">Global Operations</p>
            </div>
         </div>
      </section>
    </div>
  );
}
