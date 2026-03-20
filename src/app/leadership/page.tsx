'use client';

const leaders = [
  {
    name: "Dr. Elena Vance",
    role: "International Director",
    img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800",
  },
  {
    name: "Brother Simon Peter",
    role: "Spiritual Coordinator",
    img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=800",
  },
  {
    name: "Amara Okoro",
    role: "Global Operations",
    img: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&q=80&w=800",
  }
];

export default function LeadershipPage() {
  return (
    <div className="flex flex-col w-full bg-white">
      <section className="pt-48 pb-24 md:pt-64 md:pb-40 px-6 md:px-12 border-b border-black/10">
        <div className="max-w-[1400px] mx-auto text-center flex flex-col items-center">
          <h2 className="heading-sub text-gray-400 mb-6 font-sans">Our Stewards</h2>
          <h1 className="heading-display text-primary-900 mb-8">Global <br/>Leadership.</h1>
        </div>
      </section>

      {/* Leadership Profiles - Minimalist Grid */}
      <section className="py-24 md:py-32 px-6 md:px-12 bg-white">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-20">
            {leaders.map((leader, i) => (
              <div key={i} className="group flex flex-col cursor-pointer">
                <div className="mb-8 w-full aspect-[3/4] overflow-hidden bg-gray-100 shadow-lg">
                  <img src={leader.img} alt={leader.name} className="w-full h-full object-cover grayscale transition-all duration-1000 group-hover:scale-105 group-hover:grayscale-0" />
                </div>
                <div className="border-t border-black/10 pt-6">
                  <h3 className="font-serif text-3xl text-primary-900 mb-2">{leader.name}</h3>
                  <p className="heading-sub text-gray-400">{leader.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Values Banner - High Contrast */}
      <section className="bg-primary-900 text-white py-24 px-6 md:px-12">
        <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row items-end justify-between gap-12">
          <div className="max-w-3xl">
            <h2 className="heading-sub text-gray-400 mb-6 font-sans">Integrity in Action</h2>
            <h3 className="heading-primary text-white">
              Led By Conviction, <br/>Driven By Peace.
            </h3>
          </div>
          <button className="btn-secondary !border-white !text-white hover:!bg-white hover:!text-primary-900">
            Our Ethics Charter
          </button>
        </div>
      </section>
    </div>
  );
}
