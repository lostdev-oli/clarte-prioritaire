# Clarté Prioritaire

**Clarté Prioritaire** est une mini-application _vibe‑coded_ qui aide les dirigeant·e·s de PME à clarifier et prioriser leurs enjeux stratégiques grâce à une matrice d’Eisenhower personnalisée générée en moins de **10 minutes**.

## ✨ Proposition de valeur
- **Quiz rapide** : 15 questions couvrant stratégie, marketing, finances, opérations et RH.  
- **Matrice visuelle** : importance × urgence avec recommandations concrètes.  
- **Export** : JSON ou PDF pour partage interne ou accompagnement Lostra.  
- **Sans compte** : première version _frontend‑only_, extensible vers une API serverless.

## 🧱 Stack technique
| Couche | Tech choisie | Pourquoi |
| ------ | ------------ | -------- |
| Frontend | **Vite + React + TypeScript** | Démarrage ultra‑rapide, hot‑reload, typage clair |
| Style | **Tailwind CSS + shadcn/ui** | Styles utilitaires + composants designés |
| Icônes | **lucide-react** | Icônes épurées & open‑source |
| Logic | Modules TS pures (`/src/logic`) | Testables et Codex‑friendly |
| Export | **html2canvas** + **jsPDF** | Capture DOM → PDF, JSON download |
| Déploiement | **Vercel** (CI/CD GitHub) | Deploy preview automatique |
| Tests | **Vitest** + Testing Library | Tests unitaires et d’intégration |

## 📂 Structure du repo

```
clarte-prioritaire/
├─ public/
├─ src/
│  ├─ App.tsx
│  ├─ components/
│  ├─ pages/
│  ├─ logic/
│  ├─ utils/
│  └─ styles/
├─ vercel.json
├─ README.md          ← ce fichier
├─ context_project.md ← logique métier & scoring
├─ architecture.md    ← architecture détaillée
└─ roadmap.md         ← roadmap + tâches
```

## 🚀 Démarrer localement

```bash
git clone https://github.com/<ton-org>/clarte-prioritaire.git
cd clarte-prioritaire
npm install
npm run dev
```

### Scripts utiles

| Commande | Action |
|----------|--------|
| `npm run dev` | Lance le serveur Vite avec hot‑reload |
| `npm run build` | Build production |
| `npm run preview` | Aperçu local du build |
| `npm run test` | Lance Vitest |

## 🌐 Déployer sur Vercel
1. Connecte le repo GitHub à Vercel.  
2. Build command : `npm run build`  
3. Output : `dist`  
4. Ajoute (optionnel) un fichier **Edge Function** `/api/save.ts` pour capturer des leads.

## 📝 Contribuer
- Un ticket = une tâche décrite dans `roadmap.md`.  
- Respecte les conventions de nommage, TypeScript strict et fichiers < 200 lignes.  
- Ouvre toujours une _pull request_ (PR) et vérifie la _preview_ Vercel avant de merger.

## 📜 Licence
MIT — utilise, modifie, partage. Amuse‑toi !
