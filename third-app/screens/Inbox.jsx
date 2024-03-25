import { Avatar, Box, ListItem, Text } from "@react-native-material/core";
import { useState } from "react";
import { FlatList } from "react-native";

const Inbox = ({navigation}) => {

    const [mails,setMails] = useState([
        {id : 1, subject: 'Meeting Today', content: "fisrt dummy data"},
        {id : 2, subject: 'Wts upp', content: "second dummy data"},
        {id : 3, subject: 'Good morning', content: "third dummy data"}
    ])

    const handleTap = (item)=> {
        console.log('tapped')
        console.log(item)
        navigation.push('DetailsScreen',{item})
    }


    return (
        <>
            <Box>
                <FlatList
                    data={mails}
                    keyExtractor={(item) => item.id}
                    renderItem={({item,index}) => ( <ListItem
                        leadingMode="avatar"
                        leading={
                          <Avatar image={{ uri: `https://mui.com/static/images/avatar/${index +1}.jpg` }} />
                        }
                        title= {item.subject}
                        secondaryText={item.content}
                        onPress={() => handleTap(item)}
              />)}
                
                />
            </Box>
        </>
      );
}
 
export default Inbox;