import { motion } from 'framer-motion';
import brideImg from '../assets/kavya.jpg';
import groomImg from '../assets/vineeth.jpg';

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.25 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 48 },
  visible: { opacity: 1, y: 0, transition: { duration: 1.1, ease: [0.22, 1, 0.36, 1] } },
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 1.4, ease: 'easeOut' } },
};

function OrnamentLine() {
  return (
    <div className="flex items-center gap-3 my-2">
      <div className="h-px flex-1 bg-gradient-to-r from-transparent to-primary/40" />
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="shrink-0">
        <path d="M8 1 L9.5 6.5 L15 8 L9.5 9.5 L8 15 L6.5 9.5 L1 8 L6.5 6.5 Z" fill="currentColor" className="text-primary/60" />
      </svg>
      <div className="h-px flex-1 bg-gradient-to-l from-transparent to-primary/40" />
    </div>
  );
}

function Portrait({
  src,
  name,
  role,
  objectPosition,
  delay,
}: {
  src: string;
  name: string;
  role: string;
  objectPosition: string;
  delay: number;
}) {
  return (
    <motion.div
      variants={fadeUp}
      className="flex flex-col items-center"
    >
      {/* Decorative corner frame */}
      <div className="relative group">
        {/* Offset shadow frame */}
        <div
          className="absolute inset-0 border border-primary/25 rounded-sm"
          style={{ transform: 'translate(8px, 8px)' }}
        />
        {/* Outer gold glow ring */}
        <div className="absolute -inset-[3px] rounded-sm bg-gradient-to-br from-primary/30 via-transparent to-primary/20 opacity-60" />

        {/* Photo */}
        <div className="relative w-60 h-80 md:w-72 md:h-96 overflow-hidden rounded-sm shadow-2xl">
          <img
            src={src}
            alt={name}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            style={{ objectPosition }}
          />
          {/* Bottom gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-background/10" />
        </div>

        {/* Corner ornaments */}
        {[
          'top-0 left-0 border-t-2 border-l-2 rounded-tl-sm',
          'top-0 right-0 border-t-2 border-r-2 rounded-tr-sm',
          'bottom-0 left-0 border-b-2 border-l-2 rounded-bl-sm',
          'bottom-0 right-0 border-b-2 border-r-2 rounded-br-sm',
        ].map((cls, i) => (
          <div key={i} className={`absolute w-5 h-5 border-primary/70 ${cls}`} />
        ))}
      </div>

      {/* Name & role */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: delay + 0.3, duration: 0.9, ease: 'easeOut' }}
        className="mt-6 text-center"
      >
        <p className="font-serif text-3xl md:text-4xl text-primary italic drop-shadow-md">{name}</p>
        <OrnamentLine />
        <p className="text-foreground/50 font-sans text-xs tracking-[0.25em] uppercase mt-1">{role}</p>
      </motion.div>
    </motion.div>
  );
}

export function CoupleSection() {
  return (
    <section className="w-full min-h-screen flex flex-col items-center justify-center px-6 py-24 relative overflow-hidden">
      {/* Radial glow in the background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 70% 50% at 50% 50%, hsl(44 56% 20% / 0.18) 0%, transparent 70%)',
        }}
      />

      {/* Portraits */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-80px' }}
        variants={containerVariants}
        className="flex flex-col md:flex-row items-center justify-center gap-12 md:gap-20 lg:gap-28"
      >
        <Portrait
          src={brideImg}
          name="Kavya"
          role="The Bride"
          objectPosition="50% 15%"
          delay={0}
        />

        {/* Ampersand separator */}
        <motion.div
          variants={fadeIn}
          className="flex flex-col items-center gap-3 py-4"
        >
          <div className="w-px h-12 bg-gradient-to-b from-transparent to-primary/40 hidden md:block" />
          <span className="font-serif text-5xl md:text-6xl text-primary/40 italic select-none">
            &amp;
          </span>
          <div className="w-px h-12 bg-gradient-to-t from-transparent to-primary/40 hidden md:block" />
        </motion.div>

        <Portrait
          src={groomImg}
          name="Vineeth"
          role="The Groom"
          objectPosition="50% 20%"
          delay={0.2}
        />
      </motion.div>

      {/* "Two Souls, One Journey" tagline */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5, duration: 1.2, ease: 'easeOut' }}
        className="mt-14 text-center flex flex-col items-center gap-4"
      >
        <div className="flex items-center gap-4">
          <div className="h-px w-12 bg-primary/30" />
          <svg width="14" height="14" viewBox="0 0 16 16" fill="none" className="shrink-0">
            <path d="M8 1 L9.5 6.5 L15 8 L9.5 9.5 L8 15 L6.5 9.5 L1 8 L6.5 6.5 Z" fill="currentColor" className="text-primary/50" />
          </svg>
          <div className="h-px w-12 bg-primary/30" />
        </div>
        <p className="font-serif text-2xl md:text-3xl text-foreground/70 italic tracking-wide">
          Two Souls, One Journey
        </p>
        <div className="flex items-center gap-4">
          <div className="h-px w-12 bg-primary/30" />
          <svg width="14" height="14" viewBox="0 0 16 16" fill="none" className="shrink-0">
            <path d="M8 1 L9.5 6.5 L15 8 L9.5 9.5 L8 15 L6.5 9.5 L1 8 L6.5 6.5 Z" fill="currentColor" className="text-primary/50" />
          </svg>
          <div className="h-px w-12 bg-primary/30" />
        </div>
      </motion.div>
    </section>
  );
}
