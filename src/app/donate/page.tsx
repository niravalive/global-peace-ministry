'use client';

import { useState } from 'react';

export default function DonatePage() {
  const [amount, setAmount] = useState<number | 'custom'>(100);

  return (
    <div className="flex flex-col w-full bg-white min-h-screen">
      <section className="pt-48 pb-24 md:pt-64 md:pb-40 px-6 md:px-12 border-b border-black/10">
        <div className="max-w-[1400px] mx-auto text-center flex flex-col items-center">
          <h2 className="heading-sub text-gray-400 mb-6">Invest in Peace</h2>
          <h1 className="heading-display text-primary-900 mb-8">Make An <br/>Impact.</h1>
          <p className="text-xl md:text-2xl font-medium tracking-tight leading-snug max-w-2xl text-gray-500">
            Your contributions directly fund global peace education, disaster relief, and community integration programs.
          </p>
        </div>
      </section>

      {/* Donation UI - Brutalist / Clean Interface */}
      <section className="py-32 md:py-48 px-6 md:px-12 bg-white">
        <div className="max-w-[800px] mx-auto">
          
          <div className="border border-black/10 p-10 md:p-20 bg-gray-50/50">
            <div className="flex flex-col md:flex-row justify-between items-baseline mb-16 border-b border-black/10 pb-10">
              <h2 className="text-4xl font-black uppercase tracking-tight text-primary-900">Contribution</h2>
              <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-gray-400 mt-4 md:mt-0">Secure Gateway</span>
            </div>

            {/* Selection Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 border-t border-l border-black/10 mb-16">
              {[50, 100, 500, 1000].map((val) => (
                <button
                  key={val}
                  onClick={() => setAmount(val)}
                  className={`border-b border-r border-black/10 py-8 text-2xl font-black transition-colors duration-300 ${
                    amount === val 
                      ? 'bg-primary-900 text-white' 
                      : 'bg-white text-gray-400 hover:bg-gray-100 hover:text-primary-900'
                  }`}
                >
                  ${val}
                </button>
              ))}
            </div>

            <div className="mb-20">
              <label className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400 block mb-6">Or Enter Custom Amount</label>
              <div className="relative border-b-2 border-primary-900 flex items-center">
                <span className="text-4xl sm:text-6xl font-black text-gray-300 absolute left-0 bottom-4">$</span>
                <input
                  type="number"
                  className="w-full bg-transparent text-5xl sm:text-7xl font-black text-primary-900 pl-16 sm:pl-24 py-4 focus:outline-none placeholder-gray-200"
                  placeholder="0"
                  value={typeof amount === 'number' ? amount : ''}
                  onChange={(e) => setAmount(Number(e.target.value))}
                />
              </div>
            </div>

            {/* Minimal Payment Details */}
            <div className="space-y-12">
               <div>
                  <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400 border-b border-black/10 pb-4 mb-8">Cardholder Details</h3>
                  <input type="text" placeholder="Name on Card" className="w-full bg-transparent border-b-2 border-black/20 text-xl py-4 focus:outline-none focus:border-primary-900 transition-colors uppercase font-bold tracking-widest text-primary-900 placeholder-gray-300" />
               </div>
               
               <div>
                  <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400 border-b border-black/10 pb-4 mb-8">Card Information</h3>
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-x-8 gap-y-12">
                    <div className="md:col-span-12">
                      <input type="text" placeholder="0000 0000 0000 0000" className="w-full bg-transparent border-b-2 border-black/20 text-3xl py-4 focus:outline-none focus:border-primary-900 transition-colors font-mono tracking-widest text-primary-900 placeholder-gray-200" />
                    </div>
                    <div className="md:col-span-6">
                      <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400 block mb-2">Expiry</label>
                      <input type="text" placeholder="MM/YY" className="w-full bg-transparent border-b-2 border-black/20 text-xl py-4 focus:outline-none focus:border-primary-900 transition-colors font-mono tracking-widest text-primary-900 placeholder-gray-300" />
                    </div>
                    <div className="md:col-span-6">
                      <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400 block mb-2">Security</label>
                      <input type="text" placeholder="CVC" className="w-full bg-transparent border-b-2 border-black/20 text-xl py-4 focus:outline-none focus:border-primary-900 transition-colors font-mono tracking-widest text-primary-900 placeholder-gray-300" />
                    </div>
                  </div>
               </div>
            </div>

            <div className="mt-20">
              <button className="w-full py-8 bg-primary-900 text-white font-black text-2xl uppercase tracking-tighter hover:bg-black transition-colors duration-500">
                Authorize ${typeof amount === 'number' ? amount : '0'}
              </button>
            </div>
            
            <div className="mt-12 text-center">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400">
                256-Bit Encrypted &middot; SSL Secured Gateway
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
