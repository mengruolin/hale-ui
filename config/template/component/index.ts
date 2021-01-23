import { App } from 'vue'
import type { SFC } from '../utils/types'

import {{componentName}} from './src/index.vue'

{{componentName}}.install = (app: App) => {
  app.component({{componentName}}.name, {{componentName}})
}

const _{{componentName}}: SFC<typeof {{componentName}}> = {{componentName}}

export default _{{componentName}}