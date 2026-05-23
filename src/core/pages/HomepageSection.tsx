'use client';
import React from 'react'
import ProductListSec from '@/components/common/ProductListSec';
import DressStyle from '@/components/homepage/DressStyle';
import Reviews from '@/components/homepage/Reviews';
import { newArrivalsData, reviewsData, topSellingData } from '@/data/newArrivalsData';

function HomepageSection() {
  return (
    <div>
        {/* <div className='text-xl font-bold'>Azam Dildar</div> */}
        <ProductListSec title='NEW ARRIVALS' data={newArrivalsData} viewAllLink='/shop#new-arrivals' />
        <div className='max-w-frame mx-auto px-4 xl:px-0'>
          <hr className='h-px border-t-black/10 my-10 sm:my-16' />
        </div>
        {/* <div className='mb-12.5 sm:mb-20'>
          <ProductListSec title='top selling' data={topSellingData} viewAllLink='/shop#top-selling' />
        </div> */}
        <div className='mb-12.5 sm:mb-20'>
          <DressStyle />
        </div>
        <Reviews data={reviewsData} />
    </div>
  )
}

export default HomepageSection
