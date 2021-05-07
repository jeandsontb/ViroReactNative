import React from 'react';

import { View, Text, StyleSheet } from 'react-native';

const App = () => {
  return (
    <View style={styles.component}>
      <Text style={styles.text} >
        Projete o seu código aqui
      </Text>
    </View>
  )
}


const styles = StyleSheet.create({
  component:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  },
  text:{
    fontSize:20,
    fontFamily: 'Roboto'
  }
})

export default App;
