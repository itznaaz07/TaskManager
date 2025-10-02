# MERN Todo App Copilot Instructions

## Overview
This MERN Todo App has two primary components: a Backend (Node.js/Express) and a Frontened (React). The Backend handles API endpoints for tasks, authentication, and health check, while the Frontened consumes these APIs.

## Architecture
- **Backend**: Located in `Backend/src/`
  - Entry points: `app.js` and `index.js`
  - Organized into controllers, models, routes, and middlewares (e.g., `auth.controllers.js`, `task.controllers.js`, `auth.middlewares.js`)
  - Error handling: Uses custom utilities (`api-error.js` and `api-response.js`) and async handling with `async-handler.js`
- **Frontened**: Located in `frontened/src/`
  - Built with React, styled with TailwindCSS (see `tailwind.config.js` and `index.css` for integrations like 'react-calendar' styles)
  - Components: Includes modular components such as `TaskForm.jsx`, `TaskCard.jsx`, and others found in `Components/` and `Pages/`
  - API integration: Centralized in `Api.js` for communicating with the backend

## Developer Workflows
- **Backend Development**:
  - Setup: Navigate to the `Backend` folder and run `npm install`
  - Run: Execute `npm run dev` to start the server with auto-reloading
  - Testing: Validate APIs using tools like Postman or curl

- **Frontened Development**:
  - Setup: Navigate to the `frontened` folder and run `npm install`
  - Run: Execute `npm start` to launch the development server
  - Styling: TailwindCSS integration is configured in `tailwind.config.js` and imported in `index.css`

- **Debugging**:
  - Inspect logs in both backend controllers and React components
  - Check middleware behavior in `auth.middlewares.js` to diagnose access control issues

## Patterns and Conventions
- **File Organization**:
  - Backend: Controllers and routes are segmented by domain areas (e.g., auth, tasks, healthcheck)
  - Frontened: Components are modularized; pages reside in the `Pages/` directory

- **Error Handling**:
  - All errors in the backend are processed using `api-error.js` and formatted with `api-response.js`
  - Async operations are wrapped using a custom `async-handler` to streamline error catching

- **Cross-Component Communication**:
  - API endpoints are clearly defined in backend routes and consumed by the frontened via `Api.js`
  - Consistent naming and structure across controllers, models, and routes

## Additional Notes
- Always refer to `README.md` for setup, deployment, and additional project-specific instructions
- Maintain directory-specific command usage: ensure commands are run in the correct folder (e.g., `Backend` vs `frontened`)
- For feature additions, follow the established structure to maintain codebase consistency

Please review these instructions and provide any feedback if sections need further clarification or additional details.
