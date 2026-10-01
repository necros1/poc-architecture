import { defineConfig } from 'likec4/config'

export default defineConfig({
  name: 'architecture-poc',
  title: 'Architecture as code PoC',
  styles: {
    defaults: {
      opacity: 100,
    },
  },
  imageAliases:{
    '@oci':'./shared/assets/oci',
    '@onPrem':'./shared/assets/on-prem',
  },
  "landingPage": {
    "redirect": true
  }
})