/* jshint esnext: true*/
const names2 = [
  'AZURES ALTHEA AMOR',
  'CASTILLO LEONEL',
  'CERRATO IKER',
  'CHILIN ALINA',
  'CHIPEL VENTURA JUAN FRANCISCO',
  'DO KHOA',
  'DUARTES BETANCOURTH ASHLEY',
  'EVO JOSELYN',
  'FASCITELLI ALPHONSE',
  'GARMENDIA LEONEL',
  'GIRON MEJIA JONATHAN',
  'GONZALEZ BATISTA HEIDY',
  'HERNANDEZ NATALY',
  'JUNO JESSICA',
  'KNIGHT MA`KAYLA',
  'LIBAN SUMAYA',
  'MARTINEZ YUREM',
  'NEWCOMB WYATT',
  'RAMIREZ-PACHECO ERIC',
  'RIVERA LENIN',
  'RODRIGUEZ JOSE',
  'TAUNK IRLEEN',
  'TAUNK NAVBIR',
  'ULLOA MALDONADO JULIO',
  'VELASQUEZ RIVERA FEBE',
  'VILLALOBOS SANTOS KEVIN',
  'WEDGEWORTH ADALEE',
  'ZAYED NIVEEN',
  'ZUNIGA MANZANO BAYRON'
]

const users2 = [
  'altheaamor-az',
  'Leowasused',
  'iker287',
  'alinaacc',
  'juanchipel',
  'JoJoB-A',
  'Arelle10',
  'jevo98',
  'alphonsef',
  'LeoPrometheus7000000',
  'Jonathan2147',
  'Heidy-Gonzalez',
  'Nataly-H3',
  'jessica-juno1',
  'Makaylaknight6',
  'sumayaliban',
  'yurem02',
  'WyattNewcombJPS',
  'ehhric',
  'Lenin-R1',
  '7josie',
  'irleentaunk',
  'NavbirT',
  'Julio12Cold',
  'febee1',
  'Fernandov12',
  'AdaleeW',
  'Isniveenabean',
  'bayronzuniga'
]

const names3 = [
  'BANEGAS MIKE',
  'BLANCO ANDRES',
  'CANTARERO MARVIN',
  'CARBO MAKENZI',
  'CARDONA SAMUEL',
  'DUARTE REBECCA',
  'ESKANDER KEVIN',
  'FREDERICK SHAMAD',
  'GIRON VICTOR',
  'GRANDE MICHELLE',
  'GUARDADO DAVID',
  'HERNANDEZ MARJORIE',
  'HERVEY AUNIYA',
  'LIMA VICTOR',
  'LIPSCOMB HERBERT',
  'LOPEZ GIANLUCA',
  'MIRANDA-BATIZ JIMMIAN',
  'MONTENEGRO LEMUEL',
  'MORRIS ZYRELLE',
  'MURILLO FLORES EDUARD',
  'NGUYEN SKYLAR',
  'OCAMPO SONIK',
  'OROZCO ABELARDO',
  'PALACIO ASLIN',
  'PETERS TA`MICHAEL',
  'PIAZZA PEYTON',
  'SANCHEZ-ALEMAN SNYDER',
  'SHAREEF HAIDER',
  'SOLER ABNER',
  'ZUNIGA-PINEDA FERNANDO'
]

const users3 = [
  'Mikebanegas04',
  'AndresBlanco57',
  'Marvx107',
  'MakenziC',
  'SamuelCardona0',
  'br3skiii',
  'Kevin-E7',
  'shamadfrederick',
  'VicGiron1',
  'miichelle8',
  'davidottoniel',
  'MarjorieHernandez',
  'Auniya',
  'Victor-pro-code',
  'HerbertLipscombIII',
  'gianluclopez',
  'j1mmyxo',
  'lemuelmontenegro2',
  'ChillOnZeal',
  'Eduarflores0',
  'sky-designn',
  'sonik132',
  'Abelardoorozco',
  'Aslin18',
  'Tamichael7',
  'Loveingtom13',
  'PXEsnyder',
  'Haidershareef1',
  'abnersoler08',
  'Fernando426387'
]

const names4 = [
  'ALI  MOHAMMAD ZAID',
  'ALSHAAR  OMAR',
  'ANDERSON CHAZEIN',
  'BARNES MAILYSHA',
  'BOUDREAUX JORDAN',
  'CENTENO FABRIZIO',
  'CRIMEN VINCENT',
  'CRUZ ALFREDO',
  'DELAROSA OMAR',
  'DELAROSA OMERY',
  'DE PAZ DIEGO',
  'FILLALI YOUNES',
  'FLORES CRISTIAN JAVIER',
  'FLORES ESTHER',
  'GAD SELEN',
  'HAJDAREVIC SAMRA',
  'HOWARD ANTHONY',
  'JACOBS TA`NIA',
  'JOHNSON TYAINEY',
  'LOPES IASMIM',
  'MARTIN LARASIA',
  'PETERSEN-GORDON SHAI',
  'RODRIGUEZ YASMIN',
  'RODRIGUEZ-TORRES DERIC',
  'WU AARON'
]

const users4 = [
  'ZaidisZS',
  'OmarAlshaar',
  'chaz237',
  'mailyshabarnes',
  'IJordan-B',
  'Fabrizio2007',
  'Vincent1157',
  'AlfredoCruz2006',
  'OmarDeLaRosa013',
  'omery333',
  'Dieg07001',
  'younesfillali',
  'cris-623',
  'esther415209',
  'selengad1218',
  'samrasamrasamra',
  'AnthonyHoward2007',
  'TANIAJACOBS',
  'Tyainey',
  'Iasmin244',
  'larasiamartin',
  'SugaShai-27',
  'yasmin77777',
  'deric-nt',
  'A4ronWu'
]

const addNamesAndUsers = (namesArray, usersArray, block) => {
  const objectsArray = [];
  for (let i = 0; i < namesArray.length; i++) {  
    const websitePath = `https://${usersArray[i]}.github.io`;
    const portfolioPath = `${websitePath}/portfolio.html`;
    const platformerPath = `${websitePath}/fsd-projects/platformer/`;
    const bouncingBoxPath = `${websitePath}/fsd-projects/bouncing-box/`;
    const circularityPath = `${websitePath}/fsd-projects/circularity/`;
    const newObject = { 
      name: namesArray[i], 
      user: usersArray[i],
      block: block,
      projects: {
        website: websitePath,
        portfolio: portfolioPath,
        platformer: platformerPath,
        bouncingBox: bouncingBoxPath,
        circularity: circularityPath
      }
    };
     objectsArray.push(newObject);
  }
  return objectsArray;
}

const roster2 = addNamesAndUsers(names2, users2, 2);
const roster3 = addNamesAndUsers(names3, users3, 3);
const roster4 = addNamesAndUsers(names4, users4, 4);
const content = $(".content");

const load = (content, roster) => {
  content.append(`<div class="block" id="block${roster[0].block}"></div>`);
  const block = $(`#block${roster[0].block}`);
  for (var i = 0; i < roster.length; i++) {
  const student = `
  <div class="student">
    <h3>${roster[i].name} (<a href="https://github.com/${roster[i].user}" target="_blank">${roster[i].user}</a>)</h3>
    <ul id="projects">
      <li><a href="${roster[i].projects.website}" target="_blank">First Website</a></li>
      <li><a href="${roster[i].projects.portfolio}" target="_blank">Portfolio</a></li>
      <li><a href="${roster[i].projects.platformer}" target="_blank">Platformer</a></li>
      <li><a href="${roster[i].projects.bouncingBox}" target="_blank">Bouncing Box</a></li>
      <li><a href="${roster[i].projects.circularity}" target="_blank">Circularity</a></li>
    </ul>
  </div>`;
  block.append(student);
  }
};


load(content, roster2);
