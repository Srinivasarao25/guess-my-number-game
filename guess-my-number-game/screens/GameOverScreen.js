import { Text, View, Image, StyleSheet ,Dimensions,useWindowDimensions,ScrollView} from 'react-native';
import Title from '../components/Title';
import PrimaryButton from '../components/PrimaryButton';

export default function GameOverScreen({ userNumber, roundsNumber, onStartNewGame }) {
  const {width,height}= useWindowDimensions();
  let imageSize=300;
  if(width<380){
    imageSize=150;
  }
  if(height<400){
    imageSize=80;
  }
  const imageStyle={
    width:imageSize,
    height:imageSize,
    borderRadius:imageSize/2,
  };
  return (
    <scrollView style={styles.screen}>
    <View style={styles.container}>
      <Title>GAME OVER!</Title>
      <Image
        source={{ uri: 'https://media.istockphoto.com/id/1275540697/photo/excited-group-of-friends-sitting-on-sofa.jpg?s=2048x2048&w=is&k=20&c=WEevIg-tQ1_5j9pAUvT-ja1l4G7Oi-aLbs1xRTwGP84=' }}
        style={[styles.image,imageStyle]}
        resizeMode="cover"
      />
      <Text style={styles.st}>
        Your phone needed <Text style={styles.highlight}>{roundsNumber}</Text> rounds to guess the number{' '}
        <Text style={styles.highlight}>{userNumber}</Text>.
      </Text>
      <PrimaryButton onPress={onStartNewGame}>Start New Game</PrimaryButton>
    </View>
    </scrollView>
  );
}
//const deviceWidth=Dimensions.get('window').width;
const styles = StyleSheet.create({
  screen:{
    flex:1,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
  image: {
    marginVertical: 20,
  },
  st: {
    textAlign: 'center',
    fontSize: 24,
    marginVertical: 24,
  },
  highlight: {
    color: 'red',
  },
});
