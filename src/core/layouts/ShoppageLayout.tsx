'use client';
import React from 'react'

function ShoppageLayout({children}: {children: React.ReactNode}) {
  return (
    <>
      <main className="pb-20">{children}</main>
    </>
  )
}

export default ShoppageLayout
