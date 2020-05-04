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
      <img src={"../pictures/portfolioPic.jpg"} style={{height: "240px", marginTop: "20px", borderRadius: "10px"}} alt="Author"></img>
      <ContactSkeleton>
        <IconTextSkeleton>
          <img src={"../icons/mail.png"} alt="mail"/>
          <p>{contactData.email}</p>
        </IconTextSkeleton>
        <IconTextSkeleton>
          <img src={"../icons/smartphone.png"} alt="phone"/>
          <p>{contactData.phone}</p>
        </IconTextSkeleton>
        <IconTextSkeleton>
          <img src={"../icons/linkedin.png"} alt="linkedin"/>
          <a href={contactData.linkedin} target="_blank"  rel="noopener noreferrer"><p>/carloscasciano</p></a>
        </IconTextSkeleton>
        <IconTextSkeleton>
          <img src={"../icons/github.png"} alt="github"/>
          <a href={contactData.github} target="_blank" rel="noopener noreferrer"><p>/carloscasciano</p></a>
        </IconTextSkeleton>
      </ContactSkeleton>
    </ContactCardSkeleton>
    
    </PageMainSkeleton>
    <Footer />
  </div>
)