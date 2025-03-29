import React from 'react'
import SkillBar from './reuableComponents/SkillBar'
import Section from './reuableComponents/Section'

const Skills = () => {
    return (
        <section className='max-w-5xl mx-auto p-4' id='skill'>

            <div className="py-4 md:py-8">
            <Section Title={"Skills"} />
                <div className="space-y-6  mt-5 ">
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-0 md:gap-6'>
                        <div className='flex flex-col items-center justify-center gap-3'>

                        <div className=' mx-auto w-full'>
                            <SkillBar name="HTML & CSS" percentage={95} color="bg-gray-700" />
                            <SkillBar name="JavaScript" percentage={85} color="bg-red-500" />
                            <SkillBar name="React" percentage={90} color="bg-teal-500" />
                            <SkillBar name="Next.js" percentage={80} color="bg-red-500" />
                            <SkillBar name="React Native" percentage={75} color="bg-yellow-500" />
                        </div>
                        </div>
                        <div> 
                            <SkillBar name="Bootstrap" percentage={95} color="bg-teal-400" />
                            <SkillBar name="Tailwind CSS" percentage={85} color="bg-yellow-500" />
                            <SkillBar name="Material ui" percentage={80} color="bg-blue-500" />
                            <SkillBar name="NodeJS, ExpressJS" percentage={90} color="bg-teal-400" />
                            <SkillBar name="MongoDB" percentage={75} color="bg-gray-700" />
                            <SkillBar name="MySQL" percentage={80} color="bg-red-500" />

                        </div>
                    </div>


                </div>
            </div>
        </section>
    )
}

export default Skills