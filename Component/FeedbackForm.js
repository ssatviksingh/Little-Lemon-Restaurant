import * as React from 'react';
import { Text, StyleSheet, ScrollView,TextInput, KeyboardAvoidingView, Platform,Alert} from 'react-native';

export default function FeedbackForm()
{
    const [firstName , onChangeFirstName]= React.useState();
    const [ lastName , onChangeLastName]= React.useState();
    const [ message , onChangeMessage]= React.useState();
    const [ phoneNumber , onChangePhoneNumber]= React.useState();

    return (
        <KeyboardAvoidingView 
        style={styles.container}
        behavior={Platform.OS==="android"?"Padding":"Position"}>    
        <ScrollView style={styles.container} 
                    keyboardDismissMode="on-drag">
            <Text style={styles.headingSection}>
            How Was Your Visit To Little Lemon ?
            </Text>
            <Text style={styles.infoSection}>
            Little Lemon is a charming neighborhood bistro that serves simple food
            and classic cocktails in a lively but casual environment. We would love
            to hear more about your experience with us!
            </Text>

            <TextInput 
            secureTextEntry={true}
            value={firstName } 
            keyboardType='default'
            onChangeText={onChangeFirstName} 
            style={styles.input} 
            placeholder='First Name'
            onFocus={() => Alert.alert("First Name is Selected")}
            onBlur={() => Alert.alert("First Name is out of Focus")}
            />

            <TextInput 
            value={lastName} 
            onChangeText={onChangeLastName} 
            style={styles.input} 
            placeholder='Last Name'
            />

            <TextInput 
            value={message} 
            onChangeText={onChangeMessage} 
            style={styles.messageInput} 
            placeholder='Please Leave a Feedback'
            multiline={true}
            maxLength={100}
            />

            <TextInput 
            value={phoneNumber} 
            keyboardType='phone-pad'
            onChangeText={onChangePhoneNumber} 
            style={styles.input} 
            placeholder='Phone Number'
            maxLength={10}
            />

            </ScrollView> 
            </KeyboardAvoidingView>
    )
}

const styles=StyleSheet.create(
{
    container:{
        flex:1,
        backgroundColor:'#495e57'
    },
    input:{
        height:40,
        margin:12,

        padding:10,
        fontSize:16,
        borderColor:'EDEFEE',
        backgroundColor:'#f4ce14'
    },
    messageInput:{
        height:100,
        margin:12,

        padding:10,
        fontSize:16,
        backgroundColor:'#f4ce14'  
    },
    infoSection:{
        padding:20,
        fontSize:20,
        marginVertical:8,
        color:'white',
        textAlign:'center',
    },
    headingSection:{
        padding:28,
        fontSize:30,
        marginVertical:8,
        color:'white',
        textAlign:'center',
        backgroundColor:'#495E57'
    }

});