import Head from 'next/head'
import styles from '../styles/Home.module.css'
import {Footer} from "../components/Footer"
import {Main} from "../components/Main"
import {Header} from "../components/Header"
import { useCounter } from '../components/hooks/useCounter'
import { useInputArray } from '../components/hooks/useInputArray'
import { useBgLightBlue } from '../components/hooks/useBgLightBlue'

export default function Home() {
  const {count,isShow,handleClick,handleDisplay}=useCounter();
  const {text,array,handleChange,handleAdd}=useInputArray();
  useBgLightBlue();
  return(
    <div className={styles.container}>
      <Head>
        <title>About Page</title>
      </Head>
      <Header />
      <Main page="about" />

      <Footer />

    </div>
  )
}
