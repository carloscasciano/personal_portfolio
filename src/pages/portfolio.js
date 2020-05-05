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
                    <img src={"../icons/info.png"} alt="info"/>
                    <p>{data.projectMainInfo}</p>
                  </IconTextSkeleton>
                  <IconTextSkeleton>
                    <img src={"../icons/code.png"} alt="code"/>
                    <p>{data.projectTech}</p>
                  </IconTextSkeleton>
                  <IconTextSkeleton>
                    <img src={"../icons/external-link.png"} alt="external link"/>
                    <a href={data.projectDemoLink} target="_blank" rel="noopener noreferrer"><p>Demo</p></a>
                  </IconTextSkeleton>
                  <IconTextSkeleton>
                    <img src={"../icons/github.png"} alt="github"/>
                    <a href={data.projectGitHubLink} target="_blank" rel="noopener noreferrer"><p>Code</p></a>
                  </IconTextSkeleton>
                  <hr/>      
                  <br/>        
              </PositionSkeleton>
            )
        }
      </BlockSkeleton>

    </PageMainSkeleton>

    <Footer />
  </div>
)