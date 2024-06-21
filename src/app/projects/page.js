import SectionTitle from '@/components/SectionTitle';
import React from 'react';

const ProjectsPage = () => {
    return (
        <div>
            <SectionTitle heading={'My Projects'} subheading={'We put your ideas and thus your wishes in the form of a unique web project that inspires you and you customers.'} />

            <div className='mt-12'>

                <h1 className='text-2xl text-[#2A1454] font-bold  text-center'>1. Give Life</h1>
                <p className='text-center'>Blood Donation Management Application</p>
            <embed src="https://give-life-bd037.web.app/" className='w-full h-96 border-base-200 mt-6 border-2 rounded-xl'/>
            </div>

            <div className='mt-12'>

                <h1 className='text-2xl text-[#2A1454] font-bold  text-center'>2. Caravan Tales</h1>
                <p className='text-center'>Tourism Management Website</p>
            <embed src="https://caravan-tales.web.app/" className='w-full h-96 border-base-200 mt-6 border-2 rounded-xl'/>
            </div>
            <div className='mt-12'>

                <h1 className='text-2xl text-[#2A1454] font-bold  text-center'>3. Impact Volens</h1>
                <p className='text-center'>Volunteer Management Platform</p>
            <embed src="https://impact-volens.web.app/" className='w-full h-96 border-base-200 mt-6 mb-12 border-2 rounded-xl'/>
            </div>
        </div>
    );
};

export default ProjectsPage;