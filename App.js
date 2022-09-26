import * as React from 'react';
import { StyleSheet, Image, StatusBar, TextInput, TouchableOpacity, Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// import AsyncStorage
// import {AsyncStorageSt} from 'react-native';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import RNFS from 'react-native-fs';

import { useState } from "react";

// var RNFS = require("react-native-fs"); 


function LoginScreen({ navigation }) {
 
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const Login_func = async (value) => {
    alert("Hello "+value);
  }
  return (
    <View style={styles.container}> 
      <Image style={styles.image} source={require("./assets/chatlogo1.png")} />

      {/* <Text style={styles.txt}>
        Login to your account
      </Text> */}

      <StatusBar style="auto" />
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Email."
          placeholderTextColor="#003f5c"
          onChangeText={(email) => setEmail(email)}
        />
      </View>
 
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Password."
          placeholderTextColor="#003f5c"
          secureTextEntry={true}
          onChangeText={(password) => setPassword(password)}
        />
      </View>
 
      <TouchableOpacity>
        <Text style={styles.forgot_button} onPress={() => navigation.navigate('Forgot')}>Forgot Password?</Text>
      </TouchableOpacity>
 
      <TouchableOpacity style={styles.loginBtn} onPress={()=>Login_func(email)}>
        <Text style={styles.loginText}>LOGIN</Text>
      </TouchableOpacity>

      <TouchableOpacity>
        <Text style={styles.newuser_button} onPress={() => navigation.navigate('Register')} >New User?</Text>
      </TouchableOpacity>
    </View>
    
  );
}

// const [r_email, r_name, r_pass] = useState('');


function RegisterScreen( { navigation } ) {


  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");


  const Register_func = async (value) => {
    alert(value + " Registered as new user");
  }
  
 
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require("./assets/chatlogo1.png")} />
      {/* <Text style={styles.txt}>
        Create New Account
      </Text> */}
 
      <StatusBar style="auto" />

      
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Name."
          placeholderTextColor="#003f5c"
          onChangeText={(email) => setName(name)}
        />
      </View>

      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Email."
          placeholderTextColor="#003f5c"
          onChangeText={(email) => setEmail(email)}
        />
      </View>

 
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Password."
          placeholderTextColor="#003f5c"
          secureTextEntry={true}
          onChangeText={(password) => setPassword(password)}
        />
      </View>
 
      <TouchableOpacity style={styles.loginBtn} onPress={ ()=>Register_func(email)} >
        <Text style={styles.loginText} >Register</Text>
      </TouchableOpacity>

      <TouchableOpacity>
        <Text style={styles.newuser_button} onPress={() => navigation.navigate('Login')} >Already a User?</Text>
      </TouchableOpacity>
    </View>
    
  );
}

function ForgotPassScreen( { navigation } ) {
  const [email, setEmail] = useState("");
  
  const Forgot_func = async (value) => {
    alert("Password reset email sent to " +value);
  }

  return (
    
    <View style={styles.container}> 
      <Image style={styles.image} source={require("./assets/chatlogo1.png")} />

      {/* <Text style={styles.txt}>
        Login to your account
      </Text> */}

      <StatusBar style="auto" />
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Email."
          placeholderTextColor="#003f5c"
          onChangeText={(email) => setEmail(email)}
        />
      </View>
 
      <TouchableOpacity style={styles.loginBtn} onPress={()=> Forgot_func(email)}>
        <Text style={styles.loginText}>Reset Password</Text>
      </TouchableOpacity>

      <TouchableOpacity>
        <Text style={styles.newuser_button} onPress={() => navigation.navigate('Login')} >Remember Password?</Text>
      </TouchableOpacity>
    </View>
  );
}


const Stack = createNativeStackNavigator();

function App() {
 
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login" screenOptions={{headerShown:false}} >
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="Forgot" component={ForgotPassScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    alignItems: "center",
    justifyContent: "center",
  },
 
  image: {
    marginBottom: 30,
  },
 
  inputView: {
    backgroundColor: "#ffffff",
    borderRadius: 5,
    width: "70%",
    height: 45,
    marginBottom: 20,
    // alignItems: "center",
    borderBottomColor:'#000000',
    borderBottomWidth:1,
  },
 
  TextInput: {
    
    height: 50,
    flex: 1,
    padding: 10,
    alignItems: "center",
  },
 
  forgot_button: {
    height: 30,
    marginBottom: 30,
  },

  newuser_button: {
    height: 30,
    marginTop: 7,
  },
 
  loginBtn: {
    width: "80%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 1,
    backgroundColor: "#c5c5c5",
  },
  txt: {
    // width: "80%",
    // borderRadius: 25,
    // height: 50,
    // alignItems: "center",
    // justifyContent: "center",
    // marginTop: 40,
    // backgroundColor: "#c5c5c5",
    fontWeight:'bold',
    fontSize:25,
    marginBottom:10
  },
});