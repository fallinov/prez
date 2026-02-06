#!/usr/bin/env node

const { spawnSync } = require('child_process')
const fs = require('fs')
const path = require('path')

const presentationsDir = path.join(__dirname, '..', 'presentations')
const distDir = path.join(__dirname, '..', 'dist')

// Créer le dossier dist s'il n'existe pas
if (!fs.existsSync(distDir)) {
  fs.mkdirSync(distDir, { recursive: true })
}

// Lister toutes les présentations
const presentations = fs.readdirSync(presentationsDir).filter(name => {
  const slidesPath = path.join(presentationsDir, name, 'slides.md')
  return fs.existsSync(slidesPath)
})

console.log(`📦 Building ${presentations.length} presentations...\n`)

// Builder chaque présentation
presentations.forEach((name, index) => {
  const slidesPath = path.join(presentationsDir, name, 'slides.md')
  const outDir = path.join(distDir, name)

  console.log(`[${index + 1}/${presentations.length}] Building ${name}...`)

  const result = spawnSync('npx', [
    'slidev', 'build', slidesPath,
    '--base', `/${name}/`,
    '--out', outDir
  ], {
    stdio: 'inherit',
    cwd: path.join(__dirname, '..')
  })

  if (result.status === 0) {
    console.log(`   ✓ ${name} built successfully\n`)
  } else {
    console.error(`   ✗ Failed to build ${name}\n`)
  }
})

// Créer un index.html qui liste toutes les présentations
const presentationLinks = presentations.map(name =>
  `<a href="/${name}/" class="block p-6 bg-slate-800 rounded-lg hover:bg-slate-700 transition-colors">
        <h2 class="text-xl font-semibold text-[#00a0d2]">${name}</h2>
        <p class="text-slate-400 text-sm mt-1">Voir la présentation</p>
      </a>`
).join('\n      ')

const indexHtml = `<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Présentations ESIG</title>
  <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-slate-900 text-white min-h-screen p-8">
  <div class="max-w-4xl mx-auto">
    <h1 class="text-4xl font-bold mb-2">Présentations ESIG</h1>
    <p class="text-slate-400 mb-8">Collection de présentations pour les cours</p>
    <div class="grid gap-4">
      ${presentationLinks}
    </div>
    <footer class="mt-12 text-center text-slate-500 text-sm">
      ESIG
    </footer>
  </div>
</body>
</html>`

fs.writeFileSync(path.join(distDir, 'index.html'), indexHtml)
console.log('✓ Index page created')
console.log('\n🎉 All presentations built successfully!')
