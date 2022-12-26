import React,{Component} from 'react';
import {Text,View,TouchableOpacity,StyleSheet,TextInput,} from 'react-native';



export default class NoPhoneRecord extends Component{
  constructor(){
super();
this.state={NoPhoneRecord:"",
hourText:"",
messageText:"",
messageText2:"",
messageText3:""

}

  }
render(){
return(
  <View>
  

  <Text> No-Phone Record </Text>
  <TextInput style={styles.inputBox}
  onChangeText={(text)=>{
    this.setState({NoPhoneRecord:text,hourText:"hours",
   messageText:"You went without your phone for " ,
   messageText2:" hours.You planted ",
   messageText3:"seeds.Well Done!"
    })
  }}
  placeholder={" How long you went without your phone"}
  />
  <Text style={styles.displayText}>{this.state.NoPhoneRecord} {this.state.hourText}</Text>
<Text style={styles.messageText}>{this.state.messageText} {this.state.NoPhoneRecord} {this.state.messageText2}
{this.state.NoPhoneRecord} {this.state.messageText3}</Text>

  </View>
)


}


}
const styles=StyleSheet.create({
inputBox:{
width:'90%',
height:40,
borderWidth:4,
marginTop:100,
alignSelf:'center'
},
displayText:{
marginTop:20,
fontSize:30,
alignSelf:'center',
color:"lime"
},
messageText:{
fontSize:20,
color:"cyan",
alignSelf:"center"
}
})