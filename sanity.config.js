import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
// import {visionTool} from '@sanity/vision'
import schemas from "./sanity/schemas"
import { basePath } from './next.config'

export default defineConfig({
  name: 'default',
  title: 'godlikestudio',

  projectId: 'nahm0f1b',
  dataset: 'production',
  apiVersion: "2023-10-1",
  basePath:'/admin',

  plugins: [deskTool()],

schema: { types: schemas }
})
