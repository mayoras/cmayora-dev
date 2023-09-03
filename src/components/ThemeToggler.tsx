import { type FC } from 'react';
import { IoSunny } from 'react-icons/io5';

interface ThemeTogglerProps {}

const ThemeToggler: FC<ThemeTogglerProps> = () => {
  return (
    <div className="nav-theme-toggler cursor-pointer text-3xl text-slate-600 transition-colors ease-in hover:text-black dark:text-white dark:hover:text-slate-400">
      <IoSunny />
    </div>
  );
};

export default ThemeToggler;
