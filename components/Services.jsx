import Section from "./reuableComponents/Section";

const Services = () => {
    const services = [
        {
            title: "Web Design",
            description:
                "Ignite your online presence with our expert web design solutions. We blend creativity and strategy to craft visually stunning and user-friendly websites tailored to your brand. Let's bring your vision to life and leave a lasting impression on your audience. Ready to stand out in the digital landscape? Let's collaborate and make it happen.",
            icon: "💻", // Replace with an actual icon
        },
        {
            title: "Web Development",
            description:
                "Take your digital presence to new heights with our professional web development expertise. We specialize in crafting custom websites that not only reflect your brand's identity but also provide an exceptional user experience. Whether you need a sleek corporate site or a robust e-commerce platform, we have the skills and creativity to make it happen.",
            icon: "👨‍💻", // Replace with an actual icon
        },
        {
            title: "App Development",
            description:
                "Empower your online presence with our specialized WordPress development solutions. From theme customization to plugin integration, we have the expertise to turn your WordPress site into a powerful digital asset. Whether you're a blogger, entrepreneur, or business owner, let's collaborate to create a WordPress website that reflects your unique vision and goals.",
            icon: "⚙️", // Replace with an actual icon
        },
    ];

    return (
        <section className='max-w-5xl mx-auto p-4' id='service'>

            <Section Title={"Service"} />
            <div className="my-8">

                <div className="grid md:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="p-6 bg-white rounded-lg  text-center"
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
