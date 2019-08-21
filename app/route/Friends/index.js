import React from 'react'
import {View, Text, StyleSheet} from 'react-native'

export default class Friends extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={{height: 80, justifyContent: 'center', alignItems: 'center'}}>
          <Text style={{fontSize: 30, color: '#fff'}}>Friends页面</Text>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#191B2A'
  }
})