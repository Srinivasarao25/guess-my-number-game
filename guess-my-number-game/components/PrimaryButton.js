import {Text,View,StyleSheet,Pressable} from 'react-native';
function PrimaryButton({children,onPress}){
  return(
    <View style={styles.obutton}>
    <Pressable style={({pressed})=>pressed?[styles.ibutton,styles.pressed]:styles.ibutton} onPress={onPress} android_ripple={{color:'#640233'}}>
    <Text style={styles.text}>{children}</Text>
      </Pressable>
     </View>
  );
}
export default PrimaryButton;
const styles=StyleSheet.create({
  obutton:{
 borderRadius:28,
 margin:4,
 overflow:'hidden',
  },
  ibutton:{
    backgroundColor:'#9F1111',
    paddingVertical:8,
    paddingHorizontal:16,
    elevation:2,
  },
  text:{
    color: 'white',
    textAlign:'center',
  },
  pressed:{
    opacity:0.75,
  },
})