function _1(md){return(
md`# Visualisation de la criminalité numérique en Suisse `
)}

function _2(md){return(
md`#### I. Brève description du rendu et de ses fonctionnalités

Cette visualisation est basée sur la statistique de l'OFS concernant la criminalité numérique* en Suisse au cours des années 2020 à 2022 (https://www.bfs.admin.ch/bfs/fr/home/statistiques/catalogues-banques-donnees/tableaux.assetdetail.24368412.html). 

La première visualisation représente diverses infractions répertoriées par groupes de modes opératoires. Deux modes opératoires sont distingués : « Cyber » et « Other ». Le terme « Cyber » désigne la réalisation d'une infraction par un système informatique. Le terme « Other » désigne quant à lui les modes opératoires non-cyber, inconnus ou manquants.
Les légendes de l'axe x reprennent les articles du Code pénal suisse (RS 311.0).

Par souci de synthèse, ce graphique ne recense pas toutes les infractions répertoriées par l’OFS. Les infractions suivantes ont en effet été écartées, en raison de leur faible nombre de cas ou de leur importance mineure quant à la thématique des infractions numériques : le recel (art. 160 CP), la violation du secret de fabrication ou du secret commercial (art. 162 CP), la violation du domaine secret ou privé au moyen d’un appareil de prise de vues (art. 179quater CP), les désagréments causés par la confrontation à un acte d’ordre sexuel (art. 198 CP), l’entrave aux services d’intérêt général (art. 239 CP), la discrimination ou l’incitation à la haine (art. 261bis CP), la violation du secret de fonction (art. 320 CP), la violation du secret professionnel (art. 321 CP), la violation du secret professionnel en recherche médicale (art. 321bis CP), et la violation du secret des postes et télécommunications (art. 321ter CP).

Afin de visualiser l'évolution temporelle, l'utilisateur a la possibilité de choisir l'année à l'aide d'un bouton de type « radio ». Il peut également affiner sa recherche en sélectionnant uniquement certaines infractions listées dans le tableau. 
Pour chaque infraction, le nombre de cas a été scindé selon le mode opératoire.

La seconde visualisation regroupe les infractions précédentes par bien juridiquement protégé, pour les années 2020 à 2022. Une telle représentation permet de mettre en évidence les motivations des cybercriminels, peu importe le mode opératoire. 

_*Selon la définition de l'OFS : « La criminalité numérique (cybercriminalité) représente l’ensemble des infractions dites "numériques" correspondant essentiellement aux infractions pénales commises sur les réseaux de télécommunication, en particulier Internet. L'identification d'une infraction propre à la cybercriminalité se fait via le modus operandi dans la statistique policière de la criminalité. » (https://www.bfs.admin.ch/bfs/fr/home/statistiques/criminalite-droit-penal/police/criminalite-numerique.html)_

#### II. Procédure de lancement

https://observablehq.com/d/4ad5a1e4d01397ac@673

View this notebook in your browser by running a web server in this folder. For
example:

~~~sh
npx http-server
~~~

Or, use the [Observable Runtime](https://github.com/observablehq/runtime) to
import this module directly into your application. To npm install:

~~~sh
npm install @observablehq/runtime@5
npm install https://api.observablehq.com/d/4ad5a1e4d01397ac@673.tgz?v=3
~~~

Then, import your notebook and the runtime as:

~~~js
import {Runtime, Inspector} from "@observablehq/runtime";
import define from "4ad5a1e4d01397ac";
~~~

To log the value of the cell named “foo”:

~~~js
const runtime = new Runtime();
const main = runtime.module(define);
main.value("foo").then(value => console.log(value));
~~~

#### III. Modules, librairies ou scripts intégrés ou nécessaires au bon fonctionnement du rendu

La librairie open source _Observable Plot_ a été utilisée afin de réaliser cette visualisation.

#### IV. Eventuels copyrights, informations de licence, et autres références des sources et ressources

La base du projet s'appuie sur les code suivants : https://observablehq.com/@d3/grouped-bar-chart, https://observablehq.com/d/46c301690759c63e. Le projet a ensuite été agrémenté à l'aide des ressources fournies par le site Observable Plot (https://observablehq.com/plot/).

#### V. Contexte de développement

Ce projet a été développé par Justine Gerber et Caroline Gillioz. Il s'agit de l'évaluation du cours de Visualisation de données dispensé par Isaac Pante (SLI, Lettres, UNIL)) lors du semestre de printemps 2023. Ce cours s'inscrit pour notre part dans le cursus du Master DCS (Droit, cybercriminalité et sécurité de l'information). 

#### VI. Analyse des données

D'une manière globale, on constate une augmentation du nombre de cas pour la plupart des infractions. Cela peut s'expliquer par une utilisation toujours plus répandue des technologies de l'information et de communication. Ainsi, la présence des personnes sur Internet s'est accrue lors de la pandémie de Covid-19 et de ce fait a augmenté le nombre de cibles potentielles pour les cybercriminels. Les auteurs peuvent y voir un attrait particulier, notamment par le faible coût du mode opératoire, par l'anonymat que leur garantit Internet, et le montant des gains espérés. Une autre explication peut résider dans le fait que la population est désormais mieux informée et dénonce plus souvent les infractions informatiques dont elle est victime. 

Quatre infractions se distinguent en particulier par leur nombre élevé de cas réalisés par un cyber-mode : l'escroquerie (art. 146 CP), l'extorsion et le chantage (art. 156 CP), la pornographie (art. 197 CP) et le blanchiment d'argent (art. 305bis CP). 
- Les nombreux cas d'escroquerie réalisés peuvent s'expliquer par le fait que les fraudes en ligne, comme par exemple les fausses petites annonces ou les arnaques au président, sont faciles à réaliser et exploitent la crédulité des utilisateurs. 
- L'extorsion comprend notamment les cas de sextorsion (la menace de divulguer des soi-disant images compromettantes de la victime) qui sont toujours plus fréquents. On voit également émerger, en 2023, des courriels de menace de poursuite pénale émanant prétendument d'autorités afin d'obtenir un paiement des victimes. 
- La pornographie, quant à elle, est nettement plus réalisée par un cyber-mode car l'accès à du contenu pornographique illicite est facilité par Internet. Les criminels peuvent de plus contacter des victimes mineures à travers les réseaux sociaux afin d'échanger du contenu pornographique. 
- Les cryptomonnaies sont désormais couramment utilisées pour le blanchiment d'argent. Celles-ci sont privilégiées en raison de l'anonymat offert par les monnaies virtuelles. 

Il ressort du second graphique que le principal bien juridique touché est le patrimoine. Les motivations des criminels sont avant tout financières. Cela explique ainsi pourquoi le nombre d'escroqueries est si élevé. Ensuite, viennent les infractions contre l'honneur et la liberté. Celles-ci sont réalisées majoritairement par un mode opératoire non-cyber. Nous supposons que cela peut être dû au fait que les personnes sont moins susceptibles de dénoncer les cas, pour de diverses raisons telles le faible impact que ça peut avoir sur elles ou le manque de confiance en l'utilité des procédures pénales. 


Enfin, nous estimons que les infractions en ligne augmenteront encore à l'avenir. `
)}

function _donnees(FileAttachment){return(
FileAttachment("data.csv").csv({typed:true})
)}

function _modus(donnees){return(
donnees
            .columns.slice(1,-2)
)}

function _filter_choice(donnees,choices){return(
donnees
                    .filter(crime => choices.includes(crime.Year))
)}

function _filter_choice2(modus,liste){return(
modus
                    .flatMap(modus => liste.map(d => ({donnee: d.Name, modus, cas: d[modus]})))
)}

function _liste(Inputs,filter_choice){return(
Inputs.table(filter_choice)
)}

function _choices(Inputs){return(
Inputs
                    .radio(["2020", "2021","2022"], 
                           {label: "Select a year", value: "2020"})
)}

function _9(Plot,filter_choice2){return(
Plot.plot({
  fx: {
    label: null, 
    tickRotate: 40
  },
  x: {
    axis: null, 
  },
  y: {
    tickFormat: "f",  
    grid : true    
  },
  color: {
    scheme: "spectral",   
    legend: true
  },
  facet: {                  
    data: filter_choice2, 
    x: "donnee",
  },
  marks: [
    Plot.axisX({
      x:"donnee", 
      label:"Infractions", 
      marginBottom: 75, 
      marginRight: 20, 
      marginLeft:40
    }),
    Plot.barY(filter_choice2, {       
      x: "modus", 
      y: "cas",
      title: "modus",
      fill: "modus"
    }), 
    Plot.ruleY([0,18000])   
  ]
})
)}

function _data(FileAttachment){return(
FileAttachment("data2020-2022.csv").csv({typed: true})
)}

function _d3Legend(require){return(
require('d3-svg-legend')
)}

function _12(d3,data,d3Legend)
{
const w=700;
const h=300;

const startAngle=0;
const endAngle=7;
const innerRadius=0;
const outerRadius=150;
  
const svg = d3.create("svg").attr("width", w).attr("height", h);

  const pie = d3
    .pie()
    .value((d) => d.value)
    .startAngle(startAngle)
    .endAngle(endAngle);

  const arc = d3.arc().innerRadius(innerRadius).outerRadius(outerRadius);

  const cScale = d3.scaleOrdinal(d3.schemeCategory10);
  console.table(pie(data));

  const arcs = svg
    .selectAll("g.arc")
    .data(pie(data))
    .join("g")
    .classed("arc", true)
    .attr("transform", `translate(${h / 2}, ${h / 2})`);
  
  arcs
    .append("path")
    .attr("fill", (d, i) => cScale(i))
    .attr("d", arc)
    .append("title")
    .text((d) => d.data.name);

   arcs
    .append("text")
    .attr("transform", (d) => `translate(${arc.centroid(d)})`)
    .attr("text-anchor", "middle")
    .text((d) => d.value+ "%")
    .attr("font-family", "sans-serif")
    .attr("font-size", 12)
    .style("fill", "white");

  const pieData = pie(data);

  const legendScale = d3
    .scaleOrdinal()
    .domain(pieData.map((d) => d.data.name))
    .range(d3.schemeCategory10);

  var legendOrdinal = d3Legend
    .legendColor()
    .shape("path", d3.symbol().type(d3.symbolSquare).size(60)())
    .shapePadding(30)
    .orient("vertical")
    .scale(legendScale);
  
 svg.append("text")
    .attr("class", "x label")
    .attr("text-anchor", "end")
    .attr("x", w-140)
    .attr("y", h-70)
    .attr("font-family", "sans-serif")
    .attr("font-size", 12)
    .attr("font-weight", "bold")
    .text("Criminalité numérique (2020-2022)");
  
  svg.append("g")
    .attr("transform", "translate(350,20)")
    .attr("font-family", "sans-serif")
    .attr("font-size", 12)
    
    .call(legendOrdinal);

  return svg.node();
}


export default function define(runtime, observer) {
  const main = runtime.module();
  function toString() { return this.url; }
  const fileAttachments = new Map([
    ["data2020-2022.csv", {url: new URL("./files/b81ab82d1e9fecea363d68bb8b0299afb33a47010ca92ffe09b044798a57e52b515b0191cd00874d60d2027c74da65fa45d7b2936799f7bad863e02cd0623edf.csv", import.meta.url), mimeType: "text/csv", toString}],
    ["data.csv", {url: new URL("./files/e0d711504a11d5a2bf684a6ed60928b59433aabad0b22ad068694268d426acdd80dddd264379db73a043839d1eb48fd77e812b185705d4fbaa948953ce6f7c67.csv", import.meta.url), mimeType: "text/csv", toString}]
  ]);
  main.builtin("FileAttachment", runtime.fileAttachments(name => fileAttachments.get(name)));
  main.variable(observer()).define(["md"], _1);
  main.variable(observer()).define(["md"], _2);
  main.variable(observer("donnees")).define("donnees", ["FileAttachment"], _donnees);
  main.variable(observer("modus")).define("modus", ["donnees"], _modus);
  main.variable(observer("filter_choice")).define("filter_choice", ["donnees","choices"], _filter_choice);
  main.variable(observer("filter_choice2")).define("filter_choice2", ["modus","liste"], _filter_choice2);
  main.variable(observer("viewof liste")).define("viewof liste", ["Inputs","filter_choice"], _liste);
  main.variable(observer("liste")).define("liste", ["Generators", "viewof liste"], (G, _) => G.input(_));
  main.variable(observer("viewof choices")).define("viewof choices", ["Inputs"], _choices);
  main.variable(observer("choices")).define("choices", ["Generators", "viewof choices"], (G, _) => G.input(_));
  main.variable(observer()).define(["Plot","filter_choice2"], _9);
  main.variable(observer("data")).define("data", ["FileAttachment"], _data);
  main.variable(observer("d3Legend")).define("d3Legend", ["require"], _d3Legend);
  main.variable(observer()).define(["d3","data","d3Legend"], _12);
  return main;
}
