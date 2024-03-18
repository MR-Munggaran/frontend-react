import Hero from "../Components/Hero/Hero"
import NewCollections from "../Components/NewCollections/NewCollections"
import Offers from "../Components/Offers/Offers"
import Popular from "../Components/Popular/Popular"
import NewsLetter from "../Components/NewsLetter/Newsletter"

function Shop() {
  return (
    <div>
      <Hero></Hero>
      <Popular></Popular>
      <Offers></Offers>
      <NewCollections></NewCollections>
      <NewsLetter></NewsLetter>
    </div>
  )
}

export default Shop