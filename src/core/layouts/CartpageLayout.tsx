import React from 'react'

function CartpageLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <main className="pb-20">{children}</main>
        </>
    )
}

export default CartpageLayout
