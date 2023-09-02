import { type FC } from 'react';

interface LinkProps {
  label: string;
  to: string;
}

const Link: FC<LinkProps> = ({ label, to }) => {
  return (
    <div className="cursor-pointer transition-colors hover:text-purple-500">
      <a href={to}>{label}</a>
    </div>
  );
};

export default Link;
