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
    <FeaturedImage src={pageContext.featured_media.source_url} />
    <div dangerouslySetInnerHTML={{ __html: pageContext.content }} />
  </Layout>
)
