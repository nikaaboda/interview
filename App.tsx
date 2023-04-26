import React from 'react';
import {SafeAreaView} from 'react-native';
import {NativeBaseProvider} from 'native-base';

import AccountScreen from './src/screens/AccountScreen';

const App = () => {
  return (
    <NativeBaseProvider>
      <SafeAreaView style={{flex: 1}}>
        <AccountScreen />
      </SafeAreaView>
    </NativeBaseProvider>
  );
};

export default App;
