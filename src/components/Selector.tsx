'use client'

import { useState, ChangeEvent } from 'react'

export function Selector() {
  const [color, setColor] = useState('')
  const [bgColor, setBgColor] = useState('#e4e4e4')

  function handleColorChange(event: ChangeEvent<HTMLInputElement>) {
    const textColor = event.target.value
    setColor(textColor)
    textColor.length === 6 && setBgColor(`#${textColor}`)
    textColor.length < 6 && setBgColor('#e4e4e4')
  }

  return (
    <div
      style={{ background: bgColor }}
      className={`w-full text-xl font-semibold focus-within:bg-gray-100 px-4 py-3 gap-1 rounded-lg flex flex-row align-baseline justify-center`}
    >
      <span className="font-inter text-gray-400">#</span>
      <input
        type="text"
        className="bg-transparent focus:outline-none w-full tracking-wider text-custom-dark-gray"
        placeholder="000000"
        maxLength={6}
        value={color}
        onChange={handleColorChange}
        spellCheck="false"
      />
    </div>
  )
}
