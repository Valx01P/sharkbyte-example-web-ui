import Hero from './sections/Hero'
import Sponsors from './sections/Sponsors'
import Socials from './sections/Socials'
import Navbar from './components/Navbar'
import DropDown from './sections/DropDown'

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Sponsors />
      <DropDown />
      <Socials />
    </>
  )
}
