export function Divider() {
  return (
    <div className="flex items-center justify-center gap-3 md:gap-4 my-16 opacity-70">
      <div className="w-16 md:w-24 h-px bg-gradient-to-r from-transparent to-primary" />
      <div className="w-1.5 h-1.5 md:w-2 md:h-2 rotate-45 border border-primary" />
      <div className="w-2.5 h-2.5 md:w-3 md:h-3 rotate-45 border border-primary flex items-center justify-center">
        <div className="w-1 h-1 bg-primary rounded-full" />
      </div>
      <div className="w-1.5 h-1.5 md:w-2 md:h-2 rotate-45 border border-primary" />
      <div className="w-16 md:w-24 h-px bg-gradient-to-l from-transparent to-primary" />
    </div>
  );
}
