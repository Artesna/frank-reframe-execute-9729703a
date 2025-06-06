
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
        "w-full h-full min-h-[120px] rounded-xl text-white font-bold text-lg shadow-2xl transition-all duration-150 active:scale-95 border border-white/20 backdrop-blur-sm",
        color,
        isPlaying 
          ? "scale-95 brightness-150 shadow-cyan-500/50 border-cyan-400/50" 
          : "hover:brightness-110 hover:shadow-xl hover:border-white/30"
      )}
    >
      <div className="flex flex-col items-center justify-center h-full">
        <div className="text-xl font-black tracking-wider">{label}</div>
        <div className="text-xs opacity-75 mt-1">TAP</div>
      </div>
    </button>
  );
};

export default DrumPad;
