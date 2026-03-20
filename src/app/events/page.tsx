'use client';

const events = [
  {
    title: "Global Peace Summit 2026",
    date: "Dec 10 - Dec 14",
    time: "All Day",
    location: "Stockholm Center / Virtual",
    desc: "Our annual gathering of minds. A series of world-class lectures, workshops, and meditation sessions.",
    img: "https://images.unsplash.com/photo-1540317580384-e5d43616b9aa?auto=format&fit=crop&q=80&w=1200",
    featured: true
  },
  {
    title: "Healing Circle: Inner Silence",
    date: "Every Tuesday",
    time: "6:00 PM - 7:30 PM",
    location: "Sanctuary Hall",
    desc: "A bi-weekly gathering focused on deep meditation and collective healing practices.",
    img: "https://images.unsplash.com/photo-1506126613408-eca07ce682b1?auto=format&fit=crop&q=80&w=1200",
    featured: false
  },
  {
    title: "Youth Dialogues: Future Peace",
    date: "First Saturday of Month",
    time: "10:00 AM",
    location: "Global Youth Wing",
    desc: "Empowering young leaders to discuss and initiate peace projects in their local schools.",
    img: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=1200",
    featured: false
  }
];

export default function EventsPage() {
  const featuredEvent = events.find(e => e.featured);
  const regularEvents = events.filter(e => !e.featured);

  return (
    <div className="flex flex-col w-full bg-white">
      <section className="pt-48 pb-24 md:pt-64 md:pb-40 px-6 md:px-12 border-b border-black/10">
        <div className="max-w-[1400px] mx-auto flex flex-col items-center text-center">
          <h2 className="heading-sub text-gray-400 mb-6 font-sans">Gather With Us</h2>
          <h1 className="heading-display text-primary-900 mb-8">Upcoming <br/>Events.</h1>
        </div>
      </section>

      {/* Featured Event Edge to Edge */}
      {featuredEvent && (
        <section className="relative h-[80vh] w-full flex flex-col justify-end pb-32 px-6 md:px-12">
          <div className="absolute inset-0 z-0">
            <img 
              src={featuredEvent.img}
              alt={featuredEvent.title}
              className="w-full h-full object-cover grayscale-[0.3]"
            />
            <div className="absolute inset-0 bg-black/50" />
          </div>
          
          <div className="relative z-10 max-w-[1400px] w-full mx-auto flex flex-col lg:flex-row justify-between lg:items-end gap-12">
            <div>
              <div className="inline-flex border border-white/30 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.3em] text-white mb-8 font-sans">
                Featured Event
              </div>
              <h2 className="heading-display text-white leading-[0.9] mb-6">
                {featuredEvent.title}
              </h2>
            </div>
            <div className="bg-white p-12 max-w-md w-full shadow-2xl">
              <div className="space-y-6 mb-10 text-sm font-bold uppercase tracking-widest text-primary-900 font-sans">
                <div className="border-b border-black/10 pb-4">
                  <span className="text-gray-400 block text-[10px] mb-1">Date</span>
                  {featuredEvent.date}
                </div>
                <div className="border-b border-black/10 pb-4">
                  <span className="text-gray-400 block text-[10px] mb-1">Time</span>
                  {featuredEvent.time}
                </div>
                <div className="border-b border-black/10 pb-4">
                  <span className="text-gray-400 block text-[10px] mb-1">Location</span>
                  {featuredEvent.location}
                </div>
              </div>
              <button className="btn-primary w-full">Reserve Spot</button>
            </div>
          </div>
        </section>
      )}

      {/* Regular Events List - Minimal List Style */}
      <section className="py-24 md:py-32 px-6 md:px-12 bg-white">
        <div className="max-w-[1400px] mx-auto">
          <h2 className="heading-sub text-gray-400 mb-16 border-b border-black/10 pb-8 font-sans">All Upcoming Events</h2>
          
          <div className="space-y-16">
            {regularEvents.map((event, i) => (
              <div key={i} className="group grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center border-b border-black/10 pb-16">
                <div className="lg:col-span-5 h-[400px] overflow-hidden shadow-lg">
                  <img src={event.img} alt={event.title} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 scale-105 group-hover:scale-100" />
                </div>
                <div className="lg:col-span-7 lg:pl-12">
                  <div className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400 mb-6 flex gap-4 font-sans">
                    <span>{event.date}</span>
                    <span className="text-black/20">|</span>
                    <span>{event.time}</span>
                  </div>
                  <h3 className="font-serif text-4xl md:text-5xl text-primary-900 mb-8 leading-tight group-hover:text-gray-500 transition-colors">
                    {event.title}
                  </h3>
                  <p className="text-xl text-gray-500 font-medium leading-relaxed mb-10 max-w-2xl">
                    {event.desc}
                  </p>
                  <button className="text-[11px] font-black uppercase tracking-[0.2em] text-primary-900 border-b-2 border-primary-900 pb-1 hover:text-gray-400 hover:border-gray-400 transition-colors font-sans">
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
