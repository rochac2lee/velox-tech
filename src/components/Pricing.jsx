import { useState } from "react";
import { motion } from "framer-motion";

import { SubscribeModal } from "./SubscribeModal";

import { usePlanStore } from "../store";

const SERVICES = [
  {
    id: "landing-page",
    title: "Landing Page",
    description:
      "Página única otimizada para conversão, ideal para campanhas e lançamentos.",
  },
  {
    id: "sistema-web",
    title: "Sistema Web",
    description:
      "Aplicação web completa para gestão de processos, dashboards e integrações.",
  },
  {
    id: "aplicativo",
    title: "Aplicativo",
    description:
      "Experiência mobile nativa ou híbrida para alcançar usuários em qualquer lugar.",
  },
];

export const Pricing = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { setPlanSelected } = usePlanStore();
  const [selectedService, setSelectedService] = useState(null);
  const [includeHosting, setIncludeHosting] = useState(false);
  const [includeSupport, setIncludeSupport] = useState(false);

  const handleConfirm = () => {
    if (!selectedService) return;
    setPlanSelected({
      ...selectedService,
      includeHosting,
      includeSupport,
    });
    setIsModalOpen(true);
  };

  return (
    <section
      className="w-full flex justify-center bg-bgDark2 relative px-8 sm:px-24 md:px-48"
      id="pricing"
    >
      <div className="absolute -top-16" />
      <div className="pb-20 pt-12  2xl:w-[1150px] lg:w-[1050px]  md:w-4/5 ">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="container mx-auto sm:px-0 md:px-0">
            <div className="max-w-2xl mx-auto text-center mb-16">
              <span className="block-subtitle">
                Dê os primeiros passos com a Velox
              </span>
              <h2 className="mt-6 mb-6 text-4xl lg:text-5xl font-heading text-primaryText">
                Pré-briefing
              </h2>
              <p className="mb-6 text-secondaryText">
                Selecione o tipo de serviço e as necessidades adicionais para
                que possamos preparar a proposta ideal.
              </p>
            </div>
            <div className="flex flex-col gap-12 mt-10">
              <div>
                <h3 className="text-2xl font-heading text-primaryText mb-4">
                  Qual serviço você precisa?
                </h3>
                <div className="grid gap-6 lg:grid-cols-3">
                  {SERVICES.map((service) => {
                    const isSelected = selectedService?.id === service.id;
                    return (
                      <button
                        key={service.id}
                        type="button"
                        onClick={() => setSelectedService(service)}
                        className={`text-left p-6 rounded-3xl border transition focus:outline-none focus:ring-2 focus:ring-primaryColor ${
                          isSelected
                            ? "border-primaryColor bg-[rgba(87,104,255,0.12)]"
                            : "border-bgDark3 bg-bgDark3 hover:border-primaryColor/60"
                        }`}
                        aria-pressed={isSelected}
                      >
                        <div className="flex items-center justify-between">
                          <h4 className="text-xl font-heading text-primaryText">
                            {service.title}
                          </h4>
                          <span
                            className={`w-5 h-5 border rounded-full flex items-center justify-center ${
                              isSelected
                                ? "border-primaryColor bg-primaryColor"
                                : "border-gray-500"
                            }`}
                          >
                            {isSelected && (
                              <span className="w-2 h-2 rounded-full bg-white" />
                            )}
                          </span>
                        </div>
                        <p className="mt-4 text-secondaryText">
                          {service.description}
                        </p>
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className="grid gap-6 lg:grid-cols-2">
                <div className="p-6 bg-bgDark3 rounded-3xl flex items-center justify-between">
                  <div>
                    <p className="text-lg font-semibold text-primaryText">
                      Hospedagem gerenciada
                    </p>
                    <p className="text-secondaryText">
                      Inclua servidores, domínio e monitoramento 24/7.
                    </p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      className="sr-only peer"
                      checked={includeHosting}
                      onChange={(event) =>
                        setIncludeHosting(event.target.checked)
                      }
                    />
                    <div className="w-12 h-6 bg-gray-600 rounded-full peer peer-checked:bg-primaryColor transition-colors" />
                    <span
                      className={`absolute left-1 top-1 h-4 w-4 bg-white rounded-full transition-transform ${
                        includeHosting ? "translate-x-6" : "translate-x-0"
                      }`}
                    />
                  </label>
                </div>
                <div className="p-6 bg-bgDark3 rounded-3xl flex items-center justify-between">
                  <div>
                    <p className="text-lg font-semibold text-primaryText">
                      Suporte técnico mensal
                    </p>
                    <p className="text-secondaryText">
                      SLA dedicado, melhorias contínuas e acompanhamento mensal.
                    </p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      className="sr-only peer"
                      checked={includeSupport}
                      onChange={(event) =>
                        setIncludeSupport(event.target.checked)
                      }
                    />
                    <div className="w-12 h-6 bg-gray-600 rounded-full peer peer-checked:bg-primaryColor transition-colors" />
                    <span
                      className={`absolute left-1 top-1 h-4 w-4 bg-white rounded-full transition-transform ${
                        includeSupport ? "translate-x-6" : "translate-x-0"
                      }`}
                    />
                  </label>
                </div>
              </div>

              <div className="flex justify-end">
                <button
                  className={`py-3 px-8 rounded-xl font-bold contained-button ${
                    selectedService ? "" : "opacity-60 cursor-not-allowed"
                  }`}
                  onClick={handleConfirm}
                  disabled={!selectedService}
                >
                  Continuar
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
      {isModalOpen && (
        <SubscribeModal isOpen={isModalOpen} setIsOpen={setIsModalOpen} />
      )}
    </section>
  );
};
