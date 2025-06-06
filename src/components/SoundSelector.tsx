
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { X } from 'lucide-react';

interface Sound {
  id: string;
  name: string;
  url: string;
  genre: 'techno' | 'house' | 'trance';
}

interface SoundSelectorProps {
  isOpen: boolean;
  onClose: () => void;
  padSounds: Record<string, string>;
  onSoundSelect: (padId: string, soundUrl: string) => void;
  sounds: Sound[];
}

const SoundSelector: React.FC<SoundSelectorProps> = ({ 
  isOpen, 
  onClose, 
  padSounds, 
  onSoundSelect, 
  sounds 
}) => {
  const [tempPadSounds, setTempPadSounds] = useState(padSounds);

  const handleSoundChange = (padId: string, soundUrl: string) => {
    setTempPadSounds(prev => ({
      ...prev,
      [padId]: soundUrl
    }));
  };

  const handleApply = () => {
    Object.entries(tempPadSounds).forEach(([padId, soundUrl]) => {
      onSoundSelect(padId, soundUrl);
    });
    onClose();
  };

  const handleClose = () => {
    setTempPadSounds(padSounds); // Reset to original sounds
    onClose();
  };

  const technoSounds = sounds.filter(s => s.genre === 'techno');
  const houseSounds = sounds.filter(s => s.genre === 'house');
  const tranceSounds = sounds.filter(s => s.genre === 'trance');

  const getSoundName = (soundUrl: string) => {
    const sound = sounds.find(s => s.url === soundUrl);
    return sound ? sound.name : 'Unknown';
  };

  const padColors = [
    'from-cyan-500 to-blue-600',
    'from-purple-500 to-pink-600',
    'from-green-500 to-teal-600',
    'from-orange-500 to-red-600',
    'from-indigo-500 to-purple-600',
    'from-pink-500 to-rose-600',
    'from-yellow-500 to-orange-600',
    'from-teal-500 to-cyan-600',
  ];

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] bg-gradient-to-br from-gray-900 to-black border border-purple-500/30 text-white overflow-y-auto">
        <DialogHeader className="border-b border-purple-500/30 pb-4">
          <div className="flex justify-between items-center">
            <DialogTitle className="text-2xl font-bold text-transparent bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text">
              Configure Pad Sounds
            </DialogTitle>
            <Button
              onClick={handleClose}
              variant="ghost"
              size="sm"
              className="text-gray-400 hover:text-white"
            >
              <X className="w-4 h-4" />
            </Button>
          </div>
        </DialogHeader>
        
        <div className="space-y-6 py-4">
          {/* Pad Configuration */}
          <div className="grid grid-cols-2 gap-4">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((padNumber, index) => (
              <div key={padNumber} className="space-y-3">
                <div className={`p-3 rounded-lg bg-gradient-to-r ${padColors[index]} bg-opacity-20 border border-white/10`}>
                  <h3 className="font-semibold text-lg">Pad {padNumber}</h3>
                  <p className="text-sm opacity-75">
                    Current: {getSoundName(tempPadSounds[padNumber.toString()])}
                  </p>
                </div>
                
                {/* Genre Sections */}
                <div className="space-y-3">
                  <div>
                    <h4 className="text-sm font-semibold text-cyan-400 mb-2">Techno</h4>
                    <div className="grid grid-cols-2 gap-1">
                      {technoSounds.map((sound) => (
                        <Button
                          key={`${padNumber}-${sound.id}`}
                          variant={tempPadSounds[padNumber.toString()] === sound.url ? "default" : "outline"}
                          size="sm"
                          onClick={() => handleSoundChange(padNumber.toString(), sound.url)}
                          className={`text-xs h-8 ${
                            tempPadSounds[padNumber.toString()] === sound.url 
                              ? "bg-cyan-600 hover:bg-cyan-700 border-cyan-400" 
                              : "border-gray-600 hover:border-cyan-400"
                          }`}
                        >
                          {sound.name}
                        </Button>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-sm font-semibold text-purple-400 mb-2">House</h4>
                    <div className="grid grid-cols-2 gap-1">
                      {houseSounds.map((sound) => (
                        <Button
                          key={`${padNumber}-${sound.id}`}
                          variant={tempPadSounds[padNumber.toString()] === sound.url ? "default" : "outline"}
                          size="sm"
                          onClick={() => handleSoundChange(padNumber.toString(), sound.url)}
                          className={`text-xs h-8 ${
                            tempPadSounds[padNumber.toString()] === sound.url 
                              ? "bg-purple-600 hover:bg-purple-700 border-purple-400" 
                              : "border-gray-600 hover:border-purple-400"
                          }`}
                        >
                          {sound.name}
                        </Button>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-sm font-semibold text-pink-400 mb-2">Trance</h4>
                    <div className="grid grid-cols-2 gap-1">
                      {tranceSounds.map((sound) => (
                        <Button
                          key={`${padNumber}-${sound.id}`}
                          variant={tempPadSounds[padNumber.toString()] === sound.url ? "default" : "outline"}
                          size="sm"
                          onClick={() => handleSoundChange(padNumber.toString(), sound.url)}
                          className={`text-xs h-8 ${
                            tempPadSounds[padNumber.toString()] === sound.url 
                              ? "bg-pink-600 hover:bg-pink-700 border-pink-400" 
                              : "border-gray-600 hover:border-pink-400"
                          }`}
                        >
                          {sound.name}
                        </Button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Action Buttons */}
        <div className="flex justify-end gap-3 border-t border-purple-500/30 pt-4">
          <Button
            onClick={handleClose}
            variant="outline"
            className="border-gray-600 text-gray-300 hover:border-gray-400 hover:text-white"
          >
            Cancel
          </Button>
          <Button
            onClick={handleApply}
            className="bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 border border-purple-400/30 shadow-lg shadow-purple-500/25"
          >
            Apply Changes
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default SoundSelector;
