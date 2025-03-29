import { useEffect, useRef, useState } from "react"

const SkillBar = ({ name, percentage, color }) => {
    const [isVisible, setIsVisible] = useState(false)
    const progressRef = useRef(null)
  
    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setIsVisible(true)
            observer.unobserve(entry.target)
          }
        },
        { threshold: 0.1 },
      )
  
      if (progressRef.current) {
        observer.observe(progressRef.current)
      }
  
      return () => {
        if (progressRef.current) {
          observer.unobserve(progressRef.current)
        }
      }
    }, [])
  
    return (
      <div ref={progressRef}>
        <div className="flex justify-between mb-1">
          <span className="font-medium">{name}</span>
          <span>{percentage}%</span>
        </div>
        <div className="w-full bg-gray-200 h-4 rounded-full overflow-hidden mb-3">
          <div
            className={`${color} h-full rounded-full transition-all duration-1000 ease-out`}
            style={{
              width: isVisible ? `${percentage}%` : "0%",
            }}
          ></div>
        </div>
      </div>
    )
  }
  
  export default SkillBar  