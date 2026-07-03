export function Footer() {
  return (
    <footer className="w-full py-16 flex flex-col items-center justify-center relative z-10 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      
      <div className="font-serif text-2xl text-primary mb-6 italic">Kavya & Vineeth</div>
      <div className="flex items-center gap-4 text-foreground/40 font-sans text-[10px] md:text-xs tracking-[0.2em] uppercase">
        <span>31 August 2026</span>
        <span className="w-1 h-1 bg-primary/30 rounded-full rotate-45" />
        <span>Aluva</span>
      </div>
      
      <div className="mt-12 text-[9px] font-sans text-foreground/20 uppercase tracking-[0.3em]">
        Join us in celebration
      </div>
    </footer>
  );
}
