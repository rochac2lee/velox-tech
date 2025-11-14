import { motion } from "framer-motion";

import { BullseyeArrowIcon } from "../assets/icons/BullseyeArrowIcon";
import { BuildingFlagIcon } from "../assets/icons/BuildingFlagIcon";

const aboutData = [
  {
    title: "Nossa Missão",
    description:
      "Desenvolver soluções digitais essenciais, fornecendo a base técnica especializada que os empreendedores precisam para validar suas ideias de negócio de forma rápida, eficiente e acessível, transformando conceitos em realidade funcional.",
    icon: <BullseyeArrowIcon />,
  },
  {
    title: "Nosso Propósito",
    description:
      "Ser o catalisador tecnológico para a próxima geração de empreendedores, conectando a visão de negócio à execução técnica de excelência. Existimos para acelerar sonhos e garantir que uma grande ideia encontre seu primeiro passo digital com segurança e solidez.",
    icon: <BuildingFlagIcon />,
  },
];

export const About = () => {
  const isCompactLayout = aboutData.length <= 2;

  return (
    <section
      className="w-screen flex justify-center bg-bgDark2 relative"
      id="about"
    >
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div className="flex flex-wrap items-center 2xl:w-[1150px] lg:w-[1050px] w-11/12 mx-auto md:pl-4 pt-20 pb-20">
          <div className="w-full mb-12 lg:mb-0">
            <div className="mx-auto w-full max-w-6xl px-6 xl:px-0">
              <span className="block-subtitle">Sobre nós</span>
              <h2 className="mt-6 mb-8 text-3xl lg:text-3xl text-white">
                Quem somos?
              </h2>
              <p className="mb-10 text-secondaryText leading-loose">
                Somos a <b>Velox Tech</b>, uma empresa que transforma sua ideia
                de negócio em um MVP essencial, rápido e sólido. Somos
                especialistas em prover a base técnica para que você possa
                validar seu conceito com excelência, conectando sua visão à
                execução digital de forma eficiente.
              </p>
              <div className="mx-auto w-full max-w-6xl">
                <div className="grid gap-8 sm:px-0 md:px-6 xl:px-0 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:grid-rows-[auto_auto] lg:gap-10">
                  {aboutData.map((data, index) => {
                    const baseClasses =
                      "w-full main-border-gray-darker rounded-xl bg-bgDark3 flex flex-col px-6 py-4";

                    const layoutClasses = isCompactLayout
                      ? ""
                      : index === 0
                      ? " lg:col-start-1 lg:row-span-2 lg:self-center"
                      : index === 1
                      ? " lg:col-start-2 lg:row-start-1"
                      : " lg:col-start-2 lg:row-start-2";

                    return (
                      <div
                        className={baseClasses + layoutClasses}
                        key={`${data.title}-${index}`}
                      >
                        <div className="flex flex-col gap-3">
                          <div className="flex items-center">
                            <div className="flex-shrink-0">{data.icon}</div>
                            <div className="content-text-white">
                              {data.title}
                            </div>
                          </div>
                          <div className="content-text-white">
                            {data.description}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};
