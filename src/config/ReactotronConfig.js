import { AsyncStorage } from 'react-native';
import Reactotron from 'reactotron-react-native';

if (__DEV__) {
  const tron = Reactotron.setAsyncStorageHandler(AsyncStorage)
    .configure({
      host: '192.168.0.109',
      port: 9090,
    })
    .useReactNative()
    .connect();

  console.tron = tron;

  tron.clear();
}
