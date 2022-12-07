import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai'
import { FaCartPlus } from 'react-icons/fa'
import { useDispatch } from 'react-redux'
import { mudarFavorito } from 'store/reducers/itensSlice'

import styles from './Item.module.scss'

const iconeProps = {
  size: 24,
  color: '#041833'
}

export default function Item({ titulo, foto, preco, descricao, favorito, id }) {

  const dispatch = useDispatch()

  function favoritar() {
    dispatch(mudarFavorito(id))
  }

  return (
    <div className={styles.item}>
      <div className={styles['item.imagem']}>
        <img src={foto} alt={titulo} />
      </div>
      <div className={styles['item-descricao']}>
        <div className={styles['item-titulo']}>
          <h2>{titulo}</h2>
          <p>{descricao}</p>
        </div>
        <div className={styles['item-info']}>
          <div className={styles['item-preco']}>
            R$ {preco.toFixed(2)}
          </div>
          <div className={styles['item-acoes']}>
            {favorito
              ? <AiFillHeart className={styles['item-acao']} {...iconeProps} color='#ff0000' onClick={favoritar} />
              : <AiOutlineHeart className={styles['item-acao']} {...iconeProps} onClick={favoritar} />
            }
            <FaCartPlus className={styles['item.acao']} {...iconeProps} color={true ? '#1875e8' : iconeProps.color} />
          </div>
        </div>
      </div>
    </div>
  )
}