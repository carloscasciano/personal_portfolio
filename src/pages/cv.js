import React from "react"
import Header from "./components/Header"
import Footer from "./components/Footer"
import { siteData } from "../siteData/data"
import { PageMainSkeleton, PositionSkeleton, BlockSkeleton } from "../utils/styledComponents"


export default () => (
  <div>
    <Header/>
    <PageMainSkeleton>

{/*  */}

      <h4>What I've done so far</h4>

      <BlockSkeleton>
      {
        siteData[0].map(info =>           
          <PositionSkeleton key={Math.random()}>
          <div style={{display:"flex", alignItems: "center", marginBottom: "10px"}}><h5>{info.position}</h5> <p>{"  "} {info.company}, {info.date}</p></div>
          <ul>
            {
              info.perks.map(perk => <li key={Math.random()}>{perk}</li>)
            }
          </ul>
          <hr/>
        </PositionSkeleton>
                
          )
      }
      </BlockSkeleton> 

{/*  */}

      <h4>What I'm familiar with</h4>

      <BlockSkeleton>
      {
        siteData[1].map(info =>
          <PositionSkeleton key={Math.random()}>
            <p><strong>{info.skillTitle}</strong></p>
            <p>{info.skillSet}</p>
          </PositionSkeleton> 
          )
      }  
      </BlockSkeleton>

{/*  */}

      <h4>Formal Education</h4>

      <BlockSkeleton>
      {
        siteData[2].map(info =>
          <PositionSkeleton key={Math.random()}>
            <p><strong>{info.school}</strong> - {info.course}  [{info.date}]</p>
          </PositionSkeleton> 
          )
      }  
      </BlockSkeleton>

      <h4>Courses</h4>

      <BlockSkeleton>
      {
        siteData[3].map(info =>
          <PositionSkeleton key={Math.random()}>
            <p><strong>{info.school}</strong> - {info.course}</p>
          </PositionSkeleton> 
          )
      }  
      </BlockSkeleton>

    </PageMainSkeleton>

    <Footer/>
  </div>
)



/* 




*/