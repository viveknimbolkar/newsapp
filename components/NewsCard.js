import { useEffect, useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  Linking,
  FlatList,
} from "react-native";

export default function NewsCard() {
  const [currentNewsData, setNewsData] = useState();

  // fetch news from api
  const myNewsData = async () => {
    try {
      const getNewsFromAPI = await fetch(
        "https://newsapi.org/v2/everything?q=india&from=2022-06-25&to=2022-06-25&sortBy=popularity&apiKey=1488e762824c412aa97432e1a2c79517"
      );

      const newsData = await getNewsFromAPI.json();
      setNewsData(newsData.articles);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    myNewsData();
  }, []); // store news in blank array

  return (
    <FlatList
      data={currentNewsData}
      keyExtractor={(Item, index) => index}
      renderItem={({ item, index }) => {
        return (
          <View style={styles.newscard}>
            <Text style={styles.newstitle}>{item.title}</Text>
            <View style={{ alignItems: "center" }}>
              <Image
                source={{
                  uri: item.urlToImage,
                }}
                style={{ width: "100%", height: 250 }}
              />
            </View>
            <Text style={styles.newsdescription}>{item.description}</Text>

            <TouchableOpacity
              onPress={() => {
                Linking.openURL(item.url);
              }}
              style={styles.readmorecontainer}
            >
              <Text style={styles.readmorebtn}>Read More</Text>
            </TouchableOpacity>
          </View>
        );
      }}
    />
  );
}

const styles = StyleSheet.create({
  newscard: {
    width: "98%",
    // borderRadius: 15,
    marginBottom: 10,
    backgroundColor: "white",
  },
  newstitle: {
    fontSize: 24,
    padding: 8,
  },
  newsdescription: {
    padding: 5,
    fontSize: 16,
  },
  readmorecontainer: {
    justifyContent: "center",
    flex: 0,
    flexDirection: "row",
  },
  readmorebtn: {
    color: "white",
    backgroundColor: "black",
    // borderRadius: 15,
    fontSize: 20,
    margin: 10,
    padding: 10,
    width: "38%",
  },
});
