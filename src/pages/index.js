// Step 1: Import React
import * as React from 'react'
import Layout from '../components/layout'
import image1 from '../images/doggy.jpeg'

// Step 2: Define your component
const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <p>I'm making this by following the Gatsby Tutorial.</p>
      <img  src= {image1}
        alt="Clifford, a reddish-brown pitbull, posing on a couch and looking stoically at the camera"
      />
    </Layout>
  )
}
// Step 3: Export your component
export default IndexPage
