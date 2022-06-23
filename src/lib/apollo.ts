import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
    uri: 'https://api-sa-east-1.graphcms.com/v2/cl4qygqxf0bde01z59b6i9nir/master',
    cache: new InMemoryCache()
})