import { motion } from "framer-motion";
import { ArrowUpRightIcon } from "../assets/icons/ArrowUpRightIcon";

const goToPlans = () => {
  window.location.href = "#pricing";
};

export const Hero = () => {
  return (
    <section
      className="w-screen  flex justify-center items-center bg-bgDark1  hero-bg-gradient"
      id="home"
    >
      <div className="w-full md:w-[800px] xl:w-[1200px] flex flex-col justify-center items-center pt-16 md:pt-16 lg:pt-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-secondaryColor text-sm sm:text-base mb-6 sm:mt-32 mt-16 font-bold">
            Seu Projeto + Nossa Expertise = 🚀
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.05 }}
        >
          <div className="text-2xl sm:text-5xl lg:text-5xl xl:text-5xl font-bold tracking-wide mt-3 text-primaryText px-8 sm:px-8 md:px-20 lg:px-4">
            <h1 className="inline md:hidden">
              Construímos seu <b>MVP</b>
            </h1>
            <h1 className="hidden md:inline">Construímos seu MVP</h1>
          </div>
          <h1 className="mt-2 sm:mt-2 text-2xl sm:text-5xl lg:text-5xl xl:text-5xl tracking-wide  text-primaryText  px-8 sm:px-10 md:px-24 lg:px-24 leading-[1.4] md:leading-[1.3] lg:leading-[1.3] xl:leading-[1.4]">
            para o seu negócio decolar
          </h1>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <p className="text-secondaryText text-sm lg:text-base xl:text-lg sm:text-base mt-7 px-12 sm:px-48 xl:px-80">
            Nossa experiência garante que seu primeiro passo digital seja
            sólido, enxuto e pronto para o seu primeiro cliente.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
        >
          <div className="flex flex-col gap-2 sm:flex-row mt-14 mb-24 sm:mb-40 justify-center">
            <button
              className="contained-button w-64 sm:w-64 h-12 mr-0 sm:mr-4 lg:mr-6 mb-2 sm:mb-0"
              onClick={goToPlans}
              aria-label="Criar conta grátis"
            >
              Quero construir meu MVP
            </button>
            {/* <button
              className="pl-2 w-64 sm:w-52 h-12 rounded-xl font-bold text-primaryText border border-solid  flex justify-center items-center cursor-pointer bg-bgDark2 hover:bg-bgDark3 border-primaryColor transition"
              onClick={() =>
                window.open("https://console.veloxtech.com.br/docs", "_blank")
              }
              aria-label="Documentação"
            >
              Documentação
              <ArrowUpRightIcon />
            </button> */}
          </div>
        </motion.div>
        <div className="hidden relative w-screen flex justify-center ">
          <div className="shape-divider-bottom-1665343298 hidden lg:block">
            <svg
              data-name="Layer 1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1200 120"
              preserveAspectRatio="none"
              className="bg-bgDark2"
            >
              <path
                d="M1200 0L0 0 598.97 114.72 1200 0z"
                className="shape-fill bg-bgDark1  fill-bgDark1"
              ></path>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};
