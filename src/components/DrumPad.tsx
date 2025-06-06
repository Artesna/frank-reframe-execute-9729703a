
import React from 'react';
import { cn } from '@/lib/utils';

interface DrumPadProps {
  id: string;
  label: string;
  soundUrl: string;
  color: string;
  onPlay: () => void;
  isPlaying: boolean;
}

const DrumPad: React.FC<DrumPadProps> = ({ id, label, soundUrl, color, onPlay, isPlaying }) => {
  const handleClick = () => {
    console.log(`Playing sound: ${soundUrl}`);
    onPlay();
  };

  return (
    <button
      onClick={handleClick}
      className={cn(
        "aspect-square rounded-lg text-white font-bold text-lg shadow-lg transition-all duration-150 active:scale-95",
        color,
        isPlaying ? "scale-95 brightness-125" : "hover:brightness-110"
      )}
    >
      {label}
    </button>
  );
};

export default DrumPad;
