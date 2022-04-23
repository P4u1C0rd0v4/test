const Footer = () => {
  return (
    <footer className="">
      <div className="bg-gray-100 py-6">
        <h5 className="font-semibold text-center text-xl text-black">Nuestros Servicios</h5>
        <div className="container grid grid-cols-4 mx-auto pt-10 pb-6 text-gray-500 text-center">
          <div className="col-span-1">
            <div className="w-28 h-28 mb-4 mx-auto rounded-full bg-white text-[4rem]"><i class="bi bi-shop-window align-middle"></i></div>
            <p className="mb-2 font-semibold text-xl text-black">Consulta de Stock</p>
            <p>¡Exclusivo para clientes Inkaclub! Consulta el stock del producto que  buscas en tu boticas más cercana.</p>
          </div>
          <div className="col-span-1">
            <div className="w-28 h-28 mb-4 mx-auto rounded-full bg-white text-[4rem]"><i class="bi bi-geo-alt align-middle"></i></div>
            <p className="mb-2 font-semibold text-xl text-black">¡Sigue tu pedido!</p>
            <p>Conoce el estado en el que se  encuentra tu pedido</p>
          </div>
          <div className="col-span-1">
            <div className="w-28 h-28 mb-4 mx-auto rounded-full bg-white text-[4rem]"><i class="bi bi-telephone-plus align-middle"></i></div>
            <p className="mb-2 font-semibold text-xl text-black">Inkafono</p>
            <p>También puedes hacer tus pedidos llamándonos al (01) 314 2020.</p>
          </div>
          <div className="col-span-1">
            <div className="w-28 h-28 mb-4 mx-auto rounded-full bg-white text-[4rem]"><i class="bi bi-file-medical align-middle"></i></div>
            <p className="mb-2 font-semibold text-xl text-black">Consulta de Salud Online Gratuita</p>
            <p>¡Exclusivo para clientes Inkaclub! Pregunta sobre cualquier inquietud médica tuya o de tu familia.</p>
          </div>
        </div>
      </div>
      <div className="bg-white py-8">
        <div className="container grid grid-cols-12 mx-auto">
          <div className="col-span-3">
            <h4 className="font-semibold">Sobre Inkafarma</h4>
            <ul className="text-gray-500 mt-2 text-sm">
              <li className="py-2">
                Inkaclub
              </li>
              <li className="py-2">
                Catálogo del Mes
              </li>
              <li className="py-2">
                Farmacia Vecina
              </li>
              <li className="py-2">
                Apoyo al Paciente de Inkafarma
              </li>
              <li className="py-2">
                Cannabis Medicinal
              </li>
            </ul>
          </div>
          <div className="col-span-3">
          <h4 className="font-semibold">Inkafarma Digital</h4>
            <ul className="text-gray-500 mt-2 text-sm">
              <li className="py-2">
                Inkaclub
              </li>
              <li className="py-2">
                Catálogo del Mes
              </li>
              <li className="py-2">
                Farmacia Vecina
              </li>
              <li className="py-2">
                Apoyo al Paciente de Inkafarma
              </li>
              <li className="py-2">
                Cannabis Medicinal
              </li>
            </ul>
          </div>
          <div className="col-span-3">
          <h4 className="font-semibold">Contáctanos</h4>
            <ul className="text-gray-500 mt-2 text-sm">
              <li className="py-2">
                Inkaclub
              </li>
              <li className="py-2">
                Catálogo del Mes
              </li>
              <li className="py-2">
                Farmacia Vecina
              </li>
              <li className="py-2">
                Apoyo al Paciente de Inkafarma
              </li>
              <li className="py-2">
                Cannabis Medicinal
              </li>
            </ul>
          </div>
          <div className="col-span-3">
            <h4 className="font-semibold">Síguenos</h4>
            <ul className="flex justify-start items-center text-2xl">
              <li className="py-2 pr-3">
                <i class="bi bi-facebook"></i>
              </li>
              <li className="py-2 pr-3">
                <i class="bi bi-instagram"></i>
              </li>
              <li className="py-2 pr-3">
                <i class="bi bi-linkedin"></i>
              </li>
            </ul>
            <h4 className="mt-3 font-semibold">Medio de Pago</h4>
            <ul className="flex justify-start items-center text-2xl">
              <li className="py-2 pr-2">
                <img src="https://images.ctfassets.net/l9x8e72nkkav/1ybI4bPeN0cBhMP9hKNiop/89d4fb519b8d9e93d4ebc1d1364b616a/footer-amex.svg" />
              </li>
              <li className="py-2 pr-2">
                <img src="https://images.ctfassets.net/l9x8e72nkkav/5UEXFzPaHRg1LUwcVgYkHh/c151c5fa04a85cd84f17ec77651ef217/footer-oh.svg" />
              </li>
              <li className="py-2 pr-2">
                <img src="https://images.ctfassets.net/l9x8e72nkkav/4mYPNc4WkSELM6ZMJinhEg/a004fb9b0dacb9d63b5aac016e1ff297/footer-mastercard.svg" />
              </li>
              <li className="py-2 pr-2">
                <img src="https://images.ctfassets.net/l9x8e72nkkav/5KkFv0ZUKCFzVKKlldZZN9/79eb702c25f86638e2ae42f47da3bed7/footer-visa.svg" />
              </li>
              <li className="py-2 pr-2">
                <img src="https://images.ctfassets.net/l9x8e72nkkav/6CkKFFNHSYBncgeX8seKek/c2753df0b5cbe62a5a1bc765d3ed10ff/48-agora-Visa.svg" />
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="container mx-auto py-8">
        <p className="text-center">© 2022 - Powered and developed by P4u1</p>
      </div>
    </footer>
  );
};

export default Footer;