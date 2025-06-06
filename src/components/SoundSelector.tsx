
import React from 'react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Settings } from 'lucide-react';

interface Sound {
  id: string;
  name: string;
  url: string;
  genre: 'techno' | 'house';
}

interface SoundSelectorProps {
  padId: string;
  currentSound: string;
  onSoundSelect: (padId: string, soundUrl: string) => void;
  sounds: Sound[];
}

const SoundSelector: React.FC<SoundSelectorProps> = ({ padId, currentSound, onSoundSelect, sounds }) => {
  const technoSounds = sounds.filter(s => s.genre === 'techno');
  const houseSounds = sounds.filter(s => s.genre === 'house');

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" size="sm">
          <Settings className="w-4 h-4" />
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle>Select Sound for Pad {padId}</DialogTitle>
        </DialogHeader>
        <div className="space-y-4">
          <div>
            <h3 className="text-sm font-semibold mb-2">Techno</h3>
            <div className="grid grid-cols-2 gap-2">
              {technoSounds.map((sound) => (
                <Button
                  key={sound.id}
                  variant={currentSound === sound.url ? "default" : "outline"}
                  size="sm"
                  onClick={() => onSoundSelect(padId, sound.url)}
                  className="text-xs"
                >
                  {sound.name}
                </Button>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-sm font-semibold mb-2">House</h3>
            <div className="grid grid-cols-2 gap-2">
              {houseSounds.map((sound) => (
                <Button
                  key={sound.id}
                  variant={currentSound === sound.url ? "default" : "outline"}
                  size="sm"
                  onClick={() => onSoundSelect(padId, sound.url)}
                  className="text-xs"
                >
                  {sound.name}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default SoundSelector;
