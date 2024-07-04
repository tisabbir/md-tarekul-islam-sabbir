import Link from "next/link";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="">
      <hr />
      <footer className="footer items-center p-4">
        <aside className="grid-flow-col items-center">
          <p>Copyright © ${new Date().getFullYear()} - All right reserved</p>
        </aside>
        <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
          <Link href="https://web.facebook.com/MDTISabbir/">
            <FaFacebook className="text-xl" />
          </Link>
          <Link href="https://github.com/tisabbir">
            <FaGithub className="text-xl" />
          </Link>
          <Link href="https://www.linkedin.com/in/mdtisabbir/">
            <FaLinkedin className="text-xl" />
          </Link>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;
