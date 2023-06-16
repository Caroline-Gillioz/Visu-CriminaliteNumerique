#### I. Brève description du rendu et de ses fonctionnalités

Cette visualisation est basée sur la statistique de l'OFS concernant la criminalité numérique* en Suisse au cours des années 2020 à 2022 (https://www.bfs.admin.ch/bfs/fr/home/statistiques/catalogues-banques-donnees/tableaux.assetdetail.24368412.html). 

La première visualisation représente diverses infractions répertoriées par groupes de modes opératoires. Deux modes opératoires sont distingués : « Cyber » et « Other ». Le terme « Cyber » désigne la réalisation d'une infraction par un système informatique. Le terme « Other » désigne quant à lui les modes opératoires non-cyber, inconnus ou manquants.
Les légendes de l'axe x reprennent les articles du Code pénal suisse (RS 311.0).

Par souci de synthèse, ce graphique ne recense pas toutes les infractions répertoriées par l’OFS. Les infractions suivantes ont en effet été écartées, en raison de leur faible nombre de cas ou de leur importance mineure quant à la thématique des infractions numériques : le recel (art. 160 CP), la violation du secret de fabrication ou du secret commercial (art. 162 CP), la violation du domaine secret ou privé au moyen d’un appareil de prise de vues (art. 179quater CP), les désagréments causés par la confrontation à un acte d’ordre sexuel (art. 198 CP), l’entrave aux services d’intérêt général (art. 239 CP), la discrimination ou l’incitation à la haine (art. 261bis CP), la violation du secret de fonction (art. 320 CP), la violation du secret professionnel (art. 321 CP), la violation du secret professionnel en recherche médicale (art. 321bis CP), et la violation du secret des postes et télécommunications (art. 321ter CP).

Afin de visualiser l'évolution temporelle, l'utilisateur a la possibilité de choisir l'année à l'aide d'un bouton de type « radio ». Il peut également affiner sa recherche en sélectionnant uniquement certaines infractions listées dans le tableau. 
Pour chaque infraction, le nombre de cas a été scindé selon le mode opératoire.

<img width="664" alt="Capture d’écran 2023-06-16 à 09 38 01" src="https://github.com/Caroline-Gillioz/Visu-CriminaliteNumerique/assets/126594019/c02d5f0e-660d-4a9c-b0d7-ef7ebfba1f77">


La seconde visualisation regroupe les infractions précédentes par bien juridiquement protégé, pour les années 2020 à 2022. Une telle représentation permet de mettre en évidence les motivations des cybercriminels, peu importe le mode opératoire. 

<img width="691" alt="Capture d’écran 2023-06-16 à 09 39 56" src="https://github.com/Caroline-Gillioz/Visu-CriminaliteNumerique/assets/126594019/6aefea38-aa14-4d90-80cc-1402db9cb90c">


_*Selon la définition de l'OFS : « La criminalité numérique (cybercriminalité) représente l’ensemble des infractions dites "numériques" correspondant essentiellement aux infractions pénales commises sur les réseaux de télécommunication, en particulier Internet. L'identification d'une infraction propre à la cybercriminalité se fait via le modus operandi dans la statistique policière de la criminalité. » (https://www.bfs.admin.ch/bfs/fr/home/statistiques/criminalite-droit-penal/police/criminalite-numerique.html)_

#### II. Procédure de lancement

https://observablehq.com/d/4ad5a1e4d01397ac@688

View this notebook in your browser by running a web server in this folder. For
example:

~~~sh
npx http-server
~~~

Or, use the [Observable Runtime](https://github.com/observablehq/runtime) to
import this module directly into your application. To npm install:

~~~sh
npm install @observablehq/runtime@5
npm install https://api.observablehq.com/d/4ad5a1e4d01397ac@688.tgz?v=3
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

Enfin, nous estimons que les infractions en ligne augmenteront encore à l'avenir. 
