import { App } from 'vue'


export type SFC<T> = T & { install(app: App): void }
