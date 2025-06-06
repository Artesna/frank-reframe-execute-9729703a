
import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'app.lovable.3a96396c7f40497c96ea70c0905e6033',
  appName: 'frank-reframe-execute',
  webDir: 'dist',
  server: {
    url: 'https://3a96396c-7f40-497c-96ea-70c0905e6033.lovableproject.com?forceHideBadge=true',
    cleartext: true
  },
  plugins: {
    SplashScreen: {
      launchShowDuration: 0
    }
  }
};

export default config;
