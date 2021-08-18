import React, { useLayoutEffect, useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Icon } from 'react-native-vector-icons/FontAwesome'
// import AntIcon from "react-native-vector-icons/AntDesign";

import { Input } from 'react-native-elements'
import { Button } from 'react-native'
// import Icon from '@ant-design/icons';
import{ db } from '../firebase';


const AddChatScreen = ({navigation}) => {
    const [input, setInput] = useState("");

    useLayoutEffect(() => {
         navigation.setOptions({
             title: "add a new Chat",
            headerBackTitle: "chats",
         })

    }, [navigation])

const createChat= async () => {
        await db
        .collection('chats').add({
            chatName: input
        })
        .then(() => {
            navigation.goBack()
        })
        .catch(error => alert(error));

    }
    
    return (
        <View style={styles.container}>
        <Input 
            placeholder='Enter a chat name'
            value={input} 
            onChangeText={Text => setInput(Text)}
            onSubmitEditing={createChat}
           leftIcon={{
                type: 'font-awesome', name: 'comments-o'
             }}

        />
        <Button disabled={!input} onPress={createChat} title='create new chat' />
        </View>
    )
}

export default AddChatScreen

const styles = StyleSheet.create({
    container: {
        backgroundColor:'white',
        padding: 30,
        height: '100%',
    },
})
 