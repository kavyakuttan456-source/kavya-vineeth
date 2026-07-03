import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

// Use a fixed timestamp so it doesn't shift based on the user's timezone implicitly
// August 31, 2026 11:00 AM IST is 2026-08-31T05:30:00.000Z
const WEDDING_DATE = new Date('2026-08-31T11:00:00+05:30').getTime();

export function Countdown() {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const updateCountdown = () => {
      const now = new Date().getTime();
      const distance = WEDDING_DATE - now;

      if (distance < 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000),
      });
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);

    return () => clearInterval(interval);
  }, []);

  const timeBlocks = [
    { label: 'Days', value: timeLeft.days },
    { label: 'Hours', value: timeLeft.hours },
    { label: 'Minutes', value: timeLeft.minutes },
    { label: 'Seconds', value: timeLeft.seconds },
  ];

  return (
    <section className="w-full flex justify-center py-24 md:py-32 px-6 relative">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 1.2 }}
        className="flex gap-6 md:gap-16"
      >
        {timeBlocks.map((block) => (
          <div key={block.label} className="flex flex-col items-center w-16 md:w-24">
            <span className="font-serif text-4xl md:text-6xl text-primary font-light tracking-wider text-center drop-shadow-sm">
              {String(block.value).padStart(2, '0')}
            </span>
            <span className="font-sans text-[9px] md:text-xs text-foreground/50 uppercase tracking-[0.2em] mt-4 md:mt-6">
              {block.label}
            </span>
          </div>
        ))}
      </motion.div>
    </section>
  );
}
