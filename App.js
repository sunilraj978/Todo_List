import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import { KeyboardAvoidingView, Platform, StyleSheet, Text, TextInput, Touchable, TouchableOpacity, View } from 'react-native';
import Task from './component/task'


export default function App() {
  const [task,setTask] = useState();
  const [taskItems,setTaskItems] = useState([]);

  const valueChange = () =>{
    setTaskItems([...taskItems,task])
    setTask('');
  }
  const deleteItems = (index)=>{
    let copyItem = [...taskItems]
    copyItem.splice(index,1)
    setTaskItems(copyItem)
}
  return (
    <View style={styles.container}>
      <View style={styles.container2}>
        <Text style={styles.title}>Today's tasks</Text>
        <View style={styles.items}>
          {
            taskItems.map((item,index)=>{
              return (
                <TouchableOpacity key={index}  onPress={()=>deleteItems(index)}>
                 <Task text={item} />
                </TouchableOpacity>
              ) 
            })
          }
        </View>
        <KeyboardAvoidingView
        behavior={Platform.OS === 'ios'?'padding':'height'} style={styles.wrapper}>
          <TextInput value={task} onChangeText={text=>setTask(text)} style={styles.text1} placeholder={'Write a task'} />
          <TouchableOpacity onPress={valueChange}>
            <View style={styles.round}>
              <Text style={styles.round1}>+</Text>
            </View>
          </TouchableOpacity>
        </KeyboardAvoidingView>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8EAED',
  },
  container2:{
  paddingTop:80,
  paddingHorizontal:20
  },
  title:{
    fontSize:24,
    fontWeight:'bold'
  },
  wrapper:{
    position:'absolute',
    top:620,
    width:'100%',
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center'
  },
  text1:{
    paddingVertical:15,
    paddingHorizontal:15,
    width:250,
    backgroundColor:'white',
    borderColor:'black',
    borderWidth:1,
    borderRadius:20
  },
  round:{
    width:60,
    height:60,
    backgroundColor:'white',
    borderRadius:60,
    alignItems:'center',
    justifyContent:'center'
  }
});
