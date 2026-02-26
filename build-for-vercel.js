#!/usr/bin/env node

/**
 * Conditional build script for Vercel deployments
 * 
 * This script reads the APP_TO_BUILD environment variable and builds the appropriate application.
 * 
 * Usage:
 * - Set APP_TO_BUILD=mfe-app in Vercel project settings for micro-frontend-ten
 * - Set APP_TO_BUILD=shell in Vercel project settings for micro-frontend-shell-pink
 */

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const appToBuild = process.env.APP_TO_BUILD || 'shell';

console.log(`\n🚀 Vercel Conditional Build Script`);
console.log(`📦 APP_TO_BUILD environment variable: ${appToBuild}\n`);

const buildConfigs = {
  'mfe-app': {
    command: 'npm run build:mfe:prod',
    outputDir: 'dist/mfe-app',
    name: 'MFE App'
  },
  'shell': {
    command: 'npm run build:shell:prod',
    outputDir: 'dist/shell',
    name: 'Shell'
  },
  'react-mfe': {
    command: 'npm run build:react-mfe:prod',
    outputDir: 'dist/react-mfe',
    name: 'React MFE'
  }
};

const config = buildConfigs[appToBuild];

if (!config) {
  console.error(`❌ Error: Unknown APP_TO_BUILD value: "${appToBuild}"`);
  console.error(`   Valid values are: ${Object.keys(buildConfigs).join(', ')}`);
  process.exit(1);
}

console.log(`✅ Building: ${config.name}`);
console.log(`📝 Command: ${config.command}`);
console.log(`📂 Output: ${config.outputDir}\n`);

try {
  // Run the build command
  execSync(config.command, { stdio: 'inherit' });
  
  // Verify the output directory exists
  const outputPath = path.join(process.cwd(), config.outputDir);
  if (!fs.existsSync(outputPath)) {
    console.error(`\n❌ Error: Output directory not found: ${config.outputDir}`);
    process.exit(1);
  }
  
  console.log(`\n✅ Build completed successfully!`);
  console.log(`📦 Output directory: ${config.outputDir}`);
  console.log(`📁 Files will be served from: ${config.outputDir}`);
  
} catch (error) {
  console.error(`\n❌ Build failed:`, error.message);
  process.exit(1);
}

