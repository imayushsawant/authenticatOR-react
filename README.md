# AuthenticatOR

A modern, fast, and sleek React authentication app built with **Vite**. It provides a complete sign-up, login, and logout flow powered by the [FreeAPI](https://freeapi.app/) user endpoints, wrapped in a polished dark-themed UI with glassmorphic cards and animated gradients.

---

## ✨ Features

| Capability | Details |
|---|---|
| **Register** | Create an account with username, email & password via `POST /users/register` |
| **Login** | Authenticate with username & password via `POST /users/login` |
| **Logout** | End the session via `POST /users/logout` with an auto-redirect back to home |
| **Current User** | Fetch the authenticated user's profile via `GET /users/current-user` |
| **Dark Themed UI** | Custom CSS design system with CSS variables, gradient orbs, glassmorphic cards, and smooth transitions |
| **Client-Side Routing** | Instant page transitions with React Router v7 (`createBrowserRouter`) |

---

## 🛠 Tech Stack

| Layer | Technology |
|---|---|
| Framework | [React 19](https://react.dev/) |
| Bundler | [Vite 8](https://vite.dev/) |
| Routing | [React Router v7](https://reactrouter.com/) |
| Styling | Vanilla CSS (Design Tokens & CSS Variables) |
| API | [FreeAPI](https://freeapi.app/) — `api.freeapi.app/api/v1/users/*` |
| Package Manager | pnpm |
| Linting | ESLint with `eslint-plugin-react-hooks` & `eslint-plugin-react-refresh` |

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18+)
- [pnpm](https://pnpm.io/) — install globally with `npm install -g pnpm`

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/<your-username>/authentication-react.git
cd authentication-react

# 2. Install dependencies
pnpm install

# 3. Start the development server
pnpm dev
```

Open the local URL printed by Vite (usually **http://localhost:5173/**) in your browser.

### Available Scripts

| Script | Description |
|---|---|
| `pnpm dev` | Start the Vite dev server with HMR |
| `pnpm build` | Create an optimized production build |
| `pnpm preview` | Preview the production build locally |
| `pnpm lint` | Run ESLint across the project |

---

## 📁 Project Structure

```
authentication-react/
├── index.html            # HTML entry point
├── vite.config.js        # Vite configuration
├── package.json
└── src/
    ├── main.jsx          # App entry — router config & render
    ├── App.jsx           # Root layout with navbar + <Outlet />
    ├── homepage.jsx      # Landing / hero page
    ├── register.jsx      # Registration form → POST /users/register
    ├── Login.jsx         # Login form → POST /users/login
    ├── success.jsx       # Post-auth success screen + logout action
    ├── logout.jsx        # Logout confirmation with auto-redirect
    ├── profile.jsx       # Current user profile (GET /users/current-user)
    ├── App.css           # Component-level styles (cards, buttons, forms)
    └── index.css         # Global styles & CSS design tokens
```

---

## 🔀 Routes

| Path | Component | Description |
|---|---|---|
| `/` | `HomePage` | Landing page with hero section |
| `/register` | `Register` | Account creation form |
| `/login` | `Login` | Sign-in form |
| `/success` | `Success` | Authenticated confirmation + logout button |
| `/loggedout` | `LogoutScreen` | Logout message with 2 s auto-redirect to home |

---

## 🌐 API Endpoints Used

All requests target **`https://api.freeapi.app/api/v1/users`**:

| Method | Endpoint | Purpose |
|---|---|---|
| `POST` | `/register` | Create a new user |
| `POST` | `/login` | Authenticate & start a session |
| `POST` | `/logout` | End the current session |

---

## 📄 License

This project is open-source. Feel free to fork, modify, and use it as you see fit.
