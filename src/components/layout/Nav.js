const Nav = () => {
  return (
    <nav className="flex justify-between items-center w-full px-10">
      <div className="flex justify-start items-center w-[15%]">
        <div className="text-center">
          <span className="julius-sans text-base">Arte y Manualidades</span><br />
          {/* <span className="text-xl">Norma Cordova</span> */}
        </div>
      </div>
      <div className="flex justify-center items-center w-[70%]">
        <ul className="flex justify-center items-center list-none archivo-narrow">
          <li className="p-6">Inicio</li>
          <li className="p-6">Nuevos Productos</li>
          <li className="p-6">Mas Vendidos</li>
          <li className="p-6">Promociones</li>
          <li className="p-6">Blog</li>
          <li className="p-6">Contacto</li>
        </ul>
      </div>
      <div className="flex justify-end items-center w-[15%]">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="#222" className="mr-4">
          <path fill="none" d="M0 0h24v24H0z" />
          <path d="M6.235 6.453a8 8 0 0 0 8.817 12.944c.115-.75-.137-1.47-.24-1.722-.23-.56-.988-1.517-2.253-2.844-.338-.355-.316-.628-.195-1.437l.013-.091c.082-.554.22-.882 2.085-1.178.948-.15 1.197.228 1.542.753l.116.172c.328.48.571.59.938.756.165.075.37.17.645.325.652.373.652.794.652 1.716v.105c0 .391-.038.735-.098 1.034a8.002 8.002 0 0 0-3.105-12.341c-.553.373-1.312.902-1.577 1.265-.135.185-.327 1.132-.95 1.21-.162.02-.381.006-.613-.009-.622-.04-1.472-.095-1.744.644-.173.468-.203 1.74.356 2.4.09.105.107.3.046.519-.08.287-.241.462-.292.498-.096-.056-.288-.279-.419-.43-.313-.365-.705-.82-1.211-.96-.184-.051-.386-.093-.583-.135-.549-.115-1.17-.246-1.315-.554-.106-.226-.105-.537-.105-.865 0-.417 0-.888-.204-1.345a1.276 1.276 0 0 0-.306-.43zM12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="#222">
          <path fill="none" d="M0 0h24v24H0z" />
          <path d="M4 16V4H2V2h3a1 1 0 0 1 1 1v12h12.438l2-8H8V5h13.72a1 1 0 0 1 .97 1.243l-2.5 10a1 1 0 0 1-.97.757H5a1 1 0 0 1-1-1zm2 7a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm12 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4z" />
        </svg>
      </div>
    </nav>
  );
};

export default Nav;