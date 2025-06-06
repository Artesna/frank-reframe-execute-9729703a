
import { useState, useRef, useCallback } from 'react';

export const useAudioPlayer = () => {
  const [playingPads, setPlayingPads] = useState<Set<string>>(new Set());
  const audioRefs = useRef<Map<string, HTMLAudioElement>>(new Map());

  const playSound = useCallback((padId: string, soundUrl: string) => {
    console.log(`Playing sound for pad ${padId}: ${soundUrl}`);
    
    // Create or get existing audio element
    let audio = audioRefs.current.get(padId);
    if (!audio || audio.src !== soundUrl) {
      audio = new Audio(soundUrl);
      audio.preload = 'auto';
      audioRefs.current.set(padId, audio);
    }

    // Reset audio to beginning and play
    audio.currentTime = 0;
    
    // Add visual feedback
    setPlayingPads(prev => new Set(prev).add(padId));
    
    // Play the sound
    audio.play().catch(err => {
      console.error('Error playing audio:', err);
    });

    // Remove visual feedback after a short duration
    setTimeout(() => {
      setPlayingPads(prev => {
        const newSet = new Set(prev);
        newSet.delete(padId);
        return newSet;
      });
    }, 200);
  }, []);

  return {
    playSound,
    playingPads
  };
};
