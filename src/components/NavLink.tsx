import React from 'react';
import { type FC } from 'react';

interface LinkProps {
  to: string;
  className?: string;
  target?: React.HTMLAttributeAnchorTarget;
  children?: React.ReactNode;
}

const NavLink: FC<LinkProps> = ({ to, target, children }) => {
  return (
    <div className="group cursor-pointer transition-colors ease-in hover:text-purple-500">
      <a href={to} target={target || '_self'}>
        {children}
      </a>
    </div>
  );
};

export default NavLink;
