import React from 'react'
import Layout from '../components/layout'
import PortfolioItems from '../components/PortfolioItems'

import styled from 'styled-components'

const FeaturedImage = styled.img`
  max-width: 300px;
  margin: 10px 0;
`

// Single Blog Post page.
export default ({ pageContext }) => (
  <Layout>
    <h2 dangerouslySetInnerHTML={{ __html: pageContext.title }} />
    <div>
      <FeaturedImage src={pageContext.acf.portfolio_img.source_url} />
    </div>
    <div dangerouslySetInnerHTML={{ __html: pageContext.content }} />
    <div>
      <FeaturedImage src={pageContext.acf.portfolio_img_gallery.source_url} />
    </div>
    <PortfolioItems />
  </Layout>
)
