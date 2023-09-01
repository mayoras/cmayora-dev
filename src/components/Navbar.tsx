import type { FC } from 'react';

interface NavbarProps {}

const Navbar: FC<NavbarProps> = () => {
  return (
    <nav className="nav-container">
      <div className="nav-links">
        <div className="nav-title">
          <span className="font-rubik text-3xl font-thin">
            cmayora<i className="text-blue-500">.dev</i>
          </span>
        </div>
        <div className="nav-sections">
          <ul>
            <li>About</li>
            <li>Projects</li>
            <li>Skills</li>
            <li>Contact</li>
          </ul>
        </div>
      </div>

      <div className="nav-config">
        <div className="nav-theme-toggler">toggler</div>
        <div className="nav-lang">language</div>
      </div>
    </nav>
  );
};

export default Navbar;
