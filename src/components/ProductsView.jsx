import { RowItem } from "./RowItem"
import PropTypes from 'prop-types'

export const ProductsView = ({ items, handlerDelete }) => {
    return <>
        <h4>Productos de la factura</h4>
        <table className="table table-striped table-hover ">
            <thead>
                <tr>
                    <th>Producto</th>
                    <th>Precio</th>
                    <th>Cantidad</th>
                    <th>Eliminar</th>
                </tr>
            </thead>
            <tbody>
                {items.map(({ id, product, price, quatity }) => {
                    return (
                        <RowItem key={id} id={id} product={product} price={price} quatity={quatity} handlerDelete={id => handlerDelete(id)} />
                    )
                })}
            </tbody>
        </table>

    </>


}

ProductsView.propTypes = {
    items: PropTypes.array

}