import {H2} from '../components/H2';
import Head from 'next/head';
const tableContent = [
    {
        title: 'Pramogos',
        data: [
            {
                title: 'Ekskursijos Dauguose',
                address: '',
                phone: '+370 610 12990',
                email: '',
                web: '',
                description: 'Ekskursijos Dauguose'
            },
            {
                title: 'Valčių nuoma Daugų ežere (Robertas Ožalinskas)',
                address: 'Daugai, Alytaus r.',
                phone: '+370 610 12 990',
                email: '',
                web: '',
                description: 'Valčių nuoma Daugų ežere'
            },
            {
                title: 'Baidarių nuoma (L. ir A. Bagdanavičiai)',
                address: 'Maironio g. 47, Daugai, Alytaus r.',
                phone: '+370 698 80 611',
                email: '',
                web: '',
                description: 'Baidarių nuoma, vandens kelionių organizavimas.'
            },
            {
                title: 'Plausto nuoma (Saulius Velička)',
                address: 'Salos k., Daugų sen., Alytaus r.',
                phone: '+370 612 74 072',
                email: '',
                web: '',
                description: 'Plaukiojimas plaustu Daugų ežere. Maršrutas: Daugų miestas - Šiaurės paplūdimys - Perkūnkalnis - Salos piliakalnis - Aukakalnis - Skonių kampas - Bandūragis.'
            },
            {
                title: 'Kaimo turizmo sodyba „Dvarčėnų dvaras“',
                address: 'Suvingio g. 5, Dvarčėnų k., Daugų sen., Alytaus r.',
                phone: '+370 698 36 777',
                email: 'info@dvarcenudvaras.lt',
                web: 'www.dvarcenudvaras.lt',
                description: 'Pirtis, kubilas, biliardas, dviračiai, sporto aikštelė, stalo žaidimai, valtys, vandens dviračiai, žvejyba, lauko tenisas, lauko baseinas.'
            },
            {
                title: 'Daugų irklavimo bazė',
                address: 'Kalvų g. 15, Salos k., Daugų sen., Alytaus r.',
                phone: '+370 315 69 395, +370 612 77 423',
                email: 'menas.daugai@gmail.com',
                web: '',
                description: 'Kelionių organizavimas baidarėmis, vikingų valtimi, krepšinio, paplūdimio tinklinio, vaikų žaidimų aikštelės.'
            },
            {
                title: 'Daugų technologijos ir verslo mokykla',
                address: 'Ežero g. 30, Daugai, Alytaus r.',
                phone: '+370 315 72 790',
                email: 'tvm@email.com',
                web: '',
                description: 'Stadionas su futbolo aikštele, lauko krepšinio aikštelė, 2 sporto salės, stalo tenisas, sauna ant ežero kranto, šalia paplūdimys, galimybė nuomotis vandens dviračius.'
            },
            {
                title: 'Mobilus kubilas Dauguose',
                address: 'Daugų km., Daugai',
                phone: '+37060456188',
                email: 'daugukubilas@gmail.com',
                web: 'www.daugukubilas.lt',
                description: 'Mobilaus kubilo nuoma Jūsų kieme, tai japoniška pirtis kurioje yra puiki galimybė atšvęsti Jūsų šventę ar tiesiog atsipalaiduoti ir ramiai praleisti savaitgalį.'
            },
            {
                title: 'Daugų amatų kiemelis',
                address: 'Pergalės g. 6, Daugai (gimnazijos bendrabutis)',
                phone: '+370 682 51780',
                email: 'raimondasilale@gmail.com',
                web: '',
                description: 'Edukacinės programos: "Grikiai", grikinės babkos kepimas; žuvienės virimas lauko virtuvėje; pynimas iš vytelių; senoviniai žaidimai.'
            },

        ]
    },
    {
        title: 'Maitinimo paslaugos',
        data: [
            {
                title: 'Kavinė "Turgaus 4"',
                address: 'Turgaus aikštė 4, Daugai LT-64132 Alytaus r.',
                phone: '+370 694 95 462, +370 656 03 391',
                email: '',
                web: '',
                description: ''
            },
            {
                title: 'Daugų technologijos ir verslo mokyklos valgykla',
                address: 'Jaunystės g. 1, Daugai, Alytaus r.',
                phone: '+370 315 72 790',
                email: '',
                web: '',
                description: ''
            },
            {
                title: 'G. Baliukonio IĮ kavinė „Vigiris“ (pagal užsakymus)',
                address: 'Turgaus a. 3, Daugai, Alytaus r.',
                phone: '+370 652 70 706, +370 315 69 753',
                email: '',
                web: '',
                description: ''
            },
            {
                title: 'A. Zenevičienės IĮ kavinė „Suvingis“ (pagal užsakymus)',
                address: 'Vytauto g. 5, Daugai, Alytaus r.',
                phone: '+370 685 55 925, +370 612 06 525',
                email: '',
                web: '',
                description: ''
            },
        ]
    },
    {
        title: 'Apgyvendinimo paslaugos',
        data: [
            {
                title: 'Kaimo turizmo sodyba „Dvarčėnų dvaras“',
                address: 'Suvingio g. 5, Dvarčėnų k., Daugų sen., Alytaus r.',
                phone: '+370 698 36 777',
                email: 'info@dvarcenudvaras.lt',
                web: 'www.dvarcenudvaras.lt',
                description: `
                    24 kambarių, 78 vietos Pokylių salė iki 120 svečių
                    Numeryje - 2 kambariai, 4 vietos su dušais, šaldytuvais, TV. Pirtis, kubilas, biliardas, dviračiai, sporto aikštelė, stalo žaidimai, valtys, vandens dviračiai, žvejyba, lauko tenisas, lauko baseinas.
                `
            },
            {
                title: 'Poilsiavietė „Daugų sala“',
                address: 'Maironio g. 85, Salos k., Daugų sen., Alytaus r.',
                phone: '+370 687 39416',
                email: '',
                web: '',
                description: `
                    21 namelis, 167 vietos, renginiai iki 2000 žmonių<br />
                    Krepšinio, lauko teniso, futbolo, pliažo tinklinio aikštelės, valtys, pirtis, žvejyba.
                `
            },
            {
                title: 'Kaimo turizmo sodyba „Vaidos sodyba“',
                address: 'Suvingio g. 9A, Dvarčėnų k., Daugų sen., Alytaus r.',
                phone: '+370 615 14 994',
                email: '',
                web: '',
                description: `
                    4 šešiaviečiai nameliai, 25 vietos<br />
                    Viename namelyje yra 6 miegamos vietos, virtuvė sujungta su svetaine, yra židinys, erdvi terasa, iš kurios atsiveria nuostabi ežero panorama. Nameliuose įrengtos virtuvės su visais namų apyvokos reikmenimis, dušai, WC. Yra valtis, tinklinio aikštelė, kepsninė.
                `
            },
            {
                title: 'Daugų technologijos ir verslo mokyklos bendrabutis',
                address: 'Jaunystės g. 2, Daugai, Alytaus r.',
                phone: '+370 315 72 790, +370 655 14 523',
                email: '',
                web: '',
                description: `
                    77 kambariai, 200 vietų, priimamos tik grupės<br />
                    Numeryje 2 ir 3 vietų kambariai, 66 vietos su pilnais patogumais. Paslaugos grupėms pagal išankstines sutartis. Maitinimas. Sporto aikštynas ir salės, sauna.
                `
            },
            {
                title: 'Daugų irklavimo bazė',
                address: 'Kalvų g. 15, Salos k., Daugų sen., Alytaus r.',
                phone: '+370 315 69 395, +370 612 77 423',
                email: 'menas.daugai@gmail.com',
                web: '',
                description: `
                    14 kambarių, 25 vietos<br />
                    Kambariai su patogumais,1 ir2 vietų. Yra krepšinio, paplūdimio tinklinio, vaikų žaidimų aikštelė, baidarės, vikingų valtis. Galima rengti stovyklas. Priimamos grupė nuo 10 žmonių.
                `
            },
            {
                title: 'Daugų Vlado Mirono gimnazijos bendrabutis',
                address: 'Vlado Mirono g. 6, Daugai, Alytaus r.',
                phone: '+370 686 90 732, +370659 54 502',
                email: '',
                web: 'www.dvm.lt',
                description: `
                    15 kambarių, 50 vietos, priimamos tik grupės<br />
                    Kambariai be patogumų, atskirai virtuvė, dušai, poilsio kambarys su TV. Papildomos paslaugos pagal susitarimą.
                `
            },
            {
                title: 'Kambarių nuoma „Vigiris“',
                address: 'Turgaus a. 3, Daugai, Alytaus r.',
                phone: '+370 650 54 210',
                email: '',
                web: '',
                description: `
                    3 kambariai, 16 vietų Pokylių salė iki 50 vietų<br />
                    Maitinimas ir kitos paslaugos pagal susitarimą.
                `
            },
            {
                title: 'Sodyba „Vigiris“',
                address: 'Dusmenų g. 9, Daugų k., Daugų sen., Alytaus r.',
                phone: '+370 650 54 210',
                email: '',
                web: '',
                description: `
                    2 kambariai, 10 vietų Pokylių salė iki 50 vietų<br />
                    Yra 16 vietų pirtis, 8 vietų kubilas
                `
            },
        ]
    },
    {
        title: 'Kraštotyros muziejai, ekspozicijos (lankymas pagal išankstinį susitarimą)',
        data: [
            {
                title: 'Daugų Vlado Mirono gimnazijos Kraštotyros muziejus',
                address: 'Vlado Mirono g. 2, Daugai, Alytaus r',
                phone: '+370 315 69 104',
                email: '',
                web: 'www.dvm.lt',
                description: ''
            },
            {
                title: 'Daugų technologijos ir verslo mokyklos „Dzūkų gryčia“',
                address: 'Ežero g. 30, Daugai, Alytaus r',
                phone: '+370 315 72 790',
                email: '',
                web: 'www.dtvm.lt',
                description: ''
            },
            {
                title: 'K. Juonio IĮ Daugų kalvės ekspozicijų salė',
                address: 'Ežero g. 5, Daugai, Alytaus r',
                phone: '+370 687 31 328',
                email: '',
                web: 'www.daugukalve.lt',
                description: ''
            },
            {
                title: 'Kančėnų bendruomenės kraštotyros ekspozicija',
                address: 'Mokyklos g. 6, Kančėnų k., Alytaus r',
                phone: '+370 698 40768',
                email: '',
                web: '',
                description: ''
            },
            {
                title: 'Daugų amatų kiemelis, "Daugų krašto" muziejus',
                address: 'Vlado Mirono g. 6, Daugai (gimnazijos bendrabutis)',
                phone: '+370 682 51780',
                email: 'raimondasilale@gmail.com',
                web: '',
                description: ''
            },
        ]
    },
    {
        title: 'Konferencijų salės',
        data: [
            {
                title: 'Daugų irklavimo bazė',
                address: 'Kalvų g. 15, Salos k., Daugų sen. Alytaus r.',
                phone: '+370 315 69 395, +370 612 77 423',
                email: 'menas.daugai@gmail.com',
                web: '',
                description: 'Konferencijų salė 50 vietų, multimedia, ekranas.'
            },
            {
                title: 'Daugų technologijos ir verslo mokykla',
                address: 'Ežero g. 30, Daugai, Alytaus r.',
                phone: '+370 315 72 790',
                email: 'tvm@email.com',
                web: 'www.dtvm.lt',
                description: 'Konferencijų salė 50 vietų, multimedia, kompiuteris, ekranas, internetas, kopijavimo aparatas.'
            },
            {
                title: 'Kaimo turizmo sodyba „Dvarčėnų dvaras“',
                address: 'Suvingio g. 5,Dvarčėnų k., Daugų sen., Alytaus r.',
                phone: '+370 698 36 777',
                email: 'info@dvarcenudvaras.lt',
                web: 'www.dvarcenudvaras.lt',
                description: 'Konferencijų salė talpinanti iki 180 svečių, multimedia, kompiuteris, įgarsinimo aparatūra, nešiojami mikrofonai.'
            },
            {
                title: 'A. Zenevičienės IĮ kavinė „Suvingis“',
                address: 'Vytauto g. 5, Daugai, Alytaus r.',
                phone: '+370 685 55 925, +370 612 06 525',
                email: '',
                web: '',
                description: 'Konferencijų salė, 200 vietų, yra DVD grotuvas, ekranas, multimedia.'
            },
            {
                title: 'Daugų amatų kiemelis',
                address: 'Vlado Mirono g. 6, Daugai (gimnazijos bendrabutis)',
                phone: '+370 682 51780',
                email: 'raimondasilale@gmail.com',
                web: '',
                description: 'Turime nedidelę konferencijų salę su multimedija, ekranu, kopijavimo aparatu, kurioje telpa iki 30 žmonių.'
            },
        ]
    }
]

export default function PramogaukDauguose() {
    return (
        <div className="bg-white">
            <Head>
                <title>Pramogos Daugus - Daugai.lt</title>
            </Head>
            <div className="divide-y-2 divide-gray-200">
                {tableContent.map((block, index) => (
                    <div className={`${index > 0 ? 'mt-16 pt-16 ' : ''}`} key={index}>
                        <H2>{block.title}</H2>
                        <ul role="list" className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 mt-8">
                            {block.data.map((company) => (
                                <li key={company.title} className="flex flex-col col-span-1 bg-white rounded-lg shadow divide-y divide-gray-200">
                                    <div className="flex-grow p-6 space-y-2">
                                        <h3 className="text-gray-900 text-sm font-medium truncate">
                                            {company.web ? <a href={`http://${company.web}`} target={'_blank'} className={"underline hover:no-underline"}>{company.title}</a> : company.title}
                                        </h3>
                                        {company.address.length > 0 && <p className="mt-1 text-gray-700 font-semibold text-xs truncate">
                                          <a href={`https://maps.google.com/?q=${company.address}`} target={"_blank"} className=" hover:text-gray-500">{company.address}</a>
                                        </p>}
                                        <p className="mt-1 text-gray-500 text-sm" dangerouslySetInnerHTML={{__html: company.description}} />
                                    </div>
                                    <div className={"flex-shrink-1"}>
                                        <div className="-mt-px flex divide-x divide-gray-200">
                                            {company.email.length > 0 ? <div className="w-0 flex-1 flex">
                                                <a
                                                    href={`mailto:${company.email}`}
                                                    className="relative -mr-px w-0 flex-1 inline-flex items-center justify-center py-4 text-sm text-gray-700 font-medium border border-transparent rounded-bl-lg hover:text-gray-500"
                                                >
                                                    {/*<MailIcon className="w-5 h-5 text-gray-400" aria-hidden="true" />*/}
                                                    <span className="ml-3">{company.email}</span>
                                                </a>
                                            </div> : null }
                                            {company.phone.length > 0 ? <div className="-ml-px w-0 flex-1 flex">
                                                <span
                                                    className="relative w-0 flex-1 inline-flex items-center justify-center py-4 text-sm text-gray-700 font-medium border border-transparent rounded-br-lg"
                                                >
                                                    {/*<PhoneIcon className="w-5 h-5 text-gray-400" aria-hidden="true" />*/}
                                                    <span className="ml-3">{company.phone}</span>
                                                </span>
                                            </div> : null }
                                        </div>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    )
}
