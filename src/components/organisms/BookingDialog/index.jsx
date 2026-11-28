import {
    Dialog,
    DialogTitle,
    DialogContent,
    DialogContentText,
    DialogActions,
    Button,
    TextField
} from "@mui/material"

export default function BookingDialog({ trip, onClose }) {
    return (
        <Dialog open onClose={onClose}>
            <DialogTitle>
                Quero ir para {trip.name}
            </DialogTitle>

            <DialogContent>
                <DialogContentText>
                    {trip.days} · a partir de R$ {trip.price}
                </DialogContentText>
            

<TextField label="Seu nome" fullWidth margin="normal" />
<TextField label="WhatsApp" fullWidth margin="normal" />
</DialogContent>
            <DialogActions>
                <Button onClick={onClose}>Cancelar</Button>
                <Button onClick={onClose} variant="contained">Quero Reservar</Button>
            </DialogActions>
        </Dialog>
    )
}