import Section from "./reuableComponents/Section";

const Services = () => {
    const services = [
        {
            title: "Web Development",
            description:
                "Transform your ideas into fully functional web applications with tailored full-stack solutions. From responsive frontends in React to robust backend APIs with Node.js and MongoDB/MySQL, I bring your projects to life with scalable architecture and seamless user experience.",
            icon: "🌐",
        },
        {
            title: "Web Design",
            description:
                "Make a lasting first impression with clean, user-friendly web designs. I blend modern design principles with responsive layouts to ensure your brand stands out, whether it's a business site, portfolio, or landing page.",
            icon: "🖥️",
        },
        {
            title: "App Development",
            description:
                "Bring your app ideas to life with robust and responsive mobile solutions. Whether it's building Android apps using React Native CLI or syncing real-time data through backend APIs, I create user-focused mobile experiences with modern tech.",
            icon: "📱",
        },

    ]

    return (
        <section className='max-w-5xl mx-auto p-4' id='service'>

            <Section Title={"Service"} />
            <div className="my-8">

                <div className="grid md:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="p-6 rounded-lg text-center border border-white/20 shadow-lg bg-white/10 backdrop-blur-md transition-transform hover:scale-105 duration-300"
                        >
                            <div className="flex justify-center items-center mb-4">
                                 <div className="text-4xl bg-[#00d2b5] text-white p-4 rounded-full h-18 w-18 flex justify-center items-center">
                                    {service.icon}
                                </div>
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-3">
                                {service.title}
                            </h3>
                            <p className="text-gray-600 text-justify">{service.description}</p>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Services;
