import type { ReactNode } from "react";

export const appConfig = {
  // AI configuration
  ai: {
    defaultModel: "gpt-4o",

    availableModels: [
      "gpt-4o",
      "claude",
      "gemini"
    ],

    modelDisplayNames: {
      "gpt-4o": "GPT-4o",
      "claude": "Claude",
      "gemini": "Gemini"
    }
  },

  // Development configuration
  devPort: 3000,

  devServerStartupDelay: 7000,

  cssRebuildDelay: 2000,

  workingDirectory: "/app",

  runtime: "node22",

  // Sandbox / E2B configuration
  e2b: {
    timeoutMinutes: 30,

    get timeoutMs() {
      return this.timeoutMinutes * 60 * 1000;
    },

    vitePort: 5173
  },

  // Application metadata
  app: {
    name: "Open Lovable",
    description: "Clone and re-imagine websites using AI",
    version: "1.0.0"
  },

  // Feature flags
  features: {
    enableSearch: true,
    enableClone: true,
    enableBrandExtension: true
  },

  // Theme defaults
  theme: {
    defaultTheme: "light",
    availableThemes: [
      "light",
      "dark"
    ]
  }
};

export default appConfig;
