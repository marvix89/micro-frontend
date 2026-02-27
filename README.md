# Microfrontend Architecture Demo

## Overview

This project demonstrates a Microfrontend architecture using **Nx**, **Angular**, **React**, and **Webpack Module Federation**. It consists of an Angular Shell application and multiple remote Microfrontends (an Angular MFE and a React MFE), all residing in the same Monorepo but deployed independently.

## 🚀 Live Demo

| Application     | URL                                                                                             | Description                                      |
| --------------- | ----------------------------------------------------------------------------------------------- | ------------------------------------------------ |
| **Shell**       | [https://micro-frontend-shell-pink.vercel.app](https://micro-frontend-shell-pink.vercel.app)    | The host application that loads the remote MFEs. |
| **Angular MFE** | [https://micro-frontend-ten.vercel.app](https://micro-frontend-ten.vercel.app)                  | The remote Angular microfrontend application.    |
| **React MFE**   | [https://micro-frontend-react-orpin.vercel.app](https://micro-frontend-react-orpin.vercel.app/) | The remote React microfrontend application.      |

## 🏗️ Architecture

- **Shell (Host)**: Angular application that acts as the container. It dynamically loads the remote microfrontends at runtime using Module Federation.
- **Angular MFE (Remote)**: Angular application that exposes components (e.g., `Routes`) to be consumed by the Shell.
- **React MFE (Remote)**: React application wrapped as a Web Component or directly exposed to be consumed by the Angular Shell.

## 🛠️ Tech Stack

- **Nx**: Build system and Monorepo management.
- **Angular**: Framework for the Shell and Angular MFE.
- **React**: Framework for the React MFE.
- **Webpack Module Federation**: Enables sharing code and dynamic loading of microfrontends.
- **Vercel**: Hosting platform with conditional build configuration.

## 📦 Vercel Deployment

This repository uses a **Conditional Build Strategy** to deploy multiple applications from the same Monorepo to Vercel projects.

### How it works

A custom script [`build-for-vercel.js`](./build-for-vercel.js) is used as the Build Command in `vercel.json`. It looks for an environment variable `APP_TO_BUILD` to determine which application to build.

### Configuration

To deploy a new instance or fix a deployment, ensure the following **Environment Variables** are set in the Vercel Project Settings:

#### 1. Angular MFE Project (`mfe-app`)

- **Environment Variable**: `APP_TO_BUILD = mfe-app`
- **Output Directory**: `dist/mfe-app` (Set in Project Settings > Build & Development Settings)

#### 2. React MFE Project (`react-mfe`)

- **Environment Variable**: `APP_TO_BUILD = react-mfe`
- **Output Directory**: `dist/react-mfe` (Set in Project Settings > Build & Development Settings)

#### 3. Shell Project (`shell`)

- **Environment Variable**: `APP_TO_BUILD = shell`
- **Output Directory**: `dist/shell` (Set in Project Settings > Build & Development Settings)
- **Additional Variables**: `ANGULAR_MFE_URL` and `REACT_MFE_URL` must be set for dynamic routing configuration.

## 💻 Local Development & Available Scripts

The project uses **pnpm** as the package manager (`npm install` is fine but we recommend using `pnpm`).

1. **Install Dependencies**:

   ```bash
   pnpm install
   ```

   _(or `npm install`)_

2. **Start Applications**:
   - Start **all applications** together (Shell + Angular MFE + React MFE) in parallel:
     ```bash
     npm run start:all
     ```
   - **Start individually** (with local URLs):

     ```bash
     # Shell (http://localhost:4200)
     npm run start:shell

     # Angular MFE (http://localhost:4201)
     npm run start:mfe-app

     # React MFE (http://localhost:4202)
     npm run start:react-mfe
     ```

3. **Running Tests**:
   - Test **all applications** in parallel:
     ```bash
     npm run test:all
     ```
   - Test individually:
     ```bash
     npm run test:shell
     npm run test:mfe-app
     npm run test:react-mfe
     ```

4. **Building for Production**:
   - Build Shell:
     ```bash
     npm run build:shell:prod
     ```
   - Build Angular MFE:
     ```bash
     npm run build:mfe:prod
     ```
   - Build React MFE:
     ```bash
     npm run build:react-mfe:prod
     ```

## 📄 License

Proprietary License

Copyright (c) 2026 Martino Balbi. All rights reserved.
Strictly validation only. Unauthorized copying, modification, distribution, or use of this Software, via any medium, is strictly prohibited.
