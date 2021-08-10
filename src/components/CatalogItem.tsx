import { useCallback } from "react"
import { useDispatch, useSelector } from "react-redux";
import { IState } from "../store";
import { addProductToCartRequest } from "../store/modules/cart/actions"
import { IProduct } from "../store/modules/cart/types"

interface CatalogItemProps {
  product: IProduct;
}

const CatalogItem = ({ product }: CatalogItemProps) => {
  const dispatch = useDispatch()

  const hasFailedStockCheck = useSelector<IState, boolean>(state => {
    return state.cart.failedStockCheck.includes(product.id)
  })

  const handleAddProductToCart = useCallback(() => {
    dispatch(addProductToCartRequest(product))
  }, [dispatch, product])

  return (
    <article>
      <strong>{product.title}</strong> {" - "}
      <span>{product.price}</span> {"  "}

      <button
        type="button"
        onClick={handleAddProductToCart}
      >
        Buy
      </button>

      {hasFailedStockCheck && <span style={{ color: 'red' }}>Falta de Estoque</span>}
    </article>
  )
}

export default CatalogItem
