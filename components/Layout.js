import React from "react";
import { default as Head } from "next/head"

const Layout = ({children}) => {
    return (
        <div className="">
            <Head>
                <title>KingSultan-Gallery</title>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta name="description" content="A cloud gallery capable of rearranging the images" />
            </Head>
            <main>
                {children}
            </main>
        </div>
    )
}

export default Layout;