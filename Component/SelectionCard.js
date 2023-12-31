import { ScrollView, StyleSheet, Text, View,Image} from 'react-native'
import React from 'react'

export default function SelectionCard() {
    return (
        <View>
            <Text style={styles.HeadersText}>SelectionCard</Text>
            <ScrollView style={styles.Container} horizontal
                showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false}>
                <View style={[styles.Cards, styles.CardSel]}>
                <Image style={styles.tinyLogo} source={{
                        uri: "https://cdn.pixabay.com/photo/2017/08/07/22/57/coffee-2608864_1280.jpg",
                    }}
                    />
                </View>
                <View style={[styles.Cards, styles.CardSel]}>
                <Image style={styles.tinyLogo} source={{
                        uri: "https://cdn.pixabay.com/photo/2013/07/12/18/21/tea-153336_1280.png",
                    }}
                    />
                </View>
                <View style={[styles.Cards, styles.CardSel]}>
                <Image style={styles.tinyLogo} source={{
                        uri: "https://cdn.pixabay.com/photo/2014/06/26/16/33/cocktail-377960_1280.png",
                    }}
                    />
                </View>
                <View style={[styles.Cards, styles.CardSel]}>
                <Image style={styles.tinyLogo} source={{
                        uri: "https://cdn.pixabay.com/photo/2021/01/15/17/01/green-5919790_1280.jpg",
                    }}
                    />
                </View>
                <View style={[styles.Cards, styles.CardSel]}>
                <Image style={styles.tinyLogo} source={{
                        uri: "https://cdn.pixabay.com/photo/2017/08/07/22/57/coffee-2608864_1280.jpg",
                    }}
                    />
                </View>
                <View style={[styles.Cards, styles.CardSel]}>
                <Image style={styles.tinyLogo} source={{
                        uri: "https://cdn.pixabay.com/photo/2017/08/07/22/57/coffee-2608864_1280.jpg",
                    }}
                    />
                </View>
                <View style={[styles.Cards, styles.CardSel]}>
                <Image style={styles.tinyLogo} source={{
                        uri: "https://cdn.pixabay.com/photo/2017/08/07/22/57/coffee-2608864_1280.jpg",
                    }}
                    />
                </View>
                
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    HeadersText: {
        fontSize: 24,
        fontWeight: "bold",
        color: "Purple",
        padding: 10

    },
    Container: {
        padding: 8
    },
    Cards: {
        flex: 1,
        justifyContent: 'center',
        alignItems: "center",
        backgroundColor: "yellow",
        margin:10

    },
    CardSel: {
        backgroundColor: "white"

    },
    tinyLogo:{
        width:85,
        height: 85,
        borderRadius: 60
        
        
        
    },
})