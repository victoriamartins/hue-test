'use client'

import { Plus } from 'phosphor-react'

export default function Home() {
  return (
    <div className="w-[360px]">
      <header className="flex items-center justify-center uppercase font-black text-5xl gap-1 mb-7">
        <h1 className="tracking-tighter">Hue</h1>
        <span className="text-custom-gray tracking-widest drop">Test</span>
      </header>

      <div className="flex flex-col gap-8">
        <div className="w-full bg-custom-gray hover:bg-gray-100 h-10 rounded-lg flex flex-col justify-center align-center">
          <button className="w-full h-full">
            <Plus size={15} className="m-auto" weight="bold" />
          </button>
        </div>
        <div className="w-full bg-custom-gray hover:bg-gray-100 h-10 rounded-lg flex flex-col justify-center align-center">
          <button className="w-full h-full">
            <Plus size={15} className="m-auto" weight="bold" />
          </button>
        </div>
        <div className="w-full bg-custom-gray hover:bg-gray-100 h-10 rounded-lg flex flex-col justify-center align-center">
          <button className="w-full h-full">
            <Plus size={15} className="m-auto" weight="bold" />
          </button>
        </div>
      </div>
    </div>
  )
}
