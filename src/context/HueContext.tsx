import { ReactNode, createContext } from 'react'

interface HueContextInterface {
  addToColorList: (color: string, index: number) => void
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

  return (
    <HueContext.Provider
      value={{
        addToColorList,
      }}
    >
      {children}
    </HueContext.Provider>
  )
}
