import React,{useState} from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';





const ListItem = ({item, deleteItem}) => {

  return (
    <TouchableOpacity style={styles.ListItem}>
        <View style={styles.ListItemView}>
            <Text style={styles.listItemText}>{item.text}</Text>
            <Icon name="remove" size={20} color="firebrick" onPress={()=> deleteItem(item.id) }/>

        </View>
    </TouchableOpacity>
  )
}



const styles = StyleSheet.create({
    ListItem:{
        padding:15,
        backgroundColor:'#f8f8f8',
        borderBottomWidth: 1,
        borderColor: '#eee'
    },
    
    ListItemView:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    

    },

    listItemText:{
        fontSize:18,
    },
});

export default ListItem;