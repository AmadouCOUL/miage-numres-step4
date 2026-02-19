# Q1: Quels sont les arguments que vous pouvez utiliser pour convaincre votre Client de rendre son quizz accessible ? (Vous pouvez vous aider du cour)
Réponse:
# Q1: Quels sont les arguments que vous pouvez utiliser pour convaincre votre Client de rendre son quizz accessible ? (Vous pouvez vous aider du cour)
Réponse:
* **Inclusivité et Éthique :** Permet l'accès aux 15-20% de la population vivant avec un handicap.
* **Légal et Conformité :** Évite les sanctions financières et préserve l'image de marque.
* **Croissance d'Audience :** Ne prive pas l'entreprise d'une large base d'utilisateurs et de clients potentiels.
* **Bénéfice SEO :** Un code bien structuré pour les lecteurs d'écran est mieux compris par Google, ce qui améliore le référencement naturel.
* **Meilleure UX globale :** L'accessibilité améliore le confort de tous (ex: meilleurs contrastes en extérieur, navigation au clavier plus rapide).

# Q2: Ajouter le screen de votre score :
Screen:68

# Q3: Est-ce que l'analyse de Lighthouse est suffisante pour évaluer l'Accessibilité de votre Application ?
Réponse:
# Q3: Est-ce que l'analyse de Lighthouse est suffisante pour évaluer l'Accessibilité de votre Application ?
Réponse : 
Non, l'analyse de Lighthouse n'est absolument pas suffisante. 

Lighthouse est excellent pour vérifier des règles techniques de base (ex: absence de l'attribut `alt` sur une image, contraste mathématiquement insuffisant, balise manquante). En revanche, l'outil n'a pas de "bon sens" humain :
1. Il peut vérifier qu'un attribut `alt` existe, mais il ne peut pas savoir si la description de l'image est pertinente.
2. Il ne peut pas évaluer si l'ordre de tabulation est logique et fluide.
3. Il ne peut pas tester concrètement comment l'application "sonne" avec un véritable lecteur d'écran.

C'est pourquoi une analyse automatisée doit obligatoirement être complétée par des **tests manuels** (ex: naviguer uniquement avec la touche Tab, écouter la page avec NVDA/VoiceOver).

# Q4: Combien de fois vous devez utiliser une touche du clavier pour passer le quizz ?
Réponse:7

# Q5: Donner 3 roles ARIA et 3 propriétés ARIA
Réponse:

**3 Rôles ARIA :**
1. `role="button"` : Indique aux lecteurs d'écran qu'un élément (comme une simple `<div>` ou un `<span>`) se comporte comme un bouton cliquable.
2. `role="navigation"` : Définit une zone de la page qui contient des liens de navigation (comme le menu principal).
3. `role="alert"` : Signale un message d'erreur ou une information importante (ex: "Mot de passe incorrect") qui doit être lu immédiatement par la synthèse vocale.

**3 Propriétés ARIA  :**
1. `aria-label="texte"` : Permet de donner un nom (une étiquette vocale) à un élément qui n'a pas de texte visible (par exemple, un bouton qui ne contient qu'une icône `X` pour fermer).
2. `aria-hidden="true"` : Demande aux lecteurs d'écran d'ignorer complètement cet élément (très utile pour les icônes purement décoratives comme FontAwesome afin de ne pas polluer la lecture).
3. `aria-expanded="true"` (ou `false`) : Indique à l'utilisateur si un élément repliable (comme un menu déroulant ou un accordéon) est actuellement ouvert ou fermé.

# Q6: Ajouter le screen de votre score Lighthouse
Screen:
*(Insérez votre capture d'écran ici. En Markdown, vous pouvez utiliser la syntaxe suivante :)*
![Mon score Lighthouse](chemin/vers/mon_image.png)

# Q7: L'une des best practice de l'ARIA est "ne pas utiliser l'ARIA" pouvez nous expliquer pourquoi d'après vous ?
Réponse:

# Q8: Ajouter le screen de votre score Lighthouse
Screen:

# Q9: Pourquoi le score de lighthouse n'a pas augmenté d'après vous ?
Réponse:

# Q10: Quel est la valeur du rapport de contraste actuel :
Réponse:

# Q11: Quel est la valeur du score AA :
Réponse:

# Q12: Quel est la valeur du score AAA :
Réponse:

# Q13: Comment pouvez vous changer la valeur du contraste de votre texte ?
Réponse:

# Q14: Ajouter le screen de votre score Lighthouse
Screen:

# Q15: Êtes vous capable de déterminer visuellement ce qui est un lien ou pas en appliquant chaque altérations ?
Réponse:

# Q16: Ajouter le screen de votre score Lighthouse
Screen:

# Q17:  Proposition 1
Description:
Nb d'actions gagnée : 

# Q18:  Proposition 2
Description:
Nb d'actions gagnée : 

# Q19:  Proposition 3
Description:
Nb d'actions gagnée : 
