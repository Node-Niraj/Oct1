import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function SelectionCard() {
    return (
        <View>
            <Text style={styles.HeadersText}>SelectionCard</Text>
            <ScrollView style={styles.Container} horizontal
             showsVerticalScrollIndicator={false}
             showsHorizontalScrollIndicator={false}>
                <View style={[styles.Cards, styles.CardSel]}>
                    <Text>
                        Tea
                    </Text>
                </View>
                <View style={[styles.Cards, styles.CardSel]}>
                    <Text>
                        Coffee
                    </Text>
                </View>
                <View style={[styles.Cards, styles.CardSel]}>
                    <Text>
                        Ginger Tea
                    </Text>
                </View>
                <View style={[styles.Cards, styles.CardSel]}>
                    <Text>
                        Lemon Tea
                    </Text>
                </View>
                <View style={[styles.Cards, styles.CardSel]}>
                    <Text>
                        Lassis
                    </Text>
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
        padding: 8

    },
    Container: {
        padding: 8
    },
    Cards: {
        flex: 1,
        justifyContent: 'center',
        alignItems: "center",
        width: 100,
        height: 100,
        borderRadius: 5,
        backgroundColor: "yellow",
        margin: 6

    },
    CardSel: {
        backgroundColor: "lightcyan"

    }
})