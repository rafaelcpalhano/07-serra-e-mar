import Header from "../../organisms/Header"
import Footer from "../../organisms/Footer"

export default function PageLayout({children}) {
  return (
    <>
        <Header />
        <main>{children}</main>
        <Footer />
    </>
  )
}
