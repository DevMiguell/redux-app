import { useSelector } from 'react-redux'

const Catalog = () => {
  // Para acessar o contexto geral deve-se ultilizar o useSelector
  const catalog = useSelector(state => state)

  console.log(catalog)

  return (
    <h1>Catalog</h1>
  )
}


export default Catalog
