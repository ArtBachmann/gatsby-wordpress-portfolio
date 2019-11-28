import React from 'react'
import Layout from '../components/layout'
import PortfolioItems from '../components/PortfolioItems'

export default ({ pageContext }) => (
  <Layout>
    <h2 dangerouslySetInnerHTML={{ __html: pageContext.title }} />
    <hp dangerouslySetInnerHTML={{ __html: pageContext.content }} />
    <PortfolioItems />
  </Layout>
)
