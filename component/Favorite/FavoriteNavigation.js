import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import myFavorite from './index';


const Stack = createStackNavigator();

const FavoriteNavigator = ()=>{
    return(
        
            <Stack.Navigator initialRouteName='Favorite' headeShown='false' screenOptions={{
                headerStyle: {
                  backgroundColor: "#9AC4F8",
                },
                headerTintColor: "white",
                headerBackTitle: "Back",
                headerTitleAlign:'center'
              }}>
                <Stack.Screen name='Favorite' component={myFavorite} options={{title:'My Favorite', headerTitleAlign:'center'}}/>

            </Stack.Navigator>
    
    )
}

export default FavoriteNavigator;