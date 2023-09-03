import { type FC } from 'react';
import { HOMEPAGE_URL } from '../config';
import NavLink from './NavLink';
import ThemeToggler from './ThemeToggler';
import LangSelector from './LangSelector';
import MenuIcon from './MenuIcon';

interface NavbarProps {}

const LINKS = ['About', 'Projects', 'Skills', 'Contact'];

const Navbar: FC<NavbarProps> = () => {
  return (
    <nav className="nav-container align-items fixed m-auto flex w-full justify-around gap-32 p-2 font-rubik shadow-md shadow-sky-500/50 backdrop-blur-md md:justify-center">
      <div className="nav-links items-center justify-between gap-10 md:flex">
        <div className="nav-title items-center">
          <a href={HOMEPAGE_URL} className="outline-none">
            <span className="text-3xl font-thin ">
              cmayora<i className="text-blue-500">.dev</i>
            </span>
          </a>
        </div>
        <div className="nav-sections text-center text-xl font-thin">
          <ul className="align-items hidden justify-evenly gap-4 md:flex">
            {LINKS.map((link, idx) => {
              return (
                <li key={idx}>
                  <NavLink label={link} to="#" />
                </li>
              );
            })}
          </ul>
        </div>
      </div>

      <div className="nav-config hidden items-center justify-evenly gap-6 md:flex">
        <ThemeToggler />
        <LangSelector />
      </div>

      {/* menu button */}
      <div className="flex items-center justify-between gap-10 text-right md:hidden">
        <ThemeToggler />
        <MenuIcon />
      </div>
    </nav>
  );
};

export default Navbar;
