import { motion, AnimatePresence } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import { PaperclipIcon } from "../assets/icons/PaperclipIcon";
import { LinkIcon } from "../assets/icons/LinkIcon";
import { SendIcon } from "../assets/icons/SendIcon";
import { XIcon } from "../assets/icons/XIcon";
import { WebSystemIcon } from "../assets/icons/WebSystemIcon";
import { MobileAppIcon } from "../assets/icons/MobileAppIcon";
import { GlobeIcon } from "../assets/icons/GlobeIcon";
import { FileIcon } from "../assets/icons/FileIcon";
import { ImageIcon } from "../assets/icons/ImageIcon";
import { PdfIcon } from "../assets/icons/PdfIcon";
import { VideoIcon } from "../assets/icons/VideoIcon";
import { ZipIcon } from "../assets/icons/ZipIcon";
import { CodeFileIcon } from "../assets/icons/CodeFileIcon";

export const NewAppHero = () => {
  const [selectedAppType, setSelectedAppType] = useState("landing");
  const [attachedFiles, setAttachedFiles] = useState([]);
  const fileInputRef = useRef(null);
  const [projectDescription, setProjectDescription] = useState("");
  const [placeholderText, setPlaceholderText] = useState("");
  const textareaRef = useRef(null);

  const fullPlaceholder = "Descreva a ideia do seu MVP...";
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

    // Por extensão
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

    if (imageExtensions.includes(extension)) {
      return ImageIcon;
    }
    if (videoExtensions.includes(extension)) {
      return VideoIcon;
    }
    if (pdfExtensions.includes(extension)) {
      return PdfIcon;
    }
    if (zipExtensions.includes(extension)) {
      return ZipIcon;
    }
    if (codeExtensions.includes(extension)) {
      return CodeFileIcon;
    }

    // Por MIME type
    if (mimeType) {
      if (mimeType.startsWith("image/")) {
        return ImageIcon;
      }
      if (mimeType.startsWith("video/")) {
        return VideoIcon;
      }
      if (mimeType === "application/pdf") {
        return PdfIcon;
      }
      if (mimeType.includes("zip") || mimeType.includes("compress")) {
        return ZipIcon;
      }
    }

    // Padrão
    return FileIcon;
  };

  const handleFileSelect = (e) => {
    const files = Array.from(e.target.files);
    const newFiles = files.map((file) => ({
      id: Date.now() + Math.random(),
      file,
      name: file.name,
      size: file.size,
      type: file.type,
    }));
    setAttachedFiles((prev) => [...prev, ...newFiles]);
    // Reset input para permitir selecionar o mesmo arquivo novamente
    e.target.value = "";
  };

  const handleRemoveFile = (id) => {
    setAttachedFiles((prev) => prev.filter((file) => file.id !== id));
  };

  const handleAttachClick = () => {
    fileInputRef.current?.click();
  };

  // Efeito de digitação no placeholder ao carregar
  useEffect(() => {
    setPlaceholderText("");
    let currentIndex = 0;

    const typingInterval = setInterval(() => {
      if (currentIndex < fullPlaceholder.length) {
        setPlaceholderText(fullPlaceholder.slice(0, currentIndex + 1));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
        // Depois de terminar de escrever, foca no textarea
        setTimeout(() => {
          if (textareaRef.current) {
            textareaRef.current.focus();
          }
        }, 300);
      }
    }, 50); // Velocidade de digitação (50ms por letra)

    return () => clearInterval(typingInterval);
  }, [fullPlaceholder]);

  // Efeito para focar no textarea quando o hash for #new-mvp
  useEffect(() => {
    const focusTextarea = () => {
      if (window.location.hash === "#new-mvp") {
        setTimeout(() => {
          if (textareaRef.current) {
            textareaRef.current.focus();
          }
        }, 300);
      }
    };

    const handleHashChange = () => {
      focusTextarea();
    };

    // Verifica o hash inicial ao carregar a página
    if (window.location.hash === "#new-mvp") {
      focusTextarea();
    }

    // Escuta mudanças no hash
    window.addEventListener("hashchange", handleHashChange);

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  return (
    <section
      className="w-full max-w-screen overflow-x-hidden flex justify-center items-center bg-bgDark1 hero-bg-gradient min-h-screen"
      id="new-mvp"
    >
      <div className="w-full max-w-[1200px] flex flex-col justify-center items-center pt-12 sm:pt-16 md:pt-20 lg:pt-24 px-3 sm:px-4 md:px-6 lg:px-8 pb-8 sm:pb-12">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full text-center"
        >
          <p className="text-secondaryColor text-xs sm:text-sm md:text-base mb-4 sm:mb-6 font-bold">
            Seu Projeto + Nossa Expertise = 🚀
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full bg-bgDark2 rounded-lg sm:rounded-xl border border-gray-700 p-3 sm:p-4 md:p-6"
        >
          {/* Header com saudação */}
          <div className="mb-3 sm:mb-4">
            <h2 className="text-primaryText text-lg sm:text-xl md:text-2xl font-medium">
              O que vamos construir hoje?
            </h2>
          </div>

          {/* Campo de textarea principal */}
          <div className="mb-3 sm:mb-4 relative">
            <div className="relative bg-bgDark1 rounded-lg sm:rounded-xl border border-gray-600 hover:border-gray-500 transition focus-within:border-primaryColor focus-within:ring-2 focus-within:ring-primaryColor">
              <textarea
                ref={textareaRef}
                placeholder={placeholderText || " "}
                rows={5}
                className="w-full bg-transparent rounded-lg sm:rounded-xl px-3 sm:px-4 pt-2.5 sm:pt-3 pb-12 sm:pb-14 text-primaryText text-sm sm:text-base md:text-lg placeholder-secondaryText focus:outline-none resize-none"
                value={projectDescription}
                onChange={(e) => setProjectDescription(e.target.value)}
              />
              {/* Controles dentro do textarea */}
              <div className="absolute bottom-0 left-0 right-0 flex items-center justify-between px-3 sm:px-4 py-2 border-t border-gray-700">
                {/* Lado esquerdo - Paperclip */}
                <button
                  onClick={handleAttachClick}
                  className="flex items-center justify-center text-secondaryText hover:text-primaryText transition cursor-pointer gap-1.5 sm:gap-2"
                  aria-label="Anexar arquivo"
                >
                  <PaperclipIcon />
                  <span className="text-xs sm:text-sm font-medium hidden sm:inline">
                    Anexar arquivos (logotipo, criativos, etc.)
                  </span>
                </button>

                {/* Lado direito - Botão iniciar projeto */}
                <button
                  className={`px-3 sm:px-4 md:px-6 h-8 sm:h-9 md:h-10 flex items-center justify-center gap-1.5 sm:gap-2 font-semibold text-xs sm:text-sm md:text-base rounded-md sm:rounded-lg transition ${
                    !selectedAppType || projectDescription === ""
                      ? "bg-gray-600 text-gray-400 cursor-not-allowed opacity-50"
                      : "contained-button"
                  }`}
                  aria-label="Iniciar projeto"
                  disabled={!selectedAppType || projectDescription === ""}
                >
                  <span className="hidden sm:inline">Iniciar projeto</span>
                  <span className="sm:hidden">Iniciar Projeto</span>
                  <SendIcon />
                </button>
              </div>
            </div>
          </div>

          {/* Input file oculto */}
          <input
            type="file"
            ref={fileInputRef}
            onChange={handleFileSelect}
            multiple
            className="hidden"
            accept="*/*"
          />

          {/* Lista de arquivos anexados */}
          <AnimatePresence>
            {attachedFiles.length > 0 && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="mb-3 sm:mb-4 flex flex-wrap gap-2"
              >
                {attachedFiles.map((fileItem) => {
                  const FileTypeIcon = getFileIcon(
                    fileItem.name,
                    fileItem.type
                  );
                  return (
                    <motion.div
                      key={fileItem.id}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.8 }}
                      className="flex items-center gap-1.5 sm:gap-2 bg-bgDark1 rounded-md sm:rounded-lg px-2 sm:px-3 py-1.5 sm:py-2 border border-gray-600 hover:border-gray-500 transition w-full sm:w-auto"
                    >
                      <div className="flex-shrink-0 text-secondaryText">
                        <FileTypeIcon />
                      </div>
                      <div className="flex flex-col min-w-0 flex-1 sm:flex-initial sm:max-w-[150px] md:max-w-[200px]">
                        <p className="text-primaryText text-xs sm:text-sm font-medium truncate">
                          {fileItem.name}
                        </p>
                        <p className="text-secondaryText text-[10px] sm:text-xs">
                          {formatFileSize(fileItem.size)}
                        </p>
                      </div>
                      <button
                        onClick={() => handleRemoveFile(fileItem.id)}
                        className="flex-shrink-0 p-1 text-secondaryText hover:text-primaryText hover:bg-bgDark3 rounded transition"
                        aria-label="Remover arquivo"
                      >
                        <XIcon />
                      </button>
                    </motion.div>
                  );
                })}
              </motion.div>
            )}
          </AnimatePresence>

          {/* Botões de seleção de tipo de app */}
          <div className="pt-3 sm:pt-4 border-t border-gray-700 overflow-hidden">
            <div
              className="flex gap-2 sm:gap-3 overflow-x-auto sm:overflow-x-visible sm:flex-wrap pb-1"
              style={{
                scrollbarWidth: "thin",
                scrollbarColor: "rgb(75, 85, 99) transparent",
                WebkitOverflowScrolling: "touch",
              }}
            >
              {appTypes.map((appType) => {
                const Icon = appType.icon;
                const isSelected = selectedAppType === appType.id;
                return (
                  <motion.button
                    key={appType.id}
                    onClick={() => setSelectedAppType(appType.id)}
                    className={`flex items-center gap-1.5 sm:gap-2 rounded-md sm:rounded-lg font-medium text-xs sm:text-sm md:text-base transition flex-shrink-0 ${
                      isSelected
                        ? "bg-bgDark1 text-primaryText border border-primaryColor px-3 sm:px-4 md:px-5 py-2 sm:py-2.5"
                        : "bg-bgDark1 text-secondaryText hover:text-primaryText hover:bg-bgDark3 border border-transparent p-2 sm:p-2.5 sm:px-4 md:px-5 sm:py-2.5"
                    }`}
                    aria-label={appType.label}
                    title={!isSelected ? appType.label : undefined}
                    layout={false}
                  >
                    <Icon />
                    {/* Mobile: mostrar texto apenas quando selecionado (com animação) */}
                    <AnimatePresence mode="wait">
                      {isSelected && (
                        <motion.div
                          key={`text-mobile-${appType.id}`}
                          initial={{ maxWidth: 0, opacity: 0 }}
                          animate={{ maxWidth: 300, opacity: 1 }}
                          exit={{ maxWidth: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: "easeInOut" }}
                          className="overflow-hidden sm:hidden"
                        >
                          <span className="whitespace-nowrap inline-block">
                            {appType.label}
                          </span>
                        </motion.div>
                      )}
                    </AnimatePresence>
                    {/* Desktop: sempre mostrar texto */}
                    <span className="hidden sm:inline whitespace-nowrap">
                      {appType.label}
                    </span>
                    {/* Mobile: badge beta apenas quando selecionado (com animação) */}
                    <AnimatePresence mode="wait">
                      {isSelected && appType.beta && (
                        <motion.div
                          key={`beta-mobile-${appType.id}`}
                          initial={{ maxWidth: 0, opacity: 0 }}
                          animate={{ maxWidth: 50, opacity: 1 }}
                          exit={{ maxWidth: 0, opacity: 0 }}
                          transition={{
                            duration: 0.3,
                            ease: "easeInOut",
                            delay: 0.1,
                          }}
                          className="overflow-hidden sm:hidden"
                        >
                          <span className="bg-primaryColor text-primaryText text-[10px] sm:text-xs px-1.5 sm:px-2 py-0.5 rounded font-semibold whitespace-nowrap inline-block">
                            Beta
                          </span>
                        </motion.div>
                      )}
                    </AnimatePresence>
                    {/* Desktop: badge beta sempre visível quando existe */}
                    {appType.beta && (
                      <span className="hidden sm:inline bg-primaryColor text-primaryText text-[10px] sm:text-xs px-1.5 sm:px-2 py-0.5 rounded font-semibold whitespace-nowrap">
                        Beta
                      </span>
                    )}
                  </motion.button>
                );
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
