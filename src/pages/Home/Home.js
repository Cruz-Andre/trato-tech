import Header from 'components/Header/Header'
import styles from './Home.module.scss'
import relogio from 'assets/inicial.png'

export default function Home() {
  return (
    <div>
      <Header 
        titulo='Classificados Tech'
        descricao='Compre diversos tipos de produtos no melhor site do Brasil!'
        className={styles.header}
        imagem={relogio}
      />
    </div>
  )
}