# BGI Employee Info System (BEI)

A comprehensive **Employee Management System** built as part of an internship project at **BGI Ethiopia** (Breweries, Wines & Spirits S.C.). The application provides a clean, professional interface for managing employees, roles, and organizational sectors within the company.

---

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Architecture](#architecture)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Running the App](#running-the-app)
  - [Building for Production](#building-for-production)
- [Application Structure](#application-structure)
- [Modules & Pages](#modules--pages)
- [API Configuration](#api-configuration)
- [Authentication](#authentication)
- [State Management](#state-management)
- [Screenshots](#screenshots)
- [About BGI Ethiopia](#about-bgi-ethiopia)

---

## Overview

The **BGI Employee Info (BEI)** system is an internal tool developed during an internship at BGI Ethiopia to centralise and manage employee records. It provides a responsive, single-page web application (SPA) backed by a REST API.

---

## Features

- 🔐 **Secure Login** — JWT-based authentication with token storage
- 📊 **Dashboard** — At-a-glance summary of employees, roles, and sectors
- 👤 **Employee Management** — Full CRUD operations (Create, Read, Update, Delete)
- 🎖️ **Role Management** — Define and manage employee roles
- 🏢 **Sector Management** — Organise the company into sectors
- 🔍 **Search & Filter** — Live search across all data tables
- 📄 **Pagination & Sorting** — Built-in table pagination and column sorting
- 📱 **Responsive Layout** — Adaptive sidenav that collapses on smaller screens
- 🗑️ **Confirm-before-delete** — Safety dialog before any destructive action

---

## Tech Stack

| Layer | Technology |
|-------|------------|
| Framework | [Angular 16](https://angular.io/) |
| UI Components | [Angular Material 16](https://material.angular.io/) |
| State Management | [NGXS 3](https://www.ngxs.io/) |
| HTTP Client | Angular `HttpClient` |
| Icons | Google Material Icons + Font Awesome |
| Styling | SCSS |
| Build Tool | Angular CLI |
| Language | TypeScript 5 |

---

## Architecture

The application follows a **feature-module architecture** with lazy loading:

```
AppModule
├── NavigationComponent     (always loaded)
├── SecurityModule          (lazy) → /login, /logout
├── DashboardModule         (lazy) → /dashboard
├── EmployiesModule         (lazy) → /employees
├── RolesModule             (lazy) → /roles
└── SectorsModule           (lazy) → /sectors
```

Each feature module contains:
- **Component(s)** — UI layer
- **Service** — HTTP calls to the API
- **Facade** — Thin wrapper over the NGXS store
- **Store** — Actions, Selectors, and State (NGXS)
- **Model** — TypeScript interfaces

---

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) v16 or higher
- [Angular CLI](https://angular.io/cli) v16

```bash
npm install -g @angular/cli@16
```

### Installation

```bash
# Clone the repository
git clone https://github.com/samiabat/employee-management-system.git
cd employee-management-system

# Install dependencies
npm install
```

### Running the App

```bash
npm start
# or
ng serve
```

Navigate to `http://localhost:4200/`. The app will automatically reload when you make changes.

### Building for Production

```bash
ng build --configuration production
```

Build artifacts are stored in the `dist/` directory.

---

## Application Structure

```
src/
├── app/
│   ├── app.component.*         # Root component
│   ├── app.module.ts           # Root module
│   ├── app-routing.module.ts   # Top-level routes
│   ├── shared.module.ts        # Shared Angular Material + utility modules
│   │
│   ├── constants/
│   │   ├── routes.ts           # Route path constants
│   │   └── urls.ts             # API URL constants
│   │
│   ├── navigation/             # App shell (toolbar + sidenav)
│   ├── dashboard/              # Dashboard page with summary cards
│   ├── employees/              # Employee list, form, detail
│   ├── roles/                  # Role list and form
│   ├── sectors/                # Sector list and form
│   ├── security/               # Login page + auth guard/interceptor
│   ├── confirm-delete/         # Shared confirm-delete dialog
│   └── error-handler/          # Global HTTP error handler
│
├── styles.scss                 # Global styles
└── index.html                  # App entry HTML
```

---

## Modules & Pages

### 🔐 Login (`/login`)
- Username/password form with validation
- JWT token stored in `localStorage` on success
- Automatically redirects authenticated users to `/employees`

### 📊 Dashboard (`/dashboard`)
- Summary cards showing total counts of Employees, Roles, and Sectors
- Quick-action buttons to navigate to each management section

### 👤 Employees (`/employees`)
- Data table with search, sort, and pagination
- Add / Edit employee via a dialog form
- View full employee details in a clean detail dialog
- Delete with confirmation dialog

### 🎖️ Roles (`/roles`)
- Data table with search, sort, and pagination
- Add / Edit roles — each role can be associated with a Sector
- Delete with confirmation dialog

### 🏢 Sectors (`/sectors`)
- Data table with search, sort, and pagination
- Add / Edit sectors
- Delete with confirmation dialog

---

## API Configuration

The backend API base URL is defined in `src/app/constants/urls.ts`:

```typescript
export const API_BASE_URL = `https://accountmanager.onrender.com`;
```

Update this value to point to your own backend deployment. The app expects the following REST endpoints:

| Resource | Base URL |
|----------|----------|
| Login | `POST /api/login/` |
| Employees | `/employees/` |
| Roles | `/roles/` |
| Sectors | `/sectors/` |
| Dashboard | `/dashboard/` |

---

## Authentication

Authentication uses **JWT Bearer tokens**:

1. User submits credentials to `POST /api/login/`
2. Server returns `{ access, refresh }` tokens
3. The `access` token is stored in `localStorage` under the key `access-token`
4. All subsequent API requests include `Authorization: Bearer <token>` via the `EmployeeService`

An `AuthenticationService` (`providedIn: 'root'`) exposes:
- `getToken()` — retrieve the stored token
- `logedIn()` — check if a token exists
- `logout()` — clear the token and reload

---

## State Management

The app uses **NGXS** for reactive state management. Each feature module registers its own state slice:

| Feature | State Token | Actions |
|---------|------------|---------|
| Employee | `employeeState` | Get, Create, Update, Delete, Select |
| Role | `RoleState` | Get, Create, Update, Delete, Select |
| Sector | `SectorState` | Get, Create, Update, Delete, Select, GetById |
| Auth | `AuthenticationState` | Login, Logout |

---

## About BGI Ethiopia

**BGI Ethiopia** (Breweries, Wines & Spirits S.C.) is one of Ethiopia's leading beverage companies, producing well-known brands such as **St. George Beer**, **Castel Beer**, and various wines. This project was developed as part of an internship programme to support the company's HR and employee information management processes.

---

## License

This project was created for educational and internship purposes at BGI Ethiopia.
