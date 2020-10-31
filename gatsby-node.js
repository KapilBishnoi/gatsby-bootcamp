exports.createPages = async ({ actions, graphql, reporter }) => {
  const result = await graphql(`
        query {
            allContentfulBlogPost {
                edges {
                    node {
                        slug
                    }
                }
            }
        }
  `)

  if (result.errors) {
    reporter.panic("Error loading lessons", JSON.stringify(result.errors))
  }

  result.data.allContentfulBlogPost.edges.forEach(edge => {
    actions.createPage({
      path: `/blog/${edge.node.slug}`,
      component: require.resolve("./src/templates/blog.js"),
      context: {
        slug: edge.node.slug,
      },
    })
  })
}

/*
export async function createPages({ graphql, actions }) {
    const { createPage } = actions
    const blogTemplate = resolve('./src/templates/blog.js')
    const res = await graphql(`
        query {
            allContentfulBlogPost {
                edges {
                    node {
                        slug
                    }
                }
            }
        }
    `)

    res.data.allContentfulBlogPost.edges.forEach((edge) => {
        createPage({
            component: blogTemplate,
            path: `/blog/${edge.node.slug}`,
            context: {
                slug: edge.node.slug
            }
        })
    })
}
*/
