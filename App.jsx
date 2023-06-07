import { useEffect, useState } from "react";

const URL_RANDON_CAT_FAT = "https://catfact.ninja/fact";
// const URLIMAGE_RANDON_CAT = `https://cataas.com/cat/says/${primerasTresPalabras}?size=:size&color=:color=red&json=true`
const PREFIJO_URL = 'https://cataas.com'

export default function App() {
  const [fact, setFact] = useState()
  const [imageUrl, setImageUrl] = useState()
  //   const [imageFact, setImageFact] = useState();

  useEffect(() => {
    fetch(URL_RANDON_CAT_FAT)
      .then((res) => res.json())
      .then((data) => {
        const { fact } = data
        setFact(fact)

        const primerasTresPalabras = fact?.split(" ", 3).join(' ')
        console.log(primerasTresPalabras)

        fetch(`https://cataas.com/cat/says/${primerasTresPalabras}?size=:size&color=:color=red&json=true`
        )
          .then((res) => res.json())
          .then((response) => {
            const { url } = response
            setImageUrl(url)
          });
      });
  }, []);

  return (
    <main>
      <h1>Pagina web de Gatos</h1>
      {fact && <p>{fact}</p>}
      {imageUrl && <img src={`https://cataas.com${imageUrl}`} alt={`Imagen descrita por estas tres palabras ${fact}`}/>}
    </main>
  );
}
