# Devoir(s) Super-Zéros

Vous êtes recruté pour travailler sur un tout nouveau jeu Web ! Après avoir conquis le monde avec leurs super-héros légendaires, les studios ont décidé de lancer une nouvelle franchise décalée : Les Super-Zéros, une équipe de héros pas très doués, mais plein de bonne volonté. Leur mission ? Passer leurs épreuves d'initiation pour intégrer officiellement l'univers Marvel.

Votre tâche est simple (ou pas !) : développer un prototype interactif où ces cinq Super-Zéros doivent prouver leur valeur… ou au moins essayer de ne pas tout casser. Chaque personnage réagit aux événements de manière unique, que ce soit en trébuchant maladroitement lorsqu'on clique dessus, ou en se perdant à chaque mouvement de souris.

Le projet est top secret, et vous avez la chance de montrer vos talents avant la prochaine grande annonce de Disney-Marvel au Comic-Con ! Soyez créatif, amusez-vous avec les animations et souvenez-vous : même les Super-Zéros ont droit à leur moment de gloire… enfin, s'ils y arrivent.

Sommaire : 
[Étape 0 : Préparation](#étape-0--préparation) | 
[Étape 1 : Rite de passage et événements](#étape-1--rite-de-passage-et-événements) | 
[Étape 2 : Animations](#étape-2--animations) | 
[Avant la remise](#avant-la-remise) | 
[Remises](#remises)

## Les étapes

Le devoir est divisé en deux étapes bien distinctes qui demandera une remise à chaque étape.
- _Étape 0 : Préparation_ où vous devrez préparer la scène en HTML et CSS.
- _Étape 1 : Rite de passage et événements_ où vous devrez créer une scène avec les 5 personnages et leurs événements qui ne font que présenter le personnage.
- _Étape 2 : Animations_ où vous devrez ajouter des animations aux personnages en fonction des événements.

## Étape 0 : Préparation

- Les médias sont disponibles dans le dossier `img` du projet. Vous pouvez les visualiser dans le fichier `medias/index.html`.
- Choisir 5 personnages parmi les 16 disponibles.
- Choisir un arrière-plan.
- Il est fortement conseillé de commencer par créer la scène en HTML et CSS avant de passer à l'ajout des événements et des animations. Ainsi, vous pourrez mieux visualiser le rendu final.
  
### L'arrière-plan

- Les arrière-plans fournis sont disponibles en format régulier et en format haute définition. (Ex.: `asbestos.webp` 1024x512 ou  `asbestos_hi.webp` 4096x2048)
- Les arrière-plans sont des motifs "seamless" (sans couture) horizontaux et peuvent être répétés en largeur.
- Vous pouvez prendre l'ensemble d'un arrière-plan ou une partie de celui-ci (zoom).

### La feuille de styles

- L'ensemble de la scène peut avoir des dimensions fixes ou qui s'adaptent à la fenêtre du navigateur.
- Les feuilles de styles sont disponibles dans le dossier `css`. Il est fortement conseillé de travailler en SCSS, mais si vous le souhaitez, vous pouvez travailler directement dans le fichier `style.scss`. Dans ce cas, **supprimez** les fichiers `.scss` pour ne pas écraser malencontreusement votre travail.
- Les personnages sont des images `WEBP` avec un fond transparent.
- Pour les animations, positionnez les personnages en `absolute` dans un conteneur en `relative`.
- Le positionnement des personnages peut se faire dans la feuille de styles ou dans le fichier JavaScript (ou les deux).

## Consignes générales

### Vous pouvez :
- Vous inspirer de l'exemple fourni dans `index.html` et `style.css` comme point de départ.
- Modifier les images.
- Redimensionner les images.
- Réorganiser les fichiers (renommer, déplacer, etc.).
- Ajouter des éléments de décoration.
- Ajouter des éléments interactifs. Surtout pour l'étape 2 : Animations (personnes supplémentaires, pierres, véhicules, etc.).

### Vous ne pouvez pas :
- Utiliser `index.html` intégralement pour votre projet.
- Modifier le fichier `personnages.js` ou copier son contenu dans votre projet.

### Faites attention
- À la lisibilité des textes.
- Aux proportions des éléments.
- À la qualité du code. La création de fonctions n'est pas exigée, mais elle est fortement recommandée pour la gestion des événements et des animations.

## Étape 1 : Rite de passage et événements

### Rite de passage
- Créez un rite de passage pour les 5 personnages : ajout par programmation des 5 super-zéros dans la scène et positionnement par programmation au besoin.
- Vous devez utiliser le fichier `src/personnages.js` pour ajouter les personnages à la scène. (voir le fichier `medias/src/App.js` pour un indice)
- Vous n'avez pas besoin de boucle puisque l'on n'ajoute que 5 personnages.

### Événements

- 5 personnages, 5 "déclencheurs" à appliquer :
  - `click`
  - la paire `mouseenter` et `mouseleave` (ou bien `mouseover` et `mouseout`). Les deux doivent être utilisés.
  - `mousedown` et/ou `mouseup`
  - `keydown` et/ou `keyup`
  - autre au choix: `mousemove`, `dblclick`, `scroll`, `resize`, `wheel`, `focus`/`blur`...
- Un des événements doit être restreint par une touche de modification (`shift`, `ctrl`, `alt` ou `meta`)
- Pour la première étape, les événements ne font qu'afficher la description du personnage.
- Les descriptions peuvent être générées par programmation à chaque déclenchement ou être des éléments HTML cachés que l'on affiche.
- Les descriptions proviennent du fichier `personnages.js`.

## Étape 2 : Animations

- Un effet aléatoire est toujours le bienvenu. Vous devez ajouter **au moins** une animation aléatoire à l'un des personnages.
- Les animations doivent être déclenchées par les événements de la première étape, mais vous pouvez changer (légèrement) les déclencheurs des événements pour les adapter aux animations.
- Les animations peuvent être des transitions, des transformations, des déplacements, des rotations, des changements de couleur, etc. Il n'y a pas de limite à votre créativité.
- Une des animations **doit** impliquer un `transitionend` ou `animationend`.
- Les animations peuvent être appliquées aux personnages eux-mêmes ou à des éléments de la scène. Par exemple, un personnage peut déclencher une pluie de météorites au roulement de la roulette de la souris.

## Avant la remise

1. Supprimez le dossier `medias`.
2. Supprimez les fichiers inutiles dont les images inutilisées.
3. Nettoyez le code (indentation, commentaires superflus, code superflu...).
4. Remplissez le fichier `devoir.md` avec les informations demandées (étape 2).

## Remises

- Super-Zéros est un devoir combiné.
- L'étape 1 compte pour 5% et doit être remise avant le laboratoire au retour de la relâche.
- L'étape 2 compte pour 5% et doit être remise avant le laboratoire de la semaine suivante.
- Les remises se font dans Teams.