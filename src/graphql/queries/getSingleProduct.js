import { fetchAxios } from "../../lib/axios"

export async function getSingleProduct(id) {
  const data = await fetchAxios(
    `
  query Product($id: ID!) {
    product(id: $id, idType: DATABASE_ID) {
      databaseId
      averageRating
      name
      slug
      description
      onSale
      image {
        databaseId
        uri
        title
        srcSet
        sourceUrl
      }
      ... on SimpleProduct {
        price
        salePrice
        regularPrice
        databaseId
        stockQuantity
      }
      ... on VariableProduct {
        price
        salePrice
        regularPrice
        databaseId
        stockQuantity
        paColors {
          nodes {
            name
          }
        }
        paSizes {
          nodes {
            name
          }
        }
        variations {
          nodes {
            databaseId
            name
            stockStatus
            stockQuantity
            purchasable
            onSale
            salePrice
            regularPrice
          }
        }
      }
      ... on ExternalProduct {
        price
        databaseId
        externalUrl
      }
      ... on GroupProduct {
        products {
          nodes {
            ... on SimpleProduct {
              databaseId
              price
            }
          }
        }
        id
      }
    }
  }
    `,
    { variables: { id } }
  )

  return data?.product
}
