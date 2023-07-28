import RootLayout from '@/components/RootLayout'
import Head from 'next/head'
// import RootLayout from './../components/RootLayout';


export default function Home() {
  return (
    <>
      <Head>
        <title>PC Builder App</title>
        <meta name="description" content="PC Build Up" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>hello</h1>
    </>
  )
}

Home.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};