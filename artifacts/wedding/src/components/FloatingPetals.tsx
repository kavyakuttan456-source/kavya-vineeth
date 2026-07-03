import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const generatePetals = (count: number) => {
  return Array.from({ length: count }).map((_, i) => ({
    id: i,
    x: Math.random() * 100,
    size: Math.random() * 10 + 8,
    duration: Math.random() * 20 + 15,
    delay: Math.random() * -20,
    rotation: Math.random() * 360,
  }));
};

export function FloatingPetals() {
  const [petals, setPetals] = useState<{id: number, x: number, size: number, duration: number, delay: number, rotation: number}[]>([]);

  useEffect(() => {
    // We wait until mount to generate random values to avoid hydration mismatch if this were SSR
    setPetals(generatePetals(25));
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {petals.map((petal) => (
        <motion.div
          key={petal.id}
          className="absolute opacity-40 mix-blend-screen"
          style={{
            left: `${petal.x}%`,
            top: `-10%`,
            width: petal.size,
            height: petal.size * 1.2,
            background: 'linear-gradient(135deg, rgba(201,168,76,0.6) 0%, rgba(92,26,6,0.3) 100%)',
            borderRadius: '50% 0 50% 0',
            boxShadow: '0 0 15px rgba(201,168,76,0.2)'
          }}
          animate={{
            y: ['0vh', '120vh'],
            x: [`${petal.x}%`, `${petal.x + (Math.random() * 30 - 15)}%`],
            rotate: [petal.rotation, petal.rotation + 360],
          }}
          transition={{
            duration: petal.duration,
            repeat: Infinity,
            ease: "linear",
            delay: petal.delay,
          }}
        />
      ))}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(201,168,76,0.03)_0%,rgba(0,0,0,0)_80%)]" />
    </div>
  );
}
