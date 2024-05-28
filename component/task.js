import React from 'react'
import {Text,View,StyleSheet} from 'react-native';

const Task = (props)=>{
    const text = props.text
    return(
        <View style={styles.container}>
            <View style={styles.alignment}>
                <View style={styles.square}></View>
                <Text style={styles.text}>{text}</Text>
            </View>
            <View style={styles.point}></View>
        </View>
    )
}



const styles = StyleSheet.create({
    container:{
        backgroundColor:'white',
        padding:15,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        marginBottom:20,
        borderRadius:10
    },
    alignment:{
        flexDirection:'row',
        alignItems:'center',
        flexWrap:'wrap',
      
    },
    text:{
        marginLeft:5,
        fontWeight:'bold'
    },
    square:{
        width:24,
        height:24,
        backgroundColor:'blue',
        opacity:0.4
    },
    point:{
        width:14,
        height:14,
        borderRadius:7,
        borderColor:'blue',
        borderWidth:4,
        opacity:0.4 
    }
})

export default Task;