import { type FC, useState, useEffect } from 'react';
import { IoSunny } from 'react-icons/io5';

interface ThemeTogglerProps {}

const ThemeToggler: FC<ThemeTogglerProps> = () => {
  const [theme, setTheme] = useState(() => {
    if (import.meta.env.SSR) {
      return undefined;
    }

    if (
      typeof localStorage !== 'undefined' &&
      localStorage['theme'] !== 'undefined'
    ) {
      return localStorage['theme'];
    } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return 'dark';
    }

    // default light theme
    return 'light';
  });

  function toggleTheme() {
    const toggled = theme === 'light' ? 'dark' : 'light';

    // update localStorage
    localStorage.setItem('theme', toggled);

    // toggle theme
    setTheme(toggled);
  }

  useEffect(() => {
    const root = document.documentElement;

    if (theme === 'light') {
      root.classList.remove('dark');
    } else {
      root.classList.add('dark');
    }
  }, [theme]);

  return (
    <button
      onClick={toggleTheme}
      className="nav-theme-toggler cursor-pointer text-3xl text-slate-600 transition-colors ease-in hover:text-black dark:text-white dark:hover:text-slate-400"
    >
      <IoSunny />
    </button>
  );
};

export default ThemeToggler;
