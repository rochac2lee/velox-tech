import { motion, AnimatePresence } from "framer-motion";
import { CloseIcon } from "../assets/icons/CloseIcon";
import { useState } from "react";
import { LoadingIcon } from "../assets/icons/LoadingIcon";
import { SendIcon } from "../assets/icons/SendIcon";
import { GlobeIcon } from "../assets/icons/GlobeIcon";
import { WebSystemIcon } from "../assets/icons/WebSystemIcon";
import { MobileAppIcon } from "../assets/icons/MobileAppIcon";
import { FileIcon } from "../assets/icons/FileIcon";
import { ImageIcon } from "../assets/icons/ImageIcon";
import { PdfIcon } from "../assets/icons/PdfIcon";
import { VideoIcon } from "../assets/icons/VideoIcon";
import { ZipIcon } from "../assets/icons/ZipIcon";
import { CodeFileIcon } from "../assets/icons/CodeFileIcon";

const appTypes = [
  { id: "landing", label: "Landing Page", icon: GlobeIcon },
  { id: "web", label: "Sistema web", icon: WebSystemIcon },
  { id: "app", label: "Aplicativo", icon: MobileAppIcon },
];

const formatFileSize = (bytes) => {
  if (bytes === 0) return "0 Bytes";
  const k = 1024;
  const sizes = ["Bytes", "KB", "MB", "GB"];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return Math.round((bytes / Math.pow(k, i)) * 100) / 100 + " " + sizes[i];
};

const getFileExtension = (filename) => {
  const parts = filename.split(".");
  return parts.length > 1 ? parts[parts.length - 1].toLowerCase() : "";
};

const getFileIcon = (filename, mimeType) => {
  const extension = getFileExtension(filename);

  const imageExtensions = [
    "jpg",
    "jpeg",
    "png",
    "gif",
    "webp",
    "svg",
    "bmp",
    "ico",
  ];
  const videoExtensions = [
    "mp4",
    "avi",
    "mov",
    "wmv",
    "flv",
    "webm",
    "mkv",
    "m4v",
  ];
  const pdfExtensions = ["pdf"];
  const zipExtensions = ["zip", "rar", "7z", "tar", "gz", "bz2"];
  const codeExtensions = [
    "js",
    "jsx",
    "ts",
    "tsx",
    "html",
    "css",
    "json",
    "xml",
    "py",
    "java",
    "cpp",
    "c",
    "php",
    "rb",
    "go",
    "rs",
    "swift",
    "kt",
  ];

  if (imageExtensions.includes(extension)) return ImageIcon;
  if (videoExtensions.includes(extension)) return VideoIcon;
  if (pdfExtensions.includes(extension)) return PdfIcon;
  if (zipExtensions.includes(extension)) return ZipIcon;
  if (codeExtensions.includes(extension)) return CodeFileIcon;

  if (mimeType) {
    if (mimeType.startsWith("image/")) return ImageIcon;
    if (mimeType.startsWith("video/")) return VideoIcon;
    if (mimeType === "application/pdf") return PdfIcon;
    if (mimeType.includes("zip") || mimeType.includes("compress"))
      return ZipIcon;
  }

  return FileIcon;
};

export const ProjectModal = ({ setIsOpen, projectData, isOpen, onSuccess }) => {
  const { selectedAppType, projectDescription, attachedFiles } = projectData;
  const [contactForm, setContactForm] = useState({
    name: "",
    email: "",
    phone: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState({ email: false });
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);

  const appType = appTypes.find((type) => type.id === selectedAppType);
  const Icon = appType?.icon || GlobeIcon;

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    if (name === "phone") {
      const formatted = value
        .replace(/\D/g, "")
        .substring(0, 11)
        .replace(/(\d{2})(\d)/, "($1) $2")
        .replace(/(\d{5})(\d)/, "$1-$2");
      setContactForm({ ...contactForm, phone: formatted });
    } else {
      setContactForm({ ...contactForm, [name]: value });
    }

    if (name === "email") {
      const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
      setErrors({ ...errors, email: !isValid });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Criar FormData para envio multipart/form-data
      const formData = new FormData();

      // Mapear o tipo de aplicação para o label correto
      const appTypeLabel = appType?.label || "Landing Page";

      // Adicionar campos do formulário
      formData.append("appType", appTypeLabel);
      formData.append("message", projectDescription || "");
      formData.append("name", contactForm.name);
      formData.append("email", contactForm.email);
      formData.append("phone", contactForm.phone);

      // Adicionar arquivos anexados
      if (attachedFiles && attachedFiles.length > 0) {
        attachedFiles.forEach((fileItem) => {
          if (fileItem.file) {
            formData.append("files", fileItem.file);
          }
        });
      }

      // Enviar para o webhook
      const response = await fetch(
        "https://n8n.veloxtech.com.br/webhook/new-mvp",
        {
          method: "POST",
          body: formData,
        }
      );

      if (!response.ok) {
        throw new Error(`Erro ao enviar: ${response.status}`);
      }

      const result = await response.json();
      console.log("Resposta do webhook:", result);

      // Limpar campos do formulário
      setContactForm({
        name: "",
        email: "",
        phone: "",
      });
      setErrors({ email: false });

      // Fechar modal e mostrar modal de sucesso
      setIsOpen(false);
      setIsSuccessModalOpen(true);

      // Chamar callback para limpar campos do NewAppHero
      if (onSuccess) {
        onSuccess();
      }
    } catch (error) {
      console.error("Erro ao enviar:", error);
      alert("Erro ao enviar o formulário. Por favor, tente novamente.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleSuccessModalClose = () => {
    setIsSuccessModalOpen(false);
  };

  const isFormComplete =
    contactForm.name.trim() &&
    contactForm.email.trim() &&
    contactForm.phone.trim() &&
    !errors.email;

  return (
    <>
      <AnimatePresence>
        {isOpen && (
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
                  {/* Informações do projeto à esquerda */}
                  <div className="w-1/2 hidden lg:inline">
                    <h2 className="mt-6 mb-2 text-4xl text-primaryText">
                      Resumo
                    </h2>
                    <p className="text-2xl text-secondaryColor mr-8 mb-8">
                      Revise as informações antes de enviar
                    </p>

                    {/* Tipo de aplicação - Botão estilizado */}
                    <div className="mb-6">
                      <h3 className="text-secondaryText text-sm font-medium mb-3">
                        Tipo de Aplicação
                      </h3>
                      <div className="flex items-center gap-2 px-4 py-2.5 rounded-lg bg-bgDark1 text-primaryText border border-primaryColor inline-flex">
                        <Icon />
                        <span className="font-medium">
                          {appType?.label || "Não selecionado"}
                        </span>
                      </div>
                    </div>

                    {/* Descrição do projeto - Card moderno */}
                    <div className="mb-6">
                      <h3 className="text-secondaryText text-sm font-medium mb-3">
                        Descrição do Projeto
                      </h3>
                      <div className="bg-bgDark1 rounded-xl border border-gray-700 p-4 mr-8">
                        <p className="text-primaryText text-base leading-relaxed whitespace-pre-wrap">
                          {projectDescription || "Sem descrição"}
                        </p>
                      </div>
                    </div>
                    {/* Arquivos anexados */}
                    {attachedFiles && attachedFiles.length > 0 && (
                      <div className="mb-6">
                        <h3 className="text-secondaryText text-sm font-medium mb-3">
                          Arquivos Anexados ({attachedFiles.length})
                        </h3>
                        <div className="space-y-2 mr-8">
                          {attachedFiles.map((fileItem) => {
                            const FileTypeIcon = getFileIcon(
                              fileItem.name,
                              fileItem.type
                            );
                            return (
                              <div
                                key={fileItem.id}
                                className="flex items-center gap-2 bg-bgDark1 rounded-lg px-3 py-2 border border-gray-700 hover:border-gray-600 transition"
                              >
                                <div className="flex-shrink-0 text-secondaryText">
                                  <FileTypeIcon />
                                </div>
                                <div className="flex flex-col min-w-0 flex-1">
                                  <p className="text-primaryText text-sm font-medium truncate">
                                    {fileItem.name}
                                  </p>
                                  <p className="text-secondaryText text-xs">
                                    {formatFileSize(fileItem.size)}
                                  </p>
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Formulário à direita */}
                  <div className="w-full lg:w-1/2 flex flex-col justify-center sm:pt-0">
                    <div className="flex flex-col space-y-4">
                      <p className="text-lg font-semibold text-primaryText">
                        Seus Dados
                      </p>
                      <input
                        className="px-4 py-3 w-full text-gray-700 placeholder-gray-500 outline-none border bg-gray-200 border-gray-300 rounded-lg focus:ring focus:ring-indigo-300"
                        type="text"
                        name="name"
                        value={contactForm.name}
                        onChange={handleInputChange}
                        placeholder="Nome completo"
                      />
                      <input
                        className={`px-4 py-3 w-full text-gray-700 placeholder-gray-500 outline-none border ${
                          errors.email ? "border-red-500" : "border-gray-300"
                        } bg-gray-200 rounded-lg focus:ring focus:ring-indigo-300`}
                        type="email"
                        name="email"
                        value={contactForm.email}
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
                        type="tel"
                        name="phone"
                        value={contactForm.phone}
                        onChange={handleInputChange}
                        placeholder="Telefone/WhatsApp"
                      />
                    </div>

                    {/* Botão enviar */}
                    <div className="flex mt-8 justify-end">
                      <button
                        className={`py-2 px-6 rounded-lg text-white ${
                          isFormComplete
                            ? "bg-green-500 hover:bg-green-600"
                            : "bg-gray-300 cursor-not-allowed"
                        }`}
                        onClick={handleSubmit}
                        disabled={!isFormComplete || isSubmitting}
                      >
                        {isSubmitting ? (
                          <div className="flex items-center gap-2">
                            <LoadingIcon />
                            <span>Enviando...</span>
                          </div>
                        ) : (
                          <div className="flex items-center gap-2">
                            <span>Enviar</span>
                            <SendIcon />
                          </div>
                        )}
                      </button>
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
        )}
      </AnimatePresence>

      {/* Modal de Sucesso */}
      <AnimatePresence>
        {isSuccessModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60]"
          >
            <div
              className="w-full h-full bg-bgDarkTransparentDarker fixed top-0 left-0 flex justify-center items-center"
              onClick={handleSuccessModalClose}
            >
              <div
                className="w-full sm:w-3/4 md:w-2/5 lg:w-1/3 bg-bgDarkTransparentLighter main-border-gray-darker rounded-2xl shadow-lg py-8 px-6 backdrop-blur-xl mx-auto text-center"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 flex items-center justify-center rounded-full bg-green-500/20">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                      width="48px"
                      height="48px"
                      className="fill-green-500"
                    >
                      <path d="M470.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L192 338.7 425.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
                    </svg>
                  </div>
                </div>
                <h2 className="text-2xl font-semibold text-primaryText mb-2">
                  Projeto Enviado com Sucesso!
                </h2>
                <p className="text-secondaryText mb-6">
                  Recebemos suas informações. Nossa equipe entrará em contato em
                  breve.
                </p>
                <button
                  className="bg-green-500 hover:bg-green-600 text-white py-2 px-6 rounded-lg transition"
                  onClick={handleSuccessModalClose}
                >
                  Ok
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
