import styled from 'styled-components'


/* SKELETONS */

export const HeaderMainSkeleton = styled.div`
    
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    align-content: flex-start;
    margin: 15px auto 5px auto;

    a {
        margin: 0 10px 0 10px;
    }

    @media (min-width: 415px) {
        flex-direction: row;

        h2 {
            margin: 15px;
        }

      }

`

export const HeaderLinksSkeleton = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    align-items: center;

    a {
        font-size: 1rem;
    }

    @media (min-width: 415px) {
        flex-direction: row;       
      }
`

export const PageMainSkeleton = styled.div`
    margin: 0 auto;
    width: 90%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;

    @media (min-width: 415px) {
        width: 50%;
      }
    
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
    margin-left: 33px;

`

export const ContactCardSkeleton = styled.div`
    display: flex;
    flex-direction: column-reverse;
    align-items: center;
    align-content: center;
    justify-content: center;

    @media (min-width: 415px) {
        flex-direction: row;
      }

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