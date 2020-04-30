import React from 'react'
import { Link } from "gatsby"
import {HeaderMainSkeleton, HeaderLinksSkeleton} from "../../utils/styledComponents"


export default function Header() {
    return (
        <div>
            <HeaderMainSkeleton>
                <h2>Carlos Casciano</h2>
                <HeaderLinksSkeleton>
                    <Link to="/cv/">CV</Link>
                    <br/>
                    <Link to="/portfolio/">Portfolio</Link>
                    <Link to="/thoughts/">Thoughts & Feelings</Link>
                    <Link to="/contact/">Contact</Link>
                </HeaderLinksSkeleton>
            </HeaderMainSkeleton>
            <hr/>
            
        </div>
    )
}
