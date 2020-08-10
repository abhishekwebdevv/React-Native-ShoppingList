import React, {useState} from 'react';
import {View, Text, StyleSheet, FlatList, Alert} from 'react-native';
import Header from './components/Header';
import ListItem from './components/ListItem';
import AddItem from './components/AddItem';
// import Test from './components/Test';
// import {uuid} from 'uuidv4';

const App = () => {
  const [items, setItems] = useState([
    {id: Math.random(), text: 'Bread'},
    {id: Math.random(), text: 'Milk'},
    {id: Math.random(), text: 'Eggs'},
    {id: Math.random(), text: 'Cake'},
  ]);

  const deleteItem = (id) => {
    setItems((prevItems) => {
      return prevItems.filter((item) => item.id != id);
    });
  };

  const addItem = (text) => {
    if (!text) {
      Alert.alert('Error', 'Please Enter an Item', [{text: 'OK'}], {
        cancelable: true,
      });
    } else {
      setItems((prevItems) => {
        return [{id: Math.random(), text: text}, ...prevItems];
      });
    }
  };

  return (
    <View style={styles.container}>
      <Header title="Shopping List" />
      <AddItem addItem={addItem} />
      {items.length !== 0 ? (
        <FlatList
          data={items}
          renderItem={({item}) => (
            <ListItem item={item} deleteItem={deleteItem} />
          )}
        />
      ) : (
        <View style={styles.container2}>
          <Text style={{fontSize: 40, fontWeight: 'bold'}}>Opps </Text>
          <Text style={{fontSize: 20}}>
            You Have No Items In Your Shopping List
          </Text>
          <Text style={{fontSize: 20}}>Add Items To Get Started</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  container2: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
  },
});

export default App;
