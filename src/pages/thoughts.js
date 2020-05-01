import React from "react"
import { thoughtsData } from "../siteData/data"
import Header from "./components/Header"
import Footer from "./components/Footer"
import { PageMainSkeleton, PositionSkeleton, BlockSkeleton, IconTextSkeleton } from "../utils/styledComponents"

export default () => (
  <div>
    <Header/>
    <PageMainSkeleton>
      <h4>Thoughts, Feelings, Friendly Links & Others</h4>

      <BlockSkeleton>
        {
          thoughtsData.map(data => 
              <PositionSkeleton key={Math.random()}>
                <h5>{data.title}</h5>
                <p>{data.type}</p>
                  <IconTextSkeleton>
                    <img src={"../icons/calendar.png"}/>
                    <p>{data.date}</p>
                  </IconTextSkeleton>
                  <IconTextSkeleton>
                    <img src={"../icons/info.png"}/>
                    <p>{data.information}</p>
                  </IconTextSkeleton>

                    {!data.link? "":
                      <IconTextSkeleton >
                        <img src={"../icons/external-link.png"}/>
                        <a href={data.link} target="_blank"><p>Link to</p></a>
                      </IconTextSkeleton>
                    }
      
                  <hr/>              
              </PositionSkeleton>
            )
        }
      </BlockSkeleton>

    </PageMainSkeleton>
    <Footer />
  </div>
)