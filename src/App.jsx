import { useEffect, useState } from 'react'
import './App.css'
import Gallery from './components/Gallery'
import Head from './components/Head'
import MenuImgs from './components/MenuImgs'
import OpenImage from './components/openImage'
import { slideImgs, menuImagesSmall } from './data'
//import { menuImagesBig, menuImagesMid, menuImagesSmall } from './data'

function App() {
  const [data, setData] = useState(slideImgs)
  const [index, setIndex] = useState(1)
  const [classFixed, setClassFixed] = useState("header")
  const [padding, setPadding] = useState("30px")
  const [menu, setMenu] = useState(false)

  const handleWidthCheck = () => {
    if (window.innerWidth > 1200){
      setMenu(false)
      setData(slideImgs)
    } else if (window.innerWidth < 1200 && 815 < window.innerWidth) {
      setMenu(false)
      setData(slideImgs)
    } else if (window.innerWidth < 815) {
      setMenu(true)
      setData(menuImagesSmall)
    }
  }

  useEffect(() => {handleWidthCheck()})
  useEffect(() => {
    window.addEventListener("resize", () => {handleWidthCheck()})
  }, [data])

  useEffect(() => {
    let menuTime = setInterval(() => {
      setIndex(index + 1)
    }, 6000)
    const lastIndex = data.length
    if (index > lastIndex){
      setIndex(1)
    }
    if (index < 0) {
      setIndex(lastIndex)
    }
    return () => {
      clearInterval(menuTime)
    }
  }, [index])

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY >= (window.innerHeight - 120)){
        setClassFixed("header fixed")
        setPadding("145px")
      } else {
        setClassFixed("header")
        setPadding("25px")
      }
    })
  }, [])

  return (
    <>
      {(window.innerWidth > 1200) ? 
        <>
          <header>
            <MenuImgs data={data} imageIndex={index}/>
            <Head logoWidth={360} classFixed={classFixed} menu={menu}/>
          </header>
          <main>
            <Gallery padding={padding}/>
            <OpenImage/>
          </main>
          <footer>

          </footer>
        </>
        : 
        <>
          <header>
            <Head logoWidth={250} classFixed={"header"} menu={menu}/>
            <MenuImgs data={data} imageIndex={index}/>
          </header>
          <main>
            <Gallery padding={"25px"}/>
            <OpenImage/>
          </main>
          <footer>

          </footer>
        </>
        }
    </>
  )
}

export default App
