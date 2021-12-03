import { DataGrid } from '@mui/x-data-grid';

import IconButton from '@mui/material/IconButton';
import Alert from '@mui/material/Alert';
import Container from '@mui/material/Container';
import AlertTitle from '@mui/material/AlertTitle';
import DeleteForever from '@mui/icons-material/DeleteForever';

import Footer from './Footer';

const getColumns = (onDelete) => ([
    {
        field: 'description',
        headerName: 'Product',
        width: 400,
    },
    {
        field: 'price',
        headerName: 'Price',
        width: 70,
    },
    {
        field: 'count',
        headerName: 'Count',
        type: 'number',
        width: 100,
    },
    {
        field: 'total',
        headerName: 'Total',
        type: 'number',
        width: 110,
    },
    {
        field: 'id',
        headerName: 'Delete?',
        width: 100,
        renderCell: ({ row }) => {
            return (<IconButton onClick={() => onDelete(row)} ><DeleteForever /></IconButton>)
        }
    },

]);

const CartWithoutItemNotification = () => {
    return (
        <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
            <Alert severity="info">
                <AlertTitle>Empty cart</AlertTitle>
                <strong>Your do not have any item in the cart.</strong>
            </Alert>
        </Container>
    )
}

export default function Cart({ cart, onItemRemove, onOrderSubmit }) {
    const { items } = cart;
    const { total, shipping, totalIncludingShipping } = cart;
    const columns = getColumns(onItemRemove);

    return !total
        ? <CartWithoutItemNotification />
        : <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
            <DataGrid
                rows={items}
                columns={columns}
                pageSize={5}
                disableSelectionOnClick
                hideFooterPagination={true}
                hideFooter={true}
            />
            <Footer totals={{ total, shipping, totalIncludingShipping }} onSubmit={onOrderSubmit} />
        </Container>
}
