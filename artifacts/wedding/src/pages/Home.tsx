import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { FloatingPetals } from '@/components/FloatingPetals';
import { Splash } from '@/components/Splash';
import { CoupleSection } from '@/components/CoupleSection';
import { OurJourney } from '@/components/OurJourney';
import { EventCards } from '@/components/EventCards';
import { Invitation } from '@/components/Invitation';
import { Countdown } from '@/components/Countdown';
import { RSVP } from '@/components/RSVP';
import { Story } from '@/components/Story';
import { Footer } from '@/components/Footer';
import { MusicPlayer } from '@/components/MusicPlayer';

export default function Home() {
  const [guestName, setGuestName] = useState<string | null>(null);
  const [entered, setEntered] = useState(false);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    setGuestName(params.get('to'));
  }, []);

  useEffect(() => {
    if (entered) window.scrollTo(0, 0);
  }, [entered]);

  function handleEnter(name: string | null) {
    setGuestName(name);
    setEntered(true);
  }

  return (
    <div className="min-h-[100dvh] bg-background text-foreground font-sans overflow-x-hidden relative selection:bg-primary/30">
      <FloatingPetals />
      <MusicPlayer />

      <AnimatePresence mode="wait">
        {!entered ? (
          <Splash key="splash" guestName={guestName} onEnter={handleEnter} />
        ) : (
          <motion.div
            key="main"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
            className="relative z-10 flex flex-col items-center"
          >
            <Invitation guestName={guestName} />
            <CoupleSection />
            <OurJourney />
            <EventCards />
            <Countdown />
            <RSVP />
            <Story />
            <Footer />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
