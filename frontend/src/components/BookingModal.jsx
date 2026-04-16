import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const BookingModal = ({doctor}) => {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button className='bg-blue-500' >Book Appointment</Button>
            </DialogTrigger>

            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Book Appointment of {doctor.name}</DialogTitle>
                </DialogHeader>

                <div className="space-y-3">
                    <Input type="date" onChange={(e) => setDate(e.target.value)} />
                    <Input type="time" onChange={(e) => setStartTime(e.target.value)} />
                    <Textarea placeholder="Reason" onChange={(e) => setReason(e.target.value)} />

                    <Button className='bg-blue-500' >
                        Confirm Booking
                    </Button>
                </div>
            </DialogContent>
        </Dialog>
    )
}

export default BookingModal;