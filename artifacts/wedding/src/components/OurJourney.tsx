import { motion } from 'framer-motion';

const milestones = [
  {
    label: 'Where It Began',
    title: 'From Strangers to Smiles',
    description:
      'In the quiet corridors of college, a senior and a junior crossed paths — two strangers unaware that fate had already begun its gentle work.',
    side: 'left',
  },
  {
    label: 'Growing Closer',
    title: 'Friendship Found Its Way',
    description:
      'Conversations turned comfortable, laughter came easily — and friendship quietly bloomed between a girl with dreams and a boy with purpose.',
    side: 'right',
  },
  {
    label: 'When Hearts Spoke',
    title: 'Love Took Root',
    description:
      'Somewhere between shared dreams and unspoken promises, friendship transformed into love — steady, certain, and deeply true.',
    side: 'left',
  },
  {
    label: 'A New Chapter',
    title: 'Forever Begins',
    description:
      'With families united and hearts full of joy, Kavya and Vineeth step into forever — hand in hand, ready for every sunrise together.',
    side: 'right',
  },
];

function TimelineDot({ index }: { index: number }) {
  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 0.3 + index * 0.3, duration: 0.5, ease: 'easeOut' }}
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
    <div className="relative grid grid-cols-[1fr_auto_1fr] gap-0 min-h-[180px] mb-2">
      {/* Left content */}
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2 + index * 0.3, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        className={`pr-10 py-6 flex flex-col justify-center ${isLeft ? 'text-right' : ''}`}
      >
        {isLeft && (
          <>
            <p className="font-sans text-[10px] tracking-[0.22em] uppercase text-primary/60 mb-2">
              {milestone.label}
            </p>
            <h3 className="font-serif text-xl md:text-2xl text-foreground/90 italic mb-3">
              {milestone.title}
            </h3>
            <p className="font-serif text-sm md:text-base text-foreground/50 leading-relaxed italic">
              {milestone.description}
            </p>
          </>
        )}
      </motion.div>

      {/* Center timeline */}
      <div className="relative flex items-center justify-center w-4">
        <TimelineDot index={index} />
      </div>

      {/* Right content */}
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2 + index * 0.3, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        className="pl-10 py-6 flex flex-col justify-center"
      >
        {!isLeft && (
          <>
            <p className="font-sans text-[10px] tracking-[0.22em] uppercase text-primary/60 mb-2">
              {milestone.label}
            </p>
            <h3 className="font-serif text-xl md:text-2xl text-foreground/90 italic mb-3">
              {milestone.title}
            </h3>
            <p className="font-serif text-sm md:text-base text-foreground/50 leading-relaxed italic">
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

      {/* Section heading */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.1, ease: 'easeOut' }}
        className="text-center mb-16 md:mb-20 max-w-2xl mx-auto"
      >
        <p className="text-primary/60 font-sans tracking-[0.3em] text-xs uppercase mb-6">
          Our Journey
        </p>
        <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground/85 italic leading-snug">
          Two hearts. One destiny.
          <br />
          <span className="text-foreground/60">
            A journey of love, laughter, and forever.
          </span>
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
          initial={{ scaleY: 0, originY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ duration: 1.4, delay: 0.1, ease: 'easeInOut' }}
          className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-primary/40 to-transparent"
        />

        {milestones.map((milestone, index) => (
          <MilestoneEntry key={index} milestone={milestone} index={index} />
        ))}
      </div>
    </section>
  );
}
