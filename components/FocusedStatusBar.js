import { StatusBar } from 'react-native'
import React, { Component } from 'react'
import { useIsFocused } from '@react-navigation/core'

const FocusedStatusBar = () => {
    const isFocused = useIsFocused()

    return (
      <View>
        <Text>FocusedStatusBar</Text>
      </View>
    )
  
}

export default FocusedStatusBar