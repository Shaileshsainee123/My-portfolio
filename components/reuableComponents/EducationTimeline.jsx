import React from 'react'

const EducationTimeline = () => {
    return (
        <>
        <div className='flex justify-center items-start flex-col'>
         <h2 className="text-left text-xl md:text-2xl font-bold text-gray-800 realative mb-4">My Education</h2>

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
                                    <h2 className="text-xl md:text-2xl font-semibold text-gray-800">{education.degree}</h2>
                                    <p className="text-[#6c757d] mt-1 font-bold">
                                        {education.institution}
                                        {education.location && `, ${education.location}`} |
                                        <span className="text-[#6c757d] font-normal">
                                            {education.startYear} - {education.endYear}
                                        </span>
                                    </p>
                                </div>
                                
                            </div>

                            <p className="mt-3 text-[#6c757d] leading-relaxed">{education.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
        </>
    )
}

export default EducationTimeline
const educations = [
    {
        id: 1,
        degree: "Bachelor of Engineering",
        institution: "Forte Institute of Technology",
        location: "Meerut, Uttar Pradesh",
        startYear: "2021",
        endYear: "2024",
        description: "Completed my Bachelor of Engineering in Computer Science and Engineering from AKTU.",
    },
    {
        id: 2,
        degree: "Diploma in Computer Science",
        institution: "C.S.J.M. Govt. Polytechnic", 
        location: "Akbarpur, Ambedkar Nagar Uttar Pradesh",
        startYear: "2017",
        endYear: "2020",
        description: "Completed my Diploma in Computer Science from C.S.J.M. Govt. Polytechnic.",
    },  
    {
        id: 3,
        degree: "Senior Secondary School",
        institution: "R.A.J. Inter college",
        location: "Bariyawan, Ambedkar Nagar Uttar Pradesh",
        startYear: "2015",
        endYear: "2017",        
        description: "Completed my Senior Secondary School from R.A.J. Inter college Bariyawan Ambedkar Nagar.", 
    }
]