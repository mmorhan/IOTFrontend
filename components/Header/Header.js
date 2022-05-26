import { StyleSheet, Text, View } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import React from 'react'

const Header = () => {
  return (
      <View style={styles.header}>
        <View style={styles.logo_container}>
          <FontAwesome5 name={'chair'} style={styles.icon} />
          <Text style={styles.logo_Text}>SmartChair</Text>
        </View>
      </View>
  )
}

export default Header

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#4FDA1E',
    alignSelf: 'stretch',
    height: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo_container: {
    flexDirection: 'row',
  },
  logo_Text: {
    fontWeight: 'bold',
    fontSize: 20,
    color: 'black',
  },
  icon: {
    fontSize: 23,
    color: 'black',
    marginRight: 5,
  },
})