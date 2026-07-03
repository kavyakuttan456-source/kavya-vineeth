import { motion } from 'framer-motion';

export function EventDetails() {
  return (
    <section className="w-full flex flex-col items-center justify-center px-6 py-20 relative">
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="max-w-4xl w-full border border-primary/20 bg-background/40 backdrop-blur-md p-10 md:p-16 relative overflow-hidden"
      >
        {/* Decorative Corners */}
        <div className="absolute top-0 left-0 w-12 h-12 border-t border-l border-primary/60" />
        <div className="absolute top-0 right-0 w-12 h-12 border-t border-r border-primary/60" />
        <div className="absolute bottom-0 left-0 w-12 h-12 border-b border-l border-primary/60" />
        <div className="absolute bottom-0 right-0 w-12 h-12 border-b border-r border-primary/60" />
        
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(201,168,76,0.05)_0%,rgba(0,0,0,0)_100%)] pointer-events-none" />
        
        <div className="text-center flex flex-col items-center relative z-10">
          <h3 className="font-serif text-4xl md:text-5xl text-primary mb-16 italic">The Details</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 w-full">
            <div className="flex flex-col items-center group">
              <span className="text-primary/60 font-sans text-xs tracking-[0.2em] uppercase mb-5">When</span>
              <span className="font-serif text-2xl md:text-3xl text-foreground group-hover:text-primary transition-colors duration-300">31 August 2026</span>
              <span className="font-sans text-xs tracking-widest text-foreground/50 mt-3 uppercase">Monday</span>
            </div>
            
            <div className="flex flex-col items-center md:border-l md:border-r border-primary/10 px-4 group">
              <span className="text-primary/60 font-sans text-xs tracking-[0.2em] uppercase mb-5">Time</span>
              <span className="font-serif text-2xl md:text-3xl text-foreground group-hover:text-primary transition-colors duration-300">11:00 AM</span>
              <span className="font-sans text-xs tracking-widest text-foreground/50 mt-3 uppercase">Muhurtham</span>
            </div>
            
            <div className="flex flex-col items-center group">
              <span className="text-primary/60 font-sans text-xs tracking-[0.2em] uppercase mb-5">Where</span>
              <span className="font-serif text-2xl md:text-3xl text-foreground group-hover:text-primary transition-colors duration-300">Green Park</span>
              <span className="font-sans text-xs tracking-widest text-foreground/50 mt-3 uppercase text-center leading-relaxed">Convention Centre<br/>Aluva</span>
            </div>
          </div>
          
          <motion.a 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="https://maps.google.com/?q=Green+Park+Convention+Centre,+Aluva" 
            target="_blank" 
            rel="noopener noreferrer"
            className="mt-20 inline-flex items-center gap-3 text-primary border-b border-primary/30 pb-1 hover:border-primary transition-colors font-sans text-xs tracking-[0.2em] uppercase"
          >
            View on Map
          </motion.a>
        </div>
      </motion.div>
    </section>
  );
}
