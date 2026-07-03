import { motion } from 'framer-motion';

const milestones = [
  {
    label: 'Where It Began',
    title: 'Destiny Had Other Plans',
    description:
      'Among countless profiles and possibilities, our paths crossed through matrimony. What seemed like a simple introduction soon unfolded into the beginning of our forever.',
    side: 'left',
  },
  {
    label: '29 · September · 2025',
    title: 'Our First Hello',
    description:
      'At Qatar Airport, we met for the very first time. A moment that seemed ordinary became unforgettable — the day two strangers looked into each other\'s eyes and wondered what the future might hold.',
    side: 'right',
  },
  {
    label: '03 · October · 2025',
    title: 'Families Became One',
    description:
      'Our Pennukanal brought our families together. With warm smiles, heartfelt conversations, and blessings all around, what started as a meeting began to feel like destiny unfolding.',
    side: 'left',
  },
  {
    label: '30 · January · 2026',
    title: 'Miles Couldn\'t Keep Us Apart',
    description:
      'We met again in Dubai, and this time everything felt more familiar. Every conversation, every laugh, and every shared moment made us realize that home wasn\'t a place — it was finding each other.',
    side: 'right',
  },
  {
    label: 'Growing Together',
    title: 'Love Found Its Place',
    description:
      'Between distance and togetherness, conversations and quiet moments, trust blossomed into love. What began as a matrimonial match became a bond built on understanding, respect, and unwavering companionship.',
    side: 'left',
  },
  {
    label: '31 · August · 2026',
    title: 'Forever Begins',
    description:
      'With the blessings of our families and the love we\'ve nurtured together, we begin our greatest adventure — not as two individuals, but as one heart, one home, and one beautiful forever.',
    side: 'right',
  },
];

function TimelineDot({ index }: { index: number }) {
  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 0.4 + index * 0.2, duration: 0.5, ease: 'easeOut' }}
      className="absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full border-2 border-primary bg-background z-10 shadow-[0_0_12px_2px_hsl(44_56%_54%/0.4)]"
    />
  );
}

function MilestoneEntry({
  milestone,
  index,
}: {
  milestone: (typeof milestones)[0];
  index: number;
}) {
  const isLeft = milestone.side === 'left';

  return (
    <div className="relative grid grid-cols-[1fr_16px_1fr] items-center min-h-[160px] mb-4">
      {/* Left column */}
      <motion.div
        initial={{ opacity: 0, x: -36 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.3 + index * 0.2, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        className="pr-10 py-6 flex flex-col justify-center text-right"
      >
        {isLeft && (
          <>
            <p className="font-sans text-[10px] tracking-[0.22em] uppercase text-primary/60 mb-2">
              {milestone.label}
            </p>
            <h3 className="font-serif text-xl md:text-2xl text-foreground/90 italic mb-3 leading-snug">
              {milestone.title}
            </h3>
            <p className="font-serif text-sm md:text-[15px] text-foreground/50 leading-relaxed italic">
              {milestone.description}
            </p>
          </>
        )}
      </motion.div>

      {/* Centre dot */}
      <div className="relative flex items-center justify-center h-full">
        <TimelineDot index={index} />
      </div>

      {/* Right column */}
      <motion.div
        initial={{ opacity: 0, x: 36 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.3 + index * 0.2, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        className="pl-10 py-6 flex flex-col justify-center"
      >
        {!isLeft && (
          <>
            <p className="font-sans text-[10px] tracking-[0.22em] uppercase text-primary/60 mb-2">
              {milestone.label}
            </p>
            <h3 className="font-serif text-xl md:text-2xl text-foreground/90 italic mb-3 leading-snug">
              {milestone.title}
            </h3>
            <p className="font-serif text-sm md:text-[15px] text-foreground/50 leading-relaxed italic">
              {milestone.description}
            </p>
          </>
        )}
      </motion.div>
    </div>
  );
}

export function OurJourney() {
  return (
    <section className="w-full py-24 px-6 relative overflow-hidden">
      {/* Subtle radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 60% 40% at 50% 30%, hsl(44 56% 20% / 0.12) 0%, transparent 70%)',
        }}
      />

      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.1, ease: 'easeOut' }}
        className="text-center mb-16 md:mb-20 max-w-2xl mx-auto"
      >
        <p className="text-primary/60 font-sans tracking-[0.3em] text-xs uppercase mb-6">
          Our Journey
        </p>
        <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground/90 italic leading-snug">
          A journey of love, laughter, and forever.
        </h2>
        <div className="flex items-center justify-center gap-4 mt-8">
          <div className="h-px w-16 bg-primary/30" />
          <div className="w-1.5 h-1.5 bg-primary/50 rotate-45" />
          <div className="h-px w-16 bg-primary/30" />
        </div>
      </motion.div>

      {/* Timeline */}
      <div className="relative max-w-3xl mx-auto">
        {/* Vertical line */}
        <motion.div
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ duration: 1.6, delay: 0.1, ease: 'easeInOut' }}
          style={{ transformOrigin: 'top' }}
          className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-primary/40 to-transparent"
        />

        {milestones.map((milestone, index) => (
          <MilestoneEntry key={index} milestone={milestone} index={index} />
        ))}
      </div>
    </section>
  );
}
