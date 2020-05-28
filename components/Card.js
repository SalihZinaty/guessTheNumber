import React from 'react';
import {View, StyleSheet} from 'react-native';

const Card = props => {
    //to make styling more flexable, we use the spread opersator to extract the styling and add to it from the parents
    return(
        <View style={{...styles.card, ...props.style}}>
            {props.children}
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        shadowColor:'black',
        shadowOffset:{width:0, height:2},
        shadowRadius:6,
        shadowOpacity: 0.26,
        backgroundColor:'white',
        elevation:8, //the shadow property doesn't work on Android, therefore there is this property: elevation
        padding: 20,
        borderRadius:10
    }
});

export default Card;