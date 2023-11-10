'use client'

import { Selector } from '../components/Selector'

export default function Home() {
  return (
    <div className="w-[360px]">
      <header className="flex items-center justify-center uppercase font-black text-5xl gap-1 mb-6">
        <h1 className="tracking-tighter">Hue</h1>
        <span className="text-custom-gray tracking-widest drop">Test</span>
      </header>

      <div className="flex flex-col gap-8">
        <Selector />
        <Selector />
        <Selector />
      </div>

      <button className="uppercase font-khula text-center bg-custom-dark-gray text-white w-full mt-7 text-2xl font-black leading-none p-3 rounded-lg hover:bg-black">
        Test
      </button>
    </div>
  )
}
