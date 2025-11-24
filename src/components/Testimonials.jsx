import { motion } from "framer-motion";

import { QuoteIcon } from "../assets/icons/QuoteIcon";
import testimonial1 from "../assets/images/testimonial1.png";
import testimonial2 from "../assets/images/testimonial2.png";
import testimonial3 from "../assets/images/testimonial3.png";

const testimonialsData = [
  {
    customerName: "Jessik Custódio",
    customerTitle: "Doutora em Educação",
    content:
      "Eu precisava de um site que transmitisse a seriedade e o rigor da minha Tese de Doutorado e do meu Produto Educacional. O trabalho da Velox Tech foi impecável. Eles conseguiram criar uma plataforma profissional, elegante e de fácil navegação (o jessikcustodio.com.br), que realmente valoriza o meu material acadêmico. Graças a este trabalho, sinto que minha pesquisa ganhou a vitrine digital que merecia. Recomendo 100%!",
    image: testimonial1,
  },
  {
    customerName: "Emerson Silva",
    customerTitle: "Corretor de Imóveis",
    content:
      "Em todas as vezes que precisei do suporte do site, sempre foram muito prestativo correndo atrás para resolver o problema o mais rápido possível levando em consideração que algumas vezes não depende só da empresa. Um dos pontos que quero registrar aqui é que o Cleber não nos deixa no vácuo em relação a dar um retorno, em situações que o site parou de funcionar correndo atrás e sempre me deixando informado sobre o andamento do suporte, por esse motivo coloco o trabalho dele como Nota 10 em relação ao cliente.",
    image: testimonial2,
  },
  {
    customerName: "Joice Elaine de Melo",
    customerTitle: "Sócia administradora",
    content:
      "O suporte prestado foi excelente, a qualidade do serviço entregue superou nossas expectativas, todos os prazos foram cumpridos. Fomos bem orientado durante todo o processo, gostei especialmente da atenção aos detalhes, do layout e da rapidez nas respostas, não vejo nada a melhorar no momento e certamente recomendaria o seu trabalho a outras pessoas.",
    image: testimonial3,
  },
];

export const Testimonials = () => (
  <section className="w-full flex justify-center pt-16 mb-16 lg:mb-32 bg-bgDark2 relative">
    <div className="absolute -top-16" id="feedback" />
    <div className="flex flex-col w-full 2xl:w-[1150px] lg:w-[1050px] justify-center">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 0.3 }}
      >
        <div className="block-subtitle text-center mb-6">Depoimentos</div>
        <h2 className="text-3xl lg:text-3xl text-white text-center mb-20 px-8 sm:px-24 md:px-48">
          Clientes que confiaram em nós
        </h2>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-5 xl:gap-10 px-6 xl:px-0 items-center">
          {testimonialsData.map((testimonial, index) => (
            <div
              className="w-11/12 sm:w-4/5 md:w-[560px] lg:w-1/3 main-border-gray-darker rounded-xl bg-bgDark3 flex flex-col px-6 py-4"
              key={`${testimonial.customerName}-${index}`}
            >
              <div className="flex mb-2">
                <QuoteIcon />
              </div>
              <div className="content-text-white">"{testimonial.content}"</div>
              <div className="flex mt-4 mb-2 xl:mt-8 xl:mb-4">
                <div>
                  <img
                    src={testimonial.image.src}
                    alt={testimonial.customerName}
                    width="45px"
                    height="5px"
                    aria-label={testimonial.customerName}
                    className="rounded-full"
                  />
                </div>
                <div className="flex flex-col ml-4">
                  <div className="content-text-white font-medium">
                    {testimonial.customerName}
                  </div>
                  <div className="content-text-gray">
                    {testimonial.customerTitle}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  </section>
);
