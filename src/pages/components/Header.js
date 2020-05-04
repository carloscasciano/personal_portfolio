import React from 'react'
import { Link } from "gatsby"
import { HeaderMainSkeleton, HeaderLinksSkeleton } from "../../utils/styledComponents"


export default function Header() {
    return (
        <div>
            <HeaderMainSkeleton>
                <Link to="/">
                    <h2>Carlos Casciano</h2>
                </Link>
                <HeaderLinksSkeleton>
                    <Link to="/cv/">Resume</Link>
                    <Link to="/portfolio/">Portfolio</Link>
                    <Link to="/thoughts/">Thoughts & Feelings</Link>
                    <Link to="/contact/">Contact</Link>
                </HeaderLinksSkeleton>
            </HeaderMainSkeleton>
            <hr/>
        </div>
    )
}
