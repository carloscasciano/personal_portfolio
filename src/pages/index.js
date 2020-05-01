import React from "react"
import Header from "./components/Header"
import Footer from "./components/Footer"
import { bioData } from "../siteData/data"
import { BlockSkeleton, PageMainSkeleton } from "../utils/styledComponents"

export default () => 
    <div>
        <Header/>

        <PageMainSkeleton>
            <BlockSkeleton>
                <h4>Bio</h4>
                <p>{bioData.bio}</p>

            </BlockSkeleton>
        
        </PageMainSkeleton>

        <Footer/>
    </div>
