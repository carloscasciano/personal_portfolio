import React from 'react'
import { Link } from "gatsby"
import { Helmet } from "react-helmet"
import { HeaderMainSkeleton, HeaderLinksSkeleton } from "../../utils/styledComponents"


export default function Header() {
    return (
        <div>
            <HeaderMainSkeleton>
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>Carlos Casciano Portfolio</title>
                    <link rel="canonical" href="https://carlos-casciano.netlify.app/" />
                </Helmet>

                <Link to="/">
                    <h2>Carlos Casciano</h2>
                </Link>
                <HeaderLinksSkeleton>
                    <Link to="/cv/">Resume</Link>
                    <Link to="/thoughts/">Thoughts & Feelings</Link>
                    <Link to="/contact/">Contact</Link>
                </HeaderLinksSkeleton>
            </HeaderMainSkeleton>
            <hr/>
        </div>
    )
}
