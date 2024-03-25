import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Button, FlatList, ImageBackground, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { ScrollView } from 'react-native';

export default function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState('');
  const [counter, setCounter] = useState(0);
  const [months, setMonths] = useState([
    { name: 'January', id: 1 },
    { name: 'February', id: 2 },
    { name: 'March', id: 3 },
    { name: 'April', id: 4 },
    { name: 'May', id: 5 },
    { name: 'June', id: 6 },
    { name: 'July', id: 7 },
    { name: 'August', id: 8 },
    { name: 'September', id: 9 },
    { name: 'October', id: 10 },
    { name: 'November', id: 11 },
    { name: 'December', id: 12 }
  ]);

  const handlePress = () => {
    setCount(count + 1);
  };

  const handleButton = () => {
    setCounter(counter + 1);
  };

  const handleInput = (val) => {
    setText(val);
  };

  const handleDelete = (monthx) =>{
    console.log("handle delete")
    setMonths((previousmonth)=>{
      return previousmonth.filter((month)=>{
        return month.id != monthx.id
      })
    })
  }

  return (
    <ImageBackground source={require('./assets/car.jpg')} style={styles.imageBackground} resizeMode="cover">
      <ScrollView>
      <View style={styles.container}>
        <Text style={styles.infoText} onPress={handlePress}>
          vinu your count is {count} + {counter} + {text}
        </Text>
        <Text style={styles.infoText2} onPress={handlePress}>
          vinu your count is {count} + {counter} + {text}
        </Text>
        <StatusBar style="auto" />
        <Button color='purple' title='Click Me' onPress={handleButton} />
        <TextInput style={styles.textInput} placeholder="enter name" onChangeText={handleInput} />
      </View>
      { <SafeAreaView style={styles.monthsContainer}>
        {months.map((month) => (
          <View key={month.id} style={styles.monthContainer}>
            <TouchableOpacity onPress={() => handleDelete(month)}>
            <Text style={styles.monthText}>{month.name}</Text>
            </TouchableOpacity>
          </View>
        ))}
      </SafeAreaView> }
      </ScrollView>
  
      <FlatList
        data={months}
        horizontal
        renderItem={({ item }) => (
          <View style={styles.monthContainer2}>
            <TouchableOpacity>
            <Text style={styles.monthText}>{item.name}</Text>
            </TouchableOpacity>
          </View>
        )}
        keyExtractor={item => item.id.toString()}
      />

    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  imageBackground: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    flex:1,
    backgroundColor: 'rgba(255, 255, 255, 0.5)', // Adding some transparency to see the background image
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  infoText: {
    flex:2,
    fontWeight: 'bold',
    backgroundColor: 'green',
    padding: 20,
    marginBottom: 20,
  },
  infoText2: {
    flex:1,
    fontWeight: 'bold',
    backgroundColor: 'red',
    padding: 20,
    marginBottom: 20,
  },
  textInput: {
    borderWidth: 1,
    borderColor: 'black',
    width: 300,
    height: 30,
    padding: 5,
    marginBottom: 20,
  },
  monthsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'left',
    justifyContent: 'left',
    margin:0,
    backgroundColor:'green'
    
  },
  monthContainer: {
    marginRight: 100,
    margin:10,
    padding: 10,
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    borderRadius: 0,
    width: '50%', // Set width to full screen
  },
  monthText: {
    fontWeight: 'bold',
    width:150
  },
  monthContainer2: {
    
    margin: 10, // Adjust margin as needed
    padding: 10,
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    borderRadius: 10,
  },
  
});
