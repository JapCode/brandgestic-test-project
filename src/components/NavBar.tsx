import logo from "../assets/images/logo-87.png";
import { INavItem } from "../services/getInfo";
import MaxWidthWrapper from "./MaxWidthWrapper";

interface INavBarProps {
  navItems: INavItem[] | undefined;
}

const NavBar = (props: INavBarProps) => {
  const { navItems } = props;

  return (
    <nav className="bg-transparent sticky z-50 top-0 inset-x-0 h-16 pt-4 2xl:pt-6">
      <MaxWidthWrapper>
        {navItems && navItems.length > 0 && (
          <div className="flex justify-between">
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
            </ul>
            <ul className="hidden md:flex justify-between w-[250px] items-center">
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
