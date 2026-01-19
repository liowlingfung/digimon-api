import { useEffect } from "react";
import { ScrollView, View } from "react-native";
import { useGetDigimonByNameQuery } from "../services/api/digimon";


export default function Home() {
    const { data, error, isLoading } = useGetDigimonByNameQuery("Agumon");

    useEffect(() => {
    },[]);

    return (
        <>
            <ScrollView contentContainerStyle={{gap: 20, padding: 16}}>
                <View>
                  {
                    error ?
                    (<>There's an error</>) :
                    isLoading ?
                    (<>Loading...</>) :
                    data ? (
                          <>{data.name}</>
                    ) : <>Page is blank</>}
                </View>
            </ScrollView>
        </>
    )
}
