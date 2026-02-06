---
theme: ../../theme
title: Gestion des médias
info: |
  ## Gestion des médias - WordPress
  Cours C741 - ESIG
class: text-center
transition: slide-left
mdc: true
---

# Gestion des médias

Optimiser vos images pour le web

<div class="mt-8 flex gap-4 justify-center">
  <span class="badge">Formats</span>
  <span class="badge">Compression</span>
  <span class="badge">SEO</span>
  <span class="badge">Accessibilité</span>
</div>

<div class="abs-bl m-6 text-sm opacity-50">
  Cours C741 — WordPress — ESIG
</div>

---
layout: two-cols
---

# Pourquoi optimiser ?

> "Un bon croquis vaut mieux qu'un long discours"

Une mauvaise gestion des images impacte :
- Le **référencement** de votre site
- La **patience** de vos visiteurs

**3 secondes** — c'est déjà une éternité !

::right::

## Erreurs fréquentes

<div class="space-y-2 text-sm">
  <div class="card">❌ Mauvais format d'image</div>
  <div class="card">❌ Images trop lourdes</div>
  <div class="card">❌ Images trop grandes</div>
  <div class="card">❌ Noms incompréhensibles</div>
  <div class="card">❌ Pas de texte alternatif</div>
</div>

---

# Utiliser le bon format

<div class="grid-3 mt-8">
  <div class="card text-center">
    <div class="text-3xl mb-2">📷</div>
    <h3>JPG</h3>
    <p class="text-sm opacity-70">Photos</p>
    <p class="text-xs mt-2">✓ Compression efficace<br>✗ Pas de transparence</p>
  </div>
  <div class="card text-center">
    <div class="text-3xl mb-2">🎨</div>
    <h3>PNG</h3>
    <p class="text-sm opacity-70">Logos, graphiques</p>
    <p class="text-xs mt-2">✓ Transparence<br>✗ Fichiers lourds</p>
  </div>
  <div class="card text-center">
    <div class="text-3xl mb-2">📐</div>
    <h3>SVG</h3>
    <p class="text-sm opacity-70">Icônes, illustrations</p>
    <p class="text-xs mt-2">✓ Vectoriel (zoom ∞)<br>✗ Pas pour photos</p>
  </div>
</div>

<div class="grid-3 mt-4">
  <div class="card text-center">
    <div class="text-3xl mb-2">🎬</div>
    <h3>GIF</h3>
    <p class="text-sm opacity-70">Animations</p>
    <p class="text-xs mt-2">✓ Animation simple<br>✗ 256 couleurs max</p>
  </div>
  <div class="card text-center border-2 border-[var(--color-wp-light)]">
    <div class="text-3xl mb-2">🌐</div>
    <h3 class="text-[var(--color-wp-light)]">WebP</h3>
    <p class="text-sm opacity-70">Moderne (97%)</p>
    <p class="text-xs mt-2">✓ 25-35% plus léger<br>✓ Transparence</p>
  </div>
  <div class="card text-center border-2 border-green-400">
    <div class="text-3xl mb-2">⚡</div>
    <h3 class="text-green-400">AVIF</h3>
    <p class="text-sm opacity-70">Nouvelle génération (90%)</p>
    <p class="text-xs mt-2">✓ 50% plus léger<br>✓ Meilleure qualité</p>
  </div>
</div>

---
layout: two-cols
---

# Redimensionner

Si vos images s'affichent sur **750px** max, pourquoi envoyer du **5000px** ?

### Trouver la taille utile

1. Ouvrir la page sur grand écran
2. Inspecter l'image (F12)
3. Vérifier sa taille d'affichage
4. Redimensionner à cette taille

<div class="mt-4 p-4 bg-[var(--color-wp)]/20 rounded-lg">
  <strong>Règle d'or :</strong> Toujours redimensionner <em>avant</em> l'upload
</div>

::right::

## Comparaison

| État | Poids | Temps 4G |
|------|-------|----------|
| Original (5000px) | 8.5 Mo | ~17 sec |
| Redimensionné (1800px) | 1.2 Mo | ~2.5 sec |
| Optimisé | **180 Ko** | **~0.3 sec** |

<div class="mt-8 grid-2">
  <div class="card text-center">
    <div class="text-2xl">🐌</div>
    <div class="text-red-400 font-bold">8.5 Mo</div>
  </div>
  <div class="card text-center">
    <div class="text-2xl">⚡</div>
    <div class="text-green-400 font-bold">180 Ko</div>
  </div>
</div>

---
layout: section
---

# Compresser ses images

Trouver le bon compromis entre **taille**, **poids** et **qualité**

---
layout: two-cols
---

# Compression

## Résolution (DPI)
- Origine : 300 DPI
- Web : **72 ou 96 DPI** suffisent

## Qualité
- 100% = qualité maximum
- **60-80%** = bon compromis
- < 50% = dégradation visible

::right::

## Processus recommandé

<div class="space-y-4">
  <div class="flex items-center gap-4">
    <span class="badge-wp w-8 h-8 flex items-center justify-center rounded-full">1</span>
    <span>Redimensionner à la taille utile</span>
  </div>
  <div class="flex items-center gap-4">
    <span class="badge-wp w-8 h-8 flex items-center justify-center rounded-full">2</span>
    <span>Passer la résolution à 72 DPI</span>
  </div>
  <div class="flex items-center gap-4">
    <span class="badge-wp w-8 h-8 flex items-center justify-center rounded-full">3</span>
    <span>Compresser à 60-80%</span>
  </div>
  <div class="flex items-center gap-4">
    <span class="badge-wp w-8 h-8 flex items-center justify-center rounded-full">4</span>
    <span>Convertir en WebP si possible</span>
  </div>
</div>

<div class="mt-6 p-3 bg-orange-500/20 rounded-lg text-sm">
  ⚠️ La compression est <strong>irréversible</strong>. Gardez vos originaux !
</div>

---
layout: two-cols
---

# Nommer ses images

Les robots lisent les noms de fichiers pour comprendre le contenu.

### Bonnes pratiques

- Utiliser des **mots-clés pertinents**
- Séparer par des **tirets (-)**
- Tout en **minuscules**
- Éviter les caractères spéciaux

::right::

## Exemples

<div class="space-y-2">
  <div class="card bg-red-500/20">
    <span class="text-red-400">❌</span> DSC_004372.jpg
  </div>
  <div class="card bg-red-500/20">
    <span class="text-red-400">❌</span> Photo.jpg
  </div>
  <div class="card bg-red-500/20">
    <span class="text-red-400">❌</span> logo_final_v2.gif
  </div>
</div>

<div class="space-y-2 mt-4">
  <div class="card bg-green-500/20">
    <span class="text-green-400">✓</span> pneu-hiver-michelin.jpg
  </div>
  <div class="card bg-green-500/20">
    <span class="text-green-400">✓</span> polenta-tomates-sechees.png
  </div>
  <div class="card bg-green-500/20">
    <span class="text-green-400">✓</span> esig-logo.svg
  </div>
</div>

---
layout: two-cols
---

# Texte alternatif

L'attribut `alt` est essentiel pour :

<div class="space-y-4 mt-4">
  <div class="card">
    <span class="text-2xl">♿</span>
    <strong>Accessibilité</strong>
    <p class="text-sm opacity-70">Lecteurs d'écran pour malvoyants</p>
  </div>
  <div class="card">
    <span class="text-2xl">🔍</span>
    <strong>SEO</strong>
    <p class="text-sm opacity-70">Google indexe le contenu des images</p>
  </div>
  <div class="card">
    <span class="text-2xl">🖼️</span>
    <strong>Fallback</strong>
    <p class="text-sm opacity-70">S'affiche si l'image ne charge pas</p>
  </div>
</div>

::right::

## Syntaxe

```html
<img src="etang-gruere.jpg"
     alt="Vue de l'étang de la Gruère
          depuis la berge" />
```

### Conseils

- Décrire le contenu ou la fonction
- Utiliser des mots-clés pertinents
- Rester concis (125 caractères max)
- Ne pas commencer par "Image de..."

---

# Outils recommandés

<div class="grid-3 mt-8">
  <div class="card">
    <h3>🗜️ Compression</h3>
    <ul class="text-sm mt-2">
      <li><a href="https://tinypng.com">tinypng.com</a></li>
      <li><a href="https://squoosh.app">squoosh.app</a></li>
      <li><a href="https://compressjpeg.com">compressjpeg.com</a></li>
    </ul>
  </div>
  <div class="card">
    <h3>🔄 Conversion WebP/AVIF</h3>
    <ul class="text-sm mt-2">
      <li><a href="https://squoosh.app">squoosh.app</a></li>
      <li><a href="https://avif.io">avif.io</a></li>
      <li><a href="https://cloudconvert.com">cloudconvert.com</a></li>
    </ul>
  </div>
  <div class="card">
    <h3>🔌 Plugins WordPress</h3>
    <ul class="text-sm mt-2">
      <li>Imagify</li>
      <li>EWWW Image Optimizer</li>
      <li>ShortPixel</li>
      <li>Smush</li>
      <li>Optimole</li>
    </ul>
  </div>
</div>

---
layout: center
---

# Checklist avant upload

<div class="grid grid-cols-5 gap-4 mt-8">
  <div class="card text-center">
    <div class="text-2xl mb-2">1</div>
    <strong>Format</strong>
    <p class="text-xs mt-1">WebP/AVIF ou JPG</p>
  </div>
  <div class="card text-center">
    <div class="text-2xl mb-2">2</div>
    <strong>Dimensions</strong>
    <p class="text-xs mt-1">Taille max utile</p>
  </div>
  <div class="card text-center">
    <div class="text-2xl mb-2">3</div>
    <strong>Compression</strong>
    <p class="text-xs mt-1">72 DPI, 60-80%</p>
  </div>
  <div class="card text-center">
    <div class="text-2xl mb-2">4</div>
    <strong>Nom</strong>
    <p class="text-xs mt-1">mots-cles.jpg</p>
  </div>
  <div class="card text-center">
    <div class="text-2xl mb-2">5</div>
    <strong>Alt</strong>
    <p class="text-xs mt-1">Description courte</p>
  </div>
</div>

<div class="mt-12 text-center">
  <div class="text-4xl font-bold text-[var(--color-wp-light)]">Objectif : moins de 200 Ko par image</div>
</div>

---
layout: center
class: text-center
---

# Merci !

<div class="mt-8">
  <kbd>→</kbd> <kbd>↓</kbd> <kbd>Espace</kbd> Slide suivante
  <br>
  <kbd>o</kbd> Vue d'ensemble
  <br>
  <kbd>d</kbd> Mode sombre
</div>

<div class="abs-bl m-6 text-sm opacity-50">
  Cours C741 — WordPress — ESIG
</div>
