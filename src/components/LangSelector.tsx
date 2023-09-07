import { type FC } from 'react';
import { IoLanguageOutline } from 'react-icons/io5/index';

const LANGS = [
  {
    key: 'en',
    name: 'English'
  }
];

interface LangSelectorProps {}

const LangSelector: FC<LangSelectorProps> = () => {
  return (
    <div className="sel-container flex w-[130px] justify-center text-center text-2xl">
      <label className="lang-icon">
        <IoLanguageOutline className="pointer-events-none absolute z-10 ml-2 mt-[10px] inline-block text-gray-600 dark:text-cyan-300" />
      </label>
      <select className="relative w-full cursor-pointer text-ellipsis rounded-md border border-slate-400 py-3 pl-10 pr-14 text-lg text-gray-600 transition-colors ease-in hover:border-black hover:text-black dark:border-slate-600 dark:border-t-slate-500 dark:bg-slate-600 dark:text-slate-300 dark:hover:border-slate-50 dark:hover:text-slate-50">
        {LANGS.map(lang => {
          return (
            <option key={lang.key} value={lang.key}>
              <span>{lang.name}</span>
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default LangSelector;
