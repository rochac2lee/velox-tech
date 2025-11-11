import { useState } from "react";
import { motion } from "framer-motion";
import { CheckArrowIcon } from "../assets/icons/CheckArrowIcon";

const FAQData = [
  {
    question: "O que a Velox Tech faz?",
    answer:
      "Somos uma empresa de desenvolvimento e consultoria de tecnologia focada em tirar ideias do papel. Combinamos estratégia, design e engenharia para construir MVPs robustos e preparar seu negócio para crescer com segurança.",
  },
  {
    question: "Como funciona o processo de criação do MVP?",
    answer:
      "Trabalhamos em ciclos curtos. Começamos com discovery para alinhar objetivos e métricas, evoluímos para product design com protótipos validáveis e seguimos para desenvolvimento ágil com entregas semanais acompanhadas por você.",
  },
  {
    question: "Que tipo de clientes a Velox Tech atende?",
    answer:
      "Atuamos com founders em estágio inicial, times de inovação e empresas que precisam validar novas unidades digitais. Adaptamos o formato de squad dedicado ou task force rápida conforme o desafio.",
  },
  {
    question: "Quais são os diferenciais da Velox Tech?",
    answer:
      "🔹 Equipe multidisciplinar com mais de 10 anos em produtos digitais<br>🔹 Plano de execução orientado por métricas de negócio<br>🔹 Acompanhamento próximo do cliente em cada decisão de produto",
  },
  {
    question: "Qual o prazo médio para um MVP?",
    answer:
      "Projetos estratégicos levam entre 6 e 12 semanas, dependendo do escopo e integrações. Definimos um cronograma realista logo após o pré-briefing e o discovery compartilhado.",
  },
  {
    question: "Vocês continuam após o lançamento?",
    answer:
      "Sim. Oferecemos planos de evolução contínua, squads de growth e suporte técnico mensal para garantir estabilidade, novas features e acompanhamento de métricas.",
  },
  {
    question: "Como dou o primeiro passo com a Velox Tech?",
    answer:
      "Preencha o pré-briefing no site ou fale com a gente em contato@veloxtech.com.br. Em seguida conduzimos uma reunião de diagnóstico para definir investimento, roadmap e time ideal.",
  },
];

export const FAQ = () => (
  <section className="relative -mt-8 sm:mt-0 pt-12 sm:pt-16 pb-16 bg-blueGray-50 overflow-hidden">
    <div className="absolute -top-10" id="FAQ" />
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <div className="relative z-10 container px-2 sm:px-8 lg:px-4 mx-auto w-11/12 sm:w-full">
        <div className="md:max-w-4xl mx-auto">
          <p className="mb-7 block-subtitle text-center">
            Você tem alguma dúvida?
          </p>
          <h2 className="mb-16 block-big-title text-center">
            Perguntas Frequentes
          </h2>
          <div className="mb-11 flex flex-wrap -m-1">
            {FAQData.map((item, index) => (
              <div className="w-full p-1" key={`${item.question}-${index}`}>
                <FAQBox
                  idx={index}
                  title={item.question}
                  content={item.answer}
                  key={`${item.question}-${item.answer}`}
                  defaultOpen={index === 0}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  </section>
);

const FAQBox = ({ defaultOpen, idx, title, content }) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div
      className="pt-2 sm:pt-6 pb-2 px-3 sm:px-8  rounded-3xl bg-bgDark3 main-border-gray-darker mb-4 relative hover:bg-bgDark3Hover cursor-pointer transition"
      onClick={() => setIsOpen(!isOpen)}
    >
      <div className="flex flex-col p-2  justify-center items-start">
        <h3 className=" content-title pt-3 sm:pt-0 pr-8 sm:pr-0">{title}</h3>
        {idx == 3 ? (
          <div
            className={`text-secondaryText pt-4 transition-height duration-300 overflow-hidden ${
              isOpen ? "max-h-96" : "max-h-0"
            }`}
          >
            <ul className="mb-6 text-primaryText">
              <li className="mb-4 flex">
                <CheckArrowIcon />
                <span>
                  Squad dedicado com especialistas em produto, design e
                  engenharia.
                </span>
              </li>
              <li className="mb-4 flex">
                <CheckArrowIcon />
                <span>
                  Roadmap construído junto com você, sempre orientado a
                  métricas.
                </span>
              </li>
              <li className="mb-4 flex">
                <CheckArrowIcon />
                <span>
                  Suporte estratégico após o lançamento para acelerar a
                  evolução.
                </span>
              </li>
            </ul>
          </div>
        ) : (
          <p
            className={`text-secondaryText pt-4 transition-height duration-300 overflow-hidden ${
              isOpen ? "max-h-96" : "max-h-0"
            }`}
          >
            {content}
          </p>
        )}
      </div>
      <div className="absolute top-6 right-4 sm:top-8 sm:right-8">
        <svg
          width="28px"
          height="30px"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={`transition-all duration-500  ${
            isOpen ? "rotate-[180deg]" : "rotate-[270deg]"
          }`}
        >
          <path
            d="M4.16732 12.5L10.0007 6.66667L15.834 12.5"
            stroke="#4F46E5"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
        </svg>
      </div>
    </div>
  );
};
