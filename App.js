import {StyleSheet, Text, View,SafeAreaView} from 'react-native'; 
import {Ionicons, MaterialCommunityIcons, FontAwesome} from "react-native-vector-icons";

const App = () => {
  return (
    <SafeAreaView style={{ backgroundColor:"#F2F2F2", flex:1}}>
      <View style={styles.headers}>
        <Text style={styles.heading}>
          NuG Pay 
        </Text>
      </View>
      <View style={styles.center}>
        <View style={styles.box}>
          
          <Text>
            Your Balance
          </Text>
          <Text>
            7000 KS
          </Text>
          <Text>
            Pay App
          </Text>

        </View>
      </View>
     <View style={styles.wrapperBox} >
        <View style={styles.box1}>
          <Text>
            Box1
          </Text>
          <Ionicons name="ios-arrow-down-circle-outline" size={35} color={"#5097fa"}/>
        </View>
        <View style={styles.box2}>
        <Text>
            Box2
          </Text>
        </View>
     </View>

     <View styl={styles.center}>
     <View style={styles.comment}>
        <Text>
          Hello , This is comment
        </Text>
      </View>
     </View>
      
    </SafeAreaView>

  )
}

const styles = StyleSheet.create(
    {
      box:{
        padding:100,
        width:"90%",
        height:100,
        
        backgroundColor:'white',
        borderRadius:15
      },
      comment:{
        padding:10,
        marginTop:10,
        backgroundColor:'white',
        // width:"95%",
        alignItems:"center",
        borderRadius:10,
        marginRight:20,
        marginLeft:22,

        // flex:1
      },
      wrapperBox:{
        // alignItems:'center',
        display:"flex",
        flexDirection:'row',
        marginTop:'5%',
        justifyContent:'space-between',
        

      },
      box1:{
        padding:80,
        backgroundColor:'white',
        // width:"95%",
        borderRadius:15,
        marginLeft:25,
        marginRight:10
      },
      box2:{
        padding:80,
        backgroundColor:'white',
        borderRadius:15,
        // width:"95%",
        marginRight:25,
      },
      heading:{
        alignItems:"center",
        fontSize:30,
        fontWeight:"bold",
      },
      headers:{
        alignItems:'center',
        marginTop:10,
        marginBottom:10
      },
      center:{
        alignItems: "center",
      }
    }
)

export default App