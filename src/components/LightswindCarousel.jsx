import { useEffect, useMemo, useRef, useState } from "react";

export const LightswindCarousel = ({
  items = [],
  autoRotate = true,
  rotateInterval = 5000,
  onItemClick,
  height = 520,
  maxWidth = 960,
}) => {
  const containerRef = useRef(null);
  const [active, setActive] = useState(() => Math.floor(items.length / 2) || 0);
  const [isHovering, setIsHovering] = useState(false);
  const [isInView, setIsInView] = useState(true);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  const totalItems = useMemo(() => items.length, [items.length]);
  const resolvedHeight =
    typeof height === "number" ? height : parseInt(height, 10) || 520;
  const resolvedMaxWidth =
    typeof maxWidth === "number" ? `${maxWidth}px` : maxWidth;
  const imageHeight = Math.max(
    240,
    Math.min(340, Math.round(resolvedHeight * 0.55))
  );

  useEffect(() => {
    setActive(Math.floor(totalItems / 2) || 0);
  }, [totalItems]);

  useEffect(() => {
    const node = containerRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => setIsInView(entry.isIntersecting),
      { threshold: 0.25 }
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!autoRotate || !isInView || isHovering || totalItems < 2) {
      return undefined;
    }

    const interval = window.setInterval(() => {
      setActive((prev) => (prev + 1) % totalItems);
    }, rotateInterval);

    return () => window.clearInterval(interval);
  }, [autoRotate, isHovering, isInView, rotateInterval, totalItems]);

  const minSwipeDistance = 50;

  const handleTouchStart = (event) => {
    setTouchStart(event.targetTouches[0].clientX);
    setTouchEnd(null);
  };

  const handleTouchMove = (event) => {
    setTouchEnd(event.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStart === null || touchEnd === null) return;

    const distance = touchStart - touchEnd;

    if (distance > minSwipeDistance) {
      setActive((prev) => (prev + 1) % totalItems);
    } else if (distance < -minSwipeDistance) {
      setActive((prev) => (prev - 1 + totalItems) % totalItems);
    }
  };

  const handlePrev = () => {
    setActive((prev) => (prev - 1 + totalItems) % totalItems);
  };

  const handleNext = () => {
    setActive((prev) => (prev + 1) % totalItems);
  };

  const handleCardClick = (item, index) => {
    if (index !== active) {
      setActive(index);
      return;
    }

    if (onItemClick) {
      onItemClick(item, index);
    }
  };

  const getCardStyle = (index) => {
    if (!totalItems) return {};

    const diff = (index - active + totalItems) % totalItems;
    const baseStyle = {
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%) scale(0.7)",
      opacity: 0,
      zIndex: 0,
      transition: "transform 450ms ease, opacity 450ms ease",
      pointerEvents: "none",
    };

    if (diff === 0) {
      return {
        ...baseStyle,
        transform: "translate(-50%, -50%) scale(1)",
        opacity: 1,
        zIndex: 40,
        pointerEvents: "auto",
      };
    }

    if (diff === 1) {
      return {
        ...baseStyle,
        transform: "translate(5%, -50%) scale(0.9)",
        opacity: 0.6,
        zIndex: 30,
      };
    }

    if (diff === totalItems - 1) {
      return {
        ...baseStyle,
        transform: "translate(-105%, -50%) scale(0.9)",
        opacity: 0.6,
        zIndex: 30,
      };
    }

    if (diff === 2) {
      return {
        ...baseStyle,
        transform: "translate(85%, -50%) scale(0.75)",
        opacity: 0.2,
        zIndex: 20,
      };
    }

    if (diff === totalItems - 2) {
      return {
        ...baseStyle,
        transform: "translate(-185%, -50%) scale(0.75)",
        opacity: 0.2,
        zIndex: 20,
      };
    }

    return baseStyle;
  };

  return (
    <div
      className="relative w-full flex justify-center"
      ref={containerRef}
      style={{ height: `${resolvedHeight}px` }}
    >
      <div
        className="relative w-full h-full"
        style={{ maxWidth: resolvedMaxWidth, height: `${resolvedHeight}px` }}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div className="absolute inset-0">
          {items.map((item, index) => (
            <div
              key={item.id ?? index}
              style={getCardStyle(index)}
              className="max-w-md w-full cursor-pointer"
              onClick={() => handleCardClick(item, index)}
            >
              <div className="rounded-3xl bg-bgDark3 border border-white/10 shadow-2xl shadow-black/25 overflow-hidden flex flex-col h-full">
                <div
                  className="relative bg-bgDark2 flex items-center justify-center"
                  style={{ height: `${imageHeight}px` }}
                >
                  <img
                    src={item.imageUrl}
                    className="absolute inset-0 w-full h-full object-contain"
                  />
                </div>

                <div className="flex flex-col flex-1 px-6 py-6 gap-4 text-left">
                  <div className="flex flex-col gap-1">
                    {item.title ? (
                      <h3 className="text-xl text-white leading-tight">
                        {item.title}
                      </h3>
                    ) : null}
                    {item.brand ? (
                      <span className="text-sm text-secondaryText/80">
                        {item.brand}
                      </span>
                    ) : null}
                  </div>

                  {item.description ? (
                    <p className="text-sm text-secondaryText leading-relaxed">
                      {item.description}
                    </p>
                  ) : null}

                  {item.tags && item.tags.length > 0 ? (
                    <div className="flex flex-wrap gap-2">
                      {item.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="px-3 py-1 rounded-full text-xs bg-white/5 text-secondaryText border border-white/10"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  ) : null}
                </div>
              </div>
            </div>
          ))}
        </div>

        {totalItems > 1 && (
          <>
            <button
              className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full border border-white/15 bg-black/40 text-white flex items-center justify-center text-xl transition hover:bg-primaryColor hover:text-bgDark1"
              onClick={handlePrev}
              aria-label="Anterior"
            >
              ‹
            </button>
            <button
              className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full border border-white/15 bg-black/40 text-white flex items-center justify-center text-xl transition hover:bg-primaryColor hover:text-bgDark1"
              onClick={handleNext}
              aria-label="Próximo"
            >
              ›
            </button>
          </>
        )}

        <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-2">
          {items.map((_, index) => (
            <button
              key={index}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === active ? "w-6 bg-primaryColor" : "w-2 bg-white/30"
              }`}
              onClick={() => setActive(index)}
              aria-label={`Ir para o slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default LightswindCarousel;
