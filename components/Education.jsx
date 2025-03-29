import React from 'react'
import EducationTimeline from './reuableComponents/EducationTimeline'
import ExperienceTimeline from './reuableComponents/ExperienceTimeline'
import Section from './reuableComponents/Section'

const Education = () => {
    return (
        <section className='max-w-5xl mx-auto p-4' id='quality'>

            <div className="py-4 md:py-8">
                <Section Title={"Quality"} />
                <div className="space-y-6  mt-10 ">
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                        <EducationTimeline />
                        <ExperienceTimeline />
                    </div>
                </div>
            </div>

        </section>
    )
}

export default Education