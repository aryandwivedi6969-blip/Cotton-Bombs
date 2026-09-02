import { useRef, useCallback } from "react";

const COLORS = ["#a900a9", "#00e0ff", "#c168ff", "#ffffff"];

export default function ConfettiEffect() {
  const containerRef = useRef(null);

  const burst = useCallback((x, y) => {
    const container = containerRef.current;
    if (!container) return;

    for (let i = 0; i < 30; i++) {
      const confetti = document.createElement("div");
      confetti.className = "confetti";
      confetti.style.left = `${x}px`;
      confetti.style.top = `${y}px`;
      confetti.style.backgroundColor =
        COLORS[Math.floor(Math.random() * COLORS.length)];

      const angle = Math.random() * Math.PI * 2;
      const velocity = 50 + Math.random() * 100;
      const tx = Math.cos(angle) * velocity;
      const ty = Math.sin(angle) * velocity - 50;

      confetti.animate(
        [
          { transform: "translate(0, 0) scale(1)", opacity: 1 },
          { transform: `translate(${tx}px, ${ty}px) scale(0)`, opacity: 0 },
        ],
        {
          duration: 600 + Math.random() * 400,
          easing: "cubic-bezier(0.25, 0.46, 0.45, 0.94)",
          fill: "forwards",
        }
      );

      container.appendChild(confetti);
      setTimeout(() => confetti.remove(), 1000);
    }
  }, []);

  return { containerRef, burst };
}

export function ConfettiContainer({ containerRef }) {
  return <div ref={containerRef} className="confetti-container" />;
}
