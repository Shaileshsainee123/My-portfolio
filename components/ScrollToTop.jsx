import React, { useEffect, useState } from 'react'
import { ArrowUp, } from "lucide-react"

const ScrollToTop = () => {
    const [showScrollTop, setShowScrollTop] = useState(false)

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        })
    }
    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY
            // Show scroll to top button when scrolled down enough
            if (currentScrollY > 300) {
                setShowScrollTop(true)
            } else {
                setShowScrollTop(false)
            }
        }

        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])
    return (
        <>
            {/* Scroll to top button */}
            <button
                onClick={scrollToTop}
                className={`fixed bottom-6 right-6 bg-[#00d2b5] text-white p-3 rounded-full shadow-lg transition-opacity duration-300 animate-bounce cursor-pointer ${showScrollTop ? "opacity-100" : "opacity-0 pointer-events-none"}`}
            >
                <ArrowUp className="h-6 w-6" />
            </button>
        </>
    )
}

export default ScrollToTop