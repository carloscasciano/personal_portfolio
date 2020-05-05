import React from 'react'
import { FooterSkeleton, IconTextSkeleton } from "../../utils/styledComponents"


export default function Footer() {
    return (
        <div>
            
                <FooterSkeleton>
                <hr/>
                    <IconTextSkeleton>
                        <img src={"../icons/globe.png"} alt=""/>
                        <p>Brazil, Earth - 2020</p>
                    </IconTextSkeleton>
                <hr/>
                </FooterSkeleton>     
            
        </div>
    )
}
