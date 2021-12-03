
import AlertTitle from '@mui/material/AlertTitle';
import Alert from '@mui/material/Alert';
import Container from '@mui/material/Container';

export default function Success() {
    return (
        <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
            <Alert severity="success">
                <AlertTitle>Success</AlertTitle>
                <strong>Your order has been successfully submitted.</strong>
            </Alert>
        </Container>
    );
}
