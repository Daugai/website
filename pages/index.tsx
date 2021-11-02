import Head from 'next/head';
import Link from 'next/link';
import {InstagramFeed} from '../components/InstagramFeed';
import {H2} from '../components/H2';

export default function Index() {
    return (
        <div>
            <div className="relative">
                <Head>
                    <title>Daugai</title>
                </Head>
                {/*<div className="absolute inset-x-0 bottom-0 h-1/2 bg-gray-100"/>*/}
                <div>
                    <div className="relative shadow-xl sm:rounded-2xl sm:overflow-hidden">
                        <div className="absolute inset-0">
                            <img
                                className="h-full w-full object-cover"
                                src="/images/homebg.jpg"
                                alt="Daugai"
                            />
                            {/*<div className="absolute inset-0 bg-indigo-700 mix-blend-multiply"/>*/}
                        </div>
                        <div className="relative px-4 py-16 sm:px-6 sm:py-24 lg:py-32 lg:px-8">
                            <h1 className="text-center text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
                                <span className="block text-white">Pažink Daugus</span>
                                {/*<span className="block text-indigo-200">customer support</span>*/}
                            </h1>
                            <p className="mt-6 max-w-lg mx-auto text-center text-lg text-indigo-50 sm:max-w-3xl">
                                Daugai - miestas Alytaus rajone, 22 km į rytus nuo Alytaus, prie Vilniaus-Alytaus magistralinio kelio. Iš visų pusių jį supa ežerai, didžiausias ir giliausias iš jų – Didžiulio (Daugų) ežeras. Norint jį apeiti, teks įveikti 42 km. Vingiuotos ežero pakrantės, pusiasaliai, įlankos, nedidelės apvalios salos – kur dar gali regėti tokią vietą, skirtą poilsiui, žūklei ir vandens pramogoms. Daugų apylinkėse net 12 ežerų.
                            </p>
                            <div className="mt-10 max-w-sm mx-auto sm:max-w-none sm:flex sm:justify-center">
                                <div className="sm:mx-auto">
                                    <Link
                                        href="/apie-daugus"
                                    >
                                        <a
                                            className="flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-500 bg-opacity-60 hover:bg-opacity-70 sm:px-8"
                                        >
                                            Sužinok daugiau
                                        </a>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={"pt-12"}>
                <H2>Naujausios nuotraukas iš <a href="https://www.instagram.com/daugai.lt/" target="_blank">@daugai.lt Instagram</a></H2>
                <div className="mt-6">
                    <InstagramFeed />
                </div>
            </div>
        </div>
    )
}
