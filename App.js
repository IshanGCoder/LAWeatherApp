import React from 'react';
import {Component} from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';

export default class App extends Component {
  constructor() {
    super();
      this.state = {weather:''}
  }
  getWeather = async () => {
    var url = 'https://fcc-weather-api.glitch.me/api/current?lat=34&lon=-118'
    return fetch(url)
    .then(response => response.json())
    .then(responsejson => {
      this.setState({weather: responsejson})
    })
    .catch(Error => {console.error(Error)})
  }
  componentDidMount = () => {
    this.getWeather()
  }
  render() {
    if (this.state.weather == '') {
      return(
        <View><Text>Loading...</Text></View>
      )
    }
    return ( 
      <View style={styles.container}> 
      <View style={styles.subContainer}> 
      <Text style={styles.title}>Weather in Los Angeles</Text> 
      <Image style={styles.cloudImage} source={this.state.weather.weather[0].icon}/> 
      <View style={styles.textContainer}> 
      <Text style={{ fontSize: 18}}> Temperature: {this.state.weather.main.temp}&deg;C</Text> 
      <Text style={{ fontSize: 20, margin:10}}> Humidity: {this.state.weather.main.humidity}% </Text> 
      <Text style={{fontSize: 20}}> {this.state.weather.weather[0].description} </Text>         </View> 
      </View> 
    </View>
    )
  }
}


const styles = StyleSheet.create({ 
  container: { flex:1 }, 
  subContainer : { flex: 1, borderWidth: 1, alignItems: 'center' }, 
  title:{ marginTop: 50, fontSize: 30, fontWeight: '550' }, 
  cloudImage :{ width: 200, height: 200, marginTop: 30 }, 
  textContainer : { flex: 1, alignItems: 'center', 
  flexDirection:'column'} 
  });
