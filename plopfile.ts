import { NodePlopAPI } from 'plop'
import { prefix, componentTypes } from './config/index'

export default function (plop: NodePlopAPI) {

  plop.setHelper('vueLabel',
    function (text: String, type?: String): String {

    if (!type) return prefix + text
    return prefix + text.replace(/([A-Z])/g, "-$1").toLowerCase()
  })

  plop.setGenerator('component', {
    description: 'create component...',
    prompts: [{
      type: 'list',
      name: 'componentType',
      message: 'choose component Type, please',
      choices: componentTypes
    }, {
      type: 'input',
      name: 'componentName',
      message: 'component name, please'
    }, {
      type: 'input',
      name: 'componentNameCN',
      message: '中文名'
    }, {
      type: 'input',
      name: 'author',
      message: 'author name, please'
    // }, {
    //   type: 'input',
    //   name: 'github',
    //   message: 'your github address, please'
    }],
    actions: function (data: any) {
      return [{
        type: 'addMany',
        destination: 'packages/{{ componentName }}/',
        path: 'packages/{{ componentName }}/',
        base: 'config/template/component/',
        templateFiles: 'config/template/component/',
        data
      }, {
        type: 'add',
        path: 'packages/style/{{ componentName }}.scss',
        templateFile: 'config/template/other/base.scss',
        data
      }, {
        type: 'append',
        path: 'packages/style/index.scss',
        template: '@import \'./{{ componentName }}.scss\';'
      }]
    }
  })
}
