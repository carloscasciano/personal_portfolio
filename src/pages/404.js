import React from "react"
import Header from "./components/Header"
import Footer from "./components/Footer"

import { Error404Skeleton} from "../utils/styledComponents"


export default () => (
    <div>
      <Header/>
      
        <h4>404</h4>

        <Error404Skeleton>
            
            <img src={"../pictures/404.png"} style={{height: "240px", marginTop: "20px", borderRadius: "10px"}} alt="404 dog"></img> 
            <br/> 
            <p>No page found.</p>
            <p>Here is my dog in a vase instead.</p>
            
               
        </Error404Skeleton> 


      <Footer />
    </div>
  )