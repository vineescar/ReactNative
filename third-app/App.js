import { ActivityIndicator, Button, IconComponentProvider } from '@react-native-material/core';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import InboxStack from './routes/InboxStack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import DraftsStacks from './routes/DraftsStacks';
import MaterialComunityIcons from '@expo/vector-icons/MaterialCommunityIcons'
import { FontAwesome,MaterialIcons } from '@expo/vector-icons';


const Drawer = createDrawerNavigator()

export default function App() {
  return (
    <IconComponentProvider IconComponent={MaterialComunityIcons}>
      <StatusBar style="auto" />
      <NavigationContainer>
        <Drawer.Navigator screenOptions={{headerShown:false}}>
        <Drawer.Screen 
          name="Inbox" 
          component={InboxStack} 
          options={{ 
            drawerIcon: () => <FontAwesome name="inbox" size={24} color="black" /> 
          }} 
        />

          <Drawer.Screen 
            name ="Drafts" 
            component={DraftsStacks}
            options={{ 
              drawerIcon: () => <MaterialIcons name="drafts" size={24} color="black" />
            }} 
            />
        </Drawer.Navigator>
      </NavigationContainer>
    </IconComponentProvider>
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
