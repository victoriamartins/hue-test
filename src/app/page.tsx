'use client'

import { Header } from '@/components/Header'
import { Selector } from '../components/Selector'

export default function Home() {
  const colorList = new Array(3).fill('')

  function addToColorList(color: string, index: number) {
    colorList[index] = color
  }

  return (
    <div className="w-[360px]">
      <Header />

      <div className="flex flex-col gap-8">
        <Selector addToColorList={addToColorList} id={1} />
        <Selector addToColorList={addToColorList} id={2} />
        <Selector addToColorList={addToColorList} id={3} />
      </div>

      <button
        onClick={() => console.log(colorList)}
        className="uppercase font-khula text-center bg-custom-dark-gray text-white w-full mt-7 text-2xl font-black leading-none p-3 rounded-lg hover:bg-black"
      >
        Test
      </button>
    </div>
  )
}
