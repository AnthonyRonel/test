# 🚀 Guide de Déploiement Vercel

Guide rapide pour déployer le site de documentation R-Type sur Vercel.

## 📋 Prérequis

- Compte Vercel (gratuit) : [vercel.com/signup](https://vercel.com/signup)
- Node.js installé localement (pour tester)
- Git (optionnel, pour déploiement via GitHub)

---

## 🎯 Méthode 1 : Vercel CLI (Recommandé)

### Étape 1 : Installer Vercel CLI

```bash
npm install -g vercel
```

### Étape 2 : Se connecter à Vercel

```bash
vercel login
```

Suivez les instructions pour vous authentifier.

### Étape 3 : Déployer

```bash
# Aller dans le dossier du site
cd docs/website

# Premier déploiement (preview)
vercel

# Déploiement en production
vercel --prod
```

### Résultat

Vercel vous donnera une URL comme :
- Preview : `https://rtype-docs-xxx.vercel.app`
- Production : `https://rtype-docs.vercel.app`

---

## 🔗 Méthode 2 : GitHub + Vercel (Automatique)

### Étape 1 : Pousser sur GitHub

```bash
# À la racine du projet
git add .
git commit -m "Add documentation website"
git push origin main
```

### Étape 2 : Connecter à Vercel

1. Aller sur [vercel.com/new](https://vercel.com/new)
2. Cliquer sur "Import Git Repository"
3. Sélectionner votre repo GitHub
4. Configurer :
   - **Framework Preset** : Vite
   - **Root Directory** : `docs/website`
   - **Build Command** : `npm run build`
   - **Output Directory** : `dist`
   - **Install Command** : `npm install`

5. Cliquer sur "Deploy"

### Avantages

- ✅ Déploiement automatique à chaque push
- ✅ Preview pour chaque Pull Request
- ✅ Rollback facile
- ✅ Analytics intégrés

---

## 📦 Méthode 3 : Drag & Drop

### Étape 1 : Build local

```bash
cd docs/website
npm install
npm run build
```

### Étape 2 : Déployer

1. Aller sur [vercel.com/new](https://vercel.com/new)
2. Glisser-déposer le dossier `dist/` généré
3. Vercel déploie automatiquement

⚠️ **Attention** : Cette méthode ne permet pas les mises à jour automatiques.

---

## ⚙️ Configuration Avancée

### Variables d'environnement (si nécessaire)

Dans le dashboard Vercel :
1. Aller dans Settings → Environment Variables
2. Ajouter vos variables

### Domaine personnalisé

1. Aller dans Settings → Domains
2. Ajouter votre domaine (ex: `docs.rtype-game.com`)
3. Suivre les instructions DNS

### Build Settings

Le fichier `vercel.json` est déjà configuré :

```json
{
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ],
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "framework": "vite"
}
```

---

## 🧪 Tester en Local

Avant de déployer, testez localement :

```bash
cd docs/website

# Installer les dépendances
npm install

# Lancer le serveur de dev
npm run dev

# Ouvrir http://localhost:3000
```

Pour tester le build de production :

```bash
# Build
npm run build

# Preview
npm run preview
```

---

## 📊 Monitoring

Une fois déployé, Vercel fournit :

- **Analytics** : Visiteurs, pages vues
- **Logs** : Logs de build et runtime
- **Performance** : Core Web Vitals
- **Deployments** : Historique des déploiements

Accès via : [vercel.com/dashboard](https://vercel.com/dashboard)

---

## 🔧 Dépannage

### Erreur : "Build failed"

```bash
# Vérifier localement
npm run build

# Vérifier les logs Vercel
vercel logs <deployment-url>
```

### Erreur : "Routes not working"

Vérifier que `vercel.json` contient les rewrites pour React Router.

### Erreur : "Dependencies not found"

```bash
# Nettoyer et réinstaller
rm -rf node_modules package-lock.json
npm install
```

---

## 📝 Checklist de Déploiement

- [ ] Code testé localement (`npm run dev`)
- [ ] Build réussi (`npm run build`)
- [ ] Pas d'erreurs dans la console
- [ ] Navigation fonctionne
- [ ] Responsive design vérifié
- [ ] Compte Vercel créé
- [ ] Projet déployé
- [ ] URL partagée avec l'équipe

---

## 🎉 Résultat Final

Votre documentation sera accessible à :

```
https://votre-projet.vercel.app
```

Avec :
- ✅ HTTPS automatique
- ✅ CDN global
- ✅ Temps de chargement < 1s
- ✅ 99.99% uptime
- ✅ Déploiement en ~30 secondes

---

## 📞 Support

- Documentation Vercel : [vercel.com/docs](https://vercel.com/docs)
- Support : [vercel.com/support](https://vercel.com/support)
- Community : [github.com/vercel/vercel/discussions](https://github.com/vercel/vercel/discussions)

---

**Fait avec ❤️ par l'équipe R-Type**
