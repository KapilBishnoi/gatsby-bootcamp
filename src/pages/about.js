import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import Head from '../components/head'

const AboutPage = () => {
    return (
            <Layout>
            <Head title="About" />
            <h1>About our party</h1>
            <h2>Details here</h2>
            <p><Link to="/contact">Want to work with us</Link></p>
            </Layout>
    )
}

export default AboutPage