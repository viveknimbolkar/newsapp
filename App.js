import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import NewsCard from "./components/NewsCard";
export default function App() {
  return (
    <View style={styles.container}>
      {/* Title of the app */}
      <View>
        <Text style={styles.heading}>LATEST NEWS</Text>
      </View>
      {/* News card container */}
      <View style={styles.newscardcontainer}>
        <NewsCard />
        {/* <View style={styles.newscard}>
          <Text style={styles.newstitle}>Title of News</Text>
          <View style={{ alignItems: "center" }}>
            <Image
              source={{
                uri: "https://www.reuters.com/resizer/Jizf4nOFVaBSfHM470SXNrQsshI=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/PSBP264OWBPC3E4LYJTEWN74SA.jpg",
              }}
              style={{ width: "100%", height: 250 }}
            />
          </View>
          <Text style={styles.newsdescription}>
            This is the news description of the news lorems df sldf sldjfskl
            dlksdjfl sdlfj sdfl;ksdjf
          </Text>

          <TouchableOpacity style={styles.readmorecontainer}>
            <Text style={styles.readmorebtn}>Read More</Text>
          </TouchableOpacity>
        </View> */}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    marginTop: 30,
  },
  heading: {
    color: "black",
    fontSize: 26,
    fontWeight: "800",
  },
  newscardcontainer: {
    flex: 1,
    marginTop: 20,
    backgroundColor: "#E4E3D3",
    width: "100%",
    alignItems: "center",
  },
  
});
