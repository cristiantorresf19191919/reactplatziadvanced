import React from 'react'
import { PhotoCard } from '../PhotoCard/index'
import { useQuery } from '@apollo/react-hooks'
import { getPhotos } from '../hoc/getPhotos'

export const ListOfPhotoCards = ({ categoryId }) => {
  const { data: { photos = [] } = {} } = useQuery(getPhotos, { variables: { categoryId } })
  console.log({ photos })
  return (

    <ul>
      {photos.map(photo => (
        <PhotoCard key={photo.id} {...photo} />
      ))}
    </ul>
  )
}
