import { StatusBar } from 'react-native'
import React, { Component } from 'react'
import { useIsFocused } from '@react-navigation/core'

const FocusedStatusBar = (props) => {
    const isFocused = useIsFocused()

    return isFocused ? <StatusBar animated={true} {...props}/> : null;
  
}

export default FocusedStatusBar