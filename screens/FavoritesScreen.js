import React from 'react';
import { useSelector } from 'react-redux';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import MealList from '../components/MealList';
import HeaderButton from '../components/HeaderButton';

const FavoritesScreen = props => {

  const favMeals = useSelector(state => state.meals.favoriteMeals);

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
