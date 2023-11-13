'use client'

import { Header } from '@/components/Header'
import { Sample } from '@/components/Sample'
import { HueContext } from '@/context/HueContext'
import { useContext } from 'react'

export default function Combination() {
  const { colorList, isItAbleToTest } = useContext(HueContext)

  return (
    <div className="w-[360px]">
      <Header />
      {isItAbleToTest() === 1 ? (
        <div className="flex flex-col gap-6">
          {colorList.map((item, index) => {
            const otherColors = colorList.filter((it, id) => id !== index)
            return otherColors.map((color) => {
              return (
                <Sample background={item} color={color} key={Math.random()} />
              )
            })
          })}
        </div>
      ) : (
        <p className="text-center font-bold text-lg">
          You need to choose three hues first.
        </p>
      )}
    </div>
  )
}
