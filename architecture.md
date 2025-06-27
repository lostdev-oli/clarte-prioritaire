# architecture.md – Structure technique détaillée

## 1. Schéma général

```
clarte-prioritaire/
├─ public/               # icônes, manifest, share images
├─ src/
│  ├─ App.tsx            # routing (React Router)
│  ├─ components/        # UI réutilisable
│  │   ├─ QuestionCard.tsx
│  │   ├─ EisenhowerMatrix.tsx
│  │   └─ ...
│  ├─ pages/
│  │   ├─ Quiz.tsx
│  │   └─ Result.tsx
│  ├─ logic/
│  │   ├─ questions.ts
│  │   ├─ contextScoring.ts
│  │   ├─ eisenhower.ts
│  │   └─ quizContext.tsx
│  ├─ utils/
│  │   ├─ export.ts
│  │   ├─ urlEncode.ts
│  │   └─ localStore.ts
│  ├─ styles/            # Tailwind, shadcn overrides
│  └─ tests/             # Vitest units
├─ .storybook/           # Storybook config
├─ vercel.json           # routes & edge functions
└─ api/ (opt)            # /api/save.ts (Edge Function)
```

## 2. Stack détaillée

| Couche | Outils | Config clés |
|-------|--------|-------------|
| Build | **Vite** | `vite.config.ts` avec TS, alias `@/` |
| UI | **React + TS** | React Router v6, hooks customs |
| Style | **Tailwind** + shadcn/ui | `tailwind.config.js` + `tailwindcss/forms` |
| Icônes | lucide-react | import sélectif |
| Tests | **Vitest** + Testing Library | Coverage > 80 % pour logic |
| Export | **html2canvas** + **jsPDF** | `A4`, 300dpi |
| CI/CD | GitHub Actions → Vercel | Preview sur PR |
| Analytics | Plausible (script async) | Optional via env var |

## 3. Principes de modularité

1. **Fichiers ≤ 200 lignes** – sinon scinder.
2. **Type Safety** – `strictNullChecks`, pas de `any`.
3. **Commenté JSDoc** sur chaque fonction exportée.
4. **Hooks réutilisables** (`useQuiz`, `useScoring`).
5. **Styles utilitaires** – pas de CSS custom lourd.
6. **Nom de branche** : `feat/<id‑tâche>-<slug>`.

## 4. Environnements

| Env | Commande | URL |
|-----|----------|-----|
| Dev | `npm run dev` | `http://localhost:5173` |
| Preview | PR Vercel | unique |
| Prod | `npm run build && vercel --prod` | domaine custom |

## 5. Extensibilité

- **Edge Function** `/api/save.ts` (TypeScript)  
  - `POST /api/save` → stocker JSON dans Upstash Redis.
- **DB future** : Supabase (Postgres) avec RLS.
- **Auth future** : Clerk.dev ou Supabase Auth.

---

> Toute nouvelle fonctionnalité doit être ajoutée à `roadmap.md` avant d’être codée.
