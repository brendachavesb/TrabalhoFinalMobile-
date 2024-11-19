import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
   container:{

        backgroundColor:"black",
         //padding:1 
         },

main:{
    width: "100%",
    height:"29%",
    flexWrap:"wrap",
    justifyContent:"space-around",
    flexDirection: "row"
},
Box1:{
    width: "48%",
    height:60,
    backgroundColor: "rgba(32, 32, 32, 1)",
    borderRadius: 5,
    marginBottom: 5,
    //marginRight:1,
    marginTop:5,
    flexDirection:"row",
    alignItems:"center",
    
},
image:{
    width:60,
    height:60,
    borderRadius: 5,
},

text:{
    fontSize:13,
    color:"white",
    fontWeight:"bold",
    marginLeft:2,

 }

})
