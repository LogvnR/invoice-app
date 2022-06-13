import Image from 'next/image';
import { FC, useState } from 'react';

import logo from '../../assets/logo.svg';
import moon from '../../assets/icon-moon.svg';
import sun from '../../assets/icon-sun.svg';
import pfp from '../../assets/image-avatar.jpg';

const NavBar: FC = () => {
  const [theme, setTheme] = useState<string>('light');

  const themeHandler = () => {
    if (theme === 'light') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  };

  return (
    <nav className="w-full h-[72px] bg-[#373b53] flex justify-between items-center">
      <div className="w-[72px] bg-main h-full relative rounded-r-3xl flex justify-center items-center">
        <div className="absolute bottom-0 w-full h-1/2 bg-main-alt rounded-tl-3xl rounded-br-3xl"></div>
        <Image src={logo} />
      </div>
      <div className="w-[152px] h-full flex justify-center items-center">
        <div
          className="w-[72px] h-full flex justify-center items-center"
          onClick={themeHandler}
        >
          <Image src={theme === 'light' ? moon : sun} />
        </div>
        <div className="w-[80px] h-full flex justify-center items-center border-l border-[#494e6e]">
          <div className="w-8">
            <Image className="rounded-full" src={pfp} />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
