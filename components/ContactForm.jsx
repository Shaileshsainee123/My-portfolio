import { useState } from "react";
import Section from "./reuableComponents/Section";

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form submitted:", formData);
        // Add form submission logic here
    };

    return (
        <section className='max-w-5xl mx-auto p-4 min-h-screen' id='contact'>
            <Section Title={"Contact"} />
    
                <div className="flex justify-center items-center  px-4">
                    <form
                        onSubmit={handleSubmit}
                        className="py-4 w-full"
                    >
                        {/* Name & Email Fields */}
                        <div className="flex flex-col md:flex-row gap-4 mb-4">
                            <input
                                type="text"
                                name="name"
                                placeholder="Your Name"
                                value={formData.name}
                                onChange={handleChange}
                                className="flex-1 p-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-[#00d2b5] text-gray-600 placeholder-gray-500"
                            />
                            <input
                                type="email"
                                name="email"
                                placeholder="Your Email"
                                value={formData.email}
                                onChange={handleChange}
                                className="flex-1 p-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-[#00d2b5] text-gray-600 placeholder-gray-500"
                            />
                        </div>

                        {/* Subject Field */}
                        <div className="mb-4">
                            <input
                                type="text"
                                name="subject"
                                placeholder="Subject"
                                value={formData.subject}
                                onChange={handleChange}
                                className="w-full p-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-[#00d2b5] text-gray-600 placeholder-gray-500"
                            />
                        </div>

                        {/* Message Field */}
                        <div className="mb-6">
                            <textarea
                                name="message"
                                placeholder="Message"
                                rows="4"
                                value={formData.message}
                                onChange={handleChange}
                                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00d2b5] text-gray-600 placeholder-gray-500"
                            />
                        </div>

                        {/* Submit Button */}
                        <div className="text-center">
                            <button
                                type="submit"
                                className="px-6 py-3 bg-transparent border-2 border-[#00d2b5] text-[#00d2b5] rounded-full hover:bg-[#00d2b5] hover:text-white transition duration-300 cursor-pointer"
                            >
                                Send Message
                            </button>
                        </div>
                    </form>
                </div>
        </section>
    );
};

export default ContactForm;
