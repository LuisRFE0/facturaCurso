import { invoice } from "../data/invoice"
export const getInvoice = () => {

    const total = calculateTotal(invoice.items);

    return { ...invoice, total };
}

export const calculateTotal = (items = []) => {
    return items.map(item => item.price * item.quatity).reduce((accomulador, currentValue) =>
        accomulador + currentValue, 0
    )
}


