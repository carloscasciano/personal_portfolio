import React from "react"
import { contactData } from "../siteData/data"
import Header from "./components/Header"
import Footer from "./components/Footer"

import { PageMainSkeleton, IconTextSkeleton, ContactSkeleton, ContactCardSkeleton } from "../utils/styledComponents"

export default () => (
  <div>
    <Header/>
    <PageMainSkeleton>
    <h4>Need some Help?</h4>
    <ContactCardSkeleton>
      <img src={"../pictures/portfolioPic.jpg"} style={{height: "240px", marginTop: "20px", borderRadius: "10px"}}></img>
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
          <a href={contactData.linkedin} target="_blank"><p>/carloscasciano</p></a>
        </IconTextSkeleton>
        <IconTextSkeleton>
          <img src={"../icons/github.png"}/>
          <a href={contactData.github} target="_blank"><p>/carloscasciano</p></a>
        </IconTextSkeleton>
      </ContactSkeleton>
    </ContactCardSkeleton>
    
    </PageMainSkeleton>
    <Footer />
  </div>
)