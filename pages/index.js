import Layout from '../src/components/layout';

import SwiperCore, { Navigation, Pagination, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

SwiperCore.use([Navigation, Pagination, Autoplay]);

const Home = () => {
  return (
    <Layout>
      <section className="bg-gray-100">
        <div className="w-full h-[29rem] 2xl:h-[32.5rem]">
          <Swiper
            className="w-full h-full pb-8"
            pagination={{ clickable: true }}
            navigation
            autoplay={{ delay: 3000 }}
            loop={true}
          >
            <SwiperSlide>
              <div className="w-full h-[calc(100%-30px)]">
                <img className="w-full h-full object-cover" src="https://images.ctfassets.net/l9x8e72nkkav/788OaPBQjxzjVd4bPCPO6V/617ac67af3cd9b525e6f4532439f63a3/inka_web_slide1-Cuidatusalud_Servicioexpress.jpg" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-full h-[calc(100%-30px)]">
                <div className="w-1/2 h-full relative inline-block">
                  <div className="w-full h-full absolute top-0 left-0 flex justify-center items-center hover:bg-black hover:bg-opacity-60 opacity-0 hover:opacity-100">
                    <button className="btn bg-green-700 rounded-3xl py-2 px-5 text-white">
                      {'Ver más información'}
                    </button>
                  </div>
                  <img className="w-full h-full object-cover object-right" src="https://images.ctfassets.net/l9x8e72nkkav/XO93omHRCPA9btAWSa4xI/31f5e6abbff9947e71da0475b1a9834a/inka_cw_web_slide-Alcoholes-Farmacia_01.jpg" />
                </div>
                <div className="w-1/2 h-full relative inline-block">
                  <div className="w-full h-full absolute top-0 left-0 flex justify-center items-center hover:bg-black hover:bg-opacity-60 opacity-0 hover:opacity-100">
                    <button className="btn bg-green-700 rounded-3xl py-2 px-5 text-white">
                      {'Ver más información'}
                    </button>
                  </div>
                  <img className="w-full h-full object-cover object-left" src="https://images.ctfassets.net/l9x8e72nkkav/6eVcfg2z6IbVjelwc0v9Jy/f868dd57879528dd78e1c7d9667e9b44/inka_cw_web_slide-Alcoholes-Farmacia_02.jpg" />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-full h-[calc(100%-30px)]">
                <img className="w-full h-full object-cover" src="https://images.ctfassets.net/l9x8e72nkkav/5Jsb5IaXItnoFJq7C1pBRf/69ac475508d36897c846df1c8d63e7ff/inka_cw_web_slide-1k-todos-los-dias.jpg" />
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </section>
      <section className="bg-gray-100">
        <div className="w-11/12 2xl:w-full h-full max-w-[96rem] mx-auto py-8 px-2">
          <img className="rounded-2xl" src="https://images.ctfassets.net/l9x8e72nkkav/1tejNnqrusnyQbDjIKQCu4/299c94792137a8ef135238c4c19a8a0c/inka_web_regularx1-Cross-2daMitaddePrecio_Ninet_Babylac_Secos_Geriaplus.jpg" />
        </div>
        <div className="w-11/12 2xl:w-full h-full max-w-[96rem] mx-auto grid grid-cols-4 pt-8">
          <div className="col-span-1 p-2">
            <img className="rounded-2xl" src="https://images.ctfassets.net/l9x8e72nkkav/7iAsiawNnj4UA3KG12HV3t/8808661ff01d72dd42520fb7bde5fddc/inka_web_regular_x4_Pan__itosHumedos-Enfagrow-Perfumeri__aInfantil-Pediasure_1.jpg" />
          </div>
          <div className="col-span-1 p-2">
            <img className="rounded-2xl" src="https://images.ctfassets.net/l9x8e72nkkav/27bvDwNangy5P8tDvKOzde/d65fb6e0a57931a6d65a96fd0752d6c2/inka_web_regular_x4_Pan__itosHumedos-Enfagrow-Perfumeri__aInfantil-Pediasure_2.jpg" />
          </div>
          <div className="col-span-1 p-2">
            <img className="rounded-2xl" src="https://images.ctfassets.net/l9x8e72nkkav/2BHD02AzG0GN7AaTcNB8Ut/ead3a9f564cd085adfd0aeb9276a753d/inka_web_regular_x4_Pan__itosHumedos-Enfagrow-Perfumeri__aInfantil-Pediasure_3.jpg" />
          </div>
          <div className="col-span-1 p-2">
            <img className="rounded-2xl" src="https://images.ctfassets.net/l9x8e72nkkav/2HjeVMEWxGg8IyVW81xYPk/0405615c9a8ac42de2a5aee2580eee62/inka_web_regular_x4_Pan__itosHumedos-Enfagrow-Perfumeri__aInfantil-Pediasure_4.jpg" />
          </div>
          <div className="col-span-2 py-6 px-2">
            <img className="rounded-2xl" src="https://images.ctfassets.net/l9x8e72nkkav/77PWDmv4qHrR7qNcTJULOv/435b303d18ed389bdfb8a94ceac8dc91/inka_web_regular_x2_Antigripales-Oftlamicos_1.jpg" />
          </div>
          <div className="col-span-2 py-6 px-2">
            <img className="rounded-2xl" src="https://images.ctfassets.net/l9x8e72nkkav/1ldo0neZAQ5ElejqtLLMyF/0e2a67d3f9c3f96cba8b92de48401a64/inka_web_regular_x2_Antigripales-Oftlamicos_2.jpg" />
          </div>
        </div>
      </section>
      <section className="bg-gray-100">
        <div className="w-11/12 2xl:w-full h-full max-w-[96rem] mx-auto pt-4 pb-8">
          <p className="font-semibold text-xl px-2">
            Comprometidos con Proteger la Salud de tu familia
            <span className="ml-12 text-[#16a2ff] text-sm">Ver más productos</span>
          </p>
          <div className="w-full h-full pt-6 pb-4 grid grid-cols-5">
            <div className="col-span-1 mx-2 p-3 bg-white rounded-2xl">
              <img className="w-40 h-40 object-cover mx-auto" src="https://dcuk1cxrnzjkh.cloudfront.net/imagesproducto/010197X.jpg" />
              <div className="my-4">
                <p className="text-sm text-gray-500">Tubo 100g</p>
                <p className="text-gray-700">Crema Regeneradora Bepanthen</p>
              </div>
              <p className="text-lg mt-8">S/. 61.90</p>
              <button className="w-full btn bg-green-700 rounded-3xl mt-3 py-2 px-5 text-white">
                {'Ver más'}
              </button>
            </div>
            <div className="col-span-1 mx-2 p-3 bg-white rounded-2xl">
              <img className="w-40 h-40 object-cover mx-auto" src="https://dcuk1cxrnzjkh.cloudfront.net/imagesproducto/024715X.jpg" />
              <div className="my-4">
                <p className="text-sm text-gray-500">CAJA 50 UN</p>
                <p className="text-gray-700">Tiras Reactivas para Glucosa Accu-Chek Instant - Caja 50 UN</p>
              </div>
              <p className="text-lg mt-8">S/. 90.20</p>
              <button className="w-full btn bg-green-700 rounded-3xl mt-3 py-2 px-5 text-white">
                {'Ver más'}
              </button>
            </div>
            <div className="col-span-1 mx-2 p-3 bg-white rounded-2xl">
              <img className="w-40 h-40 object-cover mx-auto" src="https://dcuk1cxrnzjkh.cloudfront.net/imagesproducto/026085X.jpg" />
              <div className="my-4">
                <p className="text-sm text-gray-500">TUBO 30 G</p>
                <p className="text-gray-700">Emolan Gloss Emulsión Emolan Gloss Emulsión</p>
              </div>
              <p className="text-lg mt-8">S/. 16.50</p>
              <button className="w-full btn bg-green-700 rounded-3xl mt-3 py-2 px-5 text-white">
                {'Ver más'}
              </button>
            </div>
            <div className="col-span-1 mx-2 p-3 bg-white rounded-2xl">
              <img className="w-40 h-40 object-cover mx-auto" src="https://dcuk1cxrnzjkh.cloudfront.net/imagesproducto/030310X.jpg" />
              <div className="my-4">
                <p className="text-sm text-gray-500">CAJA 50 UN</p>
                <p className="text-gray-700">Mascarilla Desechable 3 Pliegues - Caja 50 UN</p>
              </div>
              <p className="text-lg mt-8">S/. 7.90</p>
              <button className="w-full btn bg-green-700 rounded-3xl mt-3 py-2 px-5 text-white">
                {'Ver más'}
              </button>
            </div>
            <div className="col-span-1 mx-2 p-3 bg-white rounded-2xl">
              <img className="w-40 h-40 object-cover mx-auto" src="https://dcuk1cxrnzjkh.cloudfront.net/imagesproducto/030473X.jpg" />
              <div className="my-4">
                <p className="text-sm text-gray-500">FRASCO 1000 ML</p>
                <p className="text-gray-700">Alcohol 100X 70% - Frasco 1000 ML</p>
              </div>
              <p className="text-lg mt-8">S/. 8.50</p>
              <button className="w-full btn bg-green-700 rounded-3xl mt-3 py-2 px-5 text-white">
                {'Ver más'}
              </button>
            </div>
          </div>
        </div>
      </section>
      <section>
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
      </section>
    </Layout>
  );
}

export default Home;