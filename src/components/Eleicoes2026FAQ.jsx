import { useState } from "react";
import { motion } from "framer-motion";

const FAQData = [
  {
    question: "Por que começar agora se a eleição é só em 2026?",
    answer:
      "Autoridade digital leva tempo para ser construída. Quem começa agora chega em 2026 com base mobilizada, reconhecimento consolidado e mensagem validada. Seus adversários vão começar do zero no período eleitoral.",
  },
  {
    question: "Minha equipe não entende de tecnologia. Vai ser difícil usar?",
    answer:
      "Zero conhecimento técnico necessário. Nosso painel administrativo é intuitivo como redes sociais. Sua assessoria de comunicação atualiza fotos, textos e notícias em segundos. Incluímos treinamento completo.",
  },
  {
    question: "E se o site cair durante um momento importante?",
    answer:
      "Garantimos 99.9% de uptime. Infraestrutura preparada para picos de acesso. Seu site não cai durante debates, após posts virais ou em momentos críticos da campanha.",
  },
  {
    question: "Está em conformidade com LGPD e TSE?",
    answer:
      "100% conforme. Toda infraestrutura segue as normas de proteção de dados da LGPD e regulamentações do TSE. Seus dados de apoiadores ficam protegidos e você evita multas e problemas jurídicos.",
  },
  {
    question: "Quanto tempo demora para ficar pronto?",
    answer:
      "72 horas para o MVP funcional. Você terá um site completo, bonito e conversivo no ar em 3 dias. Depois disso, fazemos melhorias incrementais conforme sua campanha evolui.",
  },
  {
    question: "Como funciona o sistema de captação para WhatsApp?",
    answer:
      "Cada formulário preenchido envia automaticamente os dados para o WhatsApp da campanha em tempo real. Você ou seu coordenador recebem nome, telefone e região do apoiador instantaneamente.",
  },
  {
    question: "Meu site vai aparecer no Google?",
    answer:
      "Sim. Aplicamos SEO local otimizado para que você apareça quando eleitores buscarem por 'candidato a [cargo] em [cidade]'. É assim que conquistamos votos de pessoas que ainda não te conhecem.",
  },
];

export const Eleicoes2026FAQ = () => (
  <section className="relative pt-12 sm:pt-16 pb-16 bg-white overflow-hidden">
    <div className="absolute -top-10" id="FAQ" />
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <div className="relative z-10 container px-2 sm:px-8 lg:px-4 mx-auto w-11/12 sm:w-full">
        <div className="md:max-w-4xl mx-auto">
          <p className="mb-7 text-[#168821] font-semibold text-sm uppercase tracking-wider text-center">
            Tire suas dúvidas
          </p>
          <h2 className="mb-16 text-3xl lg:text-4xl font-black text-gray-900 text-center">
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
      className="pt-2 sm:pt-6 pb-2 px-3 sm:px-8 rounded-3xl bg-gray-50 border-2 border-gray-200 mb-4 relative hover:bg-white hover:border-[#168821] hover:shadow-md cursor-pointer transition"
      onClick={() => setIsOpen(!isOpen)}
    >
      <div className="flex flex-col p-2 justify-center items-start">
        <h3 className="text-lg font-bold text-gray-900 pt-3 sm:pt-0 pr-8 sm:pr-0">
          {title}
        </h3>
        <p
          className={`text-gray-600 pt-4 transition-height duration-300 overflow-hidden ${
            isOpen ? "max-h-96" : "max-h-0"
          }`}
        >
          {content}
        </p>
      </div>
      <div className="absolute top-6 right-4 sm:top-8 sm:right-8">
        <svg
          width="28px"
          height="30px"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={`transition-all duration-500 ${
            isOpen ? "rotate-[180deg]" : "rotate-[270deg]"
          }`}
        >
          <path
            d="M4.16732 12.5L10.0007 6.66667L15.834 12.5"
            stroke="#168821"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
        </svg>
      </div>
    </div>
  );
};
