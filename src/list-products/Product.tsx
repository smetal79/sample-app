
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Badge from '@mui/material/Badge';
import CheckCircle from '@mui/icons-material/CheckCircle';

import Button from '@mui/material/Button';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

const CartItemNotification = ({ count = 0 }) =>
    count
        ? <Badge badgeContent={count} color="success">
            <CheckCircle color="success" />
        </Badge>
        : null;

export default function Product({ product, onAdd, selectedCount = 0 }) {

    const { name, price } = product;

    const addToCart = () => onAdd(product);

    return (
        <Card sx={{ display: 'flex', m: .5, pl: 0 }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <CardContent sx={{ flex: '1 0 auto' }}>
                    <Typography component="div" variant="h6">
                        {name}
                        <CartItemNotification count={selectedCount} />
                    </Typography>
                    <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 0, ml: 0 }}>
                        <Typography variant="subtitle1" color="text.secondary" component="div">
                            {price}
                        </Typography>
                        <Button startIcon={<AddShoppingCartIcon />} onClick={addToCart}>
                            Add
                        </Button>
                    </Box>
                </CardContent>
            </Box>
        </Card>
    );
}