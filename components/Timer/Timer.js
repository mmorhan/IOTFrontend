import {StyleSheet, Text, View, Button, TouchableOpacity} from 'react-native';
import React from 'react';
import CountDown from 'react-native-countdown-component';

const Timer = ({sit,writeFunc}) => {
  return (
    <View style={styles.container}>
      <CountDown
        style={styles.counter}
        running={sit}
        until={60 * 25}
        onFinish={() => console.log('finished')}
        onPress={() => console.log('hello')}
        timeToShow={['M', 'S']}
        timeLabels={{m: null, s: null}}
        size={60}
        digitTxtStyle={{fontSize: 90, color: 'black'}}
        digitStyle={{backgroundColor: 'white',
      shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 6,
},
shadowOpacity: 0.37,
shadowRadius: 7.49,

elevation: 12,
      }}
        showSeparator
        separatorStyle={{color: 'black'}}
      />

      {

      !sit?
      <TouchableOpacity style={styles.button1}  onPress={writeFunc}>
        <Text style={styles.buttonText}>Start</Text>
      </TouchableOpacity>
      :
      <TouchableOpacity style={styles.button2} onPress={writeFunc}>
        <Text style={styles.buttonText}>Stop</Text>
      </TouchableOpacity>



      }
    </View>
  );
};

export default Timer;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  button1: {
    marginTop: 40,
    backgroundColor: '#4FDA1E',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,
    
    elevation: 12, 
  },

  button2: {
    marginTop: 40,
    backgroundColor: 'red',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,
    
    elevation: 12, 
  },
  buttonText: {
    fontSize: 20,
    paddingHorizontal: 20,
    paddingVertical: 20,
    fontWeight:'bold',
    color:'black',
  },
});
