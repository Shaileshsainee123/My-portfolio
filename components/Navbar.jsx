import React, { useState, useEffect } from "react";
import Link from "next/link";
import { X, Menu } from "lucide-react";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [showNavbar, setShowNavbar] = useState(false);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [activeSection, setActiveSection] = useState("home"); // Store the active section

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            if (currentScrollY > 100 && currentScrollY > lastScrollY) {
                setShowNavbar(true);
            } else if (currentScrollY < lastScrollY) {
                setShowNavbar(false);
                setIsMenuOpen(false);
            }
            setLastScrollY(currentScrollY);

            // Detect active section
            const sections = ["home", "about","quality", "skill", "service", "contact",];
            let foundSection = "home"; // Default section
            for (let section of sections) {
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    if (rect.top <= 150 && rect.bottom >= 150) {
                        foundSection = section;
                        break;
                    }
                }
            }
            setActiveSection(foundSection);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [lastScrollY]);

    const handleScroll = (id) => {
        const section = document.getElementById(id);
        if (section) {
            const offset = 10;
            const topPosition = section.offsetTop - offset;
            window.scrollTo({ top: topPosition, behavior: "smooth" });
        }
        setActiveSection(id); // Set active section manually on click
        if (isMenuOpen) {
            setIsMenuOpen(false);
        }
    };

    return (
        <>
            <nav
                className={`fixed top-0 left-0 w-full z-50 transition-transform duration-300 bg-white shadow-md ${
                    showNavbar ? "translate-y-0" : "-translate-y-full"
                }`}
            >
                <div className="container mx-auto px-4 py-3 flex justify-between items-center">
                    <Link href="/" className="flex items-center">
                        <span className="text-3xl font-bold">
                            <span className="text-[#00d2b5]">Shailesh</span>
                        </span>
                    </Link>

                    <div className="hidden md:flex items-center space-x-6">
                        {["home", "about", "quality","skill", "service", "contact"].map((item) => (
                            <button
                                key={item}
                                onClick={() => handleScroll(item)}
                                className={`${
                                    activeSection === item ? "text-[#00d2b5] font-bold" : "text-gray-700 hover:text-[#00d2b5] "
                                } transition-colors cursor-pointer`}
                            >
                                {item.charAt(0).toUpperCase() + item.slice(1)}
                            </button>
                        ))}
                    </div>

                    <a
                    href="tel:+91 8419810848"
                        onClick={() => handleScroll("contact")}
                        className="hidden md:block rounded-full border-2 border-[#00d2b5] text-[#00d2b5] px-6 py-2 hover:bg-[#00d2b5] hover:text-white transition-colors cursor-pointer"
                    >
                        Contact Us +91 8419810848
                    </a>

                    <button className="md:hidden text-gray-700 cursor-pointer" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                        {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>

                {isMenuOpen && (
                    <div className="md:hidden bg-white gap-4 shadow-xl backdrop-blur-sm absolute w-full">
                        <div className="flex gap-4 flex-col md:hidden items-center p-4">
                            {["home", "about","quality", "skill", "service", "contact"].map((item) => (
                                <button
                                    key={item}
                                    onClick={() => handleScroll(item)}
                                    className={`${
                                        activeSection === item ? "text-[#00d2b5] font-bold" : "text-gray-700 hover:text-[#00d2b5]"
                                    } transition-colors cursor-pointer`}
                                >
                                    {item.charAt(0).toUpperCase() + item.slice(1)}
                                </button>
                            ))}
                        </div>
                    </div>
                )}
            </nav>
        </>
    );
};

export default Navbar;
