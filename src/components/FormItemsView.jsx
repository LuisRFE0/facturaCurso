import { useState } from "react";


export const FormItemsView = ({ handler }) => {

    const [invoiceitemsState, setInvoiceitemsState] = useState({
        product: '',
        price: '',
        quatity: ''
    });

    const { product, price, quatity } = invoiceitemsState;

    const onInputChange = ({ target: { name, value } }) => {

        setInvoiceitemsState({
            ...invoiceitemsState,
            [name]: value
        });

    }
    const oninvoiceSubmit = (event) => {
        {
            event.preventDefault();

            if (product.trim().length <= 1) return;
            if (price.trim().length <= 1) return;
            if (isNaN(price.trim())) {
                alert('Por favor introduce un numero');
                return;
            };
            if (quatity.trim().length < 1) return;
            if (isNaN(quatity.trim())) {
                alert('Por favor introduce un numero');
                return;
            };

            handler(invoiceitemsState);

            setInvoiceitemsState({
                product: '',
                price: '',
                quatity: ''
            });

        }
    }
    return (
        <>

            <form className="w-50" onSubmit={oninvoiceSubmit}>

                <input type="text" value={product} name="product" placeholder="Producto" className="form-control m-3" onChange={onInputChange} />
                < input type="text" value={price} name="price" placeholder="Precio" className="form-control m-3" onChange={onInputChange} />
                <input type="text" value={quatity} name="quatity" placeholder="Cantidad" className="form-control m-3" onChange={onInputChange} />
                <button type="submit" className="btn btn-primary m-3"> Crear Item</button>
            </form>

        </>
    )
}
