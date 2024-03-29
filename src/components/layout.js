import React from "react"
import MainMenu from './MainMenu'

import styled, { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Open+Sans&display=swap');

  body {
    font-family: 'Open Sans', sans-serif;   
    margin: 0 !important;
    padding: 0 !important;
  }
`
const LayoutWrapper = styled.div`
max-width: 960px;
margin: 0 auto;
font-size: 1.2rem;
`


const Layout = ({ children }) => (
  <div>
    <GlobalStyles />
    <MainMenu />
    <LayoutWrapper>
      {children}
    </LayoutWrapper>
  </div>
)


export default Layout
