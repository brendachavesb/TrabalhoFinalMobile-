import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container:{
      flex: 1,
      backgroundColor:"black"
            
    },
    
      header:{
          width: "100%",
          height: 45,
          backgroundColor: "Black",
          flexDirection:"row",
          //justifyContent:"center",
          alignItems:"flex-end"
      },

      text:{
        fontSize:15,
        justifyContent:"center",
        alignItems:"center",
        zIndex:1,
      },
      text2:{
        fontSize:12,
        justifyContent:"center",
        alignItems:"center",
        color: "white",
        zIndex:1,
        
      },
      Box0:{
        width:40,
        height:40,
        borderRadius: 50,
        justifyContent:"center",
        alignItems:"center",       
        backgroundColor: "rgba(69, 73, 69, 1)",
        marginLeft: 2
        },

        image:{
            width:40,
            height:40,
            borderRadius: 50,
        },

      Box1:{
        width:50,
        height:30,
        borderRadius: 50,
        justifyContent:"center",
        alignItems:"center",       
        backgroundColor: "rgb(7, 186, 10)",
        marginLeft: 10
        },

        Box2:{
            width:65,
            height:30,
            borderRadius: 50,
            justifyContent:"center",
            alignItems:"center",
            backgroundColor:"rgba(69, 73, 69, 1)",
            marginLeft: 8
            },
        
      
  
    })