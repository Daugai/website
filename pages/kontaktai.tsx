import {H2} from '../components/H2';
import Head from 'next/head';

const contacts = [
    {
        title: 'Valstybinės institucijos',
        contents: [
            {
                title: 'Daugų seniūnija',
                address: `S. Neries g. 3, Daugai<br /> 
                    LT-64140 Alytaus r.<br />
                    Seniūnė Irma Kašėtienė<br />
                    Tel. (8 315) 69100, 8 686 87204`
            },
            {
                title: 'Daugų paštas',
                address: `S. Nėries g. 3, Daugai<br />
                        LT-64009 Alytaus r.<br />
                        Tel. (+370) 70055400<br />
                        Darbo laikas I-V 7.30-16.00`
            },
            {
                title: 'Alytaus priešgaisrinė gelbėjimo tarnyba, Daugų komanda',
                address: `Turgaus a. 7, Daugai<br />
                        LT-64140 Alytaus r.<br />
                        Tel./faks. (8 315) 69201`
            },
            {
                title: 'Daugų policijos nuovada',
                address: `Ežero g. 25, Daugai<br />
                    LT-64137 Alytaus r.<br />
                    Tel. (8 315) 69202`
            },
            {
                title: 'Daugų biblioteka',
                address: `
                    Ežero g. 18, Daugai<br />
                    LT-64139 Alytaus r.<br />
                    Tel. (8 315) 69 131<br />
                    Darbo laikas II-VI 9.30-18.00<br />
                    Paskutinę mėnesio darbo dieną skaitytojai neaptarnaujami – švaros diena.
                `
            }
        ]
    },
    {
        title: 'Ugdymo įstaigos',
        contents: [
            {
                title: 'Alytaus rajono Daugų Vlado Mirono gimnazija',
                address: `Pergalės g. 2, Daugai<br />
                    LT-64140 Alytaus r.<br />
                    Tel. (8 315) 69144<br />
                    Interneto svetainė <a href="https://www.dvm.lt" target="_blank">www.dvm.lt</a>`
            },
            {
                title: 'Alytaus rajono Daugų vaikų darželis',
                address: `
                    Ežero g. 20, Daugai<br />
                    LT-64137 Alytaus r.<br />
                    Tel./faks. (8 315) 69386
                `
            },
            {
                title: 'Alytaus r. meno ir sporto mokykla',
                address: `
                    Ežero g. 18, Daugai<br />
                    LT-64597 Alytaus r.<br />
                    Tel. (8 315) 69633
                `
            },
            {
                title: 'Daugų technologijos ir verslo mokykla',
                address: `
                    Ežero g. 30, Daugai<br />
                    LT-64137 Alytaus r.<br />
                    Tel. (8 315) 72 790<br />
                    Interneto svetainė <a href="https://www.dtvm.lt" target="_blank">www.dtvm.lt</a>
                `
            },
        ]
    },
    {
        title: 'Kita',
        contents: [
            {
                title: 'Daugų Dievo apvaizdos bažnyčia',
                address: `
                    Savanorių g. 17, Daugai<br />
                    LT-64142 Alytaus r.<br />
                    Tel. (8 315) 69152
                `
            },
            {
                title: 'Daugų palaikomojo gydymo ir slaugos ligoninė',
                address: `
                    Vlado Mirono g. 9, Daugai<br />
                    LT-64140 Alytaus r.<br />
                    Tel./faks. (8 315) 69135<br />
                    Interneto svetainė <a href="https://www.pspc.lt" target="_blank">www.pspc.lt</a>
                `
            },
            {
                title: 'Daugų ambulatorija',
                address: `
                    Vlado Mirono g. 9, Daugai<br />
                    LT-64140 Alytaus r.<br />
                    Tel./faks. (8 315) 69272
                `
            },
            {
                title: 'Alytaus rajono Daugų kultūros centras',
                address: `
                    Ežero g. 18, Daugai<br />
                    LT-64137 Alytaus r.<br />
                    Tel./faks. (8 315) 69239<br />
                `
            },
            {
                title: 'Daugų miesto bendruomenės visuomeninė organizacija „Daugų kraštas“',
                address: `
                    Vlado Mirono g. 6, Daugai<br />
                    LT-64141 Alytaus r.<br />
                    Tel. (8 682) 51780
                `
            },
            {
                title: 'Daugai.lt puslapio palaikymas',
                address: `
                    El.paštas <a href="mailto: kestutis@daugai.lt">kestutis@daugai.lt</a>
                `
            }
        ]
    }
];

export default function Kontaktai() {
    return (
        <div className="bg-white">
            <Head>
                <title>Kontaktai - Daugai.lt</title>
            </Head>
            <div className="divide-y-2 divide-gray-200">
                {contacts.map((contact, index) => (
                    <div className={`${index > 0 ? 'mt-16 pt-16 ' : ''}lg:grid lg:grid-cols-3 lg:gap-8`} key={index}>
                        <H2>{contact.title}</H2>
                        <div
                            className="mt-8 grid grid-cols-1 gap-12 sm:grid-cols-2 sm:gap-x-8 sm:gap-y-12 lg:mt-0 lg:col-span-2">
                            {contact.contents.map((content) => (
                                <div>
                                    <h3 className="text-lg leading-6 font-medium text-gray-900">{content.title}</h3>
                                    <dl className="mt-2 text-base text-gray-500">
                                        <div dangerouslySetInnerHTML={{__html: content.address}}/>
                                    </dl>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
