import styled from 'styled-components'


/* SKELETONS */

export const HeaderMainSkeleton = styled.div`
    
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    align-content: flex-start;

    h2 {
        margin: 15px;
    }

    a {
        margin: 0 10px 0 10px;
    }

`

export const HeaderLinksSkeleton = styled.div`
    display: flex;
    justify-content: center;
    align-content: center;
`

export const PageMainSkeleton = styled.div`
    margin: 0 auto;
    width: 40%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    
`

export const PositionSkeleton = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    align-items: flex-start;
    

    hr {
        width: 100%;
        margin: 10px 0 10px 0;
    }
`

export const BlockSkeleton = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-content: flex-start;
`

export const IconTextSkeleton = styled.div`

    display: flex;
    flex-direction: row;
    align-items: center;
    align-content: center;
    flex-wrap: nowrap;

`

export const ContactSkeleton = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;


`

export const ContactCardSkeleton = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    align-content: center;
    justify-content: space-around;

`

export const FooterSkeleton = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-bottom: 30px;

    hr{
        margin-top: 100px;
        margin-bottom: 25px;
    }


`