const Nav = () => {
  return (
    <nav className="w-full">
      <div className="bg-green-700 py-1 px-4 text-white">
        <div className="container mx-auto text-base">
          <p className="pb-[0.15rem]">Inkafono Lima - (511) 314 - 2020</p>
        </div>
      </div>
      <div className="container mx-auto">
        <div className="flex justify-between items-center py-2">
          <div className="flex justify-center items-center">
            <img src="https://images.ctfassets.net/l9x8e72nkkav/6xqbBgTHavdMuuDVCyKdI/afd0935a8e51a6a3f7ac89f17499baf7/inkafarma.svg" />
            {/* <h1>INKAFARMA</h1> */}
          </div>
          <div className="flex justify-center items-center text-base w-[30rem]">
            <input type="search" className="w-full bg-gray-100 p-3 rounded-tl rounded-bl focus:outline-none" placeholder="Buscar por marca o producto" />
            <button type="button" className="bg-green-700 py-3 px-4 rounded-tr rounded-br text-white">
              <i class="bi bi-search"></i>
            </button>
          </div>
          <div className="flex justify-center items-center font-semibold text-sm opacity-80">
            <ul className="list-none">
              <li>
                <i class="bi bi-truck text-2xl align-middle mr-2"></i>
                <span>Consulta tu pedido</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex justify-start items-center pb-1 font-semibold text-sm">
          <div class="dropdown inline-block relative">
            <button class="py-2 px-4 rounded inline-flex items-center font-semibold text-base">
              <span class="mr-1">Categorías</span>
              <i class="bi bi-chevron-down text-sm pt-[0.15rem] align-middle"></i>
            </button>
            <ul class="dropdown-menu absolute hidden rounded-bl rounded-br rounded-tr bg-white font-normal text-sm">
              <li class="">
                <a class="hover:bg-gray-100 hover:font-semibold py-2 px-4 block" href="#">Farmacia</a>
              </li>
              <li class="">
                <a class="hover:bg-gray-100 hover:font-semibold py-2 px-4 block" href="#">Salud</a>
              </li>
              <li class="">
                <a class="hover:bg-gray-100 hover:font-semibold py-2 px-4 block" href="#">Cuidado Personal</a>
              </li>
            </ul>
          </div>
          <div className="py-2 px-4 text-green-700">
            <i class="bi bi-heart-fill align-middle text-red-500 mr-1"></i>
            <span>Bienestar</span>
          </div>
          <div className="py-2 px-4 text-green-700">
            <i class="bi bi-clipboard2-pulse-fill align-middle text-blue-500 mr-1"></i>
            <span>Farmacia</span>
          </div>
          <div className="py-2 px-4 text-green-700">
            <i class="bi bi-person-bounding-box align-middle text-orange-500 mr-1"></i>
            <span>Dermocosmética</span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;