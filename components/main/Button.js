import React from 'react'
import {TouchableOpacity, Text, StyleSheet } from 'react-native'


export default function Button({styleButton, styleText, onPress, text}) {
  return (
    <TouchableOpacity style= {styleButton} onPress={onPress}>
        <Text style={styleText}>{text}</Text>
    </TouchableOpacity> 
  )
}


