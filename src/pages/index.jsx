import Head from 'next/head'
import styles from '../styles/Home.module.css'
import {Footer} from "../components/Footer"
import {Main} from "../components/Main"
import {Header} from "../components/Header"
import { useCallback, useEffect, useState } from 'react'

export default function Home() {
  const [count,setCount]=useState(1);
  const [text,setText]=useState("");
  const [isShow,setIsShow]=useState(true);

  const handleChange=useCallback((e)=>{
    if(e.target.value.length>5){
      alert('5文字以内にしてください')
    }
    setText(e.target.value.trim());
  },[])

  const handleClick=useCallback((e)=> {
    if(count<10){
      setCount((prevCount)=>prevCount+1);
    }
  },[count]);

  const handleDisplay=useCallback((e)=>{
    setIsShow((prevIsShow)=>!prevIsShow)
  },[])

useEffect(()=>{
  document.body.style.backgroundColor="lightblue";
  return()=>{
    document.body.style.backgroundColor="";
  }
},[])

  return (
    <div className={styles.container}>
      <Head>
        <title>Index Page</title>
      </Head>
      <Header />
      {isShow ?<h1>{count}</h1>:null}
      <button onClick={(e)=>{handleClick(e,count)}}>
        ボタン
      </button>
      <button onClick={handleDisplay}>
        {isShow ? "非表示":"表示"}
      </button>
      <input type="text" value={text} onChange={handleChange} />
      <Main page="index" />

      <Footer />
    </div>
  )
}
