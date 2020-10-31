import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Head from '../components/head'

const IndexPage = () => {
  return (
    <Layout>
      <Head title= "Home" />
      <h1>Vote Vapsi Party</h1>
      <h2>Vote Vapsi Party's Official Website</h2>
      <p>Need the details <Link to="contact">contact us</Link></p>
    </Layout>
  )

}

export default IndexPage