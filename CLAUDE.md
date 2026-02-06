# Présentations ESIG - Slidev

## Projet
Application de génération de présentations pour les cours ESIG.

## Stack
- **Slidev** : Framework de présentation basé sur Vue.js et Markdown
- **Thème ESIG** : Couleurs WordPress (#0073aa, #00a0d2, #d54e21)
- **Vercel** : Déploiement automatique

## Structure

```
prez/
├── presentations/           # Une présentation = un dossier avec slides.md
│   └── XXX-nom/slides.md
├── theme/                   # Thème personnalisé ESIG
│   └── styles/              # CSS (base, code, layouts)
├── scripts/                 # build-all.js
└── dist/                    # Output de production
```

## Créer une nouvelle présentation

1. Créer `presentations/XXX-nom/slides.md`
2. Utiliser ce frontmatter :
```yaml
---
theme: ../../theme
title: Titre
---
```

3. Séparer les slides avec `---`

## Layouts disponibles

- `default` : Slide standard
- `cover` : Première slide (titre centré, gradient)
- `section` : Slide de transition
- `center` : Contenu centré
- `two-cols` : Deux colonnes (utiliser `::right::`)
- `image-right` : Image à droite

## Classes CSS utilitaires

- `.card` : Boîte avec bordure et hover
- `.badge` / `.badge-wp` / `.badge-success` / `.badge-warning`
- `.grid-2` / `.grid-3` / `.grid-4` : Grilles

## Commandes

```bash
npm run dev:741-medias   # Dev une présentation
npm run build:all        # Build toutes les présentations
```

## Instructions pour Claude

- Générer le contenu en **Markdown Slidev**
- Utiliser le thème `../../theme`
- Préférer les layouts `two-cols` pour les comparaisons
- Utiliser `.card` pour les listes visuelles
- Max 6-8 éléments par slide pour la lisibilité
