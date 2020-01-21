import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

function SplashScreen(props) {
  return (
    <View style={styles.container}>
      <Icon name="cat" style={styles.icon}></Icon>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(255,255,255,1)',
    justifyContent: 'center',
  },
  icon: {
    color: 'rgba(36,135,255,1)',
    fontSize: 200,
    alignSelf: 'center',
  },
});

export default SplashScreen;
