import { useEffect, useState } from "react";
import { Provider } from "react-redux";
import Home from "./screens/home";
import { store } from "./services/store";
import { Digimon } from "./utils/types";

export default function Index() {
  const [digimonData, setDigimonData] = useState<Digimon[]>([]);

  useEffect(() => {

  }, []);



  return (
    <Provider store={store}>
      <Home />
    </Provider>

    // <ScrollView contentContainerStyle={{gap: 20, padding: 16}}>
    //   <View style={{flexDirection: "row", flexWrap: "wrap", justifyContent: "space-evenly", gap: 10}}>
    //   {digimonData.map((digimon) => (
    //     <Link key={digimon.name} href={{ pathname: "/details", params: { name: digimon.name }}}>
    //       {/* Digimon Container */}
    //       <View style={
    //           {
    //             margin: 5,
    //             alignItems: "center",
    //             padding: 10,
    //             borderRadius: 10,
    //             gap: 10,
    //             // @ts-ignore
    //             backgroundColor: colorsByLevel[digimon.level.toLowerCase()],
    //             height: 400,
    //             width: 150
    //           }
    //         }>
    //         {/* Digimon name */}
    //         <View style={styles.group}>
    //           <Text style={styles.name}>{digimon.name}</Text>
    //         </View>
    //         {/* Digimon level */}
    //         <View style={styles.group}>
    //           <Text style={styles.details}></Text>
    //           <Text style={styles.level}>{
    //             // @ts-ignore
    //             levelDesc[digimon.level.toLowerCase()]
    //           }</Text>
    //         </View>
    //         {/* Digimon attribute */}
    //         <View style={styles.group}>
    //           <Text style={styles.details}></Text>
    //           <Text style={
    //             [
    //               styles.attribute,
    //               {
    //                 // @ts-ignore
    //                 color: colorsByAttribute[digimon.attribute.toLowerCase()]
    //               }
    //             ]
    //           }>
    //             {digimon.attribute}
    //           </Text>
    //         </View>
    //         {/* Digimon Image */}
    //         <Image
    //           source={{ uri: digimon.image }}
    //           style={{ width: 125, height: 125, borderRadius: 15}}
    //         />
    //         <Text style={styles.name}>#{digimon.id}</Text>
    //       </View>
    //     </Link>
    //   ))}
    //   </View>
    // </ScrollView>
  );
}
