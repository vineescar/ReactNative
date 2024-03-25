import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Drafts from "../screens/Drafts";
import AppBar from "../components/AppBar";



const Stack = createNativeStackNavigator()

const DraftsStacks = () => {
    return ( 

            <Stack.Navigator>
                <Stack.Screen 
                    name="Draftsscreen" 
                    component={Drafts}
                    options={{ 
                        headerTitle: (props) => <AppBar title="Drafts" /> 
                    }} 
                />
            </Stack.Navigator>
         
     );
}
 
export default DraftsStacks;