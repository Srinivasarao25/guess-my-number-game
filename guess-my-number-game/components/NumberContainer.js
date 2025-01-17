import {View,Text,StyleSheet,Dimensions} from 'react-native';
export default function NumberContainer({children}){
  return(
    <View style={styles.container}>
    <Text style={styles.numberText}>{children}</Text>
    </View>
  )
}
const deviceWidth=Dimensions.get('window').width;
const styles= StyleSheet.create({
  container:{
    borderWidth:4,
    borderColor:'yellow',
    padding:deviceWidth<380?12:24,
    borderRadius:8,
    margin:deviceWidth<380?12:24,
    alignItems:'center',
    justifyContent:'center',
  },
  numberText:{
    color:'yellow',
    fontSize:deviceWidth<380?28:36,
    fontWeight:'bold',
  },
});