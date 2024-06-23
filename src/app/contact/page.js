'use client'
import SectionTitle from "@/components/SectionTitle";
import { FaLocationArrow, FaMailBulk, FaMap, FaPhone } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

import Aos from "aos";
import 'aos/dist/aos.css';
import { useEffect } from "react";


const ContactPage = () => {

    useEffect(()=> {
        Aos.init(    { duration: 1000,} )
      },[])
    return (
        <div>
            <SectionTitle heading={'Contacts'} subheading={'Stay in touch with me'} />

           <div className="flex items-center justify-center gap-8">
           <div data-aos='fade-left' className="flex flex-col text-center p-4 bg-white rounded-xl gap-8 items-center mt-6">
                <div>
                    <FaPhone className="text-6xl text-[#8750F5]" />
                </div>
                <div>
                    <h1 className="text-4xl font-bold">Phone</h1>
                    <p className="text-2xl text-[#8750F5]">+8801835818550</p>
                </div>
            </div>
            <div className="flex flex-col text-center p-4 bg-white rounded-xl gap-8 items-center mt-6">
                <div>
                    <FaMailBulk className="text-6xl text-[#8750F5]" />
                </div>
                <div>
                    <h1 className="text-4xl font-bold">Email</h1>
                    <p className="text-2xl text-[#8750F5]">tisabbir0@gmail.com</p>
                </div>
            </div>
            <div data-aos='fade-right' className="flex flex-col text-center p-4 bg-white rounded-xl gap-8 items-center mt-6">
                <div>
                    <FaLocationDot className="text-6xl text-[#8750F5]" />
                </div>
                <div>
                    <h1 className="text-4xl font-bold">Location</h1>
                    <p className="text-2xl text-[#8750F5]">Chittagong, Bangladesh</p>
                </div>
            </div>
           </div>
        </div>
    );
};

export default ContactPage;