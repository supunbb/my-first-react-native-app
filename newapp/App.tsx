import React,{useState} from 'react'
import { StyleSheet, Text, View, FlatList, FlatListComponent , Alert } from 'react-native'
import Header from './components/Header';
import ListItem from './components/ListItem';
import AddItem from './components/AddItem';


const App = () => {
  const [items, setItems] = useState([
    {id:'001', text:'Milk'},
    {id:'002', text:'Eggs'},
    {id:'003', text:'Bread'},
    {id:'004', text:'Juice'},
  ]);


const deleteItem = (id: string) =>{
  setItems(prevItems =>{
    return prevItems.filter(item => item.id != id);
  });
};


const addItem = text =>{

  
  setItems(prevItems =>{
    return [{id: "007" , text},...prevItems]
  });
}

  return (
    <View style={styles.container}>
      <Header/>
      <AddItem addItem={addItem}/>
        <FlatList data={items} renderItem={({item})=> (<ListItem item={item} deleteItem = {deleteItem} /> )}
        />


    </View>  
  );
};

const styles = StyleSheet.create({
  container:{
      flex: 1,
      padding: 40
  },
  text:{
    color: 'darkslateblue',
    fontSize: 30
  }
});

export default App