"use client"
import { ChevronDown } from 'lucide-react'

const ScrollButton = ({ targetId }) => {
    
  const handleClick = () => {
    const target = document.getElementById(targetId)
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <button
      onClick={handleClick}
      className="group relative w-10 tablet:w-12 laptop:w-14 h-10 tablet:h-12 laptop:h-14 bg-gradient-to-br from-primary to-primary-foreground text-background rounded-full shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105 focus:outline-none focus:ring-2 focus:ring-pink-400 focus:ring-offset-0 overflow-hidden"
      aria-label="Scroll to next section"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary/50 to-primary-foreground/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <ChevronDown className="w-6 h-6 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-transform duration-300 group-hover:translate-y-1" />
    </button>
  )
}

export default ScrollButton