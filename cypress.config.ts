import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
  baseUrl: 'http://localhost:4200',
  projectId: "t4mcmv"
  },
});
