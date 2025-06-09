import React, { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";

const AnimatedCard = ({
  title,
  paragraphs,
  initialPosition = "bottom",
  backgroundColor = "bg-orange-50",
  textColor = "text-[#442420]",
  width = "w-11/12 md:w-[48%]",
  positionClasses = "absolute bottom-[-14rem] md:bottom-[-18rem]",
  blurEffect = "backdrop-blur-md",
  padding = "p-6 md:p-8",
  titleSize = "text-2xl md:text-3xl",
  textSize = "text-base md:text-lg",
  threshold = 0.1,
  animationDuration = "duration-1000",
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold }
    );

    if (cardRef.current) observer.observe(cardRef.current);

    return () => {
      if (cardRef.current) observer.unobserve(cardRef.current);
    };
  }, [threshold]);

  return (
    <div
      ref={cardRef}
      className={`${positionClasses} ${backgroundColor} ${blurEffect} ${textColor} ${padding} ${width} mx-auto
      transition-all ${animationDuration} ease-out
      ${
        isVisible
          ? "opacity-100 translate-y-0 scale-100"
          : "opacity-0 translate-y-8 scale-95"
      }`}
    >
      {title && (
        <h2 className={`${titleSize} font-bold mb-4 text-center`}>{title}</h2>
      )}
      <div className={`text-justify ${textSize} ${textColor} space-y-6`}>
        {paragraphs.map((paragraph, index) => (
          <p key={index} className={paragraph.isBold ? "font-bold" : ""}>
            {paragraph.text}
          </p>
        ))}
      </div>
    </div>
  );
};

AnimatedCard.propTypes = {
  title: PropTypes.string,
  paragraphs: PropTypes.arrayOf(PropTypes.string).isRequired,
  initialPosition: PropTypes.oneOf(["top", "bottom", "left", "right"]),
  backgroundColor: PropTypes.string,
  textColor: PropTypes.string,
  width: PropTypes.string,
  positionClasses: PropTypes.string,
  blurEffect: PropTypes.string,
  padding: PropTypes.string,
  titleSize: PropTypes.string,
  textSize: PropTypes.string,
  threshold: PropTypes.number,
  animationDuration: PropTypes.string,
};

export default AnimatedCard;
