
import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const FlatCard = () => {
    return (
        <View>
            <Text style={styles.headingtext}>FlatCard</Text>
            <View style={styles.container}>
                <View style={[styles.card,styles.onecard]}>
                    <Text style={{fontSize:21}}> Hyd </Text>
                </View>
                <View style={[styles.card,styles.twocard]}>
                    <Text style={{fontSize:21}}> Blore </Text>
                </View>
                <View style={[styles.card,styles.threecard]}>
                    <Text style={{fontSize:21}}> Vizag </Text>
                </View>
                <View style={[styles.card,styles.threecard]}>
                    <Text style={{fontSize:21}}> Pune </Text>
                </View>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    headingtext: {
        fontSize: 24,
        fontWeight: "bold",
        padding: 8,
        color:'grey'
        
        

    },
    container: {
        flex:1,
        flexDirection: 'row',
        padding:8
    
    },
    card: {
        flex:1,
        width: 100,
        height: 100,
        justifyContent:"center",
        alignItems: 'center',
        margin: 8,
        borderRadius:4,
        borderColor:'pink',
        

    },
    onecard: {
        backgroundColor: "lightgrey",
     
    },
    twocard: {
        backgroundColor: "pink",
     
    },
    threecard: {
        backgroundColor: "lightblue",
     
    }
})

export default FlatCard;