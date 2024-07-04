import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
const GiveLife = () => {
  return (
    <div className="mt-12 mb-12">
      <div className="hero bg-[#ffffff] rounded-xl">
        <div className="hero-content flex-col lg:flex-row gap-8">
          <img src="give-life.png" className="max-w-sm rounded-lg shadow-2xl" />
          <div>
            <h1 className="text-2xl font-bold">Give Life</h1>
            <p className="py-6">
              Give Life simplifies blood donation management with secure
              registration, role-based access, and accurate location
              integration. It handles donation requests, tracks statuses, and
              offers secure login and payment options.
            </p>
            <h2 className="text-lg font-semibold">Key Features:</h2>
            <ul className=" ml-6">
              <li className="list-disc ">
                {" "}
                Seamless Blood Donation Request Submission
              </li>
              <li className="list-disc ">
                {" "}
                Donation Status Tracking and Management
              </li>
              <li className="list-disc "> Content Management Capabilities</li>
            </ul>

            <div className="mt-4 flex gap-2">
              <button className="btn btn-xs bg-[#8750F5] text-white">
                MongoDB
              </button>
              <button className="btn btn-xs bg-[#8750F5] text-white">
                Express
              </button>
              <button className="btn btn-xs bg-[#8750F5] text-white">
                Node
              </button>
              <button className="btn btn-xs bg-[#8750F5] text-white">
                React
              </button>
              <button className="btn btn-xs bg-[#8750F5] text-white">
                JavaScript
              </button>
              <button className="btn btn-xs bg-[#8750F5] text-white">
                Tailwind CSS
              </button>
              <button className="btn btn-xs bg-[#8750F5] text-white">
                HTML
              </button>
            </div>

            <div className="flex gap-4">
              <a href="https://give-life-bd037.web.app/" className="mt-4 btn ">
                <FaArrowUpRightFromSquare />
              </a>
              <a
                href="https://github.com/tisabbir/give-life-client"
                className="mt-4 btn "
              >
                <FaGithub />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GiveLife;
