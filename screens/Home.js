import { View, Text, SafeAreaView, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import HeaderTabs from "../components/home/HeaderTabs";
import SearchBar from "../components/home/SearchBar";
import Categories from "../components/home/Categories";
import RestaurantItems, { localRestaurants } from "../components/home/RestaurantItems";
import BottomTabs from "../components/home/BottomTabs";
import { Divider } from "react-native-elements/dist/divider/Divider";

const YELP_API_KEY =
  "Zi_n3jyvwMDxxGzl1nOtDljaMEJprlNYQ8Qd7GiSEXWXbimA26I0QHfjBP7mMRfl7NGbVdc_kZyLSn999UHxfBT6H81vBnMyfRYQhP1cJbT_tLKXnajFNeUxx_hmYnYx";

export default function Home({ navigation }) {
  const [restaurantData, setRestaurantData] = React.useState(localRestaurants);
  const [city, setCity] = useState("San Francisco");
  const [activeTab, setActiveTab] = useState("Delivery");

  const getRestaurantsFromYelp = () => {
    const yelpUrl = `https://api.yelp.com/v3/businesses/search?term=restaurants&location=${city}`;

    const apiOptions = {
      headers: {
        Authorization: `Bearer ${YELP_API_KEY}`,
      },
    };

    return fetch(yelpUrl, apiOptions)
      .then((res) => res.json())
      .then((json) =>
        setRestaurantData(
          json.businesses.filter((business) =>
            business.transactions.includes(activeTab.toLowerCase())
          )
        )
      );
  };

  useEffect(() => {
    getRestaurantsFromYelp();
  }, [city, activeTab]);

  return (
    <SafeAreaView style={{ backgroundColor: "#eee", flex: 1 }}>
      <View style={{ backgroundColor: "white", padding: 15 }}>
        <HeaderTabs activeTab={activeTab} setActiveTab={setActiveTab} />
        <SearchBar cityHandler={setCity} />
      </View>
      <ScrollView showsVerticalScrollIndication={false}>
        <Categories />
        <RestaurantItems restaurantData={restaurantData} navigation={navigation} />
      </ScrollView>
      <Divider width={1} />
      <BottomTabs />
    </SafeAreaView>
  );
}
