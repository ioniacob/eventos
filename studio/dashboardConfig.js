export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nuxt-events'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '',
                  title: 'Sanity Studio',
                  name: 'eventos-studio',
                  apiId: 'a0b3a703-d713-4f2d-95e5-97c6f5b2d8b2'
                },
                {
                  buildHookId: '5fd95df0c43339127b7618e2',
                  title: 'Events Website',
                  name: 'eventos-web',
                  apiId: 'eb91baa0-9fff-49a8-aeaf-a5896b2de293'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/ioniacob/eventos',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://eventos-web.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently created sessions', order: '_createdAt desc', types: ['session']},
      layout: {width: 'medium'}
    }
  ]
}
