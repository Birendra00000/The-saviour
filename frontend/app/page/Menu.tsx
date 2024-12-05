import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

interface MenuButtonProps {
  text: string;
  iconName: keyof typeof FontAwesome.glyphMap; // Enforcing valid FontAwesome icon names
}

const MenuButton: React.FC<MenuButtonProps> = ({ text, iconName }) => {
  return (
    <TouchableOpacity style={styles.button}>
      <FontAwesome name={iconName} size={24} color="#34A853" style={styles.icon} />
      <Text style={styles.buttonText}>{text}</Text>
    </TouchableOpacity>
  );
};

export default function MainMenu() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Main Menu</Text>
      <View style={styles.row}>
        <MenuButton text="Instructions" iconName="info-circle" />
        <MenuButton text="Register Number" iconName="plus-circle" />
      </View>
      <View style={styles.row}>
        <MenuButton text="View Members" iconName="eye" />
        <MenuButton text="Delete Number" iconName="trash" />
      </View>
      <View style={styles.row}>
        <MenuButton text="Edit SOS Message" iconName="edit" />
        <MenuButton text="Edit Timer" iconName="clock-o" />
      </View>
      <View style={styles.row}>
        <MenuButton text="Rate Us" iconName="smile-o" />
        <MenuButton text="Share" iconName="share-alt" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 15,
  },
  button: {
    flex: 1,
    backgroundColor: '#DFF2E3',
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 15,
    marginHorizontal: 5,
  },
  icon: {
    marginBottom: 5,
  },
  buttonText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#000',
  },
});
