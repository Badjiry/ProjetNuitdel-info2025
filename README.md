# 🎯 Défi Ergonomie - Nuit de l'Info 2025
Lien de l'équipe dans lequel j'ai participé à cet évènement avec mon établissement IUT de Villetaneuse Paris Nord :
https://www.nuitdelinfo.com/inscription/equipes/241 

La Nuit de l’Info 2025 s’est tenue dans la nuit du jeudi 4 au vendredi 5 décembre 2025. C’est une compétition nationale et conviviale qui réunit des milliers d’étudiants, enseignants et entreprises autour d’un défi : concevoir et développer une application web en une seule nuit, du coucher au lever du soleil. Chaque équipe doit travailler sur un sujet national imposé ainsi que sur des défis proposés par des partenaires (ergonomie, accessibilité, extensions, etc.) dans une ambiance de collaboration, de créativité, de code, de pizzas et de café. Des prix sont ensuite attribués aux projets les plus réussis par des jurys.

**Sopra Steria Mérignac**

> "Si une machine doit être notre servante, elle doit être conçue pour être facile à utiliser." — Donald Norman

*Exceptionnellement, on va faire tout l'inverse.*

---

## 📋 À propos du défi

**Partenaire :** Sopra Steria, leader européen de la Tech  
**Thème :** L'ergonomie (simplifier pour mieux vivre)  
**Prix :** Bon cadeau de 300€ pour le vainqueur  
**Date :** Nuit de l'Info 2025

### Objectif
Créer des champs de saisie **volontairement difficiles et frustrants** à utiliser, tout en restant théoriquement possibles à remplir. L'utilisateur doit pouvoir saisir une information (email, date, etc.), mais le processus doit être aussi compliqué et irritant que possible.

---

## 🎮 Implementations réalisées

### 1. **Défi.html** - Saisie d'email/mot de passe avec contrôles inversés
Champ de saisie utilisant des **touches inversées** (clavier AZERTY transposé) :
- `a↔z`, `e↔r`, `t↔y`, etc.
- Numéros décalés de 1 (`1→2`, `2→3`, etc.)
- Navigation uniquement aux flèches directionnelles
- Confirmation à l'appui sur `ENTRÉE`

**Fichiers :** `Défi.html`, `script.js`, `style.css`

---

### 2. **form_V4/index.html** - Formulaire "Éco-Responsable"
Formulaire multifonctionnel avec plusieurs couches de complexité :

#### 📌 Caractéristiques principales
- **Formulaire qui fuit** : se déplace quand la souris s'approche
- **Bouton "Stop"** : capture et recentre le formulaire, active une manivelle
- **Manivelle (crank)** : simule une ressource batterie pouvant entraîner une panne
- **Protection collage** : le champ message est protégé jusqu'à succès du mini-jeu
- **Mini-jeu Cookie-Hell** : pop-up intrusive à valider avant soumission
- **Stockage localStorage** : mémorisation des données utilisateur

#### 🛠️ Structure
```
form_V4/
├── index.html           # Page principale (formulaire fuyant)
├── script.js            # Logique: jeu, mouvements, validation
├── style.css            # Styling du formulaire et animations
├── save.php             # Endpoint POST pour sauvegarder les données
├── user_check.php       # Vérification utilisateur
├── cookie-hell-simple.html  # Mini-jeu modal de validation
├── content.json         # Données de configuration
├── popup/
│   ├── button-simple.html       # Modal de démonstration
│   └── cookie-hell-simple.html  # Variante du mini-jeu
└── lettres/
    └── boiteidee.html           # Feature lettres/idées
```

---

### 3. **form_V4/popup/cookie-hell-simple.html** - Mini-jeu de validation
Pop-up couleur **ROUGE/JAUNE** intentionnellement **visuelle et bruyante** :
- Animation `shake` (secousses) et `bounce` (rebonds)
- Messages d'alerte agaçants
- Plusieurs clics requis avant redirection
- Gradient fluo et bordures excessives

---

## 🎨 Principes de mauvaise ergonomie appliqués

✗ **Invisibilité des éléments** (inputs readonly)  
✗ **Mappings inversés** (contrôles non intuitifs)  
✗ **Friction excessive** (plusieurs étapes, jeux, validations)  
✗ **Feedback visuel agressif** (animations intrusives, couleurs fluo)  
✗ **Perte de contrôle** (formulaire qui s'enfuit, manivelle obligatoire)  
✗ **Blocage de fonctionnalités** (collage interdit, navigation restreinte)  
✗ **Modes dégradés** (batterie qui décharge, panne possible)  

---

## 🚀 Comment utiliser

### Accès local
1. Placer les fichiers sur un serveur web (Apache, PHP requis pour `save.php`)
2. Accéder à :
   - **Défi principal** : `Défi.html`
   - **Formulaire fuyant** : `form_V4/index.html`
   - **Pop-up test** : `form_V4/popup/button-simple.html`

### Soumission du défi
Envoyer le lien hébergé à : **maxime.granjou@soprasteria.com**  
En précisant quel champ corresponds au défi d'ergonomie négative.

---

## 📁 Fichiers clés

| Fichier | Rôle |
|---------|------|
| `Défi.html` | Saisie email/password avec clavier inversé |
| `form_V4/index.html` | Formulaire multi-niveaux complexe |
| `form_V4/script.js` | Logique du jeu, mouvements, animations |
| `form_V4/save.php` | Sauvegarde des données soumises |
| `form_V4/popup/cookie-hell-simple.html` | Mini-jeu modal de validation |
| `form_V4/content.json` | Configuration/données |

---

## 💡 Inspiration

- Article : [The Most Ridiculous Ways to Input a Phone Number](https://qz.com/679782/programmers-imagine-the-most-ridiculous-ways-to-input-a-phone-number)
- Référence : *The Design of Everyday Things* - Donald Norman

---

## 🏆 Points d'évaluation

✅ **Originalité** : combinaison unique de frustrantes  
✅ **Complexité** : multi-couches (clavier, mouvements, jeux, validations)  
✅ **Faisabilité** : tous les défis sont théoriquement solvables  
✅ **Créativité** : pop-ups intrusive, manivelle, formulaire fuyant  

---

## 📝 Notes techniques

- **Frontend** : HTML5, CSS3,  JavaScript
- **Backend** : PHP (pour sauvegarde de données)
- **Stockage** : localStorage (côté client), fichier/DB (côté serveur via PHP)
- **Compatibilité** : Tous navigateurs modernes (Chrome, Firefox, Safari, Edge)

---

**Équipe :** Passerelle & Co - Iut de Villetaneuse Paris Nord
**Défi :** Sopra Steria - Ergonomie inversée
