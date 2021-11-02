import IgFeed  from 'react-ig-feed'
import 'react-ig-feed/dist/index.css'

export const InstagramFeed = () => {
    return <IgFeed token={process.env.NEXT_PUBLIC_IG_TK}  counter="6"/>
}
