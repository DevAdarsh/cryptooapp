import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
const axios = require("axios");

// const options = {
//   method: 'GET',
//   url: 'https://bing-news-search1.p.rapidapi.com/news',
//   params: {textFormat: 'Raw', safeSearch: 'Off'},
//   headers: {
//     'X-BingApis-SDK': 'true',
//     'X-RapidAPI-Key': 'ebe7b4ae2amsh3ea7d835848fda8p163364jsn6dd9020b4e75',
//     'X-RapidAPI-Host': 'bing-news-search1.p.rapidapi.com'
//   }
// };
const cyptoNewsHeaders = {
    'X-BingApis-SDK': 'true',
    'X-RapidAPI-Key': 'ebe7b4ae2amsh3ea7d835848fda8p163364jsn6dd9020b4e75',
    'X-RapidAPI-Host': 'bing-news-search1.p.rapidapi.com'
}

const baseUrl = 'https://bing-news-search1.p.rapidapi.com'

const createRequest = (url) => ({ url, headers: cyptoNewsHeaders });

export const cryptoNewsApi = createApi({
    reducerPath: 'cryptoNewsApi',
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({
        getCryptoNews: builder.query({
            query: ({ newsCategory, count }) => createRequest(`/news/search?q=${newsCategory}&safeSearch=Off&textFormat=Raw&freshness=Day&count=${count}`),
        }),
       
    })
});

export const { useGetCryptoNewsQuery } = cryptoNewsApi;