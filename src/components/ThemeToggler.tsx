import { type FC } from 'react';
import { IoSunny } from 'react-icons/io5';

interface ThemeTogglerProps {}

const ThemeToggler: FC<ThemeTogglerProps> = () => {
  return (
    <div className="nav-theme-toggler text-gray-default cursor-pointer text-3xl dark:text-white">
      <IoSunny />
    </div>
  );
};

export default ThemeToggler;
