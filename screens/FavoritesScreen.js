import React from 'react';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import MealList from '../components/MealList';
import HeaderButton from '../components/HeaderButton';
import { MEALS } from '../data/dummy-data';

const FavoritesScreen = props => {
  const favMeals = MEALS.filter(meal => meal.id === 'm1' || meal.id === 'm2') 
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


export default FavoritesScreen;
