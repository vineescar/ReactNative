import { Button, HStack, ListItem, Spacer, Text, VStack } from "@react-native-material/core";

const Details = ({route}) => {
    
     const {item} = route.params

    console.log(item)

    return (  
        <VStack m={20} spacing={20}>
            <ListItem title={item.content} />
            <HStack mt={20}>
                <Button title="Delete" />
                <Spacer/>
                <Button title="Close" />
            </HStack>
        </VStack>
    );
}
 
export default Details;