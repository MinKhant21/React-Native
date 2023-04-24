import { View ,Text,Image } from "react-native"
import React from "react"
const App = () => {
  return (
    <View style={{ padding:"auto",height:"auto",width:200,margin:100,border:"1px solid green",borderRadius:10,backgroundColor:"blue" }}>
      <Image source={require("./assets/favicon.png")} style={{ width:100 ,height:100}}>
    
      </Image>
      <Text style={{ 
        color:"white",
        textAlign:'center'
       }}>
        kaung min kahnt
      </Text>
    </View>
  )
}

export default App