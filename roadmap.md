
# roadmap.md – Roadmap de développement

Cette roadmap est issue des documents de contexte (`context_project.md`, `architecture.md`) et suit le principe **Objectifs → Modules → Tâches**.

---

## Niveau 1 · Objectifs fonctionnels globaux

1. Obtenir une **matrice Eisenhower personnalisée** en < 10 min.
2. Offrir une **UI légère & responsive** sans login (v1).
3. Permettre **export PDF & JSON** des résultats.
4. Fonctionner **sans backend** (v1) mais extensible API.
5. Rester **Codex‑friendly** : fichiers ≤ 200 lignes, TS strict.

---

## Niveau 2 · Modules fonctionnels

| # | Module | Rôle | Dossiers clés |
|---|--------|------|---------------|
| **M1** | Interface Quiz | Affiche questions, collecte réponses | `/src/pages/Quiz.tsx`, `/src/components/QuestionCard.tsx` |
| **M2** | Moteur de scoring | Calcul Importance/Urgence + modifs contexte | `/src/logic/contextScoring.ts`, `/src/logic/eisenhower.ts` |
| **M3** | Visualisation matrice | Grille 2×2, affiche enjeux par quadrant | `/src/components/EisenhowerMatrix.tsx`, `/src/pages/Result.tsx` |
| **M4** | Export & Partage | JSON, PDF, URL encodée | `/src/utils/export.ts`, `/src/utils/urlEncode.ts` |
| **M5** | Stockage local | Persistance `localStorage` | `/src/utils/localStore.ts` |
| **M6** | Build & Déploiement | CI/CD GitHub → Vercel | `vercel.json`, `/.github/workflows` |
| **M7** | API Serverless *(option)* | Capturer leads / stats | `/api/save.ts` |

---

## Niveau 3 · Tâches détaillées (≤ 3 h chacune)

### 0 : Bootstrap & tooling
| ID | Description | Dossier | Diff. | Est. |
|----|-------------|---------|-------|------|
| 0.1 | Initialiser Vite React TS | root | Déb. | 1 h |
| 0.2 | Configurer Tailwind + shadcn/ui | `/src/styles` | Déb. | 1 h |
| 0.3 | ESLint + Prettier | root | Déb. | 1 h |
| 0.4 | Router (Quiz → Result) | `App.tsx` | Déb. | 1 h |
| 0.5 | Pipeline GitHub → Vercel | root | Déb. | 1 h |

### 1 : MVP Quiz (M1)
| ID | Description | Dossier | Diff. | Est. |
|----|-------------|---------|-------|------|
| 1.1 | Type `Question` + seed data | `/src/logic/questions.ts` | Déb. | 1 h |
| 1.2 | Composant `QuestionCard` | `/src/components` | Déb. | 2 h |
| 1.3 | Page Quiz + progression | `/src/pages/Quiz.tsx` | Mod. | 2 h |
| 1.4 | React Context pour réponses | `/src/logic/quizContext.tsx` | Mod. | 2 h |
| 1.5 | Validation & navigation | `/src/pages/Quiz.tsx` | Déb. | 1 h |
| 1.6 | Persistance `localStorage` | `/src/utils/localStore.ts` | Déb. | 1 h |
| 1.7 | Tests unitaires Quiz | `/tests` | Mod. | 2 h |

### 2 : Scoring Engine (M2)
| ID | Description | Dossier | Diff. | Est. |
|----|-------------|---------|-------|------|
| 2.1 | Map basique Importance/Urgence | `contextScoring.ts` | Déb. | 2 h |
| 2.2 | Implémenter `applyContext` | `contextScoring.ts` | Mod. | 2 h |
| 2.3 | Fonction `computeQuadrant` | `eisenhower.ts` | Déb. | 1 h |
| 2.4 | Tests scoring | `/tests` | Mod. | 2 h |
| 2.5 | Hook `useScoring()` | `/src/logic` | Déb. | 1 h |

### 3 : Matrice & Résultats (M3)
| ID | Description | Dossier | Diff. | Est. |
|----|-------------|---------|-------|------|
| 3.1 | Grid Eisenhower (CSS) | `EisenhowerMatrix.tsx` | Déb. | 2 h |
| 3.2 | Injection enjeux par quadrant | idem | Mod. | 2 h |
| 3.3 | Style & icônes | idem | Déb. | 1 h |
| 3.4 | Page Result + hook scoring | `/src/pages/Result.tsx` | Déb. | 1 h |
| 3.5 | CTA Lostra + partage URL | idem | Déb. | 1 h |

### 4 : Export & Partage (M4)
| ID | Description | Dossier | Diff. | Est. |
|----|-------------|---------|-------|------|
| 4.1 | Export JSON | `utils/export.ts` | Déb. | 1 h |
| 4.2 | Export PDF | idem | Av. | 3 h |
| 4.3 | Encoder résultats URL | `utils/urlEncode.ts` | Mod. | 1 h |
| 4.4 | Bouton « Copier lien » | `/src/components` | Déb. | 1 h |

### 5 : Qualité & Responsive
| ID | Description | Dossier | Diff. | Est. |
|----|-------------|---------|-------|------|
| 5.1 | Audit accessibilité | global | Mod. | 2 h |
| 5.2 | Storybook setup | `/storybook` | Mod. | 2 h |
| 5.3 | Lighthouse perf | root | Déb. | 1 h |
| 5.4 | Responsive tweaks mobile | styles | Déb. | 2 h |

### 6 : Déploiement & extras
| ID | Description | Dossier | Diff. | Est. |
|----|-------------|---------|-------|------|
| 6.1 | Config domaine + env Vercel | `vercel.json` | Déb. | 1 h |
| 6.2 | Stub Edge Function `/api/save.ts` | `/api` | Av. | 2 h |
| 6.3 | Analytics Plausible | `/src/utils` | Mod. | 2 h |

---

## Build order recommandé

1. Bootstrap & CI/CD (0.x)  
2. MVP Quiz (1.x)  
3. Scoring Engine (2.x)  
4. Matrice & Result (3.x)  
5. Export & Partage (4.x)  
6. Qualité & Responsive (5.x)  
7. Déploiement final (6.1)  
8. Extras optionnels (6.2‑6.3)

---

> Chaque tâche doit devenir un ticket GitHub avec un **prompt Codex** associé, consigné dans `prompts_codex.md`.
