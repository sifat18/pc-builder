import RootLayout from '@/components/RootLayout'
import Head from 'next/head'
// import RootLayout from './../components/RootLayout';
import CarouselComponent from './../components/Caraosel';
import Categories from '@/components/Categories';
import FeaturedProducts from '@/components/FeaturedProducts';


export default function Home({featuredData}) {
  return (
    <>
      <Head>
        <title>PC Builder App</title>
        <meta name="description" content="PC Build Up" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <CarouselComponent/>
      <section>
      <h2 style={{textAlign:'center',marginTop:"2em ",fontSize:'2rem',fontWeight:'700',}}>Featured Products</h2>
      <div style={{margin:"2em auto",height:"5px",fontWeight:'700', background: "#000",width:'25rem'}}></div>
      <FeaturedProducts featuredData={featuredData}/>
      </section>
      <section>
      <h2 style={{textAlign:'center',marginTop:"2em ",fontSize:'2rem',fontWeight:'700',}}>Featured Categories</h2>
      <div style={{margin:"2em auto",height:"5px",fontWeight:'700', background: "#000",width:'25rem'}}></div>
      <Categories/>
      </section>
    </>
  )
}

Home.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export const getStaticProps =async()=>{
  const res=await fetch(' http://localhost:5000/data')
  const data=await res?.json()


  const featuredData=data?.filter(item=>item?.isFeatured)
  return{
      props:{
          featuredData,
          revalidation:10
      }
  }
}