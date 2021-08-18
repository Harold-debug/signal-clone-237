import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Avatar, ListItem  } from 'react-native-elements'
import { db } from '../firebase';

const CustomListItem = ({ id, chatName, enterChat}) => {

    const [chatMessages, setChatMessages] = useState([]);

    useEffect(() => {
        const unsubscribe = db
            .collection('chats')
            .doc(id)
            .collection('messages')
            .orderBy('timestamp', 'desc')
            .onSnapshot((snapshot) => 
                setChatMessages(snapshot.docs.map((doc) => doc.data()))
        );
        return unsubscribe;
    });

    return (
        <ListItem 
            onPress={() => enterChat(id, chatName)}
             key ={ id } 
             bottomDivider
        >
            <Avatar
                rounded
                source={{
                    uri: chatMessages?.[0]?.photoURL ||
                        
                        "https://static.vecteezy.com/system/resources/previews/000/439/863/original/vector-users-icon.jpg",
                }}
            />

            <ListItem.Content>
                <ListItem.Title style={{ fontWeight: "800" }}>
                    {chatName}
                </ListItem.Title>
                <ListItem.Subtitle 
                    numberOfLines={1}
                    ellipsizeMode="tail"
                >
                    {chatMessages?.[0]?.displayName}: {chatMessages?.[0]?.message}
                </ListItem.Subtitle>
            </ListItem.Content>
        </ListItem>
    );
};

export default CustomListItem

const styles = StyleSheet.create({})
