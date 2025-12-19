import { useState } from "react";
import { LoadingIcon } from "../assets/icons/LoadingIcon";

export const Eleicoes2026LeadForm = ({
  position = "hero",
  variant = "primary",
}) => {
  const [form, setForm] = useState({
    name: "",
    role: "",
    phone: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    if (name === "phone") {
      const formatted = value
        .replace(/\D/g, "")
        .substring(0, 11)
        .replace(/(\d{2})(\d)/, "($1) $2")
        .replace(/(\d{5})(\d)/, "$1-$2");
      setForm({ ...form, phone: formatted });
    } else {
      setForm({ ...form, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    // Simular envio - integrar com sua API
    setTimeout(() => {
      setIsLoading(false);
      setIsSuccess(true);

      // Redirecionar para WhatsApp
      const message = encodeURIComponent(
        `Olá! Meu nome é ${form.name}, sou ${form.role} e gostaria de saber mais sobre as soluções da Velox Tech para as Eleições 2026.`
      );
      window.open(`https://wa.me/5511999999999?text=${message}`, "_blank");
    }, 1500);
  };

  const isFormComplete =
    form.name.trim() && form.role.trim() && form.phone.trim().length >= 14;

  if (isSuccess) {
    return (
      <div className="bg-white border-2 border-gray-200 p-8 rounded-2xl shadow-lg">
        <div className="text-center">
          <svg
            className="mx-auto h-16 w-16 text-[#168821]"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <h3 className="mt-4 text-2xl font-bold text-gray-900">
            Cadastro realizado!
          </h3>
          <p className="mt-2 text-lg text-gray-600">
            Em instantes você será redirecionado para o WhatsApp.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white border-2 border-gray-200 p-8 rounded-2xl shadow-lg">
      <h3 className="text-2xl font-bold mb-2 text-gray-900">
        {position === "hero"
          ? "Agende Sua Consultoria Estratégica Gratuita"
          : "Fale com um Especialista Agora"}
      </h3>
      <p className="mb-6 text-gray-600">
        {position === "hero"
          ? "Preencha e receba uma análise personalizada do seu cenário político em até 24h."
          : "Vagas limitadas. Preencha agora e garanta seu atendimento prioritário."}
      </p>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleInputChange}
            placeholder="Nome completo *"
            required
            className="w-full px-4 py-3 rounded-lg bg-gray-50 text-gray-900 placeholder-gray-500 border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#168821] focus:border-transparent transition"
          />
        </div>
        <div>
          <input
            type="text"
            name="role"
            value={form.role}
            onChange={handleInputChange}
            placeholder="Cargo pretendido (ex: Deputado, Senador, Governador) *"
            required
            className="w-full px-4 py-3 rounded-lg bg-gray-50 text-gray-900 placeholder-gray-500 border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#168821] focus:border-transparent transition"
          />
        </div>
        <div>
          <input
            type="tel"
            name="phone"
            value={form.phone}
            onChange={handleInputChange}
            placeholder="WhatsApp *"
            required
            className="w-full px-4 py-3 rounded-lg bg-gray-50 text-gray-900 placeholder-gray-500 border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#168821] focus:border-transparent transition"
          />
        </div>
        <button
          type="submit"
          disabled={!isFormComplete || isLoading}
          className={`w-full py-4 px-6 rounded-lg font-bold text-lg transition transform hover:scale-105 ${
            isFormComplete && !isLoading
              ? "bg-[#168821] text-white hover:bg-[#1a9e28] shadow-lg"
              : "bg-gray-300 text-gray-500 cursor-not-allowed"
          }`}
        >
          {isLoading ? (
            <span className="flex items-center justify-center">
              <LoadingIcon />
              <span className="ml-2">Enviando...</span>
            </span>
          ) : position === "hero" ? (
            "Agendar Consultoria Gratuita"
          ) : (
            "Quero Começar Agora"
          )}
        </button>
      </form>
      <p className="text-xs mt-4 text-gray-500 text-center">
        Seus dados estão protegidos conforme a LGPD • Atendimento prioritário em
        24h
      </p>
    </div>
  );
};
