import React, { useState } from 'react';
import { TextInput, View, StyleSheet, Alert,Text,useWindowDimensions,KeyboardAvoidingView,ScrollView} from 'react-native';
import PrimaryButton from '../components/PrimaryButton';
import Title from '../components/Title'

export default function StartGameScreen({ onPickNumber }) {
  const [enteredNumber, setEnteredNumber] = useState('');
  const {width,height}= useWindowDimensions();
  function numberInputHandler(enteredText) {
    setEnteredNumber(enteredText);
  }

  function resetInputHandler() {
    setEnteredNumber('');
  }

  function confirmInputHandler() {
    const chosenNumber = parseInt(enteredNumber);

    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      Alert.alert('Invalid Number', 'Number has to be between 1 and 99.', [
        { text: 'Okay', style: 'destructive', onPress: resetInputHandler },
      ]);
      return;
    }
    onPickNumber(chosenNumber);  // Ensure this is correctly passed from App.js
  }
  const marginTopDistance=height<400?30:100;
  return (
    <ScrollView style={styles.screen}>
    <KeyboardAvoidingView style={styles.screen} behavior="position">
    <View style={[styles.rootContainer,{marginTop:marginTopDistance}]}>
    <Title>Guess My Number</Title>
    <View style={styles.inputContainer}>
    <Text style={styles.instructionContainer}>Enter a number</Text>
      <TextInput
        style={styles.input}
        maxLength={2}
        keyboardType="numeric"
        onChangeText={numberInputHandler}
        value={enteredNumber}
      />
      <View style={styles.buttonsContainer}>
        <View style={styles.buttonContainer}>
          <PrimaryButton onPress={resetInputHandler}>Reset</PrimaryButton>
        </View>
        <View style={styles.buttonContainer}>
          <PrimaryButton onPress={confirmInputHandler}>Confirm</PrimaryButton>
        </View>
      </View>
    </View>
    </View>
    </KeyboardAvoidingView>
    </ScrollView>
  );
}
//const deviceHeight=Dimensions.get('window').height;
const styles = StyleSheet.create({
  screen:{
    flex:1,
  },
  rootContainer:{
    flex:1,
   // marginTop:deviceHeight<400?30:100,
    alignContent:'center',
  },
  inputContainer: {
    marginTop: 36,
    marginHorizontal: 24,
    padding: 16,
    backgroundColor: '#72063c',
    borderRadius: 8,
    elevation: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    height: 50,
    fontSize: 32,
    borderBottomColor: '#ddb52f',
    borderBottomWidth: 2,
    color: '#ddb52f',
    marginVertical: 8,
    fontWeight: 'bold',
    width: 50,
    textAlign: 'center',
  },
  buttonsContainer: {
    flexDirection: 'row',
  },
  buttonContainer: {
    flex: 1,
  },
  instructionContainer:{
    color:'white',
    fontsize:24,
  }
});
