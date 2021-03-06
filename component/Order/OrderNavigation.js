import * as React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Order from './index';


const Stack = createStackNavigator();

const OrderNavigator = ()=>{
    return(
        
            <Stack.Navigator initialRouteName='Order' headeShown='false' screenOptions={{
                headerStyle: {
                  backgroundColor: "#9AC4F8",
                },
                headerTintColor: "white",
                headerBackTitle: "Back",
                headerTitleAlign:'center'
              }}>
                <Stack.Screen name='Order' component={Order} options={{title:'Order', headerTitleAlign:'center'}}/>

            </Stack.Navigator>
    
    )
}

export default OrderNavigator;