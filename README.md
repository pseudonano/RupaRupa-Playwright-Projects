# RupaRupa Test Automation with Playwright

![Playwright](https://img.shields.io/badge/Playwright-1.54+-blue.svg?logo=playwright) ![TypeScript](https://img.shields.io/badge/TypeScript--3178C6.svg?logo=typescript) ![Node.js](https://img.shields.io/badge/Node.js-23.6+-339933.svg?logo=node.js) ![npm](https://img.shields.io/badge/npm-10.9+-CB3837.svg?logo=npm)

This Repositories contains automated test scripts for Website RupaRupa to fulfill the technical test invitation using Playwright. The tests cover various functional areas of the RupaRupa application.

## Table of Contents
- [Prerequisites](#prerequisites)
- [Setup Instructions](#setup-instructions)

## Prerequisites

Before running the tests, ensure you have the following installed:

- Visual Studio Code
- Node module 
- Git (for cloning the repository)

## Setup Instructions

1. Clone this repository:
   ```bash
   git clone https://github.com/pseudonano/RupaRupa-Playwright-Projects

2. Access folder:
   ```bash
   cd RupaRupa-Playwright-Projects

3. Verify your Node.js and npm versions:
   ```bash
   node --version
   npm --version

4. Install dependencies
   ```bash
   npm install

5. Install Playwright browsers:
   ```bash
   npx playwright install

6. NPM scripts
   ```bash
   # Run all tests
   npm test

   # Run tests with headed mode
   npx playwright test tests/scenario.spec.ts --headed
