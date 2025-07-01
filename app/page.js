"use client"
import Image from "next/image"
import Link from "next/link"
import { ChevronDown } from "lucide-react"
import AboutMe from "@/components/AboutMe"
import Navbar from "@/components/Navbar"
import ScrollToTop from "@/components/ScrollToTop"
import Typewriter from "@/components/reuableComponents/Typewriter"
import Skills from "@/components/Skills"
import Education from "@/components/Education"
import Services from "@/components/Services"
import Footer from "@/components/Footer"
import ContactForm from "@/components/ContactForm"

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen">

        {/* Hero Section */}
        <section className="bg-[#00d2b5] py-16" id="home">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="md:w-1/2 mb-10 md:mb-0 flex justify-center">
                <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white">
                  <Image src="/profilepic.jpeg" alt="Profile" fill className="object-cover" />
                </div>
              </div>

              <div className="md:w-1/2 text-white">
                <h2 className="text-2xl mb-2">I'm</h2>
                <h1 className="text-4xl md:text-6xl font-bold mb-4">
                  <span className="">SHAILESH</span>
                </h1>
                <h3 className="text-2xl md:text-3xl mb-10">
                  <Typewriter words={["Front End Dev", "React Developer", "MERN Stack Dev", "React Native Dev"]} />
                </h3>

                <div className="flex flex-col sm:flex-row items-center gap-6">
                  <a
                    href="/ShaileshUp.pdf"
                    download
                    className="rounded-full border-2 border-white text-white px-8 py-3 hover:bg-white hover:text-[#00d2b5] transition-colors"
                  >
                    Download CV
                  </a>

                </div>
              </div>
            </div>

            <div className="flex justify-center mt-16">
              <ChevronDown className="h-10 w-10 text-white animate-bounce" />
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-4 md:py-14 max-w-5xl mx-auto px-4">
          <AboutMe />

        </section>
        <Education />
        <Skills />
        <Services />
        <ContactForm />
        <Footer />

        {/* Additional sections would go here */}
        <ScrollToTop />

      </main>
    </>
  )
}

