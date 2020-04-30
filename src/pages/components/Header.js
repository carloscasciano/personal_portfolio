import React from 'react'
import { Link } from "gatsby"
import {TestSkeleton} from "../../utils/styledComponents"

export default function Header() {
    return (
        <div>
            <TestSkeleton>
                <h3>Carlos Casciano</h3>
                <Link to="/cv/">CV</Link>
                <Link to="/portfolio/">Portfolio</Link>
                <Link to="/thoughts/">Thoughts & Feelings</Link>
                <Link to="/contact/">Contact</Link>
            </TestSkeleton>
            
        </div>
    )
}
