import { motion } from 'framer-motion';
import { Divider } from '@/components/Divider';

export function Invitation({ guestName }: { guestName: string | null }) {
  const name = guestName ? guestName : "Dear Guest";
  
  return (
    <section className="min-h-[80vh] w-full flex flex-col items-center justify-center px-6 py-24 md:py-32 text-center relative">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="max-w-3xl mx-auto"
      >
        <h2 className="font-serif text-3xl md:text-5xl text-primary italic mb-12 drop-shadow-md">
          To our dearest, <br className="md:hidden" /> {name}
        </h2>
        
        <p className="font-sans text-foreground/80 leading-[2.5] tracking-[0.15em] md:text-sm max-w-2xl mx-auto uppercase text-xs font-light">
          Together with their families,<br />
          <span className="block my-8 font-serif text-3xl md:text-5xl text-primary italic tracking-normal drop-shadow-sm">
            Kavya & Vineeth
          </span>
          joyfully invite you to share in their happiness<br />
          as they unite in marriage.
        </p>
        
        <Divider />
      </motion.div>
    </section>
  );
}
