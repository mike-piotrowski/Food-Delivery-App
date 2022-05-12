import { View, Text } from "react-native";
import React from "react";
import About from "../components/restaurantDetail/About";
import { Divider } from "react-native-elements/dist/divider/Divider";
import MenuItems from "../components/restaurantDetail/MenuItems";
import ViewCart from "../components/restaurantDetail/ViewCart";

const foods = [
  {
    title: "Lasagna",
    description: "With butter lettuce, tomato and sauce bechamel",
    price: "$13.50",
    image: "https://www.modernhoney.com/wp-content/uploads/2019/08/Classic-Lasagna-13-scaled.jpg",
  },
  {
    title: "Tandoori Chicken",
    description: "Amazing Indian dish with tenderloin chicken off the sizzles",
    price: "$19.20",
    image:
      "https://www.cubesnjuliennes.com/wp-content/uploads/2019/11/Tandoori-Chicken-1-500x375.jpg",
  },
  {
    title: "Chilaquiles",
    description: "Chilaquiles with cheese and sauce. A delicious mexican dish",
    price: "$14.50",
    image:
      "https://cdn.apartmenttherapy.info/image/upload/f_auto,q_auto:eco/k%2FPhoto%2FRecipes%2F2019-05-How-To-Chilaquiles%2FJoeLingeman_2019-04-22_PHOTO_Kitchn65454_HT_Chilaquiles",
  },
  {
    title: "Chicken Ceasar Salad",
    description:
      "Classic Greek Ceasar Salad with grilled chicken and treated with some extra virgin olive oil",
    price: "$11.30",
    image:
      "https://www.simplyrecipes.com/thmb/39mxRWIwd6OvqDnmKrPv3wLnYyQ=/2000x1333/filters:fill(auto,1)/__opt__aboutcom__coeus__resources__content_migration__simply_recipes__uploads__2018__05__Grilled-Chicken-Caesar-LEAD-HORIZONTAL-6afbf91fb16b4a02a622a3ecd7d101e5.jpg",
  },
  {
    title: "Pepperoni Pizza",
    description: "Napoli style pizza with cheese and pepperoni sausage slices as a topping",
    price: "$13.20",
    image:
      "https://cdn.shopify.com/s/files/1/0944/3476/articles/pepperoni-pizza.jpg?crop=center&height=800&v=1587043733&width=800",
  },
];

export default function RestaurantDetail({ route, navigation }) {
  return (
    <View>
      <About route={route} />
      <Divider width={1.8} style={{ marginVertical: 20 }} />
      <MenuItems restaurantName={route.params.name} foods={foods} />
      <ViewCart navigation={navigation} />
    </View>
  );
}
