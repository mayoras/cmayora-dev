import { type FC } from 'react';
import Link from './Link';
import ThemeToggler from './ThemeToggler';
import LangSelector from './LangSelector';

interface NavbarProps {}

const LINKS = ['About', 'Projects', 'Skills', 'Contact'];

const Navbar: FC<NavbarProps> = () => {
  return (
    <nav className="nav-container align-items fixed m-auto flex w-full justify-center gap-20 p-6 font-rubik shadow-md shadow-sky-500/50 backdrop-blur-sm">
      <div className="nav-links flex items-center justify-between gap-10">
        <div className="nav-title items-center">
          <a href="/" className="outline-none">
            <span className="text-3xl font-thin ">
              cmayora<i className="text-blue-500">.dev</i>
            </span>
          </a>
        </div>
        <div className="nav-sections text-center text-xl font-thin">
          <ul className="align-items flex justify-evenly gap-4">
            {LINKS.map((link, idx) => {
              return (
                <li key={idx}>
                  <Link label={link} to="#" />
                </li>
              );
            })}
          </ul>
        </div>
      </div>

      <div className="nav-config flex items-center justify-evenly gap-6">
        <ThemeToggler />
        <LangSelector />
      </div>
    </nav>
  );
};

export default Navbar;
