import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const FavoritesScreen = props => {
  return (
    <View style={styles.screen}>
      <Text>The Favorites Screen!</Text>
    </View>
  );
};

// A CUSTOM HEADER TITLE NAVIGATION FOR THE SCREEN WHEN CLICKED
FavoritesScreen.navigationOptions = {
  headerTitle: 'Favorite Picks'
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default FavoritesScreen;
