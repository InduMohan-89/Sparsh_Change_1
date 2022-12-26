import React,{Component} from 'react';
import {Text,View,TouchableOpacity,StyleSheet} from 'react-native';



export default class Cause extends Component{
render(){
return(
  <View style = {{marginTop: 100}}>
<Text>The purpose of this app is to motivate people to get healthier and spend more time out of their devices. 
    This app does this with the </Text>

<TouchableOpacity style = {styles.exerciseButton}
onPress = {()=>{
    this.props.navigation.navigate("ExerciseR")
}}
>
    <Text>Exercise Record</Text>
</TouchableOpacity>
<Text style= {{alignSelf:'center'}}>and</Text>
<TouchableOpacity style = {styles.phoneButton}
onPress = {()=> this.props.navigation.navigate('NoPhoneR')}
>
    <Text>No phone Record</Text>
</TouchableOpacity>

</View>
)


}
}
const styles=StyleSheet.create({
exerciseButton:{
  backgroundColor:'cyan',
  width:110,
  alignSelf:'center',
  
},
phoneButton:{
  backgroundColor:'cyan',
  width:120,
  alignSelf:'center'
},
and:{
  alignSelf:'center'
}

})