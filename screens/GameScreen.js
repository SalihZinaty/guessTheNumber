import React, { useState, useRef, useEffect } from 'react';
import { View, Text, StyleSheet, Button, Alert, ScrollView } from 'react-native';
import NumberContainer from '../components/NumberContainer';
import Card from '../components/Card';
const generateRandomBetween = (min, max, exclude) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    const rndNum = Math.floor(Math.random() * (max - min)) + min;
    if (rndNum === exclude) {
        return generateRandomBetween(min, max, exclude);
    } else return rndNum;
}

const renderListItem = (guess, numOfRound) => (
    <View key={guess} style={styles.list}>
        <Text>#{numOfRound}</Text>
        <Text>{guess}</Text>
    </View>
)
const GameScreen = props => {
    const initialGuess = generateRandomBetween(1, 100, props.userChoice)
    const [currentGuess, setCurrentGuess] = useState(initialGuess)
    const currentLow = useRef(1);
    const currentHigh = useRef(100);
    const [pastGuesses, setPastGuesses] = useState([initialGuess]);

    const { userChoice, onGameOver } = props;
    useEffect(() => {
        if (currentGuess === userChoice) {
            onGameOver(pastGuesses.length);
        }
    }, [currentGuess, userChoice, onGameOver])
    const nextGuessHandler = direction => {
        if ((direction === 'LOWER' && currentGuess < props.userChoice) || (direction === 'GRATER' && currentGuess > props.userChoice)) {
            Alert.alert('Don\'t lie', 'You know that this is wrong...', [{ text: 'Sorry', style: 'cancel' }]);
            return;
        }
        if (direction === 'LOWER') {
            currentHigh.current = currentGuess;
        } else {
            currentLow.current = currentGuess + 1;
        }
        const nextNumber = generateRandomBetween(currentLow.current, currentHigh.current, currentGuess);
        setCurrentGuess(nextNumber);
        setPastGuesses(curPastGuesses => [nextNumber, ...curPastGuesses]);
    }
    return (
        <View style={styles.screen}>
            <Text>Opponent's Guess</Text>
            <NumberContainer>{currentGuess}</NumberContainer>
            <Card style={styles.buttonContainer}>
                <Button title="LOWER" onPress={() => { nextGuessHandler('LOWER') }} />
                <Button title="GREATER" onPress={() => { nextGuessHandler('GRATER') }} />
            </Card>
            <View style={styles.totalList}>
                <ScrollView>
                    {pastGuesses.map((guess,index) => renderListItem(guess,pastGuesses.length-index))}
                </ScrollView>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 10,
        alignItems: 'center'
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 20,
        width: 300,
        maxWidth: '80%'
    },
    list: {
        borderColor: '#ccc',
        borderWidth: 1,
        padding: 15,
        marginVertical: 10,
        backgroundColor: 'white',
        flexDirection: 'row',
        textAlign:'center',
        justifyContent:'space-around'
    },
    totalList:{
        flex:1,
        width:'60%'
    }
});

export default GameScreen;