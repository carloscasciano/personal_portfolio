import React from "react"
import { portfolioData } from "../siteData/data"
import Header from "./components/Header"
import Footer from "./components/Footer"

import { PageMainSkeleton, PositionSkeleton, BlockSkeleton, IconTextSkeleton } from "../utils/styledComponents"

export default () => (
  <div>
    <Header/>
    <PageMainSkeleton>
      <h4>Some Public Projects</h4>

      <BlockSkeleton>
        {
          portfolioData.map(data => 
              <PositionSkeleton key={Math.random()}>
                <h5>{data.projectName}</h5>
                  <IconTextSkeleton>
                    <img src={"../icons/info.png"}/>
                    <p>{data.projectMainInfo}</p>
                  </IconTextSkeleton>
                  <IconTextSkeleton>
                    <img src={"../icons/code.png"}/>
                    <p>{data.projectTech}</p>
                  </IconTextSkeleton>
                  <IconTextSkeleton>
                    <img src={"../icons/external-link.png"}/>
                    <a src={data.projectDemoLink}><p>Demo</p></a>
                  </IconTextSkeleton>
                  <IconTextSkeleton>
                    <img src={"../icons/github.png"}/>
                    <a src={data.projectDemoLink}><p>Code</p></a>
                  </IconTextSkeleton>
                  <hr/>              
              </PositionSkeleton>
            )
        }
      </BlockSkeleton>

    </PageMainSkeleton>

    <Footer />
  </div>
)