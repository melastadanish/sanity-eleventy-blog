export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-eleventy-blog'
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
                  buildHookId: '62f22ffeea18ae1b78082a65',
                  title: 'Sanity Studio',
                  name: 'sanity-eleventy-blog-studio-rn62hpdw',
                  apiId: 'bbfcda04-97dc-4d4a-907e-c5a1f043908e'
                },
                {
                  buildHookId: '62f22ffe23d9f91cfeec217a',
                  title: 'Blog Website',
                  name: 'sanity-eleventy-blog-web-m558cam6',
                  apiId: '2660a039-6608-401d-a316-835e4b3b8946'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/melastadanish/sanity-eleventy-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-eleventy-blog-web-m558cam6.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
