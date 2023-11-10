import { Header } from '@/components/Header'
import { Sample } from '@/components/Sample'

export default function Combination() {
  return (
    <div className="w-[360px]">
      <Header />

      <div className="flex flex-col gap-6">
        <Sample background="#99002b" color="#00ff1a" />
        <Sample background="#99002b" color="#ff8000" />
        <Sample background="#ff8000" color="#00ff1a" />
        <Sample background="#ff8000" color="#99002b" />
        <Sample background="#00ff1a" color="#ff8000" />
        <Sample background="#00ff1a" color="#99002b" />
      </div>
    </div>
  )
}
