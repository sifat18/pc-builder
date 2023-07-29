// import '@/styles/globals.css'
import { store } from "@/redux/store";
import "antd/dist/reset.css"
import 'react-toastify/dist/ReactToastify.css';
import { Provider } from "react-redux";
export default function App({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page);

  return (
    <Provider store={store}>
   { getLayout(<Component {...pageProps} />)}
   
    </Provider>
    );
}
