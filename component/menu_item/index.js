import React from 'react';
import { Text, View, Image, Pressable, } from 'react-native';
import styles from './style';


const Menuitem =(props)=>{
    return (
        <Pressable onPress={() => 
            console.warn('nihao')

        }>
        <View style={styles.container} >


            <Image source={require('../../assets/icon.png')} style={{ width: 100, height: 100 }} />

            <View style={styles.minicontainer}>
                <Text style={styles.itemname}>4. Spring Roll (4 pcs)</Text>
                <Text style={styles.itemdescrib}>Deep-fried vegeteran dumpling. One order comes with four pieces</Text>
                <Text style={styles.itemprice}>5$</Text>

            </View>
        </View>
        </Pressable>

    );

};

export default Menuitem;