import Head from 'next/head'
import Cards from '../Component/Cards';
import {data} from '../data'


export default function Home() {
  return (
    <>
      <Head>
        <title>preview card component</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="./images/favicon.ico"/>
        
      </Head>

      <Cards data={data}/>
    </>
  )
}
