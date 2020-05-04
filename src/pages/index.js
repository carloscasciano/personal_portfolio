import React from "react"
import Header from "./components/Header"
import Footer from "./components/Footer"
import { bioData } from "../siteData/data"
import { BlockSkeleton, PageMainSkeleton, QuoteSkeleton} from "../utils/styledComponents"

export default () => 
    <div>
        <Header/>

        <PageMainSkeleton>
            <BlockSkeleton>
                <h4>Bio</h4>

                <br/>
                <p>{bioData.bioP1}</p>
                <br/>
                <p>{bioData.bioP2}</p>
                <br/>
                <p>{bioData.bioP3}</p>
                <br/>
                <p>{bioData.bioP4}</p>
                <br/>
                <br/>
                <br/>
                <QuoteSkeleton>
                    <p><i>"{bioData.bioCatchPhrase}"</i></p>
                    <p>{bioData.bioAuthor} </p>
                </QuoteSkeleton>
                

            </BlockSkeleton>
        
        </PageMainSkeleton>

        <Footer/>
    </div>
