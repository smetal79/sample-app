import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import Button from '@mui/material/Button';
import TableRow from '@mui/material/TableRow';
import Container from '@mui/material/Container';

export default function Footer({ totals, onSubmit }) {

    const { total, shipping, totalIncludingShipping } = totals as any;

    return <div>
        <TableContainer>
            <Table sx={{ maxWidth: 300 }} aria-label="simple table">
                <TableBody>
                    <TableRow>
                        <TableCell>Sub total</TableCell>
                        <TableCell align="right">{total}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Shipping</TableCell>
                        <TableCell align="right">{shipping}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Total</TableCell>
                        <TableCell align="right">{totalIncludingShipping}</TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </TableContainer>
        <Container maxWidth="lg" sx={{ mt: 4 }} >
            <Button variant="contained" onClick={onSubmit}>Checkout</Button>
        </Container>
    </div>
}