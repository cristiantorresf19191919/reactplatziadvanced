import React from 'react'
import { useQuery, gql, useMutation } from '@apollo/client';

const MUTATION_LIKE_PHOTO = gql`
mutation likeAnonymousPhoto($input: LikePhoto!) {
    likeAnonymousPhoto(input: $input) {
      id,
      liked,
      likes
    }
  }
`
export const useMuationToogleLike = () => {
  const [mutation, { data }] = useMutation(MUTATION_LIKE_PHOTO)
  return { mutation, data }
}
