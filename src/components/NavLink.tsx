import { type FC } from 'react';

interface LinkProps {
  label: string;
  to: string;
}

const NavLink: FC<LinkProps> = ({ label, to }) => {
  return (
    <div className="cursor-pointer transition-colors ease-in hover:text-purple-500">
      <a href={to}>{label}</a>
    </div>
  );
};

export default NavLink;
