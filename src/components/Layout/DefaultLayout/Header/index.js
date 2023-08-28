import React, { useState } from 'react';
import { useTranslation } from "react-i18next";

const languages = [
  { value: '', text: "Languages" },
  { value: 'en', text: "English" },
  { value: 'ja', text: "Japanese" },
  { value: 'ko', text: "Korean" },
  { value: 'vi', text: "Vietnamese" },
];

export default function Header() {
  const [openMenu, setMenu] = useState(false);

  const openMenuButton = () => {
    setMenu(!openMenu);
  };

  const { t } = useTranslation();
  const [lang, setLang] = useState('');
  const handleChange = (e) => {
    setLang(e.target.value);
    let loc = "http://localhost:3007/";
    window.location.replace(loc + "?lng=" + e.target.value);
  };

  return (
    <div className="m-0 p-0 w-screen relative top-0 right-0 left-0">
      <div className="lg:py-4 pb-1 lg:flex lg:justify-center ">
        <img
          alt="description of image"
          src="https://2022.vnix-nog.vn/sites/all/themes/ipv6event2019/css/images/banner_sm.jpg"
          className="lg:w-4/5 w-full h-auto"
        />
      </div>
      <div className="w-full h-[42px] bg-[#133c8b] flex justify-center">
        <div className="w-4/5 h-full flex justify-between items-center">
          <ul className="lg:flex hidden h-full">
            <li className="flex justify-center items-center  hover:bg-[#003366] h-full cursor-pointer">
              <a
                href="http://localhost:3007/"
                className="font-bold uppercase text-white px-[20px]"
              >
                {t('home')}
              </a>
            </li>
            <li className="flex justify-center items-center  hover:bg-[#003366] h-full cursor-pointer">
              <a
                href="http://localhost:3007/Workshop"
                className="font-bold uppercase text-white px-[20px]"
              >
                {t('workshop')}
              </a>
            </li>
            <li className="flex justify-center items-center  hover:bg-[#003366] h-full cursor-pointer">
              <a
                href="http://localhost:3007/Agenda"
                className="font-bold uppercase text-white px-[20px]"
              >
                {t('agenha')}
              </a>
            </li>
            <li className="flex justify-center items-center  hover:bg-[#003366] h-full cursor-pointer">
              <a
                href="http://localhost:3007/Register"
                className="font-bold uppercase text-white px-[20px]"
              >
                {t('register')}
              </a>
            </li>
            <li className="flex justify-center items-center  hover:bg-[#003366] h-full cursor-pointer">
              <a
                href="http://localhost:3007/Speaker"
                className="font-bold uppercase text-white px-[20px]"
              >
                {t('speaker')}
              </a>
            </li>
            <li className="flex justify-center items-center  hover:bg-[#003366] h-full cursor-pointer">
              <a
                href="http://localhost:3007/Sponsor"
                className="font-bold uppercase text-white px-[20px]"
              >
                {t('sponsor')}
              </a>
            </li>
            <li className="flex justify-center items-center  hover:bg-[#003366] h-full cursor-pointer">
              <a
                href="http://localhost:3007/Photo"
                className="font-bold uppercase text-white px-[20px]"
              >
                {t('photo')}
              </a>
            </li>
            <li className="flex justify-center items-center  hover:bg-[#003366] h-full cursor-pointer">
              <a
                href="http://localhost:3007/Contact"
                className="font-bold uppercase text-white px-[20px]"
              >
                {t('contact')}
              </a>
            </li>
          </ul>

          <div className="lg:hidden relative">
            <button
              onClick={openMenuButton}
              className="outline-none mobile-menu-button"
            >
              <svg
                className=" w-8 h-8 text-white hover:text-green-500 "
                x-show="!showMenu"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
            {openMenu && (
              <div className="w-[200px] mobile-menu border-[1px] border-black absolute top-[3.4rem] z-50">
                <ul className="">
                  <li className="active border-b-[1px]">
                    <a
                      href="http://localhost:3007/"
                      className="block px-8 py-4 text-white bg-[#133c8b] hover:bg-[#062b53] transition duration-300 font-semibold uppercase"
                    >
                      {t('home')}
                    </a>
                  </li>
                  <li className="active border-b-[1px]">
                    <a
                      href="http://localhost:3007/Workshop"
                      className="block px-8 py-4 text-white bg-[#133c8b] hover:bg-[#062b53] transition duration-300 font-semibold uppercase"
                    >
                      {t('workshop')}
                    </a>
                  </li>
                  <li className="active border-b-[1px]">
                    <a
                      href="http://localhost:3007/Agenda"
                      className="block px-8 py-4 text-white bg-[#133c8b] hover:bg-[#062b53] transition duration-300 font-semibold uppercase"
                    >
                      {t('register')}
                    </a>
                  </li>
                  <li className="active border-b-[1px]">
                    <a
                      href="http://localhost:3007/Register"
                      className="block px-8 py-4 text-white bg-[#133c8b] hover:bg-[#062b53] transition duration-300 font-semibold uppercase"
                    >
                      {t('agenha')}
                    </a>
                  </li>
                  <li className="active border-b-[1px]">
                    <a
                      href="http://localhost:3007/Speaker"
                      className="block px-8 py-4 text-white bg-[#133c8b] hover:bg-[#062b53] transition duration-300 font-semibold uppercase"
                    >
                      {t('speaker')}
                    </a>
                  </li>
                  <li className="active border-b-[1px]">
                    <a
                      href="http://localhost:3007/Sponsor"
                      className="block px-8 py-4 text-white bg-[#133c8b] hover:bg-[#062b53] transition duration-300 font-semibold uppercase"
                    >
                      {t('sponsor')}
                    </a>
                  </li>
                  <li className="active border-b-[1px]">
                    <a
                      href="http://localhost:3007/Photo"
                      className="block px-8 py-4 text-white bg-[#133c8b] hover:bg-[#062b53] transition duration-300 font-semibold uppercase"
                    >
                      {t('photo')}
                    </a>
                  </li>
                  <li className="active border-b-[1px]">
                    <a
                      href="http://localhost:3007/Contact"
                      className="block px-8 py-4 text-white bg-[#133c8b] hover:bg-[#062b53] transition duration-300 font-semibold uppercase"
                    >
                      {t('contact')}
                    </a>
                  </li>
                </ul>
              </div>
            )}
          </div>

          <div className="flex items-center">
            {/* <img alt="..." className="h-[24px] w-[24px] " src="https://2022.vnix-nog.vn/sites/default/files/themes/united-states.png"/>
                        <p className="text-white font-bold">English</p> */}
            <select value={lang} onChange={handleChange} className="h-auto w-auto">
              {languages.map((item) => {
                return (
                  <option key={item.value} value={item.value}>
                    {item.text}
                  </option>
                );
              })}
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}
