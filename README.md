# OT Cyber Security Dashboard

**Proprietary Software - Do Not Distribute**

## Overview

This project is a **Microfrontend-based Operational Technology (OT) Security Dashboard** designed for monitoring industrial control systems (ICS), PLC, and SCADA environments. It focuses on high availability, safety monitoring, and real-time threat detection.

## Architecture

The project is built as a Monorepo using **Nx** and **Webpack Module Federation**.

- **Shell (Host)**: Angular application acting as the main container. Responsible for:
  - Authentication & Routing
  - Asset Inventory (PLC, RTU, HMI)
  - Zone Management (Purdue Model)
  - Incident Response
- **Remote (Microfrontend)**: React application for advanced data visualization. Responsible for:
  - Industrial Analytics
  - Protocol Traffic Charts (Modbus, Profinet)
  - Operational Risk KPIs

## Tech Stack

- **Nx**: Monorepo management and build tool.
- **Angular**: Shell application framework.
- **React**: Remote application library.
- **Module Federation**: Microfrontend integration strategy.
- **MSW (Mock Service Worker)**: Network-level API mocking for realistic development and testing.

## Prerequisites

- Node.js (v18+)
- NPM
- Nx CLI (`npm install -g nx`)

## Getting Started

1.  **Install Dependencies**:

    ```bash
    npm install
    ```

2.  **Start the Platform**:
    This command serves the Shell, the Remote, and initializes the MSW mock worker.

    ```bash
    npx nx serve shell
    ```

3.  **Access**:
    Open your browser at `http://localhost:4200`.

## Development

- **Run Shell only**: `npx nx serve shell`
- **Run Remote only**: `npx nx serve remoteReact`
- **Lint**: `npx nx lint shell` / `npx nx lint remoteReact`
- **Test**: `npx nx test shell` / `npx nx test remoteReact`

## License

**Copyright (c) 2026. All rights reserved.**
Unauthorized copying, modification, distribution, or use of this software is strictly prohibited. See the [LICENSE](LICENSE) file for details.
