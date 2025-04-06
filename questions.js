const cards = [
  {
    question: "A: Miten ilmavirtaus tarkistetaan?",
    answer: "Tunnustelee paljaalla kädellä/poskella ilmavirtausta"
  },
  {
    question: "A: Mitkä ovat kolme tapaa ilmateiden aukipitoon?",
    answer: "Käsin ojentamalla päätä taakse\nNenänieluputki\nKylkiasento"
  },
  {
    question: "Aikuisen sydän lyö levossa ________ kertaa minuutissa.",
    answer: "60-80"
  },
  {
    question: "B: Mikä muodostaa keuhkopussin ja miten se sijaitsee keuhkojen ympärillä?",
    answer: "Keuhkopussi muodostuu kahdesta lehdestä: yksi kiinnittyy tiiviisti keuhkokudoksen pintaan ja toinen verhoaa rintaontelon sisäpinnan."
  },
  {
    question: "B: Mikä on neulatorakosenteesin (hätäkanavoinnin) lisäksi toinen hoitovaihtoehto paineilmarinnalle?",
    answer: "Ilmatiiviiden sidosten raottaminen"
  },
  {
    question: "B: Mikä on paineilmarinnan ensiaputoimenpide ja miksi se on tärkeä?",
    answer: "Paineilmarinnan ensiaputoimenpide on rintaontelon hätäkanavointi eli neulatorakosenteesi.\nSe on suhteellisen vähäriskinen, mutta elämää pelastava toimenpide, koska vaihtoehtona on kuolema."
  },
  {
    question: "B: Miltä näyttää normaali hengitys ja miten se tunnistetaan?",
    answer: "Normaali hengitys on tasaista, rauhallista, äänetöntä, helppoa ja vaivatonta. Lisäksi ihonväri on normaali, haavoittunut puhuu vaivattomasti ja rintakehä liikkuu symmetrisesti."
  },
  {
    question: "B: Miten ilmarinta hoidetaan taisteluensiavussa vaihe vaiheelta?",
    answer: "1. Peitetään vammakohta ensin kädellä ja sitten ilmatiiviillä tai venttiilisiteellä.\n2. Kehotetaan hengittämään ulos ja pidättämään hengitystä ennen sidoksen asettamista.\n3. Aseta sidos ja kehota hengittämään normaalisti. Peitetään kaikki rintakehän lävistävät vammat\n4. Asetetaan haavoittunut kylkiasentoon vammapuoli alaspäin ja seurataan hengitystä.\n5. Jos ilmatiiviin sidoksen asettamisen jälkeen ilmenee paineilmarinnan oireita, raokataan sidosta tai puretaan paineilmarinta tarvittaessa."
  },
  {
    question: "B: Miten neulatorakosenteesi suoritetaan vaihe vaiheelta?",
    answer: "1. Paikanna vammapuoli.\n2. Etsi kolmannen kylkiluun yläreuna ja keskisolislinja.\n3. Pistä neula kolmannen kylkiluun yläreunaa pitkin keskisolislinjasta sisään.\n4. Kun neulan läpi tulee ilmaa, poista neula jättäen kanyyli rintaonteloon.\n5. Pidä kanyyli paikallaan, kunnes ilman tulo lakkaa.\n6. Poista kanyyli, aseta neula ja kanyyli koteloonsa ja säilytä potilaan luokittelukortin pussissa.\n7. Ole valmis uusimaan toimenpide, jos tarpeen."
  },
  {
    question: "B: Miten paineilmarinta hoidetaan neulatorakosenteesilla?",
    answer: "Purkupaikka rintakehällä, keskisolislinja, 2.-3. kylkiluun väli, vammapuoli"
  },
  {
    question: "B: Mitkä ovat paineilmarinnan merkittävimmät oireet?",
    answer: "Paineilmarinta näkyy:\nJatkuvasti vaikeutuvana hengityksenä\nIhon sinertämisenä\nTajunnan heikkenemisenä\nPullottavina kaulalaskimoina\nEpäsymmetrisenä rintakehän liikkeenä\nHengitysäänen puuttumisena vammapuolen keuhkosta\nHeikentyneenä sykkeenä\nTilan nopeana heikkenemisenä\nMyöhäisenä oireena henkitorven (aataminomena) siirtymisenä poispäin vammapuolesta."
  },
  {
    question: "B: Mitkä ovat viisi hengitysvaikeuden tunnusmerkkiä?",
    answer: "Hengitys korisee, vinkuu, tai on ylipäätään äänekästä ja \"näkyvää\"\nHengitys on pinnallista, tai haukkovaa\nHengitys on kiihtynyttä, tai hyvin verkkaista\nIhon väri harmaa, tai sinertävä\nPuhuminen on vaikeaa"
  },
  {
    question: "B: Mitä on syytä epäillä potilaan jatkuvasti vaikeutuvassa hengenahdistuksessa?",
    answer: "Paineilmarintaa"
  },
  {
    question: "B: Mitä ovat viisi ilmarinnan oiretta?",
    answer: "Hengitysvaikeus\nRintakehän epäsymmetrinen liike\nVeristen ilmakuplien ja suhisevan äänen tulo haavasta\nVeren yskiminen\nIhon sinertäminen"
  },
  {
    question: "B: Mitä tarkastetaan rintakehävammaisen ensiavussa?",
    answer: "1. Tarkistetaan, että haavoittunut hengittää\n2. Etsitään vammoja rintakehästä tai selästä.\n3. Paljastetaan rintakehä, tunnustellaan ja katsotaan vammoja, sekä tarkastetaan kainalot, kyljet, hartiat ja selkä."
  },
  {
    question: "B: Mitä tehdään paineilmarinnan jatkohoidossa?",
    answer: "1. Varaudutaan uusimaan rintaontelon hätäkanavointi.\n2. Tarkkaillaan haavoittunutta jatkuvasti oireiden uusiutumisen varalta.\n3. Asetetaan haavoittunut kylkiasentoon vammapuoli alaspäin, tai sellaiseen asentoon missä haavoittuneen on helpoin olla"
  },
  {
    question: "c: Amputaatioriski kasvaa merkittävästi _ ________ jälkeen",
    answer: "8 tunnin"
  },
  {
    question: "c: Kiristyssidettä voidaan pitää paikallaan raajaverenvuodon hillitsemiseksi ilman merkittävää pysyvää haittaa _____ ________ saakka",
    answer: "6 tuntiin"
  },
  {
    question: "c: Kiristyssiteen paikkaa voidaan tarvittaessa muuttaa ____ ______ saakka",
    answer: "2 tuntiin"
  },
  {
    question: "c: Mihin kiristysside asetetaan raajassa?",
    answer: "Raajan tyveen vuotokohdan yläpuolelle"
  },
  {
    question: "C: Mikä on apukeino verenvuodon tyrehdyttämisessä paikassa, jossa kiristyssidettä ei voida käyttää?",
    answer: "Hemostaatti"
  },
  {
    question: "c: Milloin sisäinen verenvuoto on yleensä hengenvaarallista?",
    answer: "Silloin kun vuoto kohdistuu keuhko-onteloon, vatsaan tai lantioon"
  },
  {
    question: "c: Miten sisäistä verenvuotoa voi paikantaa?",
    answer: "Vammamekanismi\nTajunnantason lasku\nKipu tai kipuherkkyys\nKalpeus, heikko syke, rytmihäiriöt"
  },
  {
    question: "c: Mitkä ovat laskimoverenvuodon tunnusmerkit?",
    answer: "Veri on tasaisesti valuva\nVeri on väriltään tumman punaista, tai punaruskeaa"
  },
  {
    question: "c: Mitkä ovat valtimoverenvuodon tunnusmerkit?",
    answer: "Nopea ja voimakas vuoto, vuotaa aluksi sykäyksittäin\nVerenhukan seurauksena vuoto muuttuu valuvaksi\nVeri on väriltään kirkkaan punaista"
  },
  {
    question: "c: Mitä henkeä uhkaavassa raajaverenvuodossa tulee tehdä?",
    answer: "Asetta kiristysside raajan tyveen ja kiristää sidettä kunnes verenvuoto tyrehtyy"
  },
  {
    question: "c: Mitä kiristyssiteen asettamisen jälkeen tulee tehdä?",
    answer: "Merkitä kiristyssiteen asennusajankohta siteeseen tai iholle"
  },
  {
    question: "C: Mitä menetelmää käytetään massiivisen verenvuoden hallintaan paikassa, jossa kiristyssidettä ei voida käyttää?",
    answer: "Haavakanavan pakkaamista (tamponointi)"
  },
  {
    question: "c: Mitä tulee tehdä, mikäli raajaverenvuoto ei tyrehdy kiristyssiteellä?",
    answer: "Asettaa toinen kiristysside"
  },
  {
    question: "c: Raaja on elinkelvoton _____ ______ jälkeen",
    answer: "12 tunnin"
  },
  {
    question: "c: Sairaalakokemusten ja eläinkokeiden perusteella kiristysside ei aiheuta merkittävää haittaa raajalle, jos se on paikallaan alle ____ _______;",
    answer: "2 tuntia"
  },
  {
    question: "c: Sotakokemusten perusteella korkean raaja-amputaation ja hermovamman riski kasvaa vasta _________ ____________ jälkeen",
    answer: "6-8 tunnin"
  },
  {
    question: "c: Taistelukentällä sisäisen verenvuodon ensiapu on käytännössä ________ _________ hoitoa;",
    answer: "sokin oireiden"
  },
  {
    question: "D: Milloin haavoittuneelle voi antaa suun kautta annettavaa kipulääkettä?",
    answer: "Jos tajunnantaso on A (= Alert) tai V (= Verbal) ja kivut ovat 5, tai yli"
  },
  {
    question: "E: Mikä on raportoinnin tarkoitus?",
    answer: "Siirtää tietoa haavoittuneen tilasta seuraavalle hoitotasalle"
  },
  {
    question: "E: Mitkä kaksi tekijää ovat sokin ennaltaehkäisyssä oleellisia?",
    answer: "Verenvuotojen tyrehdyttäminen ja lämpimänäpito"
  },
  {
    question: "E: Mitä eroa on ensiluokittelulla ja potilasluokittelulla?",
    answer: "Ensiluokittelu tehdään silloin, kun potilaita on enemmän kuin hoitajia. Se tehdään kohtaamisjärjestyksessä ja aikaa käytetään max. 20-30 sek.\nPotilasluokittelu tarkoittaa potilaan hoidon kiireellisyyden luokittelua luokkiin 1-4. Se tehdään rauhassa, jos on riittävästi aikaa hoitaa yhtä potilasta kerrallaan."
  },
  {
    question: "E: Mitä muistisääntöä käytetään raportoinnissa ja mitä sen kirjaimet merkitsevät?",
    answer: "AT-MIST\nA = Altistuneen tiedot (age)\nT = Tapahtuma-aika (time)\nM = Mekanismi (mechanism)\nI = Ilmenneet vammat (injury)\nS = Seuranta (signs)\nT = Toimenpiteet (treatments)"
  },
  {
    question: "E: Mitä potilaskorttiin kirjataan hengityksestä?",
    answer: "Hengitystaajuus"
  },
  {
    question: "E: Mitä potilaskorttiin kirjataan tajunnantasosta?",
    answer: "AVPU"
  },
  {
    question: "E: Mitä potilaskorttiin kirjataan verenkierrosta?",
    answer: "Pulssin eli sykkeen"
  },
  {
    question: "E: Mitä taistelupelastajan on vähintään kirjattava luokittelukorttiin?",
    answer: "Kiristyssiteen asettamisen kellonajan\nKipulääkkeen antamisen kellonajan"
  },
  {
    question: "Hengitystiheys levossa _________ kertaa minuutissa",
    answer: "10-20"
  },
  {
    question: "Jos mahdollista, haavoittunut evakuoidaan yleensä heti...?",
    answer: "...tilan vakauttamisen jälkeen"
  },
  {
    question: "Jos rannesyke tuntuu, verenpaineen yläpaine on varmasti yli _____\nJos vain kaulavaltimopulssi tuntuu, verenpaineen yläpaine on yli _____",
    answer: "80\n60"
  },
  {
    question: "Kenen tehtäviin kuuluu taisteluensiavun kouluttaminen omalle ryhmälleen?",
    answer: "Taistelupelastajan"
  }
]