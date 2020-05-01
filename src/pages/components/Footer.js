import React from 'react'
import { Link } from "gatsby"
import { FooterSkeleton, IconTextSkeleton } from "../../utils/styledComponents"


export default function Footer() {
    return (
        <div>
                <FooterSkeleton>
                    <hr/>
                    <IconTextSkeleton>
                        <img src={"../icons/globe.png"}/>
                        <p>Brazil, Earth - 2020</p>
                    </IconTextSkeleton>
                </FooterSkeleton>     
            <hr/>
        </div>
    )
}
