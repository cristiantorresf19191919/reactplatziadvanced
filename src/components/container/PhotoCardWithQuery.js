import React from 'react'
import { PhotoCard } from '../PhotoCard/index'
import { useQuery, gql } from '@apollo/client';
export const GET_SINGLE_PHOTO = gql`
  query getSinglePhoto($id:ID!){
    photo(id:$id){
      id
      categoryId
      src
      likes
      userId
      liked
    }
  }`


export function PhotoCardWithQuery({ id }) {
  const {loading,error,data}= useQuery(GET_SINGLE_PHOTO, { variables: { id} })
  if (loading) return <p>Loading ...</p>
  if (error) return <p>Error!</p>
  if (data && data.photo) return <PhotoCard {...data.photo} />
  return <PhotoCard />
}


