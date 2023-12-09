import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import CategoriesScreen from './screens/CategoriesScreen';
import MealsOverviewScreen from './screens/MealsOverviewScreen';
import DetailsScreen from './screens/DetailsScreen';
import { createDrawerNavigator } from '@react-navigation/drawer';
import FavoriteScreen from './screens/FavoriteScreen';
import { Ionicons } from '@expo/vector-icons'
import FavoritesContextProvider from './store/context/favorites-context';

export default function App() {

  const Stack = createNativeStackNavigator()
  const Drawer = createDrawerNavigator()

  const DrawerNavigation = () => {
    return (
      <Drawer.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: '#351401'
          },
          headerTintColor: '#fff',
          sceneContainerStyle: {
            backgroundColor: '#3f2f25'
          },
          drawerContentStyle: {
            backgroundColor: '#351401'
          },
          drawerInactiveTintColor: '#fff',
          drawerActiveTintColor: '#3f2f25',
          drawerActiveBackgroundColor: '#e4baa1'
        }}
      >
        <Drawer.Screen
          name='MealsCategories'
          component={CategoriesScreen}
          options={{
            title: 'All Categories',
            drawerIcon: ({color, size}) => <Ionicons name='list' color={color} size={size} />
          }}
        />
        <Drawer.Screen
         name='FavoriteScreen'
         component={FavoriteScreen}
         options={{
          title: 'Favorties',
          drawerIcon: ({color, size}) => <Ionicons name='star' color={color} size={size} />
        }}
        />
      </Drawer.Navigator>
    )
  }

  return (
    <>
      <StatusBar style="light" />
      <FavoritesContextProvider>
        <NavigationContainer >
          <Stack.Navigator
            screenOptions={{
              headerStyle: {
              backgroundColor: '#351401'
              },
              headerTintColor: '#fff',
              contentStyle: {
                backgroundColor: '#24180f'
              }
            }}
          >
            <Stack.Screen
              name="DrawerScreen"
              component={DrawerNavigation}
              options={{
                headerShown: false
              }}
            />
            <Stack.Screen name="MealsOverview" component={MealsOverviewScreen} />
            <Stack.Screen name="Details" component={DetailsScreen} options={{
              title: 'About the Meal'
            }}/>
          </Stack.Navigator>
        </NavigationContainer>
      </FavoritesContextProvider>
    </>
  );
}

