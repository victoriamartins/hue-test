interface SampleProps {
  background: string
  color: string
}

export function Sample({ background, color }: SampleProps) {
  return (
    <div
      style={{ background }}
      className={`w-full text-xl font-semibold focus-within:bg-gray-100 px-4 py-3 gap-1 rounded-lg`}
    >
      <span style={{ color }}>Your text goes here</span>
    </div>
  )
}
