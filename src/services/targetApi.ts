import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

export const targetApi = createApi({
  reducerPath: "targetApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `https://target-api-induction-v2.herokuapp.com/api/v1`,
  }),
  endpoints: (builder) => ({
    postSignIn: builder.mutation({
      query: (body) => {
        return { url: "/users/sign_in", method: "POST", body };
      },
      transformResponse: (_, meta) => {
        const { headers } = meta.response;
        return {
          access: headers.get("Access-Token"),
          client: headers.get("Client"),
          uid: headers.get("Uid"),
        };
      },
    }),
  }),
});

export const {
  usePostSignInMutation,
} = targetApi;
