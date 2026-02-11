# Microfrontend Architecture Demo

## Overview

This project demonstrates a Microfrontend architecture using **Nx**, **Angular**, and **Webpack Module Federation**. It consists of a Shell application and a remote Microfrontend (MFE) application, both residing in the same Monorepo but deployed independently.

## 🚀 Live Demo

| Application | URL                                                                                          | Description                                              |
| ----------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------- |
| **Shell**   | [https://micro-frontend-shell-pink.vercel.app](https://micro-frontend-shell-pink.vercel.app) | The host application that loads the remote MFE.          |
| **MFE App** | [https://micro-frontend-ten.vercel.app](https://micro-frontend-ten.vercel.app)               | The remote microfrontend application running standalone. |

## 🏗️ Architecture

- **Shell (Host)**: Angular application that acts as the container. It loads the `mfe-app` at runtime using Module Federation.
- **MFE App (Remote)**: Angular application that exposes components (e.g., `Routes`) to be consumed by the Shell.

## 🛠️ Tech Stack

- **Nx**: Build system and Monorepo management.
- **Angular**: Framework for both Shell and MFE.
- **Webpack Module Federation**: Enables sharing code and dynamic loading of microfrontends.
- **Vercel**: Hosting platform with conditional build configuration.

## 📦 Vercel Deployment

This repository uses a **Conditional Build Strategy** to deploy multiple applications from the same Monorepo to Vercel projects.

### How it works

A custom script [`build-for-vercel.js`](./build-for-vercel.js) is used as the Build Command in `vercel.json`. It looks for an environment variable `APP_TO_BUILD` to determine which application to build.

### Configuration

To deploy a new instance or fix a deployment, ensure the following **Environment Variables** are set in the Vercel Project Settings:

#### 1. MFE App Project (`micro-frontend-ten`)

- **Environment Variable**: `APP_TO_BUILD = mfe-app`
- **Output Directory**: `dist/mfe-app` (Set in Project Settings > Build & Development Settings)

#### 2. Shell Project (`micro-frontend-shell-pink`)

- **Environment Variable**: `APP_TO_BUILD = shell`
- **Output Directory**: `dist/shell` (Set in Project Settings > Build & Development Settings)

## 💻 Local Development

1. **Install Dependencies**:

   ```bash
   npm install
   ```

2. **Start the Shell** (loads MFE automatically):

   ```bash
   npx nx serve shell
   ```

   Open `http://localhost:4200`

3. **Start MFE Standalone**:
   ```bash
   npx nx serve mfe-app
   ```
   Open `http://localhost:4201`

## 📄 License

MIT
