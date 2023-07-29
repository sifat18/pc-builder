// import '@/styles/globals.css'
import { store } from "@/redux/store";
import { SessionProvider } from "next-auth/react"

import "antd/dist/reset.css"
import 'react-toastify/dist/ReactToastify.css';
import { Provider } from "react-redux";
export default function App({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page);

  return (
    <SessionProvider session={pageProps.session}>

    <Provider store={store}>

   { getLayout(<Component {...pageProps} />)}
   
    </Provider>
  
      </SessionProvider>
    );
}
