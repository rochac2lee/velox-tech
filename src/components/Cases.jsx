import "smart-webcomponents-react/source/styles/smart.default.css";
import "../styles/SmartCaroucel.css";
import Carousel from "smart-webcomponents-react/carousel";
import { useCallback, useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";

import caseJess from "../assets/images/cases/jessikcustodio.com.br.png";
import caseCampyng from "../assets/images/cases/campyng.com.br.png";
import caseIfpa from "../assets/images/cases/ifparequerimentos.replit.app.png";
import caseEduqfy from "../assets/images/cases/eduqfy.com.br.png";
import caseDrive from "../assets/images/cases/drive.expert-seg.com.png";
import LightswindCarousel from "./LightswindCarousel";

const casesData = [
  {
    id: 1,
    imageUrl: caseJess.src,
    title: "Site pessoal de Jessik Custódio",
    brand: "Jessik Custódio",
    description:
      "Landing page completa para divulgar o perfil profissional de Jessik Custódio.",
    tags: ["Landing page", "Divulgação", "Perfil profissional"],
    site: "jessikcustodio.com.br",
    link: "https://jessikcustodio.com.br",
  },
  {
    id: 2,
    imageUrl: caseCampyng.src,
    title: "Campyng Reservas",
    brand: "Campyng",
    description:
      "Plataforma web responsivo para reservas e gestão de campings em todo o Brasil.",
    tags: ["Sistema web", "Campings", "Reservas", "Online"],
    site: "campyng.com.br",
    link: "https://campyng.com.br",
  },
  {
    id: 3,
    imageUrl: caseIfpa.src,
    title: "IFPA Requerimentos",
    brand: "IFPA",
    description:
      "Sistema acadêmico para que os alunos façam os requerimentos de forma online.",
    tags: ["Sistema web", "Faculdade", "Requerimentos", "Online"],
    site: "ifparequerimentos.replit.app",
    link: "https://ifparequerimentos.replit.app",
  },
  {
    id: 4,
    imageUrl: caseEduqfy.src,
    title: "Eduqfy Educação",
    brand: "Eduqfy",
    description:
      "Plataforma de gestão de eventos com inscrição online, gerenciamento de participantes e PDV.",
    tags: ["Sistema web", "Eventos", "PDV", "Inscrição online", "Financeiro"],
    site: "eduqfy.com.br",
    link: "https://eduqfy.com.br",
  },
  {
    id: 5,
    imageUrl: caseDrive.src,
    title: "Portal Drive Expert",
    brand: "Drive Expert Seg",
    description:
      "Drive corporativo para armazenamento de pastas e arquivos de forma segura e organizada.",
    tags: ["Sistema web", "Drive corporativo", "Arquivos", "Segurança"],
    site: "drive.expert-seg.com",
    link: "https://drive.expert-seg.com",
  },
];

export const Cases = () => {
  const [selectedItem, setSelectedItem] = useState(null);
  const [mobileActiveIndex, setMobileActiveIndex] = useState(0);
  const [isClientReady, setIsClientReady] = useState(false);

  useEffect(() => {
    setIsClientReady(true);
  }, []);

  const closeModal = useCallback(() => {
    setSelectedItem(null);
  }, []);

  const items = useMemo(() => casesData, []);

  const handleItemClick = useCallback((item) => {
    setSelectedItem(item);
  }, []);

  const carouselData = useMemo(
    () =>
      casesData.map((item) => ({
        image: item.imageUrl,
        label: "",
      })),
    []
  );

  return (
    <section className="w-full bg-bgDark2 py-24" id="cases">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div className="2xl:w-[1450px] xl:w-[1300px] w-11/12 mx-auto text-center">
          <span className="block-subtitle">Cases de Sucesso</span>
          <h2 className="mt-6 mb-6 text-3xl lg:text-4xl text-white">
            O que já fizemos
          </h2>
          <p className="text-secondaryText max-w-3xl mx-auto leading-relaxed">
            Conheça alguns dos projetos que criamos para transformar ideias em
            produtos digitais completos. Cada entrega combina design, tecnologia
            e estratégia de crescimento.
          </p>
        </div>

        <div className="mt-16">
          <div className="sm:hidden flex justify-center">
            {isClientReady ? (
              <Carousel
                className="cases-carousel-mobile"
                dataSource={carouselData}
                displayMode="3d"
                autoPlay
                loop
                interval={6500}
                keyboard
                hideIndicators
                slideShow
                onChange={(event) => {
                  const detail = event.detail;
                  if (detail && typeof detail.index === "number") {
                    setMobileActiveIndex(detail.index);
                  }
                }}
                onClick={(event) => {
                  if (event.target.closest("smart-button")) return;
                  const selected =
                    casesData[mobileActiveIndex] ?? casesData[0] ?? null;
                  if (selected) {
                    handleItemClick(selected);
                  }
                }}
              />
            ) : (
              <div className="cases-carousel-mobile flex items-center justify-center rounded-2xl border border-white/10 text-secondaryText/70">
                Carregando carrossel…
              </div>
            )}
          </div>
          <div className="hidden sm:flex justify-center">
            {isClientReady ? (
              <LightswindCarousel
                items={items}
                rotateInterval={6500}
                onItemClick={handleItemClick}
                maxWidth={1020}
                height={507}
              />
            ) : (
              <div className="w-full flex justify-center">
                <div className="w-full max-w-[1020px] h-[507px] rounded-3xl border border-white/10 bg-bgDark3/40 flex items-center justify-center text-secondaryText/70">
                  Carregando carrossel…
                </div>
              </div>
            )}
          </div>
        </div>

        {selectedItem && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 px-6 py-10"
            role="dialog"
            aria-modal="true"
            aria-label="Visualização do case em tela cheia"
            onClick={closeModal}
          >
            <div
              className="relative w-full max-w-6xl"
              onClick={(event) => event.stopPropagation()}
            >
              <button
                type="button"
                onClick={closeModal}
                className="absolute -top-12 right-0 text-white/80 hover:text-white transition"
                aria-label="Fechar visualização"
              >
                Fechar ✕
              </button>
              <img
                src={selectedItem.imageUrl}
                className="w-full max-h-[80vh] rounded-2xl object-contain"
              />
            </div>
          </div>
        )}
      </motion.div>
    </section>
  );
};
