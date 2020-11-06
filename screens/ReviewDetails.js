import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { globalStyles } from '../styles/global';
import Card from '../shared/Card';

export default function ReviewDetails({ navigation }) {
  return (
    <View style={globalStyles.container}>
      <Card>
        <Text style={globalStyles.titleText}>
          {navigation.getParam('title')}
        </Text>
        <Text>{navigation.getParam('body')}</Text>
        <Text>{navigation.getParam('rating')}</Text>
      </Card>
    </View>
  );
}
