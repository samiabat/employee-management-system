# StaffHub — BGI Ethiopia Employee Management System

![Angular](https://img.shields.io/badge/Angular-16-DD0031?style=for-the-badge&logo=angular&logoColor=white)
![Angular Material](https://img.shields.io/badge/Angular_Material-16-757575?style=for-the-badge&logo=angular&logoColor=white)
![NGXS](https://img.shields.io/badge/NGXS-State_Management-3E4D5E?style=for-the-badge)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?style=for-the-badge&logo=typescript&logoColor=white)

> A premium enterprise-grade Employee Management System built for **BGI Ethiopia — Breweries, Wines & Spirits S.C.** Manage your workforce with a stunning, production-ready interface.

---

## ✨ Features

- 🔐 **JWT Authentication** — Secure login with token-based auth; demo fallback mode for offline use
- 📊 **Real-time Dashboard** — KPI cards, recent employees table, department distribution charts
- 👥 **Employee Management** — Full CRUD, avatar support, CSV export, advanced search & filtering
- 🎭 **Roles Management** — Create and manage organizational roles
- 🏢 **Sector Organization** — Manage company sectors
- 🛡️ **Demo Fallback Interceptor** — Works offline with 20 realistic Ethiopian + international employees
- 🎨 **Premium UI** — Split-panel login, dark sidebar, gradient KPI cards, frosted glass effects
- 📱 **Responsive Design** — Mobile-friendly layout with hamburger menu
- 🔔 **Notification System** — Color-coded snackbar notifications (success/error/info)

---

## 🏗️ Architecture

```
src/app/
├── interceptors/          # HTTP interceptors (auth, demo-fallback)
├── services/              # Shared services (demo data, notifications)
├── security/              # Auth module (login, guards, JWT)
├── navigation/            # App shell with toolbar + dark sidebar
├── dashboard/             # Dashboard with KPIs and analytics
├── employees/             # Employee CRUD with detail dialogs
├── roles/                 # Role management
├── sectors/               # Sector management
├── confirm-delete/        # Reusable delete confirmation dialog
└── shared.module.ts       # Central Angular Material module exports
```

**State Management:** NGXS  
**UI Library:** Angular Material 16  
**Fonts:** Inter + Plus Jakarta Sans (Google Fonts)  
**Avatars:** UI Avatars API (no API key required)  
**Backend:** `https://accountmanager.onrender.com` (with demo fallback)

---

## 🚀 Getting Started

```bash
# Install dependencies
npm install

# Start development server
ng serve

# Build for production
npm run build
```

Open `http://localhost:4200` and sign in with **any username and password** (demo mode).

---

## 📸 Screenshots

> _Dashboard, Employee List, Login Page screenshots here_

---

## 🔧 Environment

| Tool | Version |
|------|---------|
| Node.js | 18+ |
| Angular CLI | 16 |
| Angular Material | 16 |
| NGXS | 3.8+ |

---

## Credits

Built with ❤️ by **[samiabat](https://github.com/samiabat)** — Feel free to use this as a base for your own projects! If you build on top of this, please give credit by linking back to the original repository.

---

© 2024 BGI Ethiopia — Breweries, Wines & Spirits S.C.
