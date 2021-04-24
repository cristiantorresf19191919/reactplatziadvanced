import React, { useRef } from 'react'
import { Img, ImgWrapper, Article } from './styles'
import { useLocalStorage } from '../../hooks/useLocalStorage'
import { useNearScreen } from '../../hooks/useNearScreen'
import { FavButton } from '../FavButton'
import { useMuationToogleLike } from '../container/toggleLikeMutation'
import {Link} from '@reach/router'
const DEFAULT_IMAGE = 'https://res.cloudinary.com/midudev/image/upload/w_300/q_80/v1560262103/dogs.png'

export const PhotoCard = ({
  id, likes = 0,
  src = DEFAULT_IMAGE

}) => {
  const key = `like-${id}`
  const elementRef = useRef(null)
  const [liked, setLiked] = useLocalStorage(key, false)
  const { mutation, data } = useMuationToogleLike()
  function handleFavClick() {
    !liked && mutation({
      variables: {
        input: { id }
      }
    })
    setLiked(!liked)
  }
  const show = useNearScreen(elementRef)


  return (
    <Article ref={elementRef}>
      {
        show && (
          <>
            <Link to={`/detail/${id}`}>
              <ImgWrapper>
                <Img src={src} />
              </ImgWrapper>
            </Link>
            <FavButton
              likes={likes}
              liked={liked}
              onClick={handleFavClick}
            />
          </>
        )
      }
    </Article>
  )
}
