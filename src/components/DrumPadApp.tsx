
import React, { useState } from 'react';
import DrumPad from './DrumPad';
import SoundSelector from './SoundSelector';
import { useAudioPlayer } from '@/hooks/useAudioPlayer';
import { sounds } from '@/data/sounds';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Settings } from 'lucide-react';

const DrumPadApp: React.FC = () => {
  const { playSound, playingPads } = useAudioPlayer();
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  
  // Default sound assignments for each pad
  const [padSounds, setPadSounds] = useState<Record<string, string>>({
    '1': sounds.find(s => s.id === 'techno-kick')?.url || '',
    '2': sounds.find(s => s.id === 'techno-snare')?.url || '',
    '3': sounds.find(s => s.id === 'techno-hihat')?.url || '',
    '4': sounds.find(s => s.id === 'techno-bass')?.url || '',
    '5': sounds.find(s => s.id === 'house-kick')?.url || '',
    '6': sounds.find(s => s.id === 'house-clap')?.url || '',
    '7': sounds.find(s => s.id === 'trance-kick')?.url || '',
    '8': sounds.find(s => s.id === 'trance-pluck')?.url || '',
  });

  const handleSoundSelect = (padId: string, soundUrl: string) => {
    setPadSounds(prev => ({
      ...prev,
      [padId]: soundUrl
    }));
  };

  const padColors = [
    'bg-gradient-to-br from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700',
    'bg-gradient-to-br from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700',
    'bg-gradient-to-br from-green-500 to-teal-600 hover:from-green-600 hover:to-teal-700',
    'bg-gradient-to-br from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700',
    'bg-gradient-to-br from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700',
    'bg-gradient-to-br from-pink-500 to-rose-600 hover:from-pink-600 hover:to-rose-700',
    'bg-gradient-to-br from-yellow-500 to-orange-600 hover:from-yellow-600 hover:to-orange-700',
    'bg-gradient-to-br from-teal-500 to-cyan-600 hover:from-teal-600 hover:to-cyan-700',
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-purple-900/20 to-black p-2">
      <div className="max-w-4xl mx-auto h-screen flex flex-col">
        {/* Header */}
        <div className="flex justify-between items-center p-4 mb-2">
          <div className="text-center flex-1">
            <h1 className="text-3xl font-bold text-transparent bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text">
              🎛️ TRANCE PAD
            </h1>
            <p className="text-gray-300 text-sm">Electronic Music Machine</p>
          </div>
          <Button
            onClick={() => setIsSettingsOpen(true)}
            className="bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 border border-purple-400/30 shadow-lg shadow-purple-500/25"
          >
            <Settings className="w-4 h-4 mr-2" />
            Settings
          </Button>
        </div>
        
        {/* Drum Pads Grid */}
        <div className="flex-1 grid grid-cols-2 gap-3 p-4">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((padNumber, index) => (
            <DrumPad
              key={padNumber}
              id={padNumber.toString()}
              label={`PAD ${padNumber}`}
              soundUrl={padSounds[padNumber.toString()]}
              color={padColors[index]}
              onPlay={() => playSound(padNumber.toString(), padSounds[padNumber.toString()])}
              isPlaying={playingPads.has(padNumber.toString())}
            />
          ))}
        </div>
        
        {/* Footer */}
        <div className="text-center text-gray-400 text-xs p-2 border-t border-purple-800/30">
          Tap pads to create beats • Use settings to customize sounds
        </div>
      </div>

      {/* Settings Modal */}
      <SoundSelector
        isOpen={isSettingsOpen}
        onClose={() => setIsSettingsOpen(false)}
        padSounds={padSounds}
        onSoundSelect={handleSoundSelect}
        sounds={sounds}
      />
    </div>
  );
};

export default DrumPadApp;
