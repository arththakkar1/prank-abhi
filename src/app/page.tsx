"use client";

import { useEffect, useRef, useState } from "react";

export default function Home() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [started, setStarted] = useState(false);

  const handleClick = () => {
    const audio = audioRef.current;
    if (audio) {
      setStarted(true);
      audio.volume = 1;
      audio.play().catch(console.error);

      const enforceAudio = () => {
        if (audio.paused) audio.play().catch(() => {});
        if (audio.volume !== 1) audio.volume = 1;
        if (audio.muted) audio.muted = false;
      };

      setInterval(enforceAudio, 500); // enforce twice a second
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black/40">
      <audio
        ref={audioRef}
        src="/song.mp3"
        loop
        hidden
      />
      <button
        onClick={handleClick}
        className="rounded-full cursor-pointer bg-white/80 h-32 w-32 text-lg font-semibold text-white shadow-lg transition-all hover:bg-white/20"
      >
        
      </button>
    </div>
  );
}
