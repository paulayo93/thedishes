import React, { useState, useEffect } from "react";
import RestaurantInfoCard from "../components/restaurant-info-card.component";
import { Searchbar } from "react-native-paper";
import styled from "styled-components/native";
import { StatusBar, FlatList } from "react-native";
import { Spacer } from "../../components/spacer/spacer.component";
import {
  restaurantRequest,
  restaurantsTransform,
} from "../../services/restaurants/restaurants.service.component";
// todo: make the card item with flatlist

const Restaurants = () => {
  const [restaurantItems, setRestaurantItems] = useState([]);
  const getRest = () => {
    restaurantRequest()
      .then(restaurantsTransform)
      .then((data) => {
        //  console.log(data)
        setRestaurantItems(data);
      });
  };

  //  console.log(items)

  useEffect(() => {
    getRest();
  }, []);

  return (
    <SafeArea>
      <SearchContainer>
        <Searchbar />
      </SearchContainer>

      <RestaurantList
        data={restaurantItems}
        renderItem={({ item }) => (
          <Spacer position="down" size="large">
            <RestaurantInfoCard restaurant={item} />
          </Spacer>
        )}
        keyExtractor={(item) => item.name}
      />
    </SafeArea>
  );
};

const SafeArea = styled.SafeAreaView`
  flex: 1;
  ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`};
`;

const SearchContainer = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;

// const RestaurantListContainer = styled.View`
//   flex: 1;
//   padding: ${(props) => props.theme.space[3]};
//   background-color: white;
// `;

const RestaurantList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 16,
  },
})``;

export default Restaurants;
