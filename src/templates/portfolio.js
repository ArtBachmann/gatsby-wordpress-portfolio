import React from 'react'
import Layout from '../components/layout'

import styled from 'styled-components'

const FeaturedImage = styled.img`
  max-width: 300px;
  margin: 10px 0;
`

export default ({ pageContext }) => (
  <Layout>
    <h2>
      {pageContext.title}
    </h2>
    <div>
      <FeaturedImage src={pageContext.featured_media.source_url} />
    </div>
    <strong>
      Website url:
    </strong>
    <a
      href={pageContext.acf.portfolio_url}
      target='_blank'
      rel='noopener noreferrer' >
      {pageContext.acf.portfolio_url}
    </a>
    <div dangerouslySetInnerHTML={{ __html: pageContext.content }} />
  </Layout>
)
