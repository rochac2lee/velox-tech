import { motion, AnimatePresence } from "framer-motion";
import { CheckArrowIcon } from "../assets/icons/CheckArrowIcon";
import { CloseIcon } from "../assets/icons/CloseIcon";
import { usePlanStore, useRegisterStore } from "../store";
import { useState } from "react";
import { LoadingIcon } from "../assets/icons/LoadingIcon";
import { Modal } from "./Modal";

export const SubscribeModal = ({ setIsOpen }) => {
  const { planSelected } = usePlanStore();
  const [step, setStep] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);
  const [form, setForm] = useState({
    name: "",
    document: "",
    phone: "",
    email: "",
    password: "",
    credit_card: {
      name: "",
      number: "",
      expiration: "",
      cvv: "",
    },
  });

  const userStore = useRegisterStore();

  const [errors, setErrors] = useState({ email: false });
  // Lógica para verificar se os campos estão preenchidos
  const isStep1Complete =
    form.name.trim() &&
    form.document.trim() &&
    form.phone.trim() &&
    form.email.trim() &&
    form.password.trim() &&
    !errors.email;

  const isStep2Complete =
    form.credit_card.name.trim() &&
    form.credit_card.number.trim().replace(/\s/g, "").length === 16 &&
    form.credit_card.expiration.trim().length === 5 &&
    form.credit_card.cvv.trim().length === 3;

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    if (name === "document") {
      const rawValue = value.replace(/\D/g, ""); // Remove caracteres não numéricos
      let formatted = "";

      if (rawValue.length <= 11) {
        // CPF
        formatted = rawValue
          .substring(0, 11)
          .replace(/(\d{3})(\d)/, "$1.$2")
          .replace(/(\d{3})(\d)/, "$1.$2")
          .replace(/(\d{3})(\d{1,2})$/, "$1-$2");
      } else {
        // CNPJ
        formatted = rawValue
          .substring(0, 14)
          .replace(/(\d{2})(\d)/, "$1.$2")
          .replace(/(\d{3})(\d)/, "$1.$2")
          .replace(/(\d{3})(\d{4})/, "$1/$2")
          .replace(/(\d{4})(\d{1,2})$/, "$1-$2");
      }

      setForm({ ...form, document: formatted });
    } else if (name === "phone") {
      const formatted = value
        .replace(/\D/g, "")
        .substring(0, 11)
        .replace(/(\d{2})(\d)/, "($1) $2")
        .replace(/(\d{5})(\d)/, "$1-$2");
      setForm({ ...form, phone: formatted });
    } else if (name === "credit_card.number") {
      const formatted = value
        .replace(/\D/g, "")
        .substring(0, 16)
        .replace(/(\d{4})(?=\d)/g, "$1 ");
      setForm({
        ...form,
        credit_card: {
          ...form.credit_card,
          number: formatted,
        },
      });
    } else if (name === "credit_card.expiration") {
      const formatted = value
        .replace(/\D/g, "")
        .substring(0, 4)
        .replace(/(\d{2})(\d{1,2})/, "$1/$2");
      setForm({
        ...form,
        credit_card: {
          ...form.credit_card,
          expiration: formatted,
        },
      });
    } else if (name === "credit_card.cvv") {
      const formatted = value.replace(/\D/g, "").substring(0, 3);
      setForm({
        ...form,
        credit_card: {
          ...form.credit_card,
          cvv: formatted,
        },
      });
    } else if (name === "credit_card.name") {
      setForm({
        ...form,
        credit_card: {
          ...form.credit_card,
          name: value.toUpperCase(),
        },
      });
    } else {
      setForm({ ...form, [name]: value });
    }

    if (name === "email") {
      const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
      setErrors({ ...errors, email: !isValid });
    }
  };

  const nextStep = () => setStep((prev) => Math.min(prev + 1, 2));
  const prevStep = () => setStep((prev) => Math.max(prev - 1, 1));

  const subscribe = async () => {
    setIsLoading(true);
    userStore.setUser({
      name: form.name,
      document: form.document,
      phone: form.phone,
      email: form.email,
      password: form.password,
      password_confirmation: form.password,
      role: "customer",
      abilities: [
        {
          action: "read",
          subject: "General",
        },
        {
          action: "read",
          subject: "UserProfile",
        },
        {
          action: "read",
          subject: "Logout",
        },
        {
          action: "read",
          subject: "Auth",
        },
        {
          action: "read",
          subject: "ClientDashboard",
        },
      ],
      credit_card: {
        name: form.credit_card.name,
        number: form.credit_card.number,
        expiration: form.credit_card.expiration,
        cvv: form.credit_card.cvv,
      },
      plan_id: planSelected.id,
    });

    await userStore.createUser();
    setIsLoading(false);
    setIsSuccessModalOpen(true);
  };

  const finish = () => {
    setIsOpen(false);
    setIsSuccessModalOpen(false);
    window.location.href = "https://console.veloxtech.com.br";
  };

  return (
    <div>
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0, zIndex: 50 }}
          animate={{ opacity: 1, zIndex: 50 }}
          transition={{ duration: 0.1 }}
          exit={{ opacity: 0 }}
        >
          <div
            className="w-full h-full bg-bgDarkTransparentDarker fixed top-0 left-0 flex z-50 justify-center items-center"
            onClick={() => setIsOpen(false)}
          >
            <div
              className="w-full sm:w-3/4 md:w-3/5 lg:w-[1000px] xl:w-[1100px] sm:rounded-2xl bg-bgDarkTransparentLighter main-border-gray-darker py-12 px-8 sm:px-16 backdrop-blur-xl fixed sm:mb-8 mx-auto z-50"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex relative">
                {/* Informações do pré-briefing à esquerda */}
                <div className="w-1/2 hidden lg:inline">
                  <h2 className="mt-6 mb-2 text-4xl text-primaryText">
                    {planSelected.title || "Serviço selecionado"}
                  </h2>
                  <p className="text-2xl text-secondaryColor mr-8">
                    {planSelected.description ||
                      "Selecione um serviço para visualizar o resumo aqui."}
                  </p>
                  <ul className="mb-6 text-primaryText mt-8 space-y-4">
                    <li className="flex items-start gap-3">
                      <CheckArrowIcon />
                      <span>
                        Tipo de serviço:{" "}
                        <strong>{planSelected.title || "Não informado"}</strong>
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckArrowIcon />
                      <span>
                        Hospedagem gerenciada:{" "}
                        <strong>
                          {planSelected.includeHosting ? "Sim" : "Não"}
                        </strong>
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckArrowIcon />
                      <span>
                        Suporte técnico mensal:{" "}
                        <strong>
                          {planSelected.includeSupport ? "Sim" : "Não"}
                        </strong>
                      </span>
                    </li>
                  </ul>
                </div>

                {/* Formulário à direita */}
                <div className="w-full lg:w-1/2 flex flex-col justify-center sm:pt-0">
                  <div className="flex flex-col space-y-4">
                    <p className="text-lg font-semibold text-primaryText">
                      {step === 1
                        ? "Informações Pessoais"
                        : "Informações de Pagamento"}
                    </p>
                    {step === 1 && (
                      <>
                        <input
                          className="px-4 py-3 w-full text-gray-700 placeholder-gray-500 outline-none border bg-gray-200 border-gray-300 rounded-lg focus:ring focus:ring-indigo-300"
                          type="text"
                          name="name"
                          value={form.name}
                          onChange={handleInputChange}
                          placeholder="Nome completo"
                        />
                        <input
                          className="px-4 py-3 w-full text-gray-700 placeholder-gray-500 outline-none border bg-gray-200 border-gray-300 rounded-lg focus:ring focus:ring-indigo-300"
                          type="text"
                          name="document"
                          value={form.document}
                          onChange={handleInputChange}
                          placeholder="CPF/CNPJ"
                        />
                        <input
                          className="px-4 py-3 w-full text-gray-700 placeholder-gray-500 outline-none border bg-gray-200 border-gray-300 rounded-lg focus:ring focus:ring-indigo-300"
                          type="tel"
                          name="phone"
                          value={form.phone}
                          onChange={handleInputChange}
                          placeholder="Telefone"
                        />
                        <p className="text-lg font-semibold text-primaryText">
                          Dados de acesso
                        </p>
                        <input
                          className={`px-4 py-3 w-full text-gray-700 placeholder-gray-500 outline-none border ${
                            errors.email ? "border-red-500" : "border-gray-300"
                          } bg-gray-200 rounded-lg focus:ring focus:ring-indigo-300`}
                          type="email"
                          name="email"
                          value={form.email}
                          onChange={handleInputChange}
                          placeholder="E-mail"
                        />
                        {errors.email && (
                          <span className="text-red-500 text-sm">
                            E-mail inválido
                          </span>
                        )}
                        <input
                          className="px-4 py-3 w-full text-gray-700 placeholder-gray-500 outline-none border bg-gray-200 border-gray-300 rounded-lg focus:ring focus:ring-indigo-300"
                          type="password"
                          name="password"
                          value={form.password || ""}
                          onChange={(e) =>
                            setForm({ ...form, password: e.target.value })
                          }
                          placeholder="Senha"
                        />
                      </>
                    )}
                    {step === 2 && (
                      <>
                        <p className="text-secondaryText mt-2">
                          Teste gratuitamente por 7 dias, cancele quando quiser.
                        </p>
                        <input
                          className="px-4 py-3 w-full text-gray-700 placeholder-gray-500 outline-none border bg-gray-200 border-gray-300 rounded-lg focus:ring focus:ring-indigo-300"
                          type="text"
                          name="credit_card.name"
                          value={form.credit_card.name}
                          onChange={handleInputChange}
                          placeholder="Nome do titular do cartão"
                        />
                        <input
                          className="px-4 py-3 w-full text-gray-700 placeholder-gray-500 outline-none border bg-gray-200 border-gray-300 rounded-lg focus:ring focus:ring-indigo-300"
                          type="text"
                          name="credit_card.number"
                          value={form.credit_card.number}
                          onChange={handleInputChange}
                          placeholder="Número do cartão"
                        />
                        <div className="flex space-x-4">
                          <input
                            className="px-4 py-3 w-1/2 text-gray-700 placeholder-gray-500 outline-none border bg-gray-200 border-gray-300 rounded-lg focus:ring focus:ring-indigo-300"
                            type="text"
                            name="credit_card.expiration"
                            value={form.credit_card.expiration}
                            onChange={handleInputChange}
                            placeholder="Validade (MM/YY)"
                          />
                          <input
                            className="px-4 py-3 w-1/2 text-gray-700 placeholder-gray-500 outline-none border bg-gray-200 border-gray-300 rounded-lg focus:ring focus:ring-indigo-300"
                            type="text"
                            name="credit_card.cvv"
                            value={form.credit_card.cvv}
                            onChange={handleInputChange}
                            placeholder="CVV"
                          />
                        </div>
                      </>
                    )}
                  </div>

                  {/* Botões de navegação */}
                  <div
                    className={`flex mt-8 ${
                      step === 2 ? "justify-between" : "justify-end"
                    }`}
                  >
                    {step > 1 && (
                      <button
                        className="py-2 px-6 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400"
                        onClick={prevStep}
                      >
                        Voltar
                      </button>
                    )}
                    {step < 2 ? (
                      <button
                        className={`py-2 px-6 rounded-lg text-white ${
                          isStep1Complete
                            ? "bg-indigo-500 hover:bg-indigo-600"
                            : "bg-gray-300 cursor-not-allowed"
                        }`}
                        onClick={nextStep}
                        disabled={!isStep1Complete}
                      >
                        Próximo
                      </button>
                    ) : (
                      <button
                        className={`py-2 px-6 rounded-lg text-white ${
                          isStep2Complete
                            ? "bg-green-500 hover:bg-green-600"
                            : "bg-gray-300 cursor-not-allowed"
                        }`}
                        onClick={subscribe}
                        disabled={!isStep2Complete || isLoading}
                      >
                        {isLoading ? <LoadingIcon /> : "Finalizar"}
                      </button>
                    )}
                  </div>
                </div>

                {/* Botão de fechar */}
                <div
                  className="fixed top-6 right-6 z-50 w-5 h-5 cursor-pointer text-[rgb(255,255,255,0.7)] hover:text-white transition"
                  onClick={() => setIsOpen(false)}
                >
                  <CloseIcon />
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
      {isSuccessModalOpen && (
        <Modal isOpen={isSuccessModalOpen} setIsOpen={finish} />
      )}
    </div>
  );
};
