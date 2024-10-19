import {View,StyleSheet,Dimensions} from 'react-native';
export default function Card({children}){
  return(
    <View style={styles.inputContainer}>{children}</View>
  );
}
const deviceWidth=Dimensions.get('window').width;
const styles=StyleSheet.create({
   inputContainer: {
    marginTop: deviceWidth<380?18:36,
    marginHorizontal: 24,
    padding: 16,
    backgroundColor: '#72063c',
    borderRadius: 8,
    elevation: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
})