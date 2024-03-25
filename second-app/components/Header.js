import { StyleSheet, View,Text } from 'react-native';


export const Header = () => {
    return (
        <View style={styles.header}>
            <Text style={styles.headerText}>Shopping List</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        backgroundColor:'cornflowerblue',
        height:60,
        alignItems:'center',
        justifyContent:'center'
    },
    headerText: {
        fontWeight:'bold',
        color:'#fff',
        fontSize:20
    }
})