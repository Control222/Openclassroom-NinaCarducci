Verifier cache (image?)
shift + icon rafraichisemment navigateur pour vider cache
consol -> application pour vider lee cache
storage clear
essayer transformer application en pwa
(manifest pwa + service workers)

# DEBUG

1. Navigation galerie = index = i; => index = i - 1 (previous) / index = i + 1(next)
2. Background-color des buttons filtres, juste ajouter class active (en plus de active-tag) dans fonction => filterByTag = addClass('active active-tag')

# HTML

1. Ajout du <title> du document
2. Ajout de <header> et <nav>
3. Ajout de l'attribut for="" pour les label pour associé les inputs à leur label respectifs
4. meta description
5. Ajout de lang="fr"
6. Déplacement de <script> juste avant la fermeture de la balise body pour un gain de chargement de la page lors de louveture du site.
7. Ajout de <main>
8. Agencement des balises <Hn>
   Un seul <h1>
9. Ajout des meta tags :
   1. Meta Tags Open Graph (Facebook, LinkedIn)
   2. Meta Tags Twitter
10. Suppression du dossier bootstrap
11. Ajout des <link> et <scropt> CDN de bootstrap

# CSS

1. Ajouter du pointer sur buttons filter -> cursor: pointer
2. Suppréssion gallery non utilisé

# IMAGES

1. Images ont été redimenssionnées
2. Passage du format png/jpg en WebP, plus optimisé pour les sites web depuis plusieurs années. Meilleurs temps de chargement, moins de données et meilleure compression.
3. Ajout des attributs ALT
4. Ajout des attribut TITLE pour les personnes en difficultés
5. Ajout des propriétés WIDTH et HEIGHT dans le HTML
6. Ajout de l'attriibut loading: lazy sur les images, affichage dit paresseux
7. Utilisation de srcset pour les images du carrousel pour améliorer le responsive des images

Poids des images avant changement : 29.4 mo
Poids des images après changement : ----------

# MINIMIFICATION

1. Minimifcation du fichier style.css -> style.min.css
2. Minimifcation du fichier scripts.js -> scripts.min.js
3. Minimifcation du fichier maugallery.js -> maugallery.min.js
