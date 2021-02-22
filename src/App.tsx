import React from 'react';
import { View, Text, StatusBar } from 'react-native';

const App: React.FC = () => (
  <>
    <StatusBar barStyle="light-content" backgroundColor="#312e38" />
    <View style={{ flex: 1, backgroundColor: '#312e38' }}>
      <Text style={{ color: '#FFFFFF' }}>Hello Gobarber</Text>
    </View>
  </>
);

export default App;