import SectionTitle from "@/components/SectionTitle";
import { FaGraduationCap } from "react-icons/fa";
import { GiAchievement, GiExtraTime } from "react-icons/gi";


const ResumePage = () => {
    return (
        <div className="">
            <SectionTitle heading={'My Resume'} subheading={'Explore infos about me'} />

            <div className="mt-12">
                <h1 className="text-4xl text-[#8750F5] flex gap-3 items-center"><FaGraduationCap /> EDUCATION</h1>

                <div className="bg-white p-6 rounded-xl space-y-4 mt-6">
                    <h3 className="text-xl text-[#8750F5] ">2020-Present</h3>
                    <h2 className="text-2xl text-black">Noakhali Science & Technology University</h2>
                    <p>Bachelor of Science - Biochemistry & Molecular Biology</p>
                </div>
                <div className="bg-white p-6 rounded-xl space-y-4 mt-6">
                    <h3 className="text-xl text-[#8750F5] ">2016-2019</h3>
                    <h2 className="text-2xl text-black">Govt Hazi Abdul Baten College</h2>
                    <p>Higher Secondary School Certificate</p>
                </div>

            </div>
            <div className="mt-12">
                <h1 className="text-4xl text-[#8750F5] flex gap-3 items-center"><GiExtraTime /> EXTRACURRICULAR ACTIVITIES</h1>

                <div className="bg-white p-6 rounded-xl space-y-4 mt-6">
                    <h3 className="text-xl text-[#8750F5] ">2024-Present</h3>
                    <h2 className="text-2xl text-black">NSTU Research Society</h2>
                    <p>Office & Records Secretary</p>
                </div>
                <div className="bg-white p-6 rounded-xl space-y-4 mt-6">
                    <h3 className="text-xl text-[#8750F5] ">2024-Present</h3>
                    <h2 className="text-2xl text-black">Programming Hero</h2>
                    <p>Campus Ambassador</p>
                </div>

            </div>
            <div className="mt-12 mb-12">
                <h1 className="text-4xl text-[#8750F5] flex gap-3 items-center"> <GiAchievement /> ACHIEVEMENTS</h1>

                <div className="bg-white p-6 rounded-xl space-y-4 mt-6">
                    <h3 className="text-xl text-[#8750F5] ">2024</h3>
                    <h2 className="text-2xl text-black">Hult Prize 2024</h2>
                    <p>First Runner-Up (On Campus)</p>
                </div>
                
            </div>
        </div>
    );
};

export default ResumePage;