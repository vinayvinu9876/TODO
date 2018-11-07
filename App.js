/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';

import Plus from './Plus';

export default class App extends Component{
  render() {
    return (
      <View style={styles.container}>
        
        <View style={styles.main_head}>
         
          <View style={styles.header}>
              <Text style={styles.heading}>Hello</Text>
              <Text style={styles.name}>Jasson</Text>
              <Text style={styles.date}>Sunday , 12th March</Text>
          </View>
          
          <View style={styles.icon_space}>
            <Icon name="list" size={30} color={'blue'} style={styles.icon}/>
          </View>

        </View>

        <View style={styles.progress}>

            <View style={styles.prog_div}>
                <Text style={[styles.num,{marginLeft: '15%'}]}>56</Text>
                <View style={{flexDirection: 'column',marginTop: '4%',marginLeft: '10%'}}>
                  <Text style={styles.prog_Text}>Created</Text>
                   <Text style={styles.prog_Text}>Tasks</Text>
                </View>
            </View>

            <View style={styles.prog_div}>

                <View style={{flexDirection: 'column',marginTop: '4%',marginLeft: '20%'}}>
                   <Text style={styles.prog_Text}>Completed</Text>
                   <Text style={styles.prog_Text}>Tasks</Text>
                </View>

                <Text style={[styles.num,{marginLeft: '10%'}]}>35</Text>              
                

             </View>
        </View>

        <View style={styles.menu}>
          <View style={styles.menu_row}>
              <MenuItem icon_name={"text"} name1={"All"} name2={"Schedule"} no_of_tasks={57} /> 
               <MenuItem icon_name={"user"} name1={"Personal"} name2={"Errands"} no_of_tasks={45} /> 
                
          </View>

           <View style={styles.menu_row}>

              <MenuItem icon_name={"briefcase"} name1={"Work"} name2={"Projects"} no_of_tasks={12} /> 
               <MenuItem icon_name={"shopping-basket"} name1={"Grocery"} name2={"List"} no_of_tasks={7} /> 
               
          </View>

          <View style={styles.menu_row}>
              <MenuItem icon_name={"book"} name1={"College"} name2={""} no_of_tasks={34} /> 
               
                <View style={styles.menu_item}>
                    <Plus />                  
                </View>

                
          </View>


        </View>
      
      </View>
    );
  }
}


class MenuItem extends Component{
  render(){
    return( 
      <View style={styles.menu_item}>
                  <View style={styles.menu_icon}> 
                    <Icon name={this.props.icon_name} size={20} color={'green'} />
                  </View>
                    <View style={styles.menu_item_layout}>
                      <Text style={styles.menu_text}>{this.props.name1}</Text>
                      {
                        this.props.name2!="" && <Text style={styles.menu_text}>{this.props.name2}</Text>
                      }
                      
                      <Text style={[styles.menu_text,styles.menu_task]}>{this.props.no_of_tasks} Tasks</Text>
                    </View>
                  
          </View>

    );
  }
}




const styles = StyleSheet.create({
  container: {
    flex: 1,  
    backgroundColor: 'white',
    
  },
  main_head:{
    flex:1,
    flexDirection: 'row' ,
    maxHeight: '30%',

     
  },
  icon_space:{
    flex:1,
    maxWidth: '30%',
    backgroundColor: 'white',
    marginTop: '10%',

  },
  icon:{
    marginLeft: '60%',
  },
  name:{
    marginLeft: '12%', 
    fontWeight: 'bold',
    fontFamily: 'Roboto',
    color:'blue',
    fontSize: 30,

  },
  header:{

    flex:1,    
    marginTop: '10%',
    maxWidth: '70%',
  },
  heading:{
    
    color:'blue',
    fontSize: 30,
    marginLeft: '10%',
    marginTop: '5%', 
    fontFamily: 'Roboto',

  },
  date:{
    marginLeft: '12%', 
    
    fontFamily: 'Roboto',
    color:'lightgrey',
    fontSize: 10,
  },
  progress:{
    flex:1,
    flexDirection: 'row' ,
    maxHeight: '10%',
    borderTopWidth: 0.5,
    borderColor: 'lightgrey',
    borderBottomWidth: 0.5,
    maxWidth: '100%',
  },
  prog_div:{
    flex:1,
    flexDirection: 'row', 
    maxWidth: '100%',
         
  },
  num:{
    fontSize:25,
    color:'darkblue',
    marginTop: '2%'
  },
  prog_Text:{
    fontSize:10,
    color:'blue',
    marginTop: '5%',
  },
  
  menu:{
    flex:1,
    maxWidth: '100%',
   
  },

  menu_row:{
    flex:1,
    flexDirection: 'row',
    maxWidth: '100%',
    maxHeight: '100%',
    


  },

  menu_item:{
    flex:1,
    flexDirection: 'row',
    maxHeight: '100%',
    maxWidth: '100%',
    borderColor: 'lightgrey',
    borderBottomWidth: 0.5,
    borderLeftWidth: 0.5,
    alignItems: 'center',

    

  },
  
  menu_text:{
    fontWeight: 'normal',
    color:'black',
    fontSize: 15,
    textAlign: 'left',
    
  },
  menu_task:{
    color:'lightgrey',
    fontSize:10
  },
  text_margin:{
      marginTop: '5%', 
  },
  menu_item_layout:{
    
    flexDirection: 'column',
    marginRight: '15%',



  },
  menu_icon:{
    flex:1,
    marginLeft: '20%',
    
  },
  
});
