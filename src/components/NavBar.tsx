import logo from "../assets/images/logo-87.png";
import { INavItem } from "../services/getInfo";
import MaxWidthWrapper from "./MaxWidthWrapper";

interface INavBarProps {
  navItems: INavItem[] | undefined;
}

const NavBar = (props: INavBarProps) => {
  const { navItems } = props;

  return (
    <nav className="bg-green md:bg-transparent sticky z-50 top-0 inset-x-0 h-16 pt-4 2xl:pt-6">
      <MaxWidthWrapper>
        {navItems && navItems.length > 0 && (
          <div className="flex justify-between px-4 md:px-0">
            <ul className="flex justify-between w-[600px] items-center">
              <li>
                <img src={logo} alt="logo" className="h-8 " />
              </li>
              {navItems.map((item, index) => (
                <li
                  key={index}
                  className="hidden md:block text-white text-md font-workSans font-bold"
                >
                  {item.title}
                </li>
              ))}
              <button className="md:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  fill="none"
                >
                  <path
                    fill="#fff"
                    fill-rule="evenodd"
                    d="M4.5 7.5A1.5 1.5 0 0 1 6 6h18a1.5 1.5 0 0 1 0 3H6a1.5 1.5 0 0 1-1.5-1.5Zm0 7.5A1.5 1.5 0 0 1 6 13.5h18a1.5 1.5 0 1 1 0 3H6A1.5 1.5 0 0 1 4.5 15Zm9 7.5A1.5 1.5 0 0 1 15 21h9a1.5 1.5 0 1 1 0 3h-9a1.5 1.5 0 0 1-1.5-1.5Z"
                    clip-rule="evenodd"
                  />
                </svg>
              </button>
            </ul>
            <ul className="hidden  md:flex justify-between w-[250px] items-center">
              <li className="text-white text-md font-workSans font-bold">
                Log in
              </li>
              <li>
                <button className="min-w-36 min-h-12 bg-green text-purple">
                  Get a quote
                </button>
              </li>
            </ul>
          </div>
        )}
      </MaxWidthWrapper>
    </nav>
  );
};
export default NavBar;
