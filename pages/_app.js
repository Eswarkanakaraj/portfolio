import "@/styles/globals.css"
import "@/styles/nav.scss"
import "@/styles/home.scss"
import "@/styles/projects.scss"
import "@/styles/resume.scss"
import 'bootstrap/dist/css/bootstrap.min.css';

export default function App({ Component, pageProps }) {
  return  <Component {...pageProps} />
}
