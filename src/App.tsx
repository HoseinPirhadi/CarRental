import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BottomNavigator from './navigators/BottomNavigator';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './store/store';
import CarDetailScreen from './screens/CarDetailScreen';
import { NativeModules, Platform } from 'react-native';
import { COLORS } from './theme/theme';
const { NavigationBar } = NativeModules;

const Stack = createNativeStackNavigator();

function RootStack() {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="Tab"
    >
      <Stack.Screen name="Tab" component={BottomNavigator} />
      <Stack.Screen name="CarDetail" component={CarDetailScreen} />
    </Stack.Navigator>
  );
}

export default function App() {
  React.useEffect(() => {
    if (Platform.OS === 'android' && NavigationBar) {
      NavigationBar.setColor(COLORS.White, false);
    }
  }, []);

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer>
          <RootStack />
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
}
