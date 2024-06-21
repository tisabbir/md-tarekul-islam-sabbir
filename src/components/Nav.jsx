import Link from "next/link";

const Nav = () => {
  const navbar = (
    <>
      <li>
        <Link href={'/'}>About</Link>
      </li>
      <li>
        <Link href={'/skills'}>Skills</Link>
      </li>
      <li>
        <Link href={'/projects'}>Projects</Link>
      </li>
      <li>
        <a>Resume</a>
      </li>
      <li>
        <a>Contact</a>
      </li>
    </>
  );
  return (
    <div>
      <div className="navbar bg-base-100 mt-6">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navbar}
            </ul>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navbar}</ul>
        </div>
        <div className="navbar-end"></div>
      </div>
    </div>
  );
};

export default Nav;
