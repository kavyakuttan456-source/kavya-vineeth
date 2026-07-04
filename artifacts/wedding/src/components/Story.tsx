import { motion } from 'framer-motion';

export function Story() {
  return (
    <section className="w-full flex flex-col items-center justify-center px-6 py-24 md:py-32 text-center relative">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 1.4, ease: 'easeOut' }}
        className="max-w-2xl relative flex flex-col items-center gap-6"
      >
        <div className="flex items-center gap-4">
          <div className="h-px w-14 bg-primary/30" />
          <div className="w-1.5 h-1.5 rotate-45 bg-primary/50" />
          <div className="h-px w-14 bg-primary/30" />
        </div>

        <p className="font-serif text-xl md:text-2xl lg:text-3xl text-foreground/70 italic leading-relaxed tracking-wide">
          Together with our families, we joyfully welcome you
          <br className="hidden md:block" /> to share in the beginning of our forever.
        </p>

        <div className="flex items-center gap-4">
          <div className="h-px w-14 bg-primary/30" />
          <div className="w-1.5 h-1.5 rotate-45 bg-primary/50" />
          <div className="h-px w-14 bg-primary/30" />
        </div>
      </motion.div>
    </section>
  );
}
