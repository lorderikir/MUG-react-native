import React from 'react'
import { 
  Button,
  StyleSheet,
  View 
} from 'react-native';
import { 
  Container, 
  Header, 
  Title, 
  Content, 
  Footer, 
  FooterTab, 
  Left, 
  Right, 
  Body, 
  Icon,
  Text
} from 'native-base';

class HomeView extends React.Component{
  render(){
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <Container>
          <Content>
            <Text>Open up App.js to start working on your app!</Text>
            <Text>Changes you make will automatically reload.</Text>
            <Text>Shake your phone to open the developer menu.</Text>
            <Button onPress={()=>{navigate('Disclaimer')}} title="Disclaimer"/>
            <Button onPress={()=>{navigate('Unit', {unitCode: "FIT1045"})}} title="FIT1045"/>
          </Content>
        </Container>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default HomeView