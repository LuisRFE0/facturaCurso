import PropTypes from 'prop-types'

export const RowItem = ({ id, product, price, quatity, handlerDelete }) => {

    return <>
        <tr >
            <td>{product}</td>
            <td>{price}</td>
            <td>{quatity}</td>
            <td><button className='btn btn-danger' onClick={() => { handlerDelete(id) }}>Eliminar</button></td>
        </tr>

    </>

}

RowItem.propTypes = {

    product: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    quatity: PropTypes.number.isRequired,
}