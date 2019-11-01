import Reactotron from 'reactotron-react-native';
/* O Reactotron só sera executado em ambiente de desenvolvimento */
if (__DEV__) {
  const tron = Reactotron.configure({ host: '127.0.0.1' })
    .useReactNative()
    .connect();

  console.tron = tron;

  tron.clear();
}
