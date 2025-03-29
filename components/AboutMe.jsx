import React from "react";
import Section from "./reuableComponents/Section";

const AboutMe = () => {
  return (
    <div className="bg-white text-gray-800 flex flex-col items-center">
      {/* Header */}
      <Section Title={"About"}/>

      {/* Container */}
      <div className="flex flex-col md:flex-row items-center mt-10 max-w-5xl">
        {/* Image Section */}
        <div className="w-full md:w-1/3 flex justify-center">
          <img src="/profilepic.jpeg" alt="Profile" className="rounded-lg w-60 h-72 object-cover shadow-lg" />
        </div>

        {/* Info Section */}
        <div className="w-full md:w-2/3 md:pl-10 mt-6 md:mt-0">
          <h2 className="text-2xl font-semibold text-gray-900">Software & Web Developer</h2>
          <p className="text-gray-600 mt-3">
          I am a proficient MERN Stack developer with 2.4 years of experience in full-stack development. My expertise includes React.js, Node.js, MongoDB, MySQL, Bootstrap, Tailwind CSS, JavaScript, HTML, and CSS. I am dedicated to building high-quality, user-friendly web applications and continuously enhancing my skills to stay updated with the latest technologies.
          </p>
          <p className="text-gray-600 mt-3">
            Let's collaborate and bring your digital vision to life.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6 text-sm text-gray-700">
            <p><span className="font-semibold">Name:</span> Shailesh</p>
            <p><span className="font-semibold">Languages:</span> Hindi, English</p>
            <p><span className="font-semibold">Degree:</span> Bachelor of Engineering</p>
            <p><span className="font-semibold">Experience:</span> 2+ Years</p>
            <p><span className="font-semibold">Phone:</span><a href="tel:+91 8419810848" > +91 8419810848</a></p>
            <p><span className="font-semibold">Email:</span> shaileshsainee3450@gmail.com</p>
            <p><span className="font-semibold">Address:</span> Uttar Pradesh</p>
            <p><span className="font-semibold">Freelance:</span> Available</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
