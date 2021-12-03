
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Product from './Product';

export default function ListProducts({ products, onAdd, selectedItems }) {

    const getSlectedCount = (product) => {
        const { id: productId } = product;
        const { count = 0 } = selectedItems[productId] || {};
        return count;
    };

    return (
        <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }} >
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
                        {
                            products
                                .map((product, index) =>
                                    <Product
                                        key={`${index}-{productId}`}
                                        selectedCount={getSlectedCount(product)}
                                        product={product}
                                        onAdd={onAdd} />)
                        }
                    </Paper>
                </Grid>
            </Grid>
        </Container>
    )
};