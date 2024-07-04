import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
const ImpactVolens = () => {
  return (
    <div className="mt-12 mb-12">
      <div className="hero bg-[#ffffff] rounded-xl">
        <div className="hero-content flex-col lg:flex-row gap-8">
          <img src="impact-volens.png" className="max-w-sm rounded-lg shadow-2xl" />
          <div>
            <h1 className="text-2xl font-bold">Impact Volens</h1>
            <p className="py-6">
            Impact Volens facilitates secure user authentication, post management (creation, update, delete), and volunteer matching for community engagement and involvement.
            </p>
            <h2 className="text-lg font-semibold">Key Features:</h2>
            <ul className=" ml-6">
              <li className="list-disc ">
                {" "}
                Organizations create posts with volunteer needs, deadlines, and required volunteers.
              </li>
              <li className="list-disc ">
                {" "}
                Volunteers find and sign up for posted opportunities.
              </li>
              <li className="list-disc "> Organizations update or delete posts to stay current.</li>
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
              <a href="https://impact-volens.web.app/" className="mt-4 btn ">
                <FaArrowUpRightFromSquare />
              </a>
              <a
                href="https://github.com/tisabbir/impact-volens-client"
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

export default ImpactVolens;
