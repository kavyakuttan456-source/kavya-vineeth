import { motion } from 'framer-motion';

export function Story() {
  return (
    <section className="w-full flex flex-col items-center justify-center px-6 py-24 md:py-40 text-center relative">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="max-w-2xl relative"
      >
        {/* Subtle decorative marks above and below */}
        <div className="text-primary/40 text-4xl font-serif mb-8 select-none">&ldquo;</div>
        
        <p className="font-serif text-2xl md:text-4xl lg:text-5xl text-primary/90 italic leading-[1.6] md:leading-[1.6] tracking-wide">
          Two hearts.<br/>
          <span className="inline-block my-2">One journey.</span><br/>
          Forever begins on August 31.
        </p>

        <div className="text-primary/40 text-4xl font-serif mt-8 select-none">&rdquo;</div>
      </motion.div>
    </section>
  );
}
