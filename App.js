/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  Image,
  StatusBar,
  StyleSheet,
  Text,
  View,
  ImageBackground,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import { CardItem } from './src/components/CardItem';

const peperony = 'https://dodopizza-a.akamaihd.net/static/Img/Products/3276e81cd3324f5cb587b16af8ff884a_584x584.jpeg';
const household = 'https://dodopizza-a.akamaihd.net/static/Img/Products/6ccbddae9cc64a3080a07d1619f941d3_584x584.jpeg';
const bonboni = 'https://dodopizza-a.akamaihd.net/static/Img/Products/f0ade47841f14256a02b1418fe8c7134_584x584.jpeg';
const pizzaMix = 'https://dodopizza-a.akamaihd.net/static/Img/Products/ce7c4c5165a1431f854f9ce2d1d24fb8_584x584.jpeg';

const pizzaData = [
  {
    id: 1,
    name: 'Peperony',
    price: 200,
    image: peperony,
  },
  {
    id: 2,
    name: 'Household',
    price: 200,
    image: household,
  },
  {
    id: 3,
    name: 'Bonboni',
    price: 200,
    image: bonboni,
  },
  {
    id: 4,
    name: 'Pizza Mix',
    price: 200,
    image: pizzaMix,
  },
  {
    id: 5,
    name: 'Bonboni',
    price: 200,
    image: bonboni,
  },
  {
    id: 6,
    name: 'Pizza Mix',
    price: 200,
    image: pizzaMix,
  },
]

const App = () => {
  return (
    <SafeAreaView>
      <StatusBar backgroundColor="#FFF" barStyle={'dark-content'}/>
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.text}> Pizza Shop </Text>
        <Text style={styles.textDes}> Some description {'\n'} Length of which 2 strings</Text>

        <View style={styles.imageContainer}>
          {pizzaData.map((pizza, index) => (
            <CardItem 
              key={pizza.id} 
              text={pizza.name} 
              img={pizza.image} 
              price={pizza.price} 
            />
            ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};


const styles = StyleSheet.create({
  container: {
    height: "100%",
    paddingTop: 15,
    paddingHorizontal: 15,
    backgroundColor: '#8C97D4',
  },  
  text: {
    fontSize: 24,
    fontWeight: '600',
    color: '#FFF'
  },
  textDes: {
    marginTop: 15,
    fontSize: 14,
    color: '#F7F3F5',
  },
  imageContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  },
  mainView: {
    backgroundColor: 'yellow',
  }
});

export default App;
