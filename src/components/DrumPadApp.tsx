
import React, { useState } from 'react';
import DrumPad from './DrumPad';
import SoundSelector from './SoundSelector';
import { useAudioPlayer } from '@/hooks/useAudioPlayer';
import { sounds } from '@/data/sounds';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const DrumPadApp: React.FC = () => {
  const { playSound, playingPads } = useAudioPlayer();
  
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
    'bg-red-500 hover:bg-red-600',
    'bg-blue-500 hover:bg-blue-600',
    'bg-green-500 hover:bg-green-600',
    'bg-yellow-500 hover:bg-yellow-600',
    'bg-purple-500 hover:bg-purple-600',
    'bg-pink-500 hover:bg-pink-600',
    'bg-indigo-500 hover:bg-indigo-600',
    'bg-orange-500 hover:bg-orange-600',
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black p-4">
      <Card className="max-w-2xl mx-auto bg-gray-800 border-gray-700">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl font-bold text-white">
            🥁 DrumPad Pro
          </CardTitle>
          <p className="text-gray-300">Techno, House & Trance Beats</p>
        </CardHeader>
        
        <CardContent>
          <div className="grid grid-cols-2 gap-4 mb-6">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((padNumber, index) => (
              <div key={padNumber} className="space-y-2">
                <DrumPad
                  id={padNumber.toString()}
                  label={`PAD ${padNumber}`}
                  soundUrl={padSounds[padNumber.toString()]}
                  color={padColors[index]}
                  onPlay={() => playSound(padNumber.toString(), padSounds[padNumber.toString()])}
                  isPlaying={playingPads.has(padNumber.toString())}
                />
                <div className="flex justify-center">
                  <SoundSelector
                    padId={padNumber.toString()}
                    currentSound={padSounds[padNumber.toString()]}
                    onSoundSelect={handleSoundSelect}
                    sounds={sounds}
                  />
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center text-gray-400 text-sm">
            Tap pads to play sounds • Use settings to change sounds
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default DrumPadApp;
