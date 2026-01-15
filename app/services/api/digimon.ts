import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Digimon } from "../../utils/types";

export const digimonApi = createApi({
    reducerPath: "digimonApi",
    baseQuery: fetchBaseQuery({ baseUrl: "https://digi-api.com/api/v1/" }),
    endpoints: (builder) => ({
        getDigimonByName: builder.query<Digimon[], string>({
            query: (name) => `digimon?name=${name}`
        })}),
})

export const { useGetDigimonByNameQuery } = digimonApi;