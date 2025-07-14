"use client";
import React, { useRef, useEffect } from "react";
import { useColorModeValue } from "@chakra-ui/react";

const STAR_COLOR = "#00fff7";
const COMET_COLOR = "#ffb300";
const STAR_COUNT = 120;
const COMET_COUNT = 2;

function random(min: number, max: number) {
  return Math.random() * (max - min) + min;
}

const PixelBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const bg = useColorModeValue("#eaf6ff", "#050c1a");

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = window.innerWidth;
    let height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;

    // Pixel stars
    const stars = Array.from({ length: STAR_COUNT }, () => ({
      x: random(0, width),
      y: random(0, height),
      size: Math.floor(random(1, 3)),
      speed: random(0.05, 0.25),
      twinkle: Math.random() > 0.5,
    }));

    // Pixel comets
    const comets = Array.from({ length: COMET_COUNT }, () => ({
      x: random(0, width),
      y: random(0, height / 2),
      size: Math.floor(random(2, 4)),
      speed: random(1, 2),
      tail: random(40, 80),
    }));

    let animationId: number;
    function animate() {
      if (!ctx) return;
      ctx.clearRect(0, 0, width, height);
      // Draw stars
      for (const star of stars) {
        ctx.fillStyle = STAR_COLOR;
        ctx.globalAlpha = star.twinkle ? Math.abs(Math.sin(Date.now() * 0.002 + star.x)) : 0.8;
        ctx.fillRect(Math.round(star.x), Math.round(star.y), star.size, star.size);
        star.y += star.speed;
        if (star.y > height) {
          star.x = random(0, width);
          star.y = 0;
        }
      }
      ctx.globalAlpha = 1;
      // Draw comets
      for (const comet of comets) {
        // Head
        ctx.fillStyle = COMET_COLOR;
        ctx.fillRect(Math.round(comet.x), Math.round(comet.y), comet.size, comet.size);
        // Tail
        for (let t = 1; t < comet.tail; t++) {
          ctx.globalAlpha = 1 - t / comet.tail;
          ctx.fillStyle = COMET_COLOR;
          ctx.fillRect(Math.round(comet.x - t), Math.round(comet.y + t * 0.5), comet.size, comet.size);
        }
        ctx.globalAlpha = 1;
        comet.x += comet.speed;
        comet.y += comet.speed * 0.5;
        if (comet.x > width || comet.y > height) {
          comet.x = random(-100, 0);
          comet.y = random(0, height / 2);
        }
      }
      ctx.globalAlpha = 1;
      animationId = requestAnimationFrame(animate);
    }
    animate();

    function handleResize() {
      const canvas = canvasRef.current;
      if (!canvas) return;
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    }
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        zIndex: 0,
        pointerEvents: "none",
        background: bg,
      }}
      aria-hidden="true"
    />
  );
};

export default PixelBackground; 