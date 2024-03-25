import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Inbox from "../screens/Inbox";
import Details from "../screens/Detail";
import AppBar from "../components/AppBar";


const Stack = createNativeStackNavigator()



const InboxStack = () => {
    return ( 
        <Stack.Navigator>
           <Stack.Screen 
            name="Inboxscreen" 
            component={Inbox} 
            options={{ 
                headerTitle: (props) => <AppBar title="InBox" /> 
            }} 
            />

            <Stack.Screen name="DetailsScreen" component={Details}/>
        </Stack.Navigator>
     );
}
 
export default InboxStack;