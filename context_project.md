# contexte_project.md – Logique métier & scoring

## 1. Vision rapide
Clarté Prioritaire est un **lead‑magnet / outil interne** pour Lostra qui :
- Diagnostique la situation d’une PME en < 10 minutes via un quiz.
- Traduit les réponses en **matrice d’Eisenhower** pour visualiser les priorités.
- Fournit des recommandations actionnables et des exports (PDF, JSON).

## 2. Business Model Canvas (condensé)

| Bloc | Contenu |
|------|---------|
| Segment | Fondateurs / DG de PME B2B (5–50 employés) |
| Proposition de valeur | « Vous voyez vos priorités nettes en 10 min » |
| Canaux | Landing + partage lien / PDF ; accompagnement Lostra |
| Relations | Self‑service → Upsell diagnostic 360 ° |
| Ressources clés | Quiz, scoring engine, matrix UI |
| Activités clés | Développement, contenu, maintenance |
| Partenaires | Vercel, GitHub, OpenAI Codex |
| Structure de coûts | Hébergement, nom de domaine |
| Retombées internes | Génération de leads qualifiés pour Lostra |

## 3. Quiz – Structure & questions

- 5 axes : Stratégie, Marketing & Ventes, Opérations, Finances, RH.
- 15 questions fermées (Oui / Partiellement / Non) + métadonnées (taille entreprise, secteur, objectif principal).
- Typescript `type Question = { id, axis, text, icon }`.

## 4. Scoring : Importance × Urgence

| Réponse | Importance | Urgence |
|---------|-----------|---------|
| ✅ Oui | 1 | 1 |
| ⚠️ Partiellement | 2 | 2 |
| ❌ Non | 3 | 3 |

### Modificateurs contextuels

```ts
type Modifier = { source: string; importance?: +1; urgence?: +1 };
```

- Objectif principal ventes → `+1` urgence sur Marketing / Pipeline.
- Secteur Tech / SaaS → `+1` importance structuration & automatisation.
- Petite équipe (<3) → `+1` urgence RH & délégation.
- B2B cycle long → `+1` importance Pipeline.

Calcul final plafonné à 3.

```ts
export function applyContext(base, mods) { ... }
export function computeQuadrant(importance, urgence) { ... }
```

Quadrants: `IU`, `I¬U`, `¬I U`, `¬I ¬U`.

## 5. Visualisation & UI

- `EisenhowerMatrix.tsx` affiche 4 quadrants dans une grille 2×2 responsive.
- Chaque enjeu listé avec icône + CTA (ex. « Voir action proposée »).
- Design : Tailwind, tonalité #669bbc + gris neutre, coins arrondis 2xl.

## 6. Export & Partage

| Format | Implémentation |
|--------|----------------|
| JSON | `download.json` via `URL.createObjectURL` |
| PDF | `html2canvas` + `jsPDF` (A4 portrait, 1 page) |
| URL encodée | `base64url` de l’objet résultat |

## 7. Roadmap & dossiers

Se référer à `roadmap.md` pour la chronologie complète.  
Structure de code décrite dans `architecture.md`.

---

> **Note** : Toute fonction > 200 lignes doit être scindée ; commentaires JSDoc obligatoires.  
> Tests unitaires (`vitest`) pour logique de scoring et principal composant UI.
