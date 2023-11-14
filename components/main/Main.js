import React from 'react'
import {useState} from 'react'
import { StyleSheet, TextInput, View, Text, ScrollView, TouchableOpacity } from 'react-native'
import Button from './Button';


export default function Main() {
    const [name, setName] = useState('');

    const displayName = (name)=> {
        if (name)
            alert(`Bem-vindo(a), ${name}!`)
        else 
            alert('Nenhum nome foi digitado!')
    }


    return (
        <View style={styles.container}>
            <Text style={styles.text}>Seja Bem-Vindo ao meu primeiro React-Native App:</Text>
            <View style={styles.form}>
                <TextInput
                    style={styles.input}
                    placeholder="Digite seu nome"
                    onChangeText={(text) => setName(text)}
                    value={name}/>
                    <View style={styles.buttons_view}>
                        <Button 
                            styleButton={{backgroundColor: 'blue', padding: 10, borderRadius: 5,}} 
                            styleText={{color: 'white',fontSize: 16,fontWeight: 'bold',}}
                            onPress={() => displayName(name)}  
                            text={'Começar'}  />
                    </View>
            </View>    
        </View>
    );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center', 
    gap: 30,
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    width: '100%',
    padding: 30
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    width: '80%',
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    width: '100%',
    alignItems: 'center',
    textAlign: 'center',
  },
  button: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  form: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  buttons_view: {

  }
});