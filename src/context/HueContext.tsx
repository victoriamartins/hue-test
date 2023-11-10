'use client'

import { ReactNode, createContext } from 'react'

interface HueContextInterface {
  addToColorList: (color: string, index: number) => void
  isItAbleToTest: () => number
  colorList: string[]
}

interface HueContextProviderProps {
  children: ReactNode
}

export const HueContext = createContext({} as HueContextInterface)

export function HueContextProvider({ children }: HueContextProviderProps) {
  const colorList = new Array(3).fill('')

  function addToColorList(color: string, index: number) {
    colorList[index] = color
  }

  function isItAbleToTest() {
    let status = 0
    const filtered = colorList.filter((item) => item === '')
    filtered.length === 0 ? (status = 1) : (status = 0)
    return status
  }

  return (
    <HueContext.Provider
      value={{
        addToColorList,
        isItAbleToTest,
        colorList,
      }}
    >
      {children}
    </HueContext.Provider>
  )
}
