import RootLayout from '@/components/RootLayout'
import Head from 'next/head'
// import RootLayout from './../components/RootLayout';
import CarouselComponent from './../components/Caraosel';
import Categories from '@/components/Categories';


export default function Home() {
  return (
    <>
      <Head>
        <title>PC Builder App</title>
        <meta name="description" content="PC Build Up" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <CarouselComponent/>
      <h2 style={{textAlign:'center',marginTop:"2em ",fontSize:'2rem',fontWeight:'700',}}>Featured Categories</h2>
      <div style={{margin:"2em auto",height:"5px",fontWeight:'700', background: "#000",width:'25rem'}}></div>
      <Categories/>
    </>
  )
}

Home.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};