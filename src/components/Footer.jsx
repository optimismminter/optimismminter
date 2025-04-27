import React from 'react';
import SocialIcons from './SocialIcons';

const Footer = () => {
  return (
    <footer className="border-t border-[#fff] py-2.75 mt-auto text-white bg-[#00000000]">
       <SocialIcons />
      <div className="max-w-[1150px] mx-auto px-4 sm:px-5.5">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-2 sm:gap-0">
          <div className="order-2 sm:order-1">
            <span className="text-black-400 text-sm sm:text-[0.925rem]">© 2025 Optimism Minter</span>
          </div>
          <div className="order-1 sm:order-2">
            <span className="text-black-400 text-sm sm:text-[0.925rem] flex items-center gap-1">
              Made with <img src="/img/footerHeart.png" alt="heart" className="inline h-3 sm:h-4" /> By{' '}
              <span className="pixel-text text-sm sm:text-base text-white">Brothers-Builders</span>
            </span>
          </div>
          <div className="order-3">
            <button className="text-black-400 hover:text-black text-sm sm:text-[0.925rem]">
              Switch to Testnet
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;