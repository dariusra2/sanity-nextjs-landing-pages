export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
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
                  buildHookId: '6030d91a02ba8938452f2180',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-de9krow3',
                  apiId: 'fb4265c6-6aff-46a4-8673-81501ca66c43'
                },
                {
                  buildHookId: '6030d91ac0734840d1eb64ce',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-3n6cg77q',
                  apiId: 'a607078d-74ec-4dd4-8cbc-6cc835525e6a'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/dariusra2/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-3n6cg77q.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
