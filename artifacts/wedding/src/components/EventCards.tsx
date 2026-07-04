import { motion } from 'framer-motion';

/* ─── Google Calendar URL builder ─── */
function gcalUrl({
  title,
  start,
  end,
  location,
  details,
}: {
  title: string;
  start: string; // YYYYMMDDTHHmmssZ
  end: string;
  location: string;
  details: string;
}) {
  const p = new URLSearchParams({
    action: 'TEMPLATE',
    text: title,
    dates: `${start}/${end}`,
    location,
    details,
  });
  return `https://calendar.google.com/calendar/render?${p.toString()}`;
}

const EVENTS = {
  sangeet: gcalUrl({
    title: '🎶 Sangeet Night — Kavya & Vineeth',
    start: '20260829T113000Z',
    end: '20260829T163000Z',
    location: 'Periyal Club, Swargam Road, Desom, Aluva, Kerala 683102',
    details: 'An Evening of Music & Memories. Dress Code: Shades of Blue 💙',
  }),
  haldi: gcalUrl({
    title: '🌼 Haldi Ceremony — Kavya & Vineeth',
    start: '20260830T083000Z',
    end: '20260830T113000Z',
    location: 'At Our Residence, Aluva',
    details: 'A Celebration in Sunshine. Dress Code: Shades of Yellow 💛',
  }),
  eve: gcalUrl({
    title: 'Wedding Eve — Kavya & Vineeth',
    start: '20260830T123000Z',
    end: '20260830T153000Z',
    location: 'At Our Residence, Aluva',
    details: 'An Evening Before Forever. Dress Code: Pastel Elegance 🌸',
  }),
  thalikettu: gcalUrl({
    title: '🪷 Thalikettu — Kavya & Vineeth',
    start: '20260831T013000Z',
    end: '20260831T015000Z',
    location: 'Sri Narasimha Swamy Temple, Kadungalloor Road, Aluva, Kerala 683102',
    details: 'Muhurtham: 7:00 AM – 7:20 AM. A sacred beginning.',
  }),
  wedding: gcalUrl({
    title: '💍 Wedding Ceremony — Kavya & Vineeth',
    start: '20260831T053000Z',
    end: '20260831T113000Z',
    location: 'Green Park Convention Centre, NH 544, Opp MGF Hyundai, Desom, Aluva, Kerala 683102',
    details: 'Join us for the wedding celebration from 11:00 AM onwards.',
  }),
};

const MAPS = {
  sangeet: 'https://maps.google.com/?q=Periyal+Club,+Swargam+Road,+Desom,+Aluva,+Kerala+683102,+India',
  thalikettu: 'https://maps.google.com/?q=5/282+Sree+Narasimha+Temple+Road,+Kadungalloor+Road,+near+Sree+Narasimha+Temple,+Aluva,+Kerala+683102,+India',
  wedding: 'https://maps.google.com/?q=Green+Park+Convention+Centre,+NH+544,+Opp+MGF+Hyundai,+Desom,+Aluva,+Kerala+683102,+India',
};

/* ─── shared fade-up ─── */
const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 32 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 1, delay, ease: [0.22, 1, 0.36, 1] as const },
});

/* ─── divider ─── */
function Divider() {
  return (
    <div className="flex items-center justify-center gap-3 my-6">
      <div className="h-px w-14 bg-primary/30" />
      <div className="w-1.5 h-1.5 rotate-45 bg-primary/50" />
      <div className="h-px w-14 bg-primary/30" />
    </div>
  );
}

/* ─── detail block ─── */
function Detail({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="flex flex-col items-center gap-1">
      <p className="font-sans text-[10px] tracking-[0.25em] uppercase text-foreground/40">{label}</p>
      <div className="font-serif italic text-foreground/75 text-base md:text-lg text-center leading-snug">
        {children}
      </div>
    </div>
  );
}

/* ─── maps link ─── */
function MapsLink({ href }: { href: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-1.5 text-primary/70 hover:text-primary font-sans text-[11px] tracking-[0.18em] uppercase border-b border-primary/30 hover:border-primary transition-colors duration-300 pb-px"
    >
      <svg className="w-3 h-3 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
      View on Maps
    </a>
  );
}

/* ─── calendar link ─── */
function CalendarLink({ href }: { href: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-1.5 text-foreground/45 hover:text-primary/80 font-sans text-[11px] tracking-[0.18em] uppercase border-b border-foreground/20 hover:border-primary/40 transition-colors duration-300 pb-px"
    >
      <svg className="w-3 h-3 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
          d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
      Add to Calendar
    </a>
  );
}

/* ══════════════════════════════════════════
   SANGEET NIGHT
══════════════════════════════════════════ */
function SangeetSection() {
  return (
    <section className="relative w-full min-h-screen flex flex-col items-center justify-center px-6 py-24 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 70% 55% at 50% 50%, hsl(220 60% 18% / 0.35) 0%, transparent 70%)' }} />

      <motion.div {...fadeUp(0)} className="relative z-10 text-center max-w-xl mx-auto">
        <p className="text-4xl mb-4">🎶</p>
        <p className="font-sans text-[11px] tracking-[0.3em] uppercase text-primary/60 mb-3">Sangeet Night</p>
        <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground/90 italic leading-tight mb-2">
          An Evening of Music &amp; Memories
        </h2>
        <p className="font-sans text-sm tracking-widest text-primary/50 mb-1">Saturday, 29th August 2026</p>

        <Divider />

        <div className="flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-14 mt-2">
          <Detail label="Time">From 5:00 PM</Detail>
          <Detail label="Venue">Periyal Club, Aluva</Detail>
        </div>

        <div className="flex items-center justify-center gap-6 mt-5">
          <MapsLink href={MAPS.sangeet} />
          <CalendarLink href={EVENTS.sangeet} />
        </div>

        <div className="mt-8 border border-primary/20 rounded-sm px-6 py-5 bg-primary/5 backdrop-blur-sm">
          <p className="font-sans text-[10px] tracking-[0.25em] uppercase text-blue-300/70 mb-3">
            Dress Code · Shades of Blue 💙
          </p>
          <p className="font-serif italic text-foreground/55 text-sm md:text-base leading-relaxed">
            Wear your favourite shade of blue and join us for an evening filled with music,
            laughter, dancing, and unforgettable memories.
          </p>
        </div>
      </motion.div>
    </section>
  );
}

/* ══════════════════════════════════════════
   HALDI CEREMONY
══════════════════════════════════════════ */
function HaldiSection() {
  return (
    <section className="relative w-full min-h-screen flex flex-col items-center justify-center px-6 py-24 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 70% 55% at 50% 50%, hsl(50 80% 18% / 0.40) 0%, transparent 70%)' }} />

      <motion.div {...fadeUp(0)} className="relative z-10 text-center max-w-xl mx-auto">
        <p className="text-4xl mb-4">🌼</p>
        <p className="font-sans text-[11px] tracking-[0.3em] uppercase text-primary/60 mb-3">Haldi Ceremony</p>
        <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground/90 italic leading-tight mb-2">
          A Celebration in Sunshine
        </h2>
        <p className="font-sans text-sm tracking-widest text-primary/50 mb-1">Sunday, 30th August 2026</p>

        <Divider />

        <div className="flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-14 mt-2">
          <Detail label="Time">From 2:00 PM</Detail>
          <Detail label="Venue">At Our Residence</Detail>
        </div>

        <div className="flex justify-center mt-5">
          <CalendarLink href={EVENTS.haldi} />
        </div>

        <div className="mt-8 border border-primary/20 rounded-sm px-6 py-5 bg-primary/5 backdrop-blur-sm">
          <p className="font-sans text-[10px] tracking-[0.25em] uppercase text-yellow-300/70 mb-3">
            Dress Code · Shades of Yellow 💛
          </p>
          <p className="font-serif italic text-foreground/55 text-sm md:text-base leading-relaxed">
            Come dressed in yellow, bring your brightest smiles, and join us as we celebrate
            with laughter, blessings, and a splash of haldi before our big day. 💛✨
          </p>
        </div>
      </motion.div>
    </section>
  );
}

/* ══════════════════════════════════════════
   WEDDING EVE
══════════════════════════════════════════ */
function WeddingEveSection() {
  return (
    <section className="relative w-full min-h-screen flex flex-col items-center justify-center px-6 py-24 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 70% 55% at 50% 50%, hsl(340 40% 18% / 0.35) 0%, transparent 70%)' }} />

      <motion.div {...fadeUp(0)} className="relative z-10 text-center max-w-xl mx-auto">
        <p className="font-sans text-[11px] tracking-[0.3em] uppercase text-primary/60 mb-3">Wedding Eve</p>
        <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground/90 italic leading-tight mb-2">
          An Evening Before Forever
        </h2>
        <p className="font-sans text-sm tracking-widest text-primary/50 mb-1">Sunday, 30th August 2026</p>

        <Divider />

        <div className="flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-14 mt-2">
          <Detail label="Time">From 6:00 PM</Detail>
          <Detail label="Venue">At Our Residence</Detail>
        </div>

        <div className="flex justify-center mt-5">
          <CalendarLink href={EVENTS.eve} />
        </div>

        <div className="mt-8 border border-primary/20 rounded-sm px-6 py-5 bg-primary/5 backdrop-blur-sm">
          <p className="font-sans text-[10px] tracking-[0.25em] uppercase text-rose-300/70 mb-3">
            Dress Code · Pastel Elegance
          </p>
          <p className="font-serif italic text-foreground/55 text-sm md:text-base leading-relaxed mb-4">
            Soft hues, graceful tones, and timeless charm. We invite you to dress in your
            favourite pastel shade as we gather for a warm evening of love, laughter, and
            cherished moments before our wedding day.
          </p>
          <p className="font-serif italic text-foreground/40 text-sm leading-relaxed border-t border-primary/10 pt-4">
            "As the sun sets on the eve of our wedding, join us for an intimate evening filled
            with conversations, laughter, and the joy of celebrating together before our
            forever begins." 🌸✨
          </p>
        </div>
      </motion.div>
    </section>
  );
}

/* ══════════════════════════════════════════
   THALIKETTU & WEDDING CEREMONY
══════════════════════════════════════════ */
function ThalikettuSection() {
  return (
    <section className="relative w-full min-h-screen flex flex-col items-center justify-center px-6 py-24 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 70% 55% at 50% 50%, hsl(44 56% 20% / 0.30) 0%, transparent 70%)' }} />

      <motion.div {...fadeUp(0)} className="relative z-10 text-center max-w-2xl mx-auto w-full">
        <p className="text-4xl mb-4">🪷</p>
        <p className="font-sans text-[11px] tracking-[0.3em] uppercase text-primary/60 mb-3">Thalikettu</p>
        <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground/90 italic leading-tight mb-2">
          A Sacred Beginning
        </h2>
        <p className="font-sans text-sm tracking-widest text-primary/50 mb-1">Monday, 31st August 2026</p>

        <Divider />

        <p className="font-serif italic text-foreground/55 text-sm md:text-base leading-relaxed max-w-lg mx-auto mb-10">
          The sacred tying of the Thali marks the beginning of our journey as husband and
          wife — a timeless tradition that binds two hearts in love, faith, and togetherness.
        </p>

        {/* Two venue cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
          {/* Temple */}
          <div className="border border-primary/20 rounded-sm px-6 py-6 bg-primary/5 backdrop-blur-sm text-center flex flex-col items-center gap-3">
            <p className="font-sans text-[10px] tracking-[0.25em] uppercase text-primary/50">Thalikettu Venue</p>
            <p className="font-serif italic text-foreground/80 text-base md:text-lg leading-snug">
              Sri Narasimha Swamy Temple,<br />Kadungalloor
            </p>
            <div className="h-px w-12 bg-primary/25" />
            <div>
              <p className="font-sans text-[10px] tracking-[0.22em] uppercase text-foreground/40 mb-1">Wedding Ceremony</p>
              <p className="font-serif italic text-foreground/70 text-sm">7:00 AM – 7:20 AM</p>
            </div>
            <div className="flex items-center gap-4">
              <MapsLink href={MAPS.thalikettu} />
              <CalendarLink href={EVENTS.thalikettu} />
            </div>
          </div>

          {/* Convention centre */}
          <div className="border border-primary/20 rounded-sm px-6 py-6 bg-primary/5 backdrop-blur-sm text-center flex flex-col items-center gap-3">
            <p className="font-sans text-[10px] tracking-[0.25em] uppercase text-primary/50">Wedding Ceremony</p>
            <p className="font-serif italic text-foreground/80 text-base md:text-lg leading-snug">
              Green Park Convention Centre,<br />Aluva
            </p>
            <div className="h-px w-12 bg-primary/25" />
            <div>
              <p className="font-sans text-[10px] tracking-[0.22em] uppercase text-foreground/40 mb-1">Time</p>
              <p className="font-serif italic text-foreground/70 text-sm">From 11:00 AM onwards</p>
            </div>
            <div className="flex items-center gap-4">
              <MapsLink href={MAPS.wedding} />
              <CalendarLink href={EVENTS.wedding} />
            </div>
          </div>
        </div>

        <p className="font-serif italic text-foreground/40 text-sm leading-relaxed mt-10 max-w-lg mx-auto">
          Following the ceremony, we warmly invite you to join us as we celebrate this
          joyous occasion with family and friends. Your presence and blessings will make
          our day truly unforgettable.
        </p>
      </motion.div>
    </section>
  );
}

export function EventCards() {
  return (
    <>
      <SangeetSection />
      <HaldiSection />
      <WeddingEveSection />
      <ThalikettuSection />
    </>
  );
}
