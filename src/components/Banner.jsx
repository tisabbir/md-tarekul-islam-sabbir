import Link from "next/link";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";

const Banner = () => {
  return (
    <div className="flex justify-around gap-10 items-center">
      <div className="flex-1 space-y-6">
        <h3 className="text-4xl text-[#2A1454]"> I am Sabbir </h3>
        <h1 className="text-6xl text-[#8750F5] font-bold">Web Developer</h1>
        <p className="text-xl">
          I break down complex user experinece problems to create integritiy
          focussed solutions that connect billions of people
        </p>
        <div className="flex gap-4 items-center">
          <Link
            href="https://drive.google.com/file/d/1yJF0-jd5zIvaH3ASKzw8gSLs-RJOJNtx/view?usp=sharing"
            target="_blank"
          >
            <button className="btn bg-[#8750F5] text-white">Resume</button>{" "}
          </Link>
          <Link href="https://github.com/tisabbir" target="_blank">
            <FaGithub className="text-4xl text-[#8750F5]" />
          </Link>

          <Link href="https://www.linkedin.com/in/mdtisabbir/" target="_blank">
            <FaLinkedin className="text-4xl text-[#8750F5]" />
          </Link>
          <Link href="https://web.facebook.com/MDTISabbir/" target="_blank">
            <FaFacebook className="text-4xl text-[#8750F5]" />
          </Link>
        </div>
      </div>
      <div className="flex-1">
        <img className="w-96 rounded-xl mx-auto" src="Sabbir.png" />
      </div>
    </div>
  );
};

export default Banner;
