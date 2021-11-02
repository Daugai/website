import Head from 'next/head';

const posts = [
    {
        title: 'Atrask Daugus',
        href: '/atrask-daugus',
        description:
            'Daugų miestas įsikūręs Lietuvos pietuose, Alytaus rajono savivaldybės teritorijoje (22 km. į rytus nuo Alytaus). Šis dzūkijos perlas glūdi Daugų ežeryno centre ir nesvarbu į kurią pusę bepasuktum – visi Daugų priemiesčiai baigiasi ežeru. Kadaise Daugai buvo sala ir tik nutiesus kelius, supylus užlietas pievas ši vietovė tapo pasiekiama sausuma.',
        imageUrl: '/images/turgaus_aikste.jpg',
    },
    {
        title: 'Pažink Daugus',
        href: '/pazink-daugus',
        description:
            'ovių Lietuvoje, pirmą kartą paminėta kryžiuočių kronikų aprašymuose dar 1384 m. Manoma, kad vietovardis yra asmenvardinės kilmės, nuo pavardės Daugas daugiskaitos. Nors ši pavardė jau išnykusi, tačiau Druskininkų, Leipalingio ir Rakainių apylinkėse (pietinėje Lietuvoje) vis dar pasitaiko Daugevičius – galbūt Daugo suslavinta forma.',
        imageUrl:
            '/images/daugu_herbas_1792.jpg',
    },
    {
        title: 'Pajusk Daugus',
        href: '/pajusk-daugus',
        description:
            'Daugai - miestas Alytaus rajone, 22 km į rytus nuo Alytaus, prie Vilniaus-Alytaus magistralinio kelio. Iš visų pusių jį supa ežerai, didžiausias ir giliausias iš jų – Didžiulio (Daugų) ežeras. Norint jį apeiti, teks įveikti 42 km. Vingiuotos ežero pakrantės, pusiasaliai, įlankos, nedidelės apvalios salos – kur dar gali regėti tokią vietą, skirtą poilsiui, žūklei ir vandens pramogoms. Daugų apylinkėse net 12 ežerų.',
        imageUrl:
            '/images/daugu_ezeras.jpg',
    },

];

export default function ApieDaugus() {
    return (
        <div className="relative bg-gray-50 pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
            <Head>
                <title>Apie Daugus - Daugai.lt</title>
            </Head>
            <div className="absolute inset-0">
                <div className="bg-white h-1/3 sm:h-2/3" />
            </div>
            <div className="relative max-w-7xl mx-auto">
                <div className="text-center">
                    <h2 className="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl">Apie Daugus</h2>
                    <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
                        Daugai - miestas Alytaus rajone, 22 km į rytus nuo Alytaus, prie Vilniaus-Alytaus magistralinio kelio. Iš visų pusių jį supa ežerai, didžiausias ir giliausias iš jų – Didžiulio (Daugų) ežeras. Norint jį apeiti, teks įveikti 42 km. Vingiuotos ežero pakrantės, pusiasaliai, įlankos, nedidelės apvalios salos – kur dar gali regėti tokią vietą, skirtą poilsiui, žūklei ir vandens pramogoms. Daugų apylinkėse net 12 ežerų.
                    </p>
                </div>
                <div className="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
                    {posts.map((post) => (
                        <div key={post.title} className="flex flex-col rounded-lg shadow-lg overflow-hidden">
                            <div className="flex-shrink-0">
                                <img className="h-48 w-full object-cover object-top" src={post.imageUrl} alt="" />
                            </div>
                            <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                                <div className="flex-1">
                                    <a href={post.href} className="block mt-2">
                                        <p className="text-xl font-semibold text-gray-900">{post.title}</p>
                                        <p className="mt-3 text-base text-gray-500">{post.description}</p>
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>

    )
}
