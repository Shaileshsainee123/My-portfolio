import React from 'react'
const ExperienceTimeline = () => {
  return (
    <>
    <div>
    <h2 className="text-xl md:text-2xl font-bold text-gray-800 realative mb-4">My Experience</h2>
    <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-0 md:left-4 top-0 bottom-0 w-0.5 bg-teal-400"></div>

        {/* Education items */}
        <div className="space-y-12 relative">
          {educations.map((education, index) => (
            <div key={education.id} className="relative pl-8 md:pl-12">
              {/* Timeline dot */}
              <div className="absolute left-[-8px] md:left-2 top-2 w-4 h-4 rounded-full border-4 border-teal-400 bg-white"></div>

              <div className="flex justify-between items-start">
                <div>
                  <h2 className="text-base md:text-lg font-semibold text-gray-800">{education.degree}</h2>
                  <p className="text-[#6c757d] mt-1 font-bold">
                    {education.institution}
                   |{" "}
                    <span className="text-[#6c757d]">
                      {education.startYear} - {education.endYear}
                    </span>
                  </p>
                </div>
                
              </div>

              <ul className="mt-3 text-gray-600 leading-relaxed list-disc">{education?.description?.map((description, index) => <li key={index}>{description}</li>)}</ul>
            </div>
          ))}
        </div>
      </div>
    </div>
    </>
  )
}

export default ExperienceTimeline
const educations = [
    {
        id: 1,
        degree: "Mern Stack Developer",
        institution: "DeenBytes pvt. ltd.",
        location: "Noida, Uttar Pradesh",
        startYear: "Oct-2024",
        endYear: "Present",        
        description: ["Designed and developed responsive user interfaces using HTML, CSS, JavaScript, and React.js, ensuring seamless user experiences.","Built and optimized RESTful APIs using Node.js with MongoDB/MySQL, enabling efficient data flow and backend operations","Implemented Socket.io for real-time communication, enhancing features like live chat, notifications, and real-time updates.","Integrated APIs into the front-end, ensuring smooth communication between client and server.","Collaborated with cross-functional teams to meet business and technical requirements."],
    },
    {
        id: 2,
        degree: "Mern Stack Developer",
        institution: "Goverdhan Learning Cloud pvt. ltd.",         
        startYear: "Sep-2023",
        endYear: "July-2024",        
        description: ["Developed interactive and scalable front-end interfaces using React.js, HTML, CSS,Tailwind css,Bootstrap and JavaScript.","Created secure and scalable APIs in Node.js with MongoDB/MySQL to manage backend data processing.","Integrated backend APIs with front-end applications, ensuring seamless functionality and real-time data synchronization.","Worked closely with designers and backend developers to build user-friendly applications."],
    },
    {
        id: 3,
        degree: "Web Developer",
        institution: "Kickr technologies pvt. ltd.",
        startYear: "Sep-2022",
        endYear: "Apr-2023",        
        description: ["Developed responsive and interactive UI using React.js, HTML, CSS, JavaScript, Bootstrap, and Tailwind CSS.","Integrated RESTful APIs and WebSockets (Socket.io) into the front-end to enable smooth data flow and real-time updates.","Implemented state management using Redux/Context API for efficient data handling across components."], 
    }
]