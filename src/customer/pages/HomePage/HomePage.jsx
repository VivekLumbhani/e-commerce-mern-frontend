import React from 'react'
import MainCrosel from '../../components/HomeCarosel/MainCrosel'
import HomeScetionCarosel from '../../components/HomeSectionCarosel/HomeScetionCarosel'
import { mens_kurta } from '../../../Data/mens_kurta'

const HomePage = () => {
  return (
    <>
      <MainCrosel/>
      <div className='space-y-10 py-20 flex flex-col justify-center px-5 lg:px-10'>
        <HomeScetionCarosel data={mens_kurta} sectionName={"Men's kurta"}/>
        <HomeScetionCarosel data={mens_kurta} sectionName={"shoes"}/>
        <HomeScetionCarosel data={mens_kurta}  sectionName={"shoes"}/>
        <HomeScetionCarosel data={mens_kurta}  sectionName={"shoes"}/>
        <HomeScetionCarosel data={mens_kurta}  sectionName={"shoes"}/>

      </div>
    </>
  )
}

export default HomePage
