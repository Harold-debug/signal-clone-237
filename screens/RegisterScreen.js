import React, {useState, useLayoutEffect} from 'react'
import { KeyboardAvoidingView, StatusBar } from 'react-native'
import { StyleSheet, View } from 'react-native'
import { Input, Button, Text } from 'react-native-elements'
import { auth } from '../firebase';

const RegisterScreen = ({ navigation }) => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [imageUrl, setImageUrl] = useState("");

    useLayoutEffect(() => {
        navigation.setOptions({
            headerBackTitle: "Back to Login",
        })
    }, [navigation])

    const register = () => {
        auth.createUserWithEmailAndPassword(email, password)
            .then(authUser => {
                authUser.user.updateProfile({
                    displayName: name,
                    photoUrl: imageUrl || "https://static.vecteezy.com/system/resources/previews/000/439/863/original/vector-users-icon.jpg"
                })
            })
            .catch((error) => alert(error.message));

    }

    return (
        <KeyboardAvoidingView 
            behavior="padding" 
            style={styles.container}>

            <StatusBar style="light" />
            <Text 
                h3 
                style={{marginBottom: 50}}
            >
                Create a signal account
            </Text>

            <View style={styles.inputContainer}>
                <Input 
                    placeholder="Full Name"
                    autoFocus
                    type="text"
                    value={name}
                    onChangeText= {(text) => setName(text)} 

                />
                <Input 
                    placeholder="email"
                    type="email"
                    value={email}
                    onChangeText= {(text) => setEmail(text)} 

                />
                <Input 
                    placeholder="password"
                    type="password"
                    secureTextEntry
                    value={password}
                    onChangeText= {(text) => setPassword(text)} 

                />
                <Input 
                    placeholder="Profile Picture URL (optional)"
                    type="text"
                    value={imageUrl}
                    onChangeText= {(text) => setImageUrl(text)} 
                    onSubmitEditing={register}

                />

            </View>

            <Button
                containerStyle={styles.button}
                title="register"
                onPress={register}
                raised
            />


        </KeyboardAvoidingView>
    )
}

export default RegisterScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        padding: 10,
        backgroundColor: "white"
    },
    inputContainer: {
        width:300
    },
    button: {
        width: 200,
        marginTop: 10
    },
})
