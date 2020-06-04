import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import Colors from '../../styles/Colors';

export default CalendarItem = ({ day, weekDay, selected }) => {
  return (
    <View style={selected ? Styles.today : Styles.item}>
      <Text style={Styles.day}>{day}</Text>
      <Text style={Styles.weekDay}>{weekDay}</Text>
    </View>
  );
}

const Styles = StyleSheet.create({
  item: {
    backgroundColor: Colors.cinza,
    height: 60,
    width: 60,
    margin: 10,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center'
  },
  today: {
    backgroundColor: Colors.azulClaro,
    height: 60,
    width: 60,
    margin: 10,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  day: {
    fontSize: 20,
    color: Colors.primaryDark
  },
  weekDay: {
    color: Colors.cinzaEscuro,
    fontWeight: 'bold'
  }
});