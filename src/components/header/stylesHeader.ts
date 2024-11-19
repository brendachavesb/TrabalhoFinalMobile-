import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container:{
    
      backgroundColor:"black",
      padding:20
            
    },
    
      header:{
          width: "100%",
          height:80,
          backgroundColor: "Black",
          flexDirection:"row",
          //justifyContent:"center",
          alignItems:"flex-end"
      },

      text:{
        fontSize:15,
        justifyContent:"center",
        alignItems:"center",
       
      },
      text2:{
        fontSize:12,
        justifyContent:"center",
        alignItems:"center",
        color: "white",
       
      },
      Box0:{
        width:40,
        height:40,
        borderRadius: 50,
        justifyContent:"center",
        alignItems:"center",       
        backgroundColor: "rgba(32, 32, 32, 1)",
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
        backgroundColor: "rgb(71, 214, 73)",
        marginLeft: 10
        },

        Box2:{
            width:65,
            height:30,
            borderRadius: 50,
            justifyContent:"center",
            alignItems:"center",
            backgroundColor:"rgba(32, 32, 32, 1)",
            marginLeft: 8
       },
        
      
  
    })