import React from 'react'
import { MdFavorite, MdFavoriteBorder } from 'react-icons/md'
import { Button } from './styles'

export function FavButton({onClick,likes,liked}) {
  const Icon = liked ? MdFavorite : MdFavoriteBorder
  return (
    <Button onClick={onClick}>
      <Icon size='32px' /> {likes} likes!
    </Button>
  )
}
