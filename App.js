import React, { Component } from 'react';

import {
  ViroARSceneNavigator
} from '@viro-community/react-viro';

import BusinessCard from './js/BusinessCard';

export default class ViroSample extends Component {
  
  render() {
    return (
      <ViroARSceneNavigator 
        // apiKey="1839C275-6929-45AF-B638-EF2DEE44C1D9"
        numberOfTrackedImages={2}
        initialScene={{scene: BusinessCard}} 
      />
    )
  }
}


module.exports = ViroSample

// import React from 'react';
// import { View, Text, StyleSheet } from 'react-native';

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text style={styles.text}>
//         Projeto configurado para viroreact
//       </Text>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container:{
//     flex:1,
//     justifyContent:'center',
//     alignItems:'center'
//   },
//   text:{
//     fontSize:16,
//     fontFamily: 'Roboto'
//   }
// })