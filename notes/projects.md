### Projects

#### `Telegram Bots`:

---

Group Chat Game Bot called `DSSTAM` - Dont say the same thing as me. Game where 9 players answer to host question and try to not match with host's answer

---

Private Chat Game Bot called `GuessOrLose` - Game where you will get random opponent and can ask YES or NO questions in order to guess your riddle. It can be:

1. Flags
2. Animal
3. City
4. Country
5. Actor

---

Group Chat Game Bot basically the analog of current True Mafia Bot with improvements and bug fixes:

1. No commands at all in group chat, no way to spam, everything is automated
2. Nothing to purcahse, everything from drops
3. Updated roles and their abilities
4. No skip command
5. Max 10 days. One side must manage to win before this day.
6. If you win you get secret prize from bot
7. Ability to give away prize to someone

#### `VSCode Extensions`:

---

#### `Raycast Extensions`:

---

#### `Chrome Extensions`:

---

#### `Web Apps`:

---

Automated Trading System powered with AI and OpenClaw. It makes trades on ByBit & Binance and uses next sources to gather information:

1. Telegram
2. Twitter
3. Binance

---

Cool and ultra fast, minimalistic portfolio site built with NextJS. It includes:

1. Personal Information
2. Education and Experience
3. Github Projects
4. Technology Stack & Expertise
5. Gallery
6. Articles
7. Contacts

---

#### `Mobile Apps`:

---

Mobile App on React Native to learn something and train myself in areas:

- Religion:
    - Quran
    - Prophets
    - Arabic Language
- Geography:
    1. Country
    2. Flag
    3. Capital
    4. Cities
    5. Languages
    6. Athletes
    7. Scientists
    8. Philosophers
    9. Animals
    10. Fruits
    11. Vegatables
    12. Mountains
    13. Rivers
    14. Bays
    15. Buildings
    16. Deserts
    17. Lakes
    18. Seas
    19. States
    20. Conquerors
    21. Writers
    22. Poets
    23. Painters
    24. Musicians
    25. Inventors
    26. Kingdoms
    27. Parties
- Computer Science:
    1. Algorithms & Data structures
    2. Discrete Math
    3. Number Theory
    4. Graph Theory
    5. Set Theory
    6. Combinatorics
    7. Elementary Math
    8. Probability & Statistics
    9. Linear Algebra
    10. Boolean Algebra
    11. Geometry
- Software Engineering:
    1. Operating Systems
    2. Database Internals
    3. Search Engines
    4. Cloud Computation
    5. Network Essentials
    6. Compilers & Transpilers
    7. Computer Hardwares
    8. Web Security
- Web Development:
    1. JavaScript
    2. TypeScript
    3. NodeJS
    4. Bun
    5. Docker
    6. Kubernetes
    7. Git
    8. Github
    9. ESLint
    10. Chrome
    11. Webpack
    12. React
    13. Redux
    14. GraphQL
    15. NextJS
    16. Tailwind
    17. Amazon Web Services
    18. Linux
    19. PostgreSQL
    20. MongoDB
- Competitive Programming:
    1. Leetcode Problems
    2. Codeforces Problems

#### `Educational`:

1. Loop-JS: The Manual Event Loop
   The Goal: Build a custom task orchestrator that replicates how libuv manages the Macrotask and Microtask (Promises) queues.

- The Challenge: Create a MyLoop class with a while(true) loop. Implement a custom setImmediate, nextTick, and setTimeout.
- Core Learning: You will learn why process.nextTick starves the event loop, exactly when Promises resolve compared to Timers, and how the "polling" phase works.

---

2. V-Tiny: The Virtual DOM & Diffing Engine
   The Goal: Replicate the core of React or Preact without using any libraries.

- The Challenge: Create a h() (hyperscript) function to create VNodes and a patch(oldNode, newNode) function.
- Core Learning: You’ll understand the recursive "Reconciliation" algorithm, how to minimize DOM operations, and why "keys" are critical for list performance.

---

3. Toy-V8: Lexer, Parser, and Interpreter
   The Goal: Understand how V8 or SpiderMonkey turns a string of code into action.

- The Challenge: Write a Recursive Descent Parser that takes a string (e.g., let a = 5 + 2; print(a);), converts it into an AST (Abstract Syntax Tree), and then iterates through that tree to execute the logic.
- Core Learning: You'll master how Babel transforms code and how scopes/closures are represented in memory.

---

4. Signal-Sync: Proxy-based Reactivity
   The Goal: Build a fine-grained reactivity system similar to SolidJS or Vue 3 Signals.

- The Challenge: Use JavaScript Proxy objects to track "Get" and "Set" operations. Create a createEffect function that automatically re-runs whenever a dependency changes.
- Core Learning: You’ll see the difference between "Pull-based" updates (React) and "Push-based" updates (Signals) and how dependency tracking works without manual arrays.

---

5. Pack-It: The Dependency Graph Bundler
   The Goal: Build a mini Webpack or Vite (Dev Server mode).

- The Challenge: Start with one entry.js file, use Regex or an AST parser to find import statements, recursively map the entire project, and wrap each file in a module function to prevent global scope pollution.
- Core Learning: You’ll understand CommonJS vs ESM, how "Module Linking" works, and how circular dependencies are handled.

---

6. TCP-HTTP: The Raw Socket Server
   The Goal: Move below the http module and build a server using Node's net (TCP) module.

- The Challenge: Listen on a TCP socket, manually parse the incoming Buffer string (e.g., GET /index HTTP/1.1), and manually write the HTTP response headers and body back to the socket.
- Core Learning: You’ll understand Non-blocking I/O, how streams work at the binary level, and what a "Request" object actually is before Express touches it.

---

7. Tree-Shaker: The Dead Code Eliminator
   The Goal: Understand how modern bundlers optimize production builds.

- The Challenge: Write a script that parses a file's exports, tracks which ones are actually called in the entry point, and removes the unused function strings from the final output.
- Core Learning: You’ll learn about Static Analysis and why ESM (import/export) is easier to optimize than CommonJS (require).

---

8. Fiber-Step: The Interruptible Renderer
   The Goal: Understand React Fiber and how browsers stay responsive during heavy UI updates.

- The Challenge: Implement a renderer that uses requestIdleCallback to process a "work loop." If the browser needs to paint a frame, your renderer must "pause" and resume where it left off.
- Core Learning: You’ll learn about Concurrency, time-slicing, and why long-running JS blocks the main thread (and how to fix it).

---
