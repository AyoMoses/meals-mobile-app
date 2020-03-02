import React from 'react';
import { View, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import MealList from '../components/MealList';
import HeaderButton from '../components/HeaderButton';
import DefaultText from '../components/DefaultText';

const FavoritesScreen = props => {

  const favMeals = useSelector(state => state.meals.favoriteMeals);

  if(favMeals.length === 0 || !favMeals) {
    return <View style={styles.fallBackTextWrap}>
      <DefaultText>No favorite meals found. Start by Adding some!</DefaultText>
    </View>
  }

  return <MealList listData={favMeals} navigation={props.navigation} />;
};

// A CUSTOM HEADER TITLE NAVIGATION FOR THE SCREEN WHEN CLICKED
FavoritesScreen.navigationOptions = navData => {
  return {
    headerTitle: 'Favorite Picks',
    headerLeft: (
      // WE ADD THE MENU ICON WITH THE CUSTOM HEADERBUTTON YOU CAN USE PLATFORM API TO CHANGE LOOK OF ICON ON DEVICES
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item title="menu" iconName="ios-menu" onPress={() => {
          navData.navigation.toggleDrawer();
          // OPEN THE DRAWER AND CLOSE
        }} />
      </HeaderButtons>
    )
  }
}

const styles = StyleSheet.create({
  fallBackTextWrap: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default FavoritesScreen;
