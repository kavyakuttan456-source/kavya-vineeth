import { useState } from 'react';
import { motion } from 'framer-motion';

interface SplashProps {
  guestName: string | null;
  onEnter: (name: string | null) => void;
}

export function Splash({ guestName, onEnter }: SplashProps) {
  const [typedName, setTypedName] = useState('');
  const [step, setStep] = useState<'name' | 'ready'>(guestName ? 'ready' : 'name');

  const displayName = guestName ?? (typedName.trim() || null);

  function handleNameSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (typedName.trim()) {
      // update URL param so it persists
      const url = new URL(window.location.href);
      url.searchParams.set('to', typedName.trim());
      window.history.replaceState({}, '', url.toString());
    }
    setStep('ready');
  }

  return (
    <motion.div
      exit={{ opacity: 0, filter: 'blur(10px)' }}
      transition={{ duration: 1.2, ease: 'easeInOut' }}
      className="min-h-[100dvh] flex flex-col items-center justify-center relative z-10 px-6 text-center"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 2, ease: 'easeOut' }}
        className="flex flex-col items-center max-w-2xl w-full"
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
          Kavya <br />
          <span className="text-4xl md:text-6xl text-primary/60 italic font-light">&amp;</span>{' '}
          <br />
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

        {/* Name entry step (when no ?to= param) */}
        {step === 'name' ? (
          <motion.form
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 1 }}
            onSubmit={handleNameSubmit}
            className="mt-8 mb-8 flex flex-col items-center gap-4 w-full max-w-xs"
          >
            <p className="text-foreground/50 font-sans tracking-[0.1em] text-xs uppercase">
              Enter your name to personalise your invitation
            </p>
            <input
              value={typedName}
              onChange={(e) => setTypedName(e.target.value)}
              placeholder="Your name…"
              className="w-full bg-transparent border border-primary/30 rounded-full px-5 py-3 text-center font-serif italic text-foreground/80 placeholder:text-foreground/25 focus:outline-none focus:border-primary/70 transition-colors text-base"
              autoFocus
            />
            <button
              type="submit"
              className="group relative px-8 py-3 overflow-hidden rounded-full border border-primary/30 hover:border-primary/80 transition-all duration-700 bg-background/50 backdrop-blur-sm"
            >
              <div className="absolute inset-0 bg-primary/10 translate-y-[100%] group-hover:translate-y-0 transition-transform duration-500 ease-out" />
              <span className="relative text-primary font-sans tracking-[0.15em] text-xs uppercase">
                Continue
              </span>
            </button>
            <button
              type="button"
              onClick={() => setStep('ready')}
              className="text-foreground/30 font-sans text-[10px] tracking-widest uppercase hover:text-foreground/50 transition-colors"
            >
              Skip
            </button>
          </motion.form>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: guestName ? 1.2 : 0.3, duration: 1.5 }}
            className="mt-8 mb-16 flex flex-col items-center"
          >
            <p className="text-foreground/60 font-sans tracking-[0.1em] text-xs uppercase mb-3">
              We cordially invite
            </p>
            <p className="font-serif text-3xl md:text-4xl text-primary/90 italic">
              {displayName ?? 'You'}
            </p>
          </motion.div>
        )}

        {step === 'ready' && (
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: guestName ? 1.8 : 0.4, duration: 1 }}
            onClick={() => onEnter(displayName)}
            className="group relative px-8 py-4 overflow-hidden rounded-full border border-primary/30 hover:border-primary/80 transition-all duration-700 bg-background/50 backdrop-blur-sm"
          >
            <div className="absolute inset-0 bg-primary/10 translate-y-[100%] group-hover:translate-y-0 transition-transform duration-500 ease-out" />
            <span className="relative text-primary font-sans tracking-[0.15em] text-xs uppercase">
              Enter the Invitation
            </span>
          </motion.button>
        )}
      </motion.div>
    </motion.div>
  );
}
