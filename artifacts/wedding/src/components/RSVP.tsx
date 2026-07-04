import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const API_BASE = '/api-server/api';

export function RSVP() {
  const [name, setName] = useState('');
  const [guests, setGuests] = useState(1);
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus('loading');
    try {
      const res = await fetch(`${API_BASE}/rsvp`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, guests, message }),
      });
      if (!res.ok) throw new Error('Failed');
      setStatus('success');
    } catch {
      setStatus('error');
    }
  }

  return (
    <section className="relative w-full min-h-screen flex flex-col items-center justify-center px-6 py-24 overflow-hidden">
      {/* Glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 60% 40% at 50% 50%, hsl(44 56% 20% / 0.14) 0%, transparent 70%)',
        }}
      />

      <motion.div
        initial={{ opacity: 0, y: 32 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10 w-full max-w-lg mx-auto text-center"
      >
        {/* Heading */}
        <p className="font-sans text-[11px] tracking-[0.3em] uppercase text-primary/60 mb-4">
          RSVP
        </p>
        <h2 className="font-serif text-3xl md:text-4xl text-foreground/90 italic leading-tight mb-2">
          Will you join us?
        </h2>
        <p className="font-serif italic text-foreground/45 text-sm mb-8">
          Your presence is the greatest gift. Let us know you're coming.
        </p>

        <div className="flex items-center justify-center gap-4 mb-10">
          <div className="h-px w-14 bg-primary/30" />
          <div className="w-1.5 h-1.5 rotate-45 bg-primary/50" />
          <div className="h-px w-14 bg-primary/30" />
        </div>

        <AnimatePresence mode="wait">
          {status === 'success' ? (
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="border border-primary/25 rounded-sm px-8 py-10 bg-primary/5 backdrop-blur-sm"
            >
              <p className="text-4xl mb-4">🌸</p>
              <p className="font-serif text-2xl italic text-foreground/85 mb-3">
                We can't wait to see you!
              </p>
              <p className="font-serif italic text-foreground/50 text-sm leading-relaxed">
                Thank you for your RSVP, <span className="text-primary/70">{name}</span>. Your
                presence will make our day complete. ✨
              </p>
            </motion.div>
          ) : (
            <motion.form
              key="form"
              onSubmit={handleSubmit}
              className="flex flex-col gap-5 text-left"
            >
              {/* Name */}
              <div>
                <label className="block font-sans text-[10px] tracking-[0.22em] uppercase text-foreground/40 mb-2">
                  Your Name
                </label>
                <input
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Enter your name"
                  className="w-full bg-transparent border border-primary/20 rounded-sm px-4 py-3 font-serif italic text-foreground/80 placeholder:text-foreground/25 focus:outline-none focus:border-primary/60 transition-colors text-sm"
                />
              </div>

              {/* Number of guests */}
              <div>
                <label className="block font-sans text-[10px] tracking-[0.22em] uppercase text-foreground/40 mb-2">
                  Number of Guests (including yourself)
                </label>
                <div className="flex items-center gap-4 border border-primary/20 rounded-sm px-4 py-3">
                  <button
                    type="button"
                    onClick={() => setGuests((g) => Math.max(1, g - 1))}
                    className="w-7 h-7 rounded-full border border-primary/30 text-primary/70 hover:border-primary/70 transition-colors text-lg leading-none flex items-center justify-center"
                  >
                    −
                  </button>
                  <span className="font-serif text-2xl text-foreground/80 flex-1 text-center">
                    {guests}
                  </span>
                  <button
                    type="button"
                    onClick={() => setGuests((g) => Math.min(20, g + 1))}
                    className="w-7 h-7 rounded-full border border-primary/30 text-primary/70 hover:border-primary/70 transition-colors text-lg leading-none flex items-center justify-center"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="block font-sans text-[10px] tracking-[0.22em] uppercase text-foreground/40 mb-2">
                  A Message for the Bride &amp; Groom <span className="text-foreground/25 normal-case">(optional)</span>
                </label>
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Write your wishes here..."
                  rows={4}
                  className="w-full bg-transparent border border-primary/20 rounded-sm px-4 py-3 font-serif italic text-foreground/80 placeholder:text-foreground/25 focus:outline-none focus:border-primary/60 transition-colors resize-none text-sm"
                />
              </div>

              {status === 'error' && (
                <p className="text-red-400/70 text-xs text-center font-sans">
                  Something went wrong. Please try again.
                </p>
              )}

              <button
                type="submit"
                disabled={status === 'loading'}
                className="group relative mt-2 px-8 py-4 overflow-hidden rounded-full border border-primary/30 hover:border-primary/80 transition-all duration-700 bg-background/50 backdrop-blur-sm disabled:opacity-50"
              >
                <div className="absolute inset-0 bg-primary/10 translate-y-[100%] group-hover:translate-y-0 transition-transform duration-500 ease-out" />
                <span className="relative text-primary font-sans tracking-[0.15em] text-xs uppercase">
                  {status === 'loading' ? 'Sending…' : 'Confirm Attendance'}
                </span>
              </button>
            </motion.form>
          )}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}
