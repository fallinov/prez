# Présentations ESIG

Collection de présentations pour les cours de l'ESIG, générées avec [Slidev](https://sli.dev).

## Structure

```
prez/
├── presentations/           # Toutes les présentations
│   ├── 741-gestion-medias/
│   │   └── slides.md
│   └── ...
├── theme/                   # Thème personnalisé ESIG
│   └── styles/
├── scripts/                 # Scripts utilitaires
└── dist/                    # Build de production
```

## Commandes

```bash
# Installer les dépendances
npm install

# Développement (présentation par défaut)
npm run dev

# Développement d'une présentation spécifique
npm run dev:741-medias

# Build d'une présentation
npm run build:741-medias

# Build de toutes les présentations
npm run build:all
```

## Créer une nouvelle présentation

1. Créer un dossier dans `presentations/`
2. Créer le fichier `slides.md` avec le frontmatter :

```markdown
---
theme: ../../theme
title: Titre de la présentation
---

# Ma présentation

Contenu...

---

# Slide 2

...
```

## Navigation

| Touche | Action |
|--------|--------|
| `→` `↓` `Espace` | Slide suivante |
| `←` `↑` | Slide précédente |
| `o` | Vue d'ensemble |
| `d` | Mode sombre |
| `f` | Plein écran |

## Déploiement

Configuré pour Vercel avec déploiement automatique sur push.
