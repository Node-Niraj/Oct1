import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'

export default function Passport() {
  return (
    <View>
      <Text style={styles.mainText}>Passport</Text>
      <View>
      <Image
        style={styles.tinyLogo}
        source={{
          uri: 'https://cdn.pixabay.com/photo/2017/10/05/23/37/ecstatic-2821540_1280.png',
        }}
      />
     <View>
        <Text style={styles.title}>
            Get Cartified!
        </Text>
        <Text style={styles.label}>
        Become a Cloud Solution Architect or a Cloud DevOps Engineer with 360º learning experience.
        </Text>
        <Text style={styles.title}>
            Contect US:
            Our center   
        </Text>
        <Text style={styles.title}>
            HYD | Blore | Pune | Vizag
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
        color:"Darkgrey",
        padding: 8
    },
    tinyLogo:{
        width: 380,
        height: 250,
        
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