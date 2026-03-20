import { ArrowDown } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="flex flex-col w-full bg-white">
      {/* Editorial Header - Reduced padding, elegant serif */}
      <section className="pt-32 pb-16 md:pt-48 md:pb-24 px-6 md:px-12 text-center">
        <div className="max-w-[1000px] mx-auto flex flex-col items-center">
          <h1 className="heading-display text-primary-900 mb-6">Our Story.</h1>
          <p className="text-lg md:text-2xl font-medium leading-relaxed text-gray-600 mb-12">
            A borderless collective dedicated to the pursuit of global harmony through conscious living and community action.
          </p>
          <div className="animate-bounce text-gray-400">
            <ArrowDown className="w-6 h-6" />
          </div>
        </div>
      </section>

      {/* Image with Overlapping Info Card */}
      <section className="w-full relative px-6 md:px-12 max-w-[1600px] mx-auto">
        <div className="h-[50vh] md:h-[70vh] w-full overflow-hidden shadow-2xl relative">
          <img 
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=2000" 
            alt="Community collaborate" 
            className="w-full h-full object-cover"
          />
        </div>
        
        {/* Overlapping Card */}
        <div className="formal-card mx-auto max-w-4xl -mt-20 relative z-10 text-center">
           <h3 className="heading-sub text-gray-400 mb-4 border-b border-gray-100 pb-4">Our Commitment</h3>
           <p className="font-serif text-2xl md:text-3xl text-primary-900 leading-snug">
             "To create a world where every individual lives in dignity, where conflict is resolved through dialogue, and where spiritual peace is a shared human experience."
           </p>
        </div>
      </section>

      {/* History Layout - Refined Spacing */}
      <section className="section-padding px-6 md:px-12 bg-white">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-5">
              <h2 className="heading-sub text-gray-400 mb-4">Our Foundations</h2>
              <h3 className="heading-primary text-primary-900 mb-6">A Legacy of Harmony.</h3>
            </div>
            <div className="lg:col-span-7 lg:pl-12 space-y-6 text-lg text-gray-600 font-medium leading-relaxed">
              <p>
                Initiated in 1995 as a small dialogue group, Global Peace Community has evolved into a worldwide movement. What started as local conversations about inclusion and respect has blossomed into a sophisticated network of educators, activists, and spiritual leaders.
              </p>
              <p>
                Today, we operate in over 40 countries, facilitating peace summits and local community stabilization programs. Our history is written by the thousands of individuals who chose compassion over conflict.
              </p>
              
              <div className="grid grid-cols-2 gap-8 mt-12 pt-12 border-t border-gray-200">
                <div>
                  <div className="font-serif text-4xl md:text-5xl text-primary-900 mb-2">25+</div>
                  <div className="heading-sub text-gray-400">Years Active</div>
                </div>
                <div>
                  <div className="font-serif text-4xl md:text-5xl text-primary-900 mb-2">40k</div>
                  <div className="heading-sub text-gray-400">Volunteers</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission - Reduced Padding, Serif Headers */}
      <section className="bg-primary-900 text-white section-padding px-6 md:px-12">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24">
          
          <div className="flex flex-col border-t border-white/20 pt-8">
            <h4 className="heading-sub text-gray-400 mb-6">01. Our Vision</h4>
            <h3 className="heading-primary mb-6">
              A Planet Living In Dignity.
            </h3>
            <p className="text-lg text-gray-300 font-medium leading-relaxed">
              To create a planet where every individual lives in dignity, where conflict is resolved through dialogue, and where spiritual peace is a shared human experience.
            </p>
          </div>

          <div className="flex flex-col border-t border-white/20 pt-8">
            <h4 className="heading-sub text-gray-400 mb-6">02. Our Mission</h4>
            <h3 className="heading-primary mb-6">
              Mobilizing Hearts For Action.
            </h3>
            <p className="text-lg text-gray-300 font-medium leading-relaxed">
              Mobilizing resources and hearts to build sustainable infrastructures for peace, providing trauma-informed care, and fostering worldclass intercultural education.
            </p>
          </div>

        </div>
      </section>
    </div>
  );
}
