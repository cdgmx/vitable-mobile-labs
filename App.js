import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import RNInsider from 'react-native-insider';

export default function App() {

  useEffect(() => {
    RNInsider.init(
      'your_partner_name',
      'group.com.useinsider.InsiderDemo',
      (type, data) => {
        switch (type) {
          case InsiderCallbackType.NOTIFICATION_OPEN:
            console.log('[INSIDER][NOTIFICATION_OPEN]: ', data);
            Alert.alert('[INSIDER][NOTIFICATION_OPEN]:', JSON.stringify(data));
            break;
          case InsiderCallbackType.INAPP_BUTTON_CLICK:
            console.log('[INSIDER][INAPP_BUTTON_CLICK]: ', data);
            Alert.alert(
              '[INSIDER][INAPP_BUTTON_CLICK]: ',
              JSON.stringify(data),
            );
            break;
          case InsiderCallbackType.TEMP_STORE_PURCHASE:
            console.log('[INSIDER][TEMP_STORE_PURCHASE]: ', data);
            Alert.alert(
              '[INSIDER][TEMP_STORE_PURCHASE]: ',
              JSON.stringify(data),
            );
            break;
          case InsiderCallbackType.TEMP_STORE_ADDED_TO_CART:
            console.log('[INSIDER][TEMP_STORE_ADDED_TO_CART]: ', data);
            Alert.alert(
              '[INSIDER][TEMP_STORE_ADDED_TO_CART]: ',
              JSON.stringify(data),
            );
            break;
          case InsiderCallbackType.TEMP_STORE_CUSTOM_ACTION:
            console.log('[INSIDER][TEMP_STORE_CUSTOM_ACTION]: ', data);
            Alert.alert(
              '[INSIDER][TEMP_STORE_CUSTOM_ACTION]: ',
              JSON.stringify(data),
            );
            break;
        }
      },
    );

    RNInsider.registerWithQuietPermission(false);

  }, []);

  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
