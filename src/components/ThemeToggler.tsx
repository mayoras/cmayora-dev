import { type FC, useState, useEffect } from 'react';
import { IoMoon, IoSunny } from 'react-icons/io5';

interface ThemeTogglerProps {}

const ThemeToggler: FC<ThemeTogglerProps> = () => {
  const [isMounted, setIsMounted] = useState(false);
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

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return isMounted ? (
    <button
      onClick={toggleTheme}
      className="nav-theme-toggler cursor-pointer text-3xl text-slate-600 transition-colors ease-in hover:text-black dark:text-slate-400 dark:hover:text-slate-50"
    >
      {theme === 'light' ? <IoSunny /> : <IoMoon />}
    </button>
  ) : (
    <div />
  );
};

export default ThemeToggler;
