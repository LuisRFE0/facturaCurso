import { getInvoice, calculateTotal } from "./services/getInvoice"
import { ClienteView } from "./components/ClienteView";
import { CompanyView } from "./components/CompanyView";
import { InvoiceView } from "./components/InvoiceView";
import { ProductsView } from "./components/ProductsView";
import { TotalView } from "./components/TotalView";
import { useEffect, useState } from "react";
import { FormItemsView } from "./components/FormItemsView";

const invoiceInitial = {
    id: 0,
    name: '',
    client: {
        name: '',
        lastName: '',
        address: {
            country: '',
            city: '',
            street: '',
            number: 0
        }
    },
    company: {
        name: '',
        fiscalNumber: '',
    },
    items: [
    ]


}
export const InvoiceApp = () => {
    const [activeForm, setActiveform] = useState(false);
    const [total, setTotal] = useState(0);
    const [counter, setCounter] = useState(4);
    const [invoice, setInvoice] = useState(invoiceInitial);
    const [items, setItems] = useState([]);

    const { id, name, client, company } = invoice;
    useEffect(() => {
        const data = getInvoice();
        console.log(data);
        setInvoice(data);
        setItems(data.items);
    }, []/* Corchete vacio solo cuando es para indicar que se disparara el useeffect al renderizar el componente */)

    useEffect(() => {
        setTotal(calculateTotal(items))
    }, [items])





    const handlerAddinvoiceSubmit = ({ product, price, quatity }) => {

        setItems([...items, {
            id: counter, product: product, price:
                +price, quatity: parseInt(quatity, 10)
        }]);
        setCounter(counter + 1);

    }

    const handlerDelete = (id) => {
        setItems(items.filter(item => item.id !== id))
    }


    const onActiveForm = () => {
        setActiveform(!activeForm);
    }

    return (
        <>
            <div className="container mt-5">
                <div className="card">
                    <div className="card-header">Ejemplo factura </div>
                    <div className="card-body">
                        <InvoiceView id={id} name={name} />
                        <div className="row my-3">
                            <div className="col">
                                <ClienteView client={client} />
                            </div>
                            <div className="col">
                                <CompanyView company={company} />
                            </div>
                        </div>
                        <ProductsView items={items} handlerDelete={handlerDelete} />
                        <TotalView total={total} />
                        <button className="btn btn-secondary" onClick={onActiveForm}>{!activeForm ? 'Agregar Item' : 'Ocultar Form'}</button>
                        {!activeForm || <FormItemsView handler={handlerAddinvoiceSubmit} />}

                    </div>
                </div>
            </div>
        </>
    )
}