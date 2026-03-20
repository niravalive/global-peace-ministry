import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-primary-900 text-white border-t border-black/10">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-24 md:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8">
          
          <div className="lg:col-span-4 flex flex-col justify-between">
            <div>
              <Link href="/" className="font-black uppercase tracking-widest text-4xl mb-6 block">
                GPC.
              </Link>
              <p className="text-gray-400 text-sm leading-relaxed max-w-sm font-medium">
                Global Peace Community. <br/>
                Advancing harmony, inclusion, and spirituality across borders.
              </p>
            </div>
          </div>

          <div className="lg:col-span-2">
            <h3 className="text-[10px] font-bold uppercase tracking-[0.3em] text-gray-400 mb-8">
              Explore
            </h3>
            <ul className="space-y-4 text-sm font-bold uppercase tracking-widest">
              <li><Link href="/" className="hover:text-gray-400 transition-colors block">Home</Link></li>
              <li><Link href="/about" className="hover:text-gray-400 transition-colors block">About</Link></li>
              <li><Link href="/leadership" className="hover:text-gray-400 transition-colors block">Leadership</Link></li>
              <li><Link href="/ministries" className="hover:text-gray-400 transition-colors block">Ministries</Link></li>
              <li><Link href="/events" className="hover:text-gray-400 transition-colors block">Events</Link></li>
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h3 className="text-[10px] font-bold uppercase tracking-[0.3em] text-gray-400 mb-8">
              Initiatives
            </h3>
            <ul className="space-y-4 text-sm font-bold uppercase tracking-widest">
              <li><Link href="#" className="hover:text-gray-400 transition-colors block">Peace Education</Link></li>
              <li><Link href="#" className="hover:text-gray-400 transition-colors block">Global Summits</Link></li>
              <li><Link href="#" className="hover:text-gray-400 transition-colors block">Youth Dialogues</Link></li>
              <li><Link href="/donate" className="hover:text-gray-400 transition-colors block mt-8 pb-1 border-b border-white/20 inline-block">Give Now</Link></li>
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h3 className="text-[10px] font-bold uppercase tracking-[0.3em] text-gray-400 mb-8">
              Contact HQ
            </h3>
            <ul className="space-y-6 text-sm text-gray-300 font-medium">
              <li>
                <div className="text-white font-bold uppercase tracking-widest mb-1 text-xs">Address</div>
                789 Harmony Circle<br />Suite 400<br />Peace City, PC 54321
              </li>
              <li>
                <div className="text-white font-bold uppercase tracking-widest mb-1 text-xs">Phone</div>
                +1 (800) PEACE-NOW
              </li>
              <li>
                <div className="text-white font-bold uppercase tracking-widest mb-1 text-xs">Email</div>
                <a href="mailto:hello@globalpeace.com" className="hover:text-white transition-colors">hello@globalpeace.com</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-32 pt-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-gray-500">
            &copy; {new Date().getFullYear()} Global Peace Community.
          </p>
          <div className="flex space-x-8 text-[11px] font-bold uppercase tracking-[0.2em] text-gray-400">
            <a href="#" className="hover:text-white transition-colors">Instagram</a>
            <a href="#" className="hover:text-white transition-colors">YouTube</a>
            <a href="#" className="hover:text-white transition-colors">Facebook</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
