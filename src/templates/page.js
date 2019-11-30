import React from 'react'
import Layout from '../components/layout'
import PortfolioItems from '../components/PortfolioItems'

import styled from 'styled-components'

const FeaturedImage = styled.img`
  max-width: 300px;
  margin: 10px 0;
`

export default ({ pageContext }) => (
  <Layout>
    <h2 dangerouslySetInnerHTML={{ __html: pageContext.title }} />
    <div>
      <FeaturedImage src={pageContext.featured_media.source_url} />
    </div>
    <hp dangerouslySetInnerHTML={{ __html: pageContext.content }} />
    {/* <PortfolioItems /> */}
  </Layout>
)
