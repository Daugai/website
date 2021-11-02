import IgFeed  from 'react-ig-feed'
import 'react-ig-feed/dist/index.css'
import {H2} from './H2';

export const InstagramFeed = () => {
    if (!process.env.NEXT_PUBLIC_IG_TK) {
        return null;
    }
    return (
        <div className={"pt-12"}>
            <H2>Naujausios nuotraukas iš <a href="https://www.instagram.com/daugai.lt/" target="_blank">@daugai.lt Instagram</a></H2>
            <div className="mt-6">
                <IgFeed token={process.env.NEXT_PUBLIC_IG_TK}  counter="6"/>
            </div>
        </div>
    )
}
