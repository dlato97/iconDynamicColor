/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import {StyleSheet, View, TouchableOpacity} from 'react-native';
import {SvgXml} from 'react-native-svg';

const Colors = {
  black: '#000000',
  red: '#D7443E',
  yellow: '#ffd200',
  pink: '#FFB6C1',
};

const getHeartIcon = (color) => {
  return `
    <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 391.837 391.837" style="enable-background:new 0 0 391.837 391.837;" xml:space="preserve">
      <path style="fill:${color};" d="M285.257,35.528c58.743,0.286,106.294,47.836,106.58,106.58c0,107.624-195.918,214.204-195.918,214.204S0,248.165,0,142.108c0-58.862,47.717-106.58,106.58-106.58l0,0c36.032-0.281,69.718,17.842,89.339,48.065C215.674,53.517,249.273,35.441,285.257,35.528z"/>
    </svg>
`;
};

const App = () => {
  const [selectedColor, setSelectedColor] = useState(Colors.black);

  return (
    <View style={styles.container}>
      <SvgXml xml={getHeartIcon(selectedColor)} width="50%" height="50%" />

      <View style={styles.inputColorContainer}>
        <TouchableOpacity onPress={() => setSelectedColor(Colors.red)}>
          <View
            style={{
              ...styles.colorInputItem,
              backgroundColor: Colors.red,
            }}
          />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => setSelectedColor(Colors.yellow)}>
          <View
            style={{
              ...styles.colorInputItem,
              backgroundColor: Colors.yellow,
            }}
          />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => setSelectedColor(Colors.pink)}>
          <View
            style={{
              ...styles.colorInputItem,
              backgroundColor: Colors.pink,
            }}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //justifyContent: 'center',
    paddingTop: 100,
    alignItems: 'center',
  },
  inputColorContainer: {
    flexDirection: 'row',
  },
  colorInputItem: {
    width: 50,
    height: 50,
    borderRadius: 10,
    marginHorizontal: 13,
  },
});

export default App;
