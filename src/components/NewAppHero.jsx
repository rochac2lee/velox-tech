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

  return (
    <section
      className="w-screen flex justify-center items-center bg-bgDark1 hero-bg-gradient min-h-screen"
      id="home"
    >
      <div className="w-full md:w-[800px] xl:w-[1200px] flex flex-col justify-center items-center pt-16 md:pt-20 lg:pt-24 px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-secondaryColor text-sm sm:text-base mb-6 font-bold">
            Seu Projeto + Nossa Expertise = 🚀
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full bg-bgDark2 rounded-xl border border-gray-700 p-4 sm:p-6"
        >
          {/* Header com saudação */}
          <div className="mb-4">
            <h2 className="text-primaryText text-xl sm:text-2xl font-medium">
              O que vamos construir hoje?
            </h2>
          </div>

          {/* Campo de textarea principal */}
          <div className="mb-4">
            <textarea
              ref={textareaRef}
              placeholder={placeholderText || " "}
              rows={4}
              className="w-full bg-bgDark1 rounded-xl px-4 py-3 text-primaryText text-base sm:text-lg placeholder-secondaryText focus:outline-none focus:ring-2 focus:ring-primaryColor border border-gray-600 hover:border-gray-500 transition resize-none"
              value={projectDescription}
              onChange={(e) => setProjectDescription(e.target.value)}
            />
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
                className="mb-4 flex flex-wrap gap-2"
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
                      className="flex items-center gap-2 bg-bgDark1 rounded-lg px-3 py-2 border border-gray-600 hover:border-gray-500 transition"
                    >
                      <div className="flex-shrink-0 text-secondaryText">
                        <FileTypeIcon />
                      </div>
                      <div className="flex flex-col min-w-0 max-w-[200px]">
                        <p className="text-primaryText text-sm font-medium truncate">
                          {fileItem.name}
                        </p>
                        <p className="text-secondaryText text-xs">
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

          {/* Controles abaixo do textarea */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-4">
            {/* Lado esquerdo - Paperclip */}
            <div className="flex items-center gap-4">
              <button
                onClick={handleAttachClick}
                className="flex items-center justify-center text-secondaryText hover:text-primaryText transition cursor-pointer gap-2"
                aria-label="Anexar arquivo"
              >
                <PaperclipIcon />
                <span className="text-sm font-medium">
                  Anexar arquivos (logotipo, criativos, etc.)
                </span>
              </button>
            </div>

            {/* Lado direito - Link e Start chat */}
            <div className="flex items-center gap-4">
              <button
                className={`px-6 h-10 sm:h-12 flex items-center gap-2 font-semibold rounded-lg transition ${
                  !selectedAppType || projectDescription === ""
                    ? "bg-gray-600 text-gray-400 cursor-not-allowed opacity-50"
                    : "contained-button"
                }`}
                aria-label="Start chat"
                disabled={!selectedAppType || projectDescription === ""}
              >
                Iniciar projeto
                <SendIcon />
              </button>
            </div>
          </div>

          {/* Botões de seleção de tipo de app */}
          <div className="flex flex-wrap gap-2 sm:gap-3 pt-4 border-t border-gray-700">
            {appTypes.map((appType) => {
              const Icon = appType.icon;
              const isSelected = selectedAppType === appType.id;
              return (
                <button
                  key={appType.id}
                  onClick={() => setSelectedAppType(appType.id)}
                  className={`flex items-center gap-2 px-4 py-2 sm:px-5 sm:py-2.5 rounded-lg font-medium text-sm sm:text-base transition ${
                    isSelected
                      ? "bg-bgDark1 text-primaryText border border-primaryColor"
                      : "bg-bgDark1 text-secondaryText hover:text-primaryText hover:bg-bgDark3 border border-transparent"
                  }`}
                  aria-label={appType.label}
                >
                  <Icon />
                  <span>{appType.label}</span>
                  {appType.beta && (
                    <span className="bg-primaryColor text-primaryText text-xs px-2 py-0.5 rounded font-semibold">
                      Beta
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
