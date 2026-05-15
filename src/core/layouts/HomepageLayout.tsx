import React from 'react'
import Brands from '@/components/homepage/Brands';
import Header from '@/components/homepage/Header';


function HomepageLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <Header />
            <Brands />
            <main className='my-12.5 sm:my-18'>{children}</main>
        </>
    )
}

export default HomepageLayout
