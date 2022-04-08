const Footer = () => {
  return (
    <footer className="">
      <div className="bg-[#F2F2F2]">
        <div className="xl:container grid grid-cols-12 mx-auto py-12">
          <div className="col-span-4 px-12">
            <h6 className="mb-6 archivo-narrow">Información De La Tienda</h6>
            <div className="flex justify-start items-center mb-3">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" className="mr-4" fill="#F39787">
                <path fill="none" d="M0 0h24v24H0z" />
                <path d="M18.364 17.364L12 23.728l-6.364-6.364a9 9 0 1 1 12.728 0zM12 13a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" />
              </svg>
              <p className="source-sans text-[0.9rem] font-[400]">Direción de la Tienda: Av. Petit Thouars 53537, Miraflores Lima - Perú</p>
            </div>
            <div className="flex justify-start items-center mb-3">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" className="mr-4" fill="#F39787">
                <path fill="none" d="M0 0h24v24H0z" />
                <path d="M21 16.42v3.536a1 1 0 0 1-.93.998c-.437.03-.794.046-1.07.046-8.837 0-16-7.163-16-16 0-.276.015-.633.046-1.07A1 1 0 0 1 4.044 3H7.58a.5.5 0 0 1 .498.45c.023.23.044.413.064.552A13.901 13.901 0 0 0 9.35 8.003c.095.2.033.439-.147.567l-2.158 1.542a13.047 13.047 0 0 0 6.844 6.844l1.54-2.154a.462.462 0 0 1 .573-.149 13.901 13.901 0 0 0 4 1.205c.139.02.322.042.55.064a.5.5 0 0 1 .449.498z" />
              </svg>
              <p className="source-sans text-[0.9rem] font-[400]">Llámenos: +51 949 382 523</p>
            </div>
            <div className="flex justify-start items-center">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" className="mr-4" fill="#F39787">
                <path fill="none" d="M0 0h24v24H0z" />
                <path d="M3 3h18a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm9.06 8.683L5.648 6.238 4.353 7.762l7.72 6.555 7.581-6.56-1.308-1.513-6.285 5.439z" />
              </svg>
              <p className="source-sans text-[0.9rem] font-[400]">Envíenos Un Correo Electrónico: artesaniasnormacordova@gmail.com</p>
            </div>
          </div>
          <div className="col-span-2 px-12">
            <h6 className="mb-6 archivo-narrow">Productos</h6>
            <ul className="source-sans text-[0.9rem] font-[400]">
              <li className="my-3">Delivery</li>
              <li className="my-3">Nuevos Productos</li>
              <li className="my-3">Promociones</li>
              <li className="my-3">Los más vendidos</li>
            </ul>
          </div>
          <div className="col-span-2 px-12">
            <h6 className="mb-6 archivo-narrow">Nuestra Empresa</h6>
            <ul className="source-sans text-[0.9rem] font-[400]">
              <li className="my-3">Sobre Nosotros</li>
              <li className="my-3">Contáctenos</li>
              <li className="my-3">Mapa del Sitio</li>
              <li className="my-3">Tiendas</li>
            </ul>
          </div>
          <div className="col-span-4 px-12">
            <h6 className="mb-6 archivo-narrow">Comentarios</h6>
            <ul className="source-sans text-[0.9rem] font-[400]">
              <li className="my-3">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</li>
              <li className="my-3">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</li>
              <li className="my-3">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="xl:container flex justify-center items-center w-full bg-white mx-auto py-8">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" className="mr-3" fill="#F39787">
          <path fill="none" d="M0 0h24v24H0z" />
          <path d="M3 3h18a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm17 4.238l-7.928 7.1L4 7.216V19h16V7.238zM4.511 5l7.55 6.662L19.502 5H4.511z" />
        </svg>
        <p className="archivo-narrow font-[600]">Obten nuestra últimas novedades y noticias</p>
        <form className="flex justify-center items-center w-full h-[2.75rem] max-w-[30rem] ml-10">
          <input type="text" placeholder="Correo Electrónico" className="w-full h-full source-sans bg-[#F2F2F2] text-[0.9rem] text-gray-700 rounded-l px-4 leading-tight focus:outline-none focus:bg-[#f5f5f5]" />
          <button type="submit" className="h-full px-3 bg-[#F39787] rounded-r">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="white">
              <path fill="none" d="M0 0h24v24H0z" />
              <path d="M1.923 9.37c-.51-.205-.504-.51.034-.689l19.086-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.475.553-.717.07L11 13 1.923 9.37zm4.89-.2l5.636 2.255 3.04 6.082 3.546-12.41L6.812 9.17z" />
            </svg>
          </button>
        </form>
      </div>
      <hr className="bg-[#d5d5d5]"></hr>
      <div className="xl:container py-8">
        <div className="flex justify-center items-center w-[70%] mx-auto mb-4">
          <ul className="flex justify-center items-center list-none source-sans text-[0.9rem] divide-x divide-[#d5d5d5]">
            <li className="px-6">Inicio</li>
            <li className="px-6">Nuevos Productos</li>
            <li className="px-6">Mas Vendidos</li>
            <li className="px-6">Promociones</li>
            <li className="px-6">Blog</li>
            <li className="px-6">Contacto</li>
          </ul>
        </div>
        <p className="source-sans text-center">© 2022 - Powered and developed by P4ul</p>
      </div>
    </footer>
  );
};

export default Footer;