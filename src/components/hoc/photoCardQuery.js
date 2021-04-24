import { gql } from 'apollo-boost'
import { Query } from 'react-apollo'

export const getPhotos = gql`
  query getSinglePhoto ($id: ID) {
    photo(categoryId: $categoryId){
      id
      categoryId
      src
      likes
      userId
      liked
    }
  }`

  export const PhotoQuery = 
