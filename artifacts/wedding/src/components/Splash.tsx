import { motion } from 'framer-motion';

export function Splash({ guestName, onEnter }: { guestName: string | null; onEnter: () => void }) {
  const name = guestName ? guestName : "You";
  
  return (
    <motion.div 
      exit={{ opacity: 0, filter: "blur(10px)" }}
      transition={{ duration: 1.2, ease: "easeInOut" }}
      className="min-h-[100dvh] flex flex-col items-center justify-center relative z-10 px-6 text-center"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 2, ease: "easeOut" }}
        className="flex flex-col items-center max-w-2xl"
      >
        <motion.span 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="text-primary/70 tracking-[0.2em] text-xs md:text-sm uppercase mb-10 font-sans"
        >
          The Wedding Celebration
        </motion.span>
        
        <h1 className="font-serif text-6xl md:text-8xl lg:text-9xl text-primary leading-[0.9] mb-8 drop-shadow-lg tracking-tight">
          Kavya <br/>
          <span className="text-4xl md:text-6xl text-primary/60 italic font-light">&amp;</span> <br/>
          Vineeth
        </h1>
        
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 1 }}
          className="flex items-center gap-3 md:gap-4 text-foreground/80 font-serif text-base md:text-lg tracking-widest my-8"
        >
          <span>31</span>
          <span className="w-1.5 h-1.5 bg-primary/50 rounded-full rotate-45" />
          <span>AUGUST</span>
          <span className="w-1.5 h-1.5 bg-primary/50 rounded-full rotate-45" />
          <span>2026</span>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1.5 }}
          className="mt-8 mb-16 flex flex-col items-center"
        >
          <p className="text-foreground/60 font-sans tracking-[0.1em] text-xs uppercase mb-3">We cordially invite</p>
          <p className="font-serif text-3xl md:text-4xl text-primary/90 italic">{name}</p>
        </motion.div>

        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.8, duration: 1 }}
          onClick={onEnter}
          className="group relative px-8 py-4 overflow-hidden rounded-full border border-primary/30 hover:border-primary/80 transition-all duration-700 bg-background/50 backdrop-blur-sm"
        >
          <div className="absolute inset-0 bg-primary/10 translate-y-[100%] group-hover:translate-y-0 transition-transform duration-500 ease-out" />
          <span className="relative text-primary font-sans tracking-[0.15em] text-xs uppercase">
            Enter the Invitation
          </span>
        </motion.button>
      </motion.div>
    </motion.div>
  );
}
