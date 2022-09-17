import { apiSlice } from "../../Api/apiSlace";


export const extendedApiSlice = apiSlice.injectEndpoints({
    tagTypes: ["Marvel"],
    endpoints: (builder) => ({
      getMarvel: builder.query({
        query: () => `/v1/public/characters?ts=1&apikey=2e1cdeec426ae323484f29024084c206&hash=d516513ba95b9407c7aca0f73b241f8a`,
        providesTags: ["Marvel"],
      }),
    }),
  });
  
  export const { useGetMarvel} = extendedApiSlice;
  