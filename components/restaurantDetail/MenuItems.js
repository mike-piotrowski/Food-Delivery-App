import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import React from "react";
import { Divider } from "react-native-elements/dist/divider/Divider";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { useDispatch, useSelector } from "react-redux";

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
    description: "Chilaquiles with cheese and sauce.  A delicious mexican dish",
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

const styles = StyleSheet.create({
  menuItemStyle: {
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 20,
  },

  titleStyle: {
    fontSize: 19,
    fontWeight: "600",
  },
});

export default function MenuItems({ restaurantName }) {
  const dispatch = useDispatch();
  const selectItem = (item, checkboxValue) =>
    dispatch({
      type: "ADD_TO_CART",
      payload: { ...item, restaurantName: restaurantName, checkboxValue: checkboxValue },
    });

  const cartItems = useSelector((state) => state.cartReducer.selectedItems.items);

  const isFoodInCart = (food, cartItems) => (
    Boolean(cartItems.find((item) => item.title === food.title))
  );

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      {foods.map((food, index) => (
        <View key={index}>
          <View style={styles.menuItemStyle}>
            <BouncyCheckbox
              iconStyle={{ borderColor: "lightgray", borderRadius: 0 }}
              fillColor="green"
              onPress={(checkboxValue) => selectItem(food, checkboxValue)}
              isChecked={isFoodInCart(food, cartItems)}
            />
            <FoodInfo food={food} />
            <FoodImage food={food} />
          </View>
          <Divider width={0.5} orientation="vertical" style={{ marginHorizontal: 20 }} />
        </View>
      ))}
    </ScrollView>
  );
}

const FoodInfo = (props) => (
  <View style={{ width: 240, justifyContent: "space-evenly" }}>
    <Text style={styles.titleStyle}>{props.food.title}</Text>
    <Text>{props.food.description}</Text>
    <Text>{props.food.price}</Text>
  </View>
);

const FoodImage = ({ marginLeft, ...props }) => (
  <View>
    <Image
      source={{ uri: props.food.image }}
      style={{
        width: 100,
        height: 100,
        borderRadius: 8,
        marginLeft: marginLeft,
      }}
    />
  </View>
);
