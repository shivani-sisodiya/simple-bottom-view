import { AppRegistry } from 'react-native';
import { name as appName } from './app.json';
import navigation from './navigation';

AppRegistry.registerComponent(appName, () => navigation);
