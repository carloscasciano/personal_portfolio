import React from "react"
import { contactData } from "../siteData/data"
import Header from "./components/Header"

import { PageMainSkeleton, PositionSkeleton, BlockSkeleton, IconTextSkeleton, ContactSkeleton } from "../utils/styledComponents"

export default () => (
  <div>
    <Header/>
    <PageMainSkeleton>
    <h4>Need some Help?</h4>
    <ContactSkeleton>
      <IconTextSkeleton>
        <img src={"../icons/mail.png"}/>
        <p>{contactData.email}</p>
      </IconTextSkeleton>
      <IconTextSkeleton>
        <img src={"../icons/smartphone.png"}/>
        <p>{contactData.phone}</p>
      </IconTextSkeleton>
      <IconTextSkeleton>
        <img src={"../icons/linkedin.png"}/>
        <a src={contactData.linkedin}><p>/carloscasciano</p></a>
      </IconTextSkeleton>
      <IconTextSkeleton>
        <img src={"../icons/github.png"}/>
        <a src={contactData.github}><p>/carloscasciano</p></a>
      </IconTextSkeleton>
      <img src={"../pictures/portfolioPic.jpg"} style={{height: "240px", marginTop: "20px", borderRadius: "10px"}}></img>
    </ContactSkeleton>
    </PageMainSkeleton>
    
  </div>
)