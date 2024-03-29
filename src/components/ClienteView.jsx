import PropTypes from 'prop-types'
export const ClienteView = ({ client }) => {
    const { name: nameClient, lastName, address: { country, city, street, number } } = client;


    return <>
        <h3>Datos del cliente</h3>
        <ul className="list-group">
            <li className="list-group-item active">{nameClient} {lastName}</li>
            <li className="list-group-item">{city} {country}</li>
            <li className="list-group-item">{street}</li>
        </ul>

    </>


}

ClienteView.propTypes = {

    client: PropTypes.object.isRequired

}