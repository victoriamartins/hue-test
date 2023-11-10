'use client'

import { Header } from '@/components/Header'
import { Selector } from '../components/Selector'
import { useContext } from 'react'
import { HueContext } from '@/context/HueContext'
import { useRouter } from 'next/navigation'

export default function Home() {
  const { isItAbleToTest } = useContext(HueContext)
  const router = useRouter()

  function handleClick() {
    isItAbleToTest() === 1 && router.push('/combination')
  }

  return (
    <div className="w-[360px]">
      <Header />

      <div className="flex flex-col gap-8">
        <Selector id={0} />
        <Selector id={1} />
        <Selector id={2} />
      </div>

      <button
        onClick={handleClick}
        className="uppercase font-khula text-center bg-custom-dark-gray text-white w-full mt-7 text-2xl font-black leading-none p-3 rounded-lg hover:bg-black"
      >
        Test
      </button>
    </div>
  )
}
