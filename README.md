# Day 3: Sharing State Between Components & AI Workflows 🚀

Welcome to Day 3! Today we cover how React components communicate, why sibling components cannot talk directly to each other, how to lift state to a common parent, derived state, prop drilling, and how to leverage AI tools (Copilot/Cursor) as a superpowered pair programmer across the development lifecycle.

---

## ⏱️ 3-Hour Bootcamp Schedule

| Time | Duration | Topic & Focus |
| :--- | :--- | :--- |
| **00:00 - 00:25** | 25 min | **Day 2 Recap & Motivation**: One-way data flow & why components can't share state directly. |
| **00:25 - 01:05** | 40 min | **Core Concepts**: Lifting State Up (React Docs 3-step pattern) & Exercises 1 & 2. |
| **01:05 - 01:30** | 25 min | **Derived State & AI Pair Programming**: Computing values dynamically & AI spec writing / debugging. |
| **01:30 - 01:40** | 10 min | ☕ **Break** |
| **01:40 - 02:00** | 20 min | **Prop Drilling & Architecture**: Mental models and managing multi-level component trees. |
| **02:00 - 02:50** | 50 min | **Hands-on Mini Project**: Multi-Component Task Manager (Exercises 3 & 4 + AI Refactoring). |
| **02:50 - 03:00** | 10 min | **Wrap-Up & Q&A**: Reflection questions and Day 4 preview. |

---

## 🎯 Learning Objectives

By the end of this session, students will be able to:
- Explain the concept of **one-way data flow** in React.
- Understand the meaning and implementation of **"lifting state up."**
- Identify reasons why components cannot share state directly.
- Teach and explain the implications of **prop drilling**.
- Apply the concept of **derived state** (calculating vs. duplicating state).
- Leverage AI pair programming tools to plan, debug, and refactor component state trees.

---

## 🛠️ Tech Stack & Directory Blueprint

This project uses the modern bootcamp stack matching official class repos (`day1-intro-to-react`, `day2-state-and-interactivity`):
- **React 19** (`react` `^19.2.4`)
- **Vite 8** (`vite` `^8.0.4`)
- **Tailwind CSS v4** (`@tailwindcss/vite` `^4.2.2`)
- **React Router v7** (`react-router-dom` `^7.14.1`)
- **ESLint 9** (`eslint` `^9.39.4`)

```text
day3-sharing-state/
├── README.md
├── package.json
├── vite.config.js
├── index.html
└── src/
    ├── main.jsx
    ├── index.css
    ├── App.jsx
    ├── components/
    │   ├── TaskInput.jsx
    │   ├── TaskList.jsx
    │   └── TaskItem.jsx
    ├── demos/
    │   ├── Demo1_BrokenState.jsx
    │   ├── Demo2_LiftedState.jsx
    │   └── Demo3_DerivedState.jsx
    └── ai_demos/
        └── AIDemo_SpecPrompting.jsx
```

---

## 💡 Running Demos & Exercises

Run `npm install` and `npm run dev` to launch the app. Use the top navigation bar to switch between:
1. **Lecture Demos**: Standard state lifting & broken component state examples.
2. **AI Pair Programming**: Spec writing & guided state debugging workflows.
3. **Mini Project**: Multi-component task manager with task completion counters.
