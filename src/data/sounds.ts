
export interface Sound {
  id: string;
  name: string;
  url: string;
  genre: 'techno' | 'house' | 'trance';
}

// Using placeholder audio URLs - in a real app, these would be actual sound files
export const sounds: Sound[] = [
  // Techno sounds
  { id: 'techno-kick', name: 'Kick', url: 'data:audio/wav;base64,UklGRnoGAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQoGAACBhYqFbF1fdJivrJBhNjVgodDbq2EcBj+a2/LDciUFLIHO8tiJNwgZaLvt559NEAxQp+PwtmMcBjiR1/LMeSwFJHfH8N2QQAoUXrTp66hVFApGn+DyvmYgCEOtx+e1fi0CLISy+9p1OAQZdLTpxojsHxJtw//cXs==', genre: 'techno' },
  { id: 'techno-snare', name: 'Snare', url: 'data:audio/wav;base64,UklGRnoGAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQoGAACBhYqFbF1fdJivrJBhNjVgodDbq2EcBj+a2/LDciUFLIHO8tiJNwgZaLvt559NEAxQp+PwtmMcBjiR1/LMeSwFJHfH8N2QQAoUXrTp66hVFApGn+DyvmYgCEOtx+e1fi0CLISy+9p1OAQZdLTpxojsHxJtw//cXs==', genre: 'techno' },
  { id: 'techno-hihat', name: 'Hi-Hat', url: 'data:audio/wav;base64,UklGRnoGAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQoGAACBhYqFbF1fdJivrJBhNjVgodDbq2EcBj+a2/LDciUFLIHO8tiJNwgZaLvt559NEAxQp+PwtmMcBjiR1/LMeSwFJHfH8N2QQAoUXrTp66hVFApGn+DyvmYgCEOtx+e1fi0CLISy+9p1OAQZdLTpxojsHxJtw//cXs==', genre: 'techno' },
  { id: 'techno-bass', name: 'Bass', url: 'data:audio/wav;base64,UklGRnoGAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQoGAACBhYqFbF1fdJivrJBhNjVgodDbq2EcBj+a2/LDciUFLIHO8tiJNwgZaLvt559NEAxQp+PwtmMcBjiR1/LMeSwFJHfH8N2QQAoUXrTp66hVFApGn+DyvmYgCEOtx+e1fi0CLISy+9p1OAQZdLTpxojsHxJtw//cXs==', genre: 'techno' },
  
  // House sounds
  { id: 'house-kick', name: 'Kick', url: 'data:audio/wav;base64,UklGRnoGAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQoGAACBhYqFbF1fdJivrJBhNjVgodDbq2EcBj+a2/LDciUFLIHO8tiJNwgZaLvt559NEAxQp+PwtmMcBjiR1/LMeSwFJHfH8N2QQAoUXrTp66hVFApGn+DyvmYgCEOtx+e1fi0CLISy+9p1OAQZdLTpxojsHxJtw//cXs==', genre: 'house' },
  { id: 'house-clap', name: 'Clap', url: 'data:audio/wav;base64,UklGRnoGAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQoGAACBhYqFbF1fdJivrJBhNjVgodDbq2EcBj+a2/LDciUFLIHO8tiJNwgZaLvt559NEAxQp+PwtmMcBjiR1/LMeSwFJHfH8N2QQAoUXrTp66hVFApGn+DyvmYgCEOtx+e1fi0CLISy+9p1OAQZdLTpxojsHxJtw//cXs==', genre: 'house' },
  { id: 'house-openhat', name: 'Open Hat', url: 'data:audio/wav;base64,UklGRnoGAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQoGAACBhYqFbF1fdJivrJBhNjVgodDbq2EcBj+a2/LDciUFLIHO8tiJNwgZaLvt559NEAxQp+PwtmMcBjiR1/LMeSwFJHfH8N2QQAoUXrTp66hVFApGn+DyvmYgCEOtx+e1fi0CLISy+9p1OAQZdLTpxojsHxJtw//cXs==', genre: 'house' },
  { id: 'house-perc', name: 'Perc', url: 'data:audio/wav;base64,UklGRnoGAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQoGAACBhYqFbF1fdJivrJBhNjVgodDbq2EcBj+a2/LDciUFLIHO8tiJNwgZaLvt559NEAxQp+PwtmMcBjiR1/LMeSwFJHfH8N2QQAoUXrTp66hVFApGn+DyvmYgCEOtx+e1fi0CLISy+9p1OAQZdLTpxojsHxJtw//cXs==', genre: 'house' },

  // Trance sounds
  { id: 'trance-kick', name: 'Kick', url: 'data:audio/wav;base64,UklGRnoGAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQoGAACBhYqFbF1fdJivrJBhNjVgodDbq2EcBj+a2/LDciUFLIHO8tiJNwgZaLvt559NEAxQp+PwtmMcBjiR1/LMeSwFJHfH8N2QQAoUXrTp66hVFApGn+DyvmYgCEOtx+e1fi0CLISy+9p1OAQZdLTpxojsHxJtw//cXs==', genre: 'trance' },
  { id: 'trance-pluck', name: 'Pluck', url: 'data:audio/wav;base64,UklGRnoGAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQoGAACBhYqFbF1fdJivrJBhNjVgodDbq2EcBj+a2/LDciUFLIHO8tiJNwgZaLvt559NEAxQp+PwtmMcBjiR1/LMeSwFJHfH8N2QQAoUXrTp66hVFApGn+DyvmYgCEOtx+e1fi0CLISy+9p1OAQZdLTpxojsHxJtw//cXs==', genre: 'trance' },
  { id: 'trance-arp', name: 'Arp', url: 'data:audio/wav;base64,UklGRnoGAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQoGAACBhYqFbF1fdJivrJBhNjVgodDbq2EcBj+a2/LDciUFLIHO8tiJNwgZaLvt559NEAxQp+PwtmMcBjiR1/LMeSwFJHfH8N2QQAoUXrTp66hVFApGn+DyvmYgCEOtx+e1fi0CLISy+9p1OAQZdLTpxojsHxJtw//cXs==', genre: 'trance' },
  { id: 'trance-sweep', name: 'Sweep', url: 'data:audio/wav;base64,UklGRnoGAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQoGAACBhYqFbF1fdJivrJBhNjVgodDbq2EcBj+a2/LDciUFLIHO8tiJNwgZaLvt559NEAxQp+PwtmMcBjiR1/LMeSwFJHfH8N2QQAoUXrTp66hVFApGn+DyvmYgCEOtx+e1fi0CLISy+9p1OAQZdLTpxojsHxJtw//cXs==', genre: 'trance' }
];
