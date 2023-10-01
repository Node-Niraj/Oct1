import React from 'react'
import { Text, View,StyleSheet, SafeAreaView, ScrollView } from 'react-native'
import FlatCard from './Component/FlatCard'
import SelectionCard from './Component/SelectionCard'
import Passport from './Component/Passport'
import ActionCard from './Component/ActionCard'

const App =()=>{
  return( 
<SafeAreaView>
  <ScrollView>
     <FlatCard />
     <SelectionCard />
     <Passport />
     <ActionCard />
  </ScrollView>
</SafeAreaView>

  )}
export default App;