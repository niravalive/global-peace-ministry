import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const initiatives = [
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

export default function MinistriesPage() {
  return (
    <div className="flex flex-col w-full bg-white">
      <section className="pt-48 pb-24 md:pt-64 md:pb-40 px-6 md:px-12 bg-primary-900 text-white">
        <div className="max-w-[1400px] mx-auto flex flex-col items-start">
          <h2 className="heading-sub text-gray-400 mb-6 font-sans">Our Initiatives</h2>
          <h1 className="heading-display mb-8">Working <br/>For Harmony.</h1>
          <p className="text-xl md:text-2xl font-medium tracking-tight leading-snug max-w-2xl text-gray-300">
            From grassroots community building to international policy advocacy, our programs are engineered to cultivate peace.
          </p>
        </div>
      </section>

      {/* Program List - Minimalist Magazine Style */}
      <section className="py-24 md:py-32 px-6 md:px-12 bg-white">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-24">
            {initiatives.map((item, i) => (
              <div key={i} className="group border-t border-black/10 pt-10">
                <div className="font-serif text-5xl md:text-7xl font-black text-gray-100 tracking-tighter mb-8 group-hover:text-primary-900 transition-colors duration-500">
                  {item.number}
                </div>
                <h3 className="font-serif text-4xl text-primary-900 mb-6 leading-tight">
                  {item.title}
                </h3>
                <p className="text-gray-500 font-medium leading-relaxed text-lg mb-12">
                  {item.desc}
                </p>
                <Link href="/contact" className="inline-flex items-center gap-4 text-xs font-black uppercase tracking-[0.2em] text-primary-900 border-b border-primary-900 pb-2 hover:text-gray-400 hover:border-gray-400 transition-all duration-300 font-sans">
                  Get Involved <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Project - Edge to Edge Split */}
      <section className="flex flex-col lg:flex-row bg-gray-50">
        <div className="w-full lg:w-1/2 h-[60vh] lg:h-auto overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=1200" 
            alt="Mountain peace" 
            className="w-full h-full object-cover grayscale-[0.5]"
          />
        </div>
        <div className="w-full lg:w-1/2 p-12 md:p-24 flex flex-col justify-center">
          <h2 className="heading-sub text-gray-400 mb-8 font-sans">Featured Initiative</h2>
          <h3 className="heading-display mb-10 text-primary-900">The Harmony <br/>Residencies.</h3>
          <p className="text-xl md:text-2xl font-light text-gray-500 mb-16 leading-relaxed">
            Our flagship retreat program where leaders from diverse sectors live together for 30 days to build the foundations of a new global peace initiative.
          </p>
          <div className="flex flex-col sm:flex-row gap-6">
            <button className="btn-primary">
              Learn More
            </button>
            <button className="btn-secondary">
              Apply Now
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
