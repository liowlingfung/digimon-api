import { Link } from "expo-router";
import { useEffect, useState } from "react";
import { Image, ScrollView, Text, View } from "react-native";
import { colorsByAttribute, colorsByLevel, levelDesc } from "./utils/constants";
import { styles } from "./utils/styles";
import { Digimon } from "./utils/types";

export default function Index() {
  const [digimonData, setDigimonData] = useState<Digimon[]>([]);

  useEffect(() => {
    fetchDigimonData();
  }, []);

  async function fetchDigimonData() {
    try {
      const res = await fetch(
        "https://digi-api.com/api/v1/digimon?pageSize=297"
      );
      const data = await res.json();

      const detailedDigimon =  await Promise.all(
        data.content.map(async (digimon: Digimon) => {
          const res = await fetch(digimon.href);
          const details = await res.json();
          return {
            name: digimon.name,
            id: details.id,
            image: details.images[0].href,
            href: digimon.href,
            level: details.levels.length > 0 ? details.levels[0].level : "N/A",
            attribute: details.attributes.length > 0 ? details.attributes[0].attribute : "N/A",
          };
        })
      )
      // console.log(JSON.stringify(detailedDigimon, null, 2));

      setDigimonData(detailedDigimon);
    } catch (e) {
      console.error("Error fetching digimon data:", e);
    }
  }


  return (
    // <Provider store={store}>
    //   <Home />
    // </Provider>

    <ScrollView contentContainerStyle={{gap: 20, padding: 16}}>
      <View style={{flexDirection: "row", flexWrap: "wrap", justifyContent: "space-evenly", gap: 10}}>
      {digimonData.map((digimon) => (
        <Link key={digimon.name} href={{ pathname: "/details", params: { name: digimon.name }}}>
          {/* Digimon Container */}
          <View style={
              {
                margin: 5,
                alignItems: "center",
                padding: 10,
                borderRadius: 10,
                gap: 10,
                // @ts-ignore
                backgroundColor: colorsByLevel[digimon.level.toLowerCase()],
                height: 400,
                width: 150
              }
            }>
            {/* Digimon name */}
            <View style={styles.group}>
              <Text style={styles.name}>{digimon.name}</Text>
            </View>
            {/* Digimon level */}
            <View style={styles.group}>
              <Text style={styles.details}></Text>
              <Text style={styles.level}>{
                // @ts-ignore
                levelDesc[digimon.level.toLowerCase()]
              }</Text>
            </View>
            {/* Digimon attribute */}
            <View style={styles.group}>
              <Text style={styles.details}></Text>
              <Text style={
                [
                  styles.attribute,
                  {
                    // @ts-ignore
                    color: colorsByAttribute[digimon.attribute.toLowerCase()]
                  }
                ]
              }>
                {digimon.attribute}
              </Text>
            </View>
            {/* Digimon Image */}
            <Image
              source={{ uri: digimon.image }}
              style={{ width: 125, height: 125, borderRadius: 15}}
            />
            <Text style={styles.name}>#{digimon.id}</Text>
          </View>
        </Link>
      ))}
      </View>
    </ScrollView>
  );
}
