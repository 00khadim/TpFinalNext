##Presentation de Nexxt.js
Next.js est un frameworkd pour Reactn , conçu pour la production et l'efficacité. Il offre plussiers avantage :
**Server-Side-Rendering (SSR)** : Next.js permet le rendu coté serveur des pages weh +, ce qui améliore la performance et la SEO.
**Static site Generation (SGG)** : Possibilité de générer des sites statiques pour une vitesse de chargement rapide.
Routing automatique : Les fichiers dans le dossier pages deviennes automatiquement des routes.
**Optimisation de Performances** : Next.jd inclut des fonctionnalités comme l'optimisation automatique des images.
Fcilité de Déploiment : Intégration simple avec des plateformes comme Vercel pour un déploument rapide.

##Installation de configuration de base##
Pour installer Next.js, on va utiliser la commande `npx create-next-app@latest`


##Utilité dossier/fichier

Explication des dossier : 
**Node_module** : Contient le dépandance dans le fichier fichier packet Json, 
**public** : Dans ce dossier on retrouve tous tous les asset comme les image.
**src/gitignore** : Chaque dossier/fichier présent dans le ce fichier sera ingnoré par l'application git
**package-lock.json** : 
**tsconfig.json** : Le fichiers sert pour la configuration de typescript.
**src** : Ce dossier va contenir tout le code sources dossier
page.txs :  Contient code en React, on trouve les differents composant 
 

###Routing de base avec Next.jS
Le routing de base avec Next.js est très simple. Il suffit de crééer un fichier dans le dossier pages avec le nom de la route. Par exemple, pour créer une page à l'adresse `/about.js` , il sauffit de crééer un fichier `about.js` dans le dossier pages.


##Note apres réalisation TP

###Routing
**Role des dossier** :  Dans APP definit les route, un route est un enchainement de dossier imbriqués.
**Role des fichiers** : Definit le contenu de la page.

Next fornit toute une liste de dossier et de fichiers pour denifir les routes de l'application.
Voici la liste des fichiers dont le nom est réservé pour definir les routes de l'application : 

**![Alt text] (image-1.png)**

Pour créer une rout imbriquée, il suffit d'imbriquer des dossier. Par exemple, pour crée une rout / about, il suffit de créer un dossier about dans le dossier APP  et créer un composant `route.txt\ dans ce dossier.
##Routing: Pages & Layout
Une page c'est l'UI associé à une route. Dans le code on la représente par un composant React exporté par un fichier appelé `route.tsx
**![Alt text] (image-2.png)**

Par defaul tous les pages sont des composant Server, il faut utiliser `use client ` pour le rendre des composant client.

### Layout
Un layout est une partie d'UI partagée entre plusiers pages. Par exemple, un header, un footer, une sidebar, etc. Son but est de préservé la coherance de l'UI entre les pages. On ne modifie pas le layout à chaque changement de page.

Comme les pages on peut imbriquer des layouts. par exemple, un leyout peut contenir un autre layout.

**![Alt text] (image-3.png)**
Pour créer un layout, il duffit de créer un composant RReact exporté par un fichier appelé `layyout.tsx`.
Le touut layout est obbligatoire. IL doit forcément contenir les tags : `html` et `body`.
IL est possible de crée un leyout pour chaque pages, mais il est aussi possible de créer un layout pour un groupes de pages.

###Imbriquer de layouts

**![Alt text] (image-4.png)**

###Grouper des routes : `Route groups`
A l'interieur du repertoire on peut directement mapper l'imbrication des dossier sur les routes de l'application. Il est possible de créer des dossier soecueyx (route group) qui seront ignorer par le routing Next.

**![Alt text] (image-5.png)**
On peut ainsi créer un layout pour in groupe de pages0
**![Alt text] (image-6.png)**
Ou encore plusieurs root layout :
**![Alt text] (image-7.png)**


####Routes dynaliques
Pour créer un route dynamique, il suffit de créer un dossier dont les nom est en crochets. Exemole [id], cette unformation sera passée à la props `params` des fonction : page, route, layout et generateMetadata.

**![Alt text] (image-9.png)**

Dans l'exemple ci-dessus, on peut recuperer la valeur de [slug] de cette maniere dans le composant `page.tsx`

```tsx
export default function Page({params}:{params: {slug: string}}){
    return <h1>Page {params.slug}</h1>
}
```
#### Le segment de route dynamique `catch-all`

On peut aussi rendre dynamique le nombre de parametre au sein d'une route dynamique, pour cela il faut proceder le nom de la route dynamique par`...`

##Routung: Navigation

Il existe 4 methodes pour naviguer entre les pages: 

-**Link** : Composant
-**useRouter** : hook
-**Redirect** : fonction
-l'API History

###Link

Link est un composant fournit par Next qui est en realite un wrapper autour de la balise html `<a>`. IL permet de naviguer entre les pages sant recharger la page.

```tsx
importt Link from 'next/Link'
export default function Page(){
    return <Link href ="/about">About </Link>
}
```

### Le Hook usePathname

Le hook usePathname permet de recuperer le pathname de la page courante(page où on se trouve acutellement).
Il permet par exemple de mettre en surbrillance le lien de la page courante. Pour utiliser un hook au sein d'un composant Next il faut utuliser la directive `ùse client`. 

### Le hook useRouter

Ce hook permet de changer par code la route courante de l'application. Il permet aussi de recuperer les parametres de route courante.
