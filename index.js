import 'react-native-gesture-handler';
import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';

// Add support for web by checking the environment
import { Platform } from 'react-native';
import { createRoot } from 'react-dom/client';

if (Platform.OS === 'web') {
  const rootTag = document.getElementById('root') || document.createElement('div');
  if (!rootTag.parentNode) {
    document.body.appendChild(rootTag);
  }
  createRoot(rootTag).render(<App />);
} else {
  AppRegistry.registerComponent(appName, () => App);
}