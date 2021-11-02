import Head from 'next/head';

export default function PajuskDaugus() {
    return (
        <div className="relative px-4 sm:px-6 lg:px-8">
            <Head>
                <title>Pajusk Daugus - Daugai.lt</title>
            </Head>
            <div className="text-lg max-w-prose mx-auto">
                <h1 className="mt-2 block text-3xl text-center leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                    Pajusk Daugus
                </h1>
                <p className="mt-8 text-xl text-gray-500 leading-8">
                    Ar Tu jau aplankei Daugus!? Prisimeni, koks čia gaivus vanduo ir, kiek daug pastangų ir vyresniųjų raginimų reikėdavo, kad pagaliau iš jo išliptum? Ar skaičiavai, kiek pakrančių, lieptų ir lieptelių išmėginai? Dėl to Tau kiekviena diena atrodė vis kitokia, nors maudeisi tam pačiam – Didžiulio vandeny. Net ir daugiškiai kiekvieną jo pakrantę vadina skirtingais vardais. Užburtas dydžio, kartais tiesiog pamiršti, kad tai vis tas pats ežeras.
                </p>
            </div>
            <div className="max-w-prose text-lg mx-auto text-gray-500">
                <p className="mt-8 text-gray-500 leading-7">
                    Jei Tu jau kada nors čia lankeisi, tikrai turi daugiau nei tik prisiminimus – Daugai visam laikui palieka širdy jausmą, kurį kiekvienas išgyvename skirtingai. Galbūt jie Tau reiškia  kutenančius lašus ant kūno, kai saulė ir lengvas vėjelis juos bando sugaut, o gal tai pirmas plaukimo grybšnis ir pilnas tikras gurkšnis ežero vandens? Vieniems tai – siautulingos lenktynės vandens dviračiais, ar trumpas išgąstis, apvirtus baidarei, kitiems – saulėlydis ir palapinė pakrantėj (jei kartais lytų, juk nieks nesiruošia miegot), tretiems – skardaus draugų juoko aidas, atsimušęs kitame krante. Sugaut akimirką – be blykstės, be fotoaparato, sugaut ir įrašyti atmintin švariai, lyg viskas būtų buvę vakar. Kad prisiminus vėl iškart norėtųsi sugrįžti. Jei Tu jau aplankei Daugus, tikrai žinai, ką šitai reiškia.
                </p>
                <figure className="mt-6">
                    <img src="/images/daugu_ezeras.jpg" alt="Daugų ežeras" title="Daugų ežeras" />
                    <figcaption className="text-xs">Daugų ežeras. Fotografijos autorė Miglė Kartanaitė</figcaption>
                </figure>
                <p className="mt-8 text-gray-500 leading-7">
                    ATRASK, TYRINĖK, PAJUSK Daugus – ar pirmą kartą, ar iš naujo. Tai nesvarbu, nes kas kartą  prisipildai naujų emocijų, įkvėpi gyvenimo, pamiršti rūpesčius, gyveni čia ir dabar.  Nors šiandien Daugai atrodo tarsi iš naujo atgimę, nors kasdien vis daugėja įvairiausių paslaugų ir pramogų, nepamiršk aplankyti ne tik didžiausius paplūdimius, bet ir mažiausias įlankėles, todėl, kad ten slypi tikrieji Daugai. Pažvelk į savo atspindį vandenyje, besileidžiant saulei. Pasakyk „labas“ ir nusišypsok! Matai kokie mes visi paprasti ir gražūs? O tada bėk žaisti tinklinį, krepšinį, ar tiesiog gulėk saulėje, kad vėliau įšokęs į ežerą pajustum, koks nepaprastas mūsų Didžiulio vanduo!
                </p>
                <p className="mt-8 text-gray-500 leading-7">
                    IKI SUSITIKIMO DAUGUOSE!
                </p>
            </div>
        </div>
    );
}
