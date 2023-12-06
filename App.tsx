import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import CharactersScreen from './src/screens/CharactersScreen';
import LocationScreen from './src/screens/LocationScreen';
import LocationDetail from './src/components/details/LocationDetail';
import EpisodeScreen from './src/screens/EpisodeScreen';
import EpisodeDetail from './src/components/details/EpisodeDetail';

const CharacterStack = createStackNavigator();

const CharacterStackScreen = () => {
  return (
    <CharacterStack.Navigator>
      <CharacterStack.Screen
        name="Character"
        component={CharactersScreen}
        options={{headerShown: false}}
      />

      <CharacterStack.Screen
        name="Location Character details"
        component={LocationDetail}
        options={{headerShown: true, title: 'Personajes de Ubicación'}}
      />
    </CharacterStack.Navigator>
  );
};

const LocationStack = createStackNavigator();

const LocationStackScreen = () => {
  return (
    <LocationStack.Navigator>
      <LocationStack.Screen
        name="Location screen"
        component={LocationScreen}
        options={{headerShown: false}}
      />
      <LocationStack.Screen
        name="Location details"
        component={LocationDetail}
        options={{headerShown: true, title: 'Habitantes de Ubicación'}}
      />
    </LocationStack.Navigator>
  );
};

const EpisodeStack = createStackNavigator();

const EpisodeStackScreen = () => {
  return (
    <EpisodeStack.Navigator>
      <EpisodeStack.Screen
        name="Episode"
        component={EpisodeScreen}
        options={{headerShown: false}}
      />
      <EpisodeStack.Screen
        name="Episode details"
        component={EpisodeDetail}
        options={{headerShown: true, title: 'Personajes de episodio'}}
      />
    </EpisodeStack.Navigator>
  );
};

const Tab = createBottomTabNavigator();
function App(): JSX.Element {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="Characters"
          component={CharacterStackScreen}
          options={{
            tabBarLabel: 'Personajes',
            tabBarIcon: () => (
              <Icon name="person-circle-outline" size={30} color="gray" />
            ),
          }}
        />
        <Tab.Screen
          name="Location"
          component={LocationStackScreen}
          options={{
            tabBarLabel: 'Ubicación',
            tabBarIcon: () => (
              <Icon name="location-outline" size={30} color="gray" />
            ),
          }}
        />
        <Tab.Screen
          name="Episodes"
          component={EpisodeStackScreen}
          options={{
            tabBarLabel: 'Episodios',
            tabBarIcon: () => (
              <Icon name="videocam-outline" size={30} color="gray" />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;
