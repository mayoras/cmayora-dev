import type { FC } from 'react';
import { IoMenuSharp } from 'react-icons/io5';

interface MenuIconProps {}

const MenuIcon: FC<MenuIconProps> = () => {
  return (
    <div className="menu-box block h-full w-full cursor-pointer items-center rounded-lg border border-solid border-slate-800 bg-transparent text-center transition-colors hover:border-slate-50 hover:bg-slate-800  dark:border-slate-50 dark:text-slate-50 dark:hover:border-slate-50 dark:hover:bg-slate-50 ">
      <div className="p-1 text-3xl text-slate-800 hover:text-slate-50 dark:hover:text-slate-800">
        <IoMenuSharp />
      </div>
    </div>
  );
};

export default MenuIcon;
