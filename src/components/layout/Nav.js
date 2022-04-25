import React, { useEffect, useState } from "react";

const Nav = () => {
  const [scrollTop, setScrollTop] = useState(0);
  const [hideElems, setHideElems] = useState(false);

  useEffect(() => {
    const onScroll = e => {
      setScrollTop(e.target.documentElement.scrollTop);
      if (scrollTop > 100) setHideElems(true);
      else setHideElems(false);
    };
    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [scrollTop]);

  return (
    <nav className="w-full fixed bg-white z-50 shadow-md">
      <div className={`flex justify-between items-center bg-[#002B5A] py-1 px-10 text-white transition-all ${hideElems ? 'hidden' : 'block'}`}>
        <div className="container mx-auto text-sm text-left">
          <p className="pb-[0.15rem]"><i className="bi bi-telephone mr-2"></i>Llámanos - (511) 314 - 2020</p>
        </div>
        <div className="container mx-auto text-sm text-right">
          <p className="pb-[0.15rem]"><i className="bi bi-whatsapp mr-2"></i>Escríbenos al 90909090</p>
        </div>
      </div>
      <div className="container mx-auto">
        <div className={`flex justify-between items-center ${hideElems ? 'py-4' : 'py-2'}`}>
          <div className="flex justify-center items-center">
            <span className={`text-black text-[2rem] align-middle mr-2 ${hideElems ? '' : 'hidden'}`}><i className="bi bi-list"></i></span>
            <img src="https://images.ctfassets.net/l9x8e72nkkav/6xqbBgTHavdMuuDVCyKdI/afd0935a8e51a6a3f7ac89f17499baf7/inkafarma.svg" />
          </div>
          <div className="flex justify-center items-center text-base w-[30rem]">
            <input type="search" className="w-full bg-gray-100 p-3 rounded-tl rounded-bl focus:outline-none" placeholder="Buscar por marca o producto" />
            <button type="button" className="bg-[#004693] py-3 px-4 rounded-tr rounded-br text-white">
              <i className="bi bi-search"></i>
            </button>
          </div>
          <div className="flex justify-center items-center font-semibold text-sm opacity-80">
            <ul className="flex justify-center items-center list-none">
              <li>
                <i className="bi bi-geo-alt text-2xl align-middle mr-2"></i>
                <span>Encuéntranos aquí</span>
              </li>
              {/* <li>
                <i className="bi bi-truck text-2xl align-middle mr-2"></i>
                <span>Consulta tu pedido</span>
              </li> */}
            </ul>
          </div>
        </div>
        <div className={`flex justify-start items-center pb-1 font-semibold text-sm ${hideElems ? 'hidden' : 'block'}`}>
          <div className="dropdown inline-block relative">
            <button className="py-2 px-4 rounded inline-flex items-center font-semibold text-base">
              <span className="mr-1">Categorías</span>
              <i className="bi bi-chevron-down text-sm pt-[0.15rem] align-middle"></i>
            </button>
            <ul className="dropdown-menu absolute hidden rounded-bl rounded-br rounded-tr bg-white font-normal text-sm">
              <li className="">
                <a className="hover:bg-gray-100 hover:font-semibold py-2 px-4 block" href="#">Farmacia</a>
              </li>
              <li className="">
                <a className="hover:bg-gray-100 hover:font-semibold py-2 px-4 block" href="#">Salud</a>
              </li>
              <li className="">
                <a className="hover:bg-gray-100 hover:font-semibold py-2 px-4 block" href="#">Cuidado Personal</a>
              </li>
            </ul>
          </div>
          <div className="py-2 px-4 text-green-700">
            <i className="bi bi-heart-fill align-middle text-red-500 mr-1"></i>
            <span>Bienestar</span>
          </div>
          <div className="py-2 px-4 text-green-700">
            <i className="bi bi-clipboard2-pulse-fill align-middle text-blue-500 mr-1"></i>
            <span>Farmacia</span>
          </div>
          <div className="py-2 px-4 text-green-700">
            <i className="bi bi-person-bounding-box align-middle text-orange-500 mr-1"></i>
            <span>Dermocosmética</span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;