import { Icon, Text } from "@react-native-material/core";
import { useNavigation } from "@react-navigation/native";
import { StyleSheet, View } from "react-native";


const AppBar = ({title}) => {

    const navigation = useNavigation()

    const menuClicked=() => {
        console.log('clicked')
        navigation.openDrawer()

    }
    return ( 
        <View style={styles.header}>
            <Icon name = "menu" size={26} style={styles.icon} color="white" 
            onPress={menuClicked}/>            
            
            <Text variant="h5" color="white">{title}</Text>
        </View>
     );
}

const styles= StyleSheet.create({
    header:{
        width: '100%',
        height:60,
        flexDirection: 'row',
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'green',
        left:-16
    },
    icon:{
        position:'absolute',
        left:3

    }

    
})
 
export default AppBar;