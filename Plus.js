import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';


export default class Plus extends Component{
	render(){
		return(
			<View style={styles.add_btn}>
             	 <View style={styles.plus}>
                     <Icon name="plus" size={25} color={"white"} />
                </View>
            </View>
		)
	}
}


const styles = StyleSheet.create({

	add_btn:{
    flex:1,
    alignSelf: 'baseline',
    marginTop: '40%',
    marginLeft: '70%',
    marginBottom: '0%',
    backgroundColor: '#ff1493',
    borderTopLeftRadius: 30,
    height: '60%',
    width:'20%',
  },
  plus:{
    color:'pink',
    marginLeft: '30%',
    marginTop:'20%',
  }


	});