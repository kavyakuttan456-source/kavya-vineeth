import { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export function MusicPlayer() {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [playing, setPlaying] = useState(false);
  const [ready, setReady] = useState(false);

  // Listen for the YouTube iframe API to signal it's ready
  useEffect(() => {
    function onMessage(e: MessageEvent) {
      try {
        const data = typeof e.data === 'string' ? JSON.parse(e.data) : e.data;
        if (data?.event === 'onReady') setReady(true);
      } catch { /* ignore */ }
    }
    window.addEventListener('message', onMessage);
    return () => window.removeEventListener('message', onMessage);
  }, []);

  function sendCmd(func: string) {
    iframeRef.current?.contentWindow?.postMessage(
      JSON.stringify({ event: 'command', func, args: [] }),
      '*',
    );
  }

  function toggle() {
    if (!playing) {
      sendCmd('unMute');
      sendCmd('playVideo');
    } else {
      sendCmd('mute');
    }
    setPlaying((p) => !p);
  }

  return (
    <>
      {/* Hidden autoplay iframe — muted until user interacts */}
      <iframe
        ref={iframeRef}
        className="pointer-events-none fixed opacity-0 w-0 h-0"
        src="https://www.youtube.com/embed/Gz8HDbQZSQA?autoplay=1&loop=1&playlist=Gz8HDbQZSQA&controls=0&mute=1&enablejsapi=1&start=27"
        allow="autoplay; encrypted-media"
        onLoad={() => setReady(true)}
        title="Wedding music"
      />

      {/* Floating music toggle */}
      <motion.button
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 2.5, duration: 0.6 }}
        onClick={toggle}
        title={playing ? 'Mute music' : 'Play music'}
        className="fixed bottom-6 right-6 z-50 w-12 h-12 rounded-full border border-primary/40 bg-background/80 backdrop-blur-md flex items-center justify-center shadow-lg hover:border-primary/80 transition-all duration-300 group"
      >
        <span className="text-lg select-none">{playing ? '🎵' : '🔇'}</span>
        {/* Pulse ring when playing */}
        {playing && (
          <span className="absolute inset-0 rounded-full border border-primary/30 animate-ping" />
        )}
      </motion.button>
    </>
  );
}
