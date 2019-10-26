export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
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
                  buildHookId: '5db4c737e3158e4cf7b5fa27',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-9xiatvst',
                  apiId: '22751082-2436-4e65-8a97-7c8570613b1e'
                },
                {
                  buildHookId: '5db4c737c8b25f71f93217dc',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-fgjwtaao',
                  apiId: '84b06c07-88d1-450c-91a4-918df8970c54'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/aguspuryanto/sanity-gatsby-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gatsby-blog-web-fgjwtaao.netlify.com', category: 'apps'}
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
