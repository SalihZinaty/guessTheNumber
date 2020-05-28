import React from 'react';
import { View, Text, StyleSheet, Button, Image } from 'react-native';
import StartGameScreen from './StartGameScreen';

const GameOverScreen = props => {

    return (
        <View style={styles.screen}>
            <Text style={{ fontFamily: 'open-sans-bold' }}>The Game is Over!</Text>
            <View style={styles.imageContainer}>
                <Image
                    source={require('../assets/images/gameOver.jpg')}
                    style={styles.image}
                    resizeMode='cover' />
            </View>
            <View style={styles.results}>
                <Text style={{fontSize:20, textAlign:'center'}}>Number of rounds: {props.rounds}</Text>
                <Text style={{fontSize:20, textAlign:'center'}}>Number was: {props.userNumber}</Text>
            </View>
            <Button title="NEW GAME" onPress={() => props.newGame()} />
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        width: '100%',
        height: '100%',
    },
    imageContainer: {
        borderRadius: 150,
        borderWidth: 3,
        borderColor: 'black',
        width: 300,
        height: 300,
        overflow: 'hidden',
        marginVertical: 30
    },
    results:{
        marginVertical:10,
    }
});

export default GameOverScreen;