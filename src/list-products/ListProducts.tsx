
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Product from './Product';

export default function ListProducts({ products, onAdd }) {
    return (
        <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }} >
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
                        {
                            products
                                .map((product, i) => <Product key={`${i}-{product.id}`} product={product} onAdd={onAdd} />)
                        }
                    </Paper>
                </Grid>
            </Grid>
        </Container>
    )
}