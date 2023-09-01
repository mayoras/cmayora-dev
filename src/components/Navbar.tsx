import type { FC } from 'react';

const NAVBAR_TITLE = 'Cesar Mayora';

interface NavbarProps {}

const Navbar: FC<NavbarProps> = () => {
  return (
    <nav className="nav-container">
      <div className="nav-links">
        <div className="nav-title">
          <span>{NAVBAR_TITLE}</span>
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
