import { motion } from "framer-motion";

import { CheckArrowIcon } from "../assets/icons/CheckArrowIcon";
import { RocketIcon } from "../assets/icons/RocketIcon";
import { MonitorDashboardIcon } from "../assets/icons/MonitorDashboardIcon";
import { MobileIcon } from "../assets/icons/MobileIcon";
import { SiteIcon } from "../assets/icons/SiteIcon";
import { LineCardsHzBackground } from "../assets/icons/LineCardsHzBackground";

const featuresData = [
  {
    title: "Sistema Web",
    description:
      "Sistemas web sob medida, com foco em usabilidade e performance desde o MVP até a operação.",
    icon: <MonitorDashboardIcon />,
  },
  {
    title: "Aplicativo",
    description:
      "Aplicativos mobile nativos ou híbridos, pensados para engajar usuários em qualquer dispositivo.",
    icon: <MobileIcon />,
  },
  {
    title: "Landing Page",
    description:
      "Landing pages otimizadas para conversão, alinhadas ao posicionamento da sua marca.",
    icon: <SiteIcon />,
  },
];

const heroPhases = [
  {
    title: "Definição",
    description:
      "Direcionamos a tecnologia para o problema certo, evitando escopo e custos desnecessários.",
  },
  {
    title: "Construção",
    description:
      "Produto sólido e rápido, com nossa experiência de 10 anos para evoluir sem retrabalho.",
  },
  {
    title: "Testes",
    description:
      "Lançamento sem falhas: garanta feedback real de negócio, não relatórios de bugs.",
  },
  {
    title: "Implantação",
    description:
      "Tudo no ar e sob seu controle, com dados para guiar a próxima decisão estratégica.",
  },
];

export const Features1 = () => {
  return (
    <section className="w-full bg-bgDark1" id="features">
      <div className="shape-divider-bottom-1665696614">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="bg-bgDark2 fill-bgDark2"
        >
          <path
            d="M1200 120L0 16.48 0 0 1200 0 1200 120z"
            className="bg-bgDark1 fill-bgDark1"
          ></path>
        </svg>
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div className="flex flex-wrap items-center 2xl:w-[1450px] xl:w-[1300px] w-11/12 mx-auto md:pl-4 xl:pr-16 xl:pl-16">
          <div className="w-full lg:w-1/2 mb-12 lg:mb-0">
            <div className="mx-auto lg:mx-auto w-11/12 sm:w-4/5 md:w-3/4 lg:w-unset">
              <span className="block-subtitle">Nosso processo</span>
              <h2 className="mt-6 mb-8 text-3xl lg:text-3xl text-white">
                O que fazemos?
              </h2>
              <p className="mb-10 text-secondaryText leading-loose">
                Enquanto você planeja seu negócio, nós cuidamos de todo o
                processo de desenvolvimento, desde a ideia até a entrega do MVP.
              </p>
              <ul className="mb-6 text-primaryText">
                <li className="mb-4 flex">
                  <CheckArrowIcon />
                  <span>Planejamento</span>
                </li>
                <li className="mb-4 flex">
                  <CheckArrowIcon />
                  <span>Desenvolvimento</span>
                </li>
                <li className="mb-4 flex">
                  <RocketIcon />
                  <span>Entrega</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="w-4/4 mx-auto lg:w-1/2 md:pl-6 sm:pl-0 lg:-mx-4 sm:pr-8 lg:pt-10 lg:pl-4 xl:px-8">
            <div className="grid gap-8 px-6 xl:px-0 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:grid-rows-[auto_auto] lg:gap-10">
              {featuresData.map((feature, index) => {
                const baseClasses =
                  "w-full main-border-gray-darker rounded-xl bg-bgDark3 flex flex-col px-6 py-4";

                const layoutClasses =
                  index === 0
                    ? " lg:col-start-1 lg:row-span-2 lg:self-center"
                    : index === 1
                    ? " lg:col-start-2 lg:row-start-1"
                    : " lg:col-start-2 lg:row-start-2";

                return (
                  <div
                    className={baseClasses + layoutClasses}
                    key={`${feature.title}-${index}`}
                  >
                    <div className="flex flex-col gap-3">
                      <div className="flex items-center">
                        <div className="flex-shrink-0">{feature.icon}</div>
                        <div className="content-text-white">
                          {feature.title}
                        </div>
                      </div>
                      <div className="content-text-white">
                        {feature.description}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 10, zIndex: 20 }}
        animate={{ opacity: 1, y: 0, zIndex: 20 }}
        transition={{ duration: 0.5, delay: 0.15 }}
      >
        <div className="relative w-screen flex justify-center px-6 sm:px-10 lg:px-0 mt-20 mb-20">
          <div className="hidden lg:block absolute inset-0 pointer-events-none">
            <div className="w-full h-full flex items-center">
              <LineCardsHzBackground />
            </div>
          </div>
          <div className="relative z-10 w-full max-w-6xl grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {heroPhases.map((phase) => (
              <div
                key={phase.title}
                className="bg-bgDark2 backdrop-blur-sm border border-gray-700 rounded-2xl px-6 py-6 text-left flex flex-col gap-3 shadow-lg shadow-black/20 hover:bg-bgDark3 transition-all duration-300"
              >
                <div className="flex items-center gap-4">
                  <h3 className="text-primaryText text-lg font-semibold">
                    {phase.title}
                  </h3>
                </div>
                <p className="text-secondaryText text-sm leading-relaxed">
                  {phase.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
      <div className="shape-divider-bottom-1665696614">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="bg-bgDark1 fill-bgDark1"
        >
          <path
            d="M1200 120L0 16.48 0 0 1200 0 1200 120z"
            className="bg-bgDark2 fill-bgDark2"
          ></path>
        </svg>
      </div>
    </section>
  );
};
