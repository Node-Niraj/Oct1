import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'

export default function Passport() {
  return (
    <View>
      <Text style={styles.mainText}>Welcome to BSB</Text>
      <View>
      {/* <Image
        style={styles.tinyLogo}
        source={{
          uri: "https://cdn.pixabay.com/photo/2017/08/07/22/57/coffee-2608864_1280.jpg",
          
        }}
      /> */}
            <Image
        style={styles.tinyLogo}
          source={require('Oct1/Image/BSB.jpg')}
      />
     <View>
        <Text style={styles.title}>
            Get Refresh!
        </Text>
        <Text style={styles.label}>
        BSB tea team is a certified  by the franchise and also by the government of Telangana state
        </Text>
        <Text style={styles.title}>
            Contect US:
            Our center   
        </Text>
        <Text style={styles.title}>
            Chikatimamidi
        </Text>
     </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create(
    {mainText:{
        fontSize:21,
        fontWeight:"bold",
        color:"Darkgrey"
    },
    tinyLogo:{
        width: 380,
        height: 250,
        margin:5
        
    },
    title:{
        fontSize: 30,
        fontWeight:"bold",
        fontFamily:"Arial",
        color:"black",
        margin:5

    },
    label:{
        fontSize: 20,
        fontWeight:"bold",
        fontFamily:"georgia",
        color:"Gray",
        margin:5

    }


})