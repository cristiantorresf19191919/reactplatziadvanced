import React from 'react'
import { ListOfCategories } from '../components/listOfCategories/index';
import { ListOfPhotoCards } from '../components/ListOfPhotoCards/index';

export const Home = ({id}) => {
  // eslint-disable-next-line no-debugger 
   debugger;
  return (
    <>
    <ListOfCategories />
    <ListOfPhotoCards categoryId={id} />
    </>
  )
}
