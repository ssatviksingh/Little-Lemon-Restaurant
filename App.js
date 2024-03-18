import * as React from 'react'
import {  StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import MenuItemsSectionList from './.vscode/Component/menItemsSectionList';
import FeedbackForm from './.vscode/Component/FeedbackForm';
import WelcomeScreen from './.vscode/Component/NavigateScreen';

const Drawer=createDrawerNavigator();

 function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator  screenOptions={{drawerPosition:'left'}}>
        <Drawer.Screen name="Welcome" component={WelcomeScreen}/>
        <Drawer.Screen name="Menu" component={MenuItemsSectionList}/>
        <Drawer.Screen name="FeedBack" component={FeedbackForm}/>
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default App;

const styles =StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#495E57',}
});

/*
//const Stack = createNativeStackNavigator();
<Stack.Navigator initialRouteName="Welcome"
screenOptions={{ headerStyle: { backgroundColor: '#FBDABB' } }}>
<Stack.Screen name = "Welcome" 
  component={WelcomeScreen}
  options={{ title: 'Home' }}/>
<Stack.Screen name = "Menu" component={MenuItemsSectionList}/>
<Stack.Screen name = "Feedback Form" component={FeedbackForm}/>
</Stack.Navigator>
*/

/*
//import {Ionicons } from '@expo/vector-icons';
//const Tab = createBottomTabNavigator();
<Tab.Navigator screenOptions={({route}) => ({
        tabBarIcon:({focused,color,size}) => {
          let iconName;
          if (route.name === 'Welcome'){
            iconName = focused 
            ? 'ios-information' 
            : 'ios-information-circle-outline';
          }else if(route.name === 'Menu'){
            iconName='ios-list';
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor:'tomato',
        tabBarInactiveTintColor:'gray',
      })}>
        <Tab.Screen name="Welcome" component={WelcomeScreen}/>
        <Tab.Screen name="Menu" component={MenuItemsSectionList}/>
      </Tab.Navigator>
*/