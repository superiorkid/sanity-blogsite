import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'
import {vercelDeployTool} from 'sanity-plugin-vercel-deploy'
import {codeInput} from '@sanity/code-input'

export default defineConfig({
  name: 'default',
  title: 'portofolio-blog',

  projectId: 'vqcru2ex',
  dataset: 'production',

  plugins: [deskTool(), visionTool(), vercelDeployTool(), codeInput()],

  schema: {
    types: schemaTypes,
  },
})
