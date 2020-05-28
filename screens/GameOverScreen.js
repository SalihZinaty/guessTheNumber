import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import StartGameScreen from './StartGameScreen';

const GameOverScreen = props => {

    return(
        <View style = {styles.screen}>
            <Text>The Game is Over!</Text>
            <Text>Number of rounds: {props.rounds}</Text>
            <Text>Number was: {props.userNumber}</Text>
            <Button title="NEW GAME" onPress={() => props.newGame()}/>
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }
});

export default GameOverScreen;