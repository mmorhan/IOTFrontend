import {StyleSheet, Text, View, Button} from 'react-native';
import React, {useState} from 'react';
import database from '@react-native-firebase/database';
import Header from './components/Header/Header'
import Timer from './components/Timer/Timer'



const App = () => {
  const [sit, setSit] = useState(false);
  const [timer, setTimer] = useState(0);

database()
  .ref('/user/123')
  .on('value', snapshot => {
    console.log('User data: ', snapshot.val());
    var result=snapshot.val();
    setSit(result['sit'])
  });

const writeFirebase=()=>{
database()
  .ref('/user/123/')
  .set({
    sit: !sit,
  })
  .then(() => console.log('Data set.'));
}

  return (
    <View>
      <Header></Header>
      <View style={styles.container}>
        <Timer sit={sit} writeFunc={writeFirebase} ></Timer> 
      </View>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    paddingTop:40,
  },

  startContainer:{
    marginTop:10,
  },

  startButton: {
    marginTop:10,
    backgroundColor: 'white',
    fontSize: 25,
  },

});


