import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { FloatingPetals } from '@/components/FloatingPetals';
import { Splash } from '@/components/Splash';
import { CoupleSection } from '@/components/CoupleSection';
import { Invitation } from '@/components/Invitation';
import { EventDetails } from '@/components/EventDetails';
import { Countdown } from '@/components/Countdown';
import { Story } from '@/components/Story';
import { Footer } from '@/components/Footer';

export default function Home() {
  const [guestName, setGuestName] = useState<string | null>(null);
  const [entered, setEntered] = useState(false);

  useEffect(() => {
    const searchString = window.location.search;
    const searchParams = new URLSearchParams(searchString);
    setGuestName(searchParams.get('to'));
  }, []);

  useEffect(() => {
    if (entered) {
      window.scrollTo(0, 0);
    }
  }, [entered]);

  return (
    <div className="min-h-[100dvh] bg-background text-foreground font-sans overflow-x-hidden relative selection:bg-primary/30">
      <FloatingPetals />
      
      <AnimatePresence mode="wait">
        {!entered ? (
          <Splash key="splash" guestName={guestName} onEnter={() => setEntered(true)} />
        ) : (
          <motion.div 
            key="main"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
            className="relative z-10 flex flex-col items-center"
          >
            <CoupleSection />
            <Invitation guestName={guestName} />
            <EventDetails />
            <Countdown />
            <Story />
            <Footer />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
