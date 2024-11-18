import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
   container:{
        flex:1,
         backgroundColor:"red",
         padding:1 
         },

main:{
    width: "100%",
    height:"30%",
    flexWrap:"wrap",
    justifyContent:"space-around",
    flexDirection: "row"

},
Box1:{
    width: "48%",
    height:60,
    backgroundColor: "rgba(69, 73, 69, 1)",
    borderRadius: 5,
    marginBottom: 2,
    marginRight:1,
    marginTop:3,
    flexDirection:"row"
    
},
image:{
    width:65,
    height:60,
    borderRadius: 5,
},

text:{
    fontSize:15,
    justifyContent:"center",
    alignItems:"center",
    color:"white",
    
  },



})
