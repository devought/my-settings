## Competitive Programming Setup

Personal competitive programming workspace with TypeScript setup and development configs.

## Structure

```
coding/
├── configs/          # Dev tool configurations
│   ├── ghostty/      # Terminal settings
│   ├── macos/        # macOS keybindings
│   ├── neovim/       # Neovim setup & shortcuts
│   ├── raycast/      # Raycast quicklinks
│   └── vscode/       # VSCode settings
├── notes/            # Learning notes & problem breakdowns
├── src/              # Solutions
│   ├── lib/          # Shared utilities & helpers
│   ├── scripts/      # Automation scripts
│   ├── main.ts       # ← Write your solution here
│   └── test.txt      # ← Write test cases here
└── README.md
```

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org) v18+
- [TypeScript](https://www.typescriptlang.org)

```bash
npm install -g typescript ts-node
```

### Setup

```bash
git clone <your-repo-url>
cd coding
npm install
```

### Solving Problems

1. Open `src/main.ts` and write your solution
2. Add test cases in `src/test.txt`
3. Run your solution:

```bash
ts-node src/main.ts
```

## Editor

Configured for both **VSCode** and **Neovim (LazyVim)** with:

- TypeScript LSP
- Prettier (format on save)
- ESLint
- Tailwind CSS support
