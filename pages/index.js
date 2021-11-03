import Head from 'next/head'
import Layout from '../components/main/layout';
import Hero from '../blocks/hero'
import About from '../blocks/about'
import Contact from '../blocks/contact'
import Projects from '../blocks/projects'
import Skillset from '../blocks/skillset'

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Petar Ivanov | Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero />
      <Projects />
      <Skillset />
      <About />
      <Contact />
    </Layout>
  )
}
