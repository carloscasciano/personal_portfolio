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
                <br/>
                <p><i>"{bioData.bioCatchPhrase}"</i></p>
                <p>{bioData.bioAuthor} </p>
                <br/>
                <br/>
                <p>{bioData.bioP1}</p>
                <br/>
                <p>{bioData.bioP2}</p>
                <br/>
                <p>{bioData.bioP3}</p>

            </BlockSkeleton>
        
        </PageMainSkeleton>

        <Footer/>
    </div>
