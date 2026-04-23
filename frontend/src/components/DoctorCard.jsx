import React from 'react'
import BookingModal from './BookingModal';
import avatarimg from '../assets/profileavatar.png'
import axios from 'axios';

const DoctorCard = ({ doctors, appointments, fetchMyAppointments, setMyAppointments }) => {
    // style
    const styles = {
        card: `w-[260px] bg-white border border-gray-100 rounded-2xl overflow-hidden
         hover:border-gray-300 transition-all duration-200`,

        imageWrapper: `relative w-full m-auto h-[200px] bg-gray-100`,

        image: `w-full h-full object-cover object-top`,

        statusDot: `absolute top-3 right-3 w-2.5 h-2.5 bg-green-500 rounded-full border-2 border-white`,

        body: `p-4`,

        badge: `inline-block text-[11px] font-medium font-[Roboto] tracking-wide
          px-3 py-1 rounded-full bg-blue-50 text-blue-700 mb-2`,

        name: `font-[Montserrat] text-base font-bold text-gray-900 mb-1`,

        meta: `text-[13px] text-gray-400 mb-3 flex items-center gap-1.5`,

        metaDot: `w-1 h-1 rounded-full bg-gray-300 inline-block`,

        divider: `border-gray-100 mb-3`,

        ratingRow: `flex items-center justify-between mb-4`,

        stars: `text-amber-400 text-sm tracking-wide`,

        reviewCount: `text-[12px] text-gray-400`,

        button: `w-full py-2.5 bg-[#185fa5] hover:bg-[#0c447c] active:scale-[0.98]
           text-white text-[13px] font-semibold font-[Montserrat] tracking-wide
           rounded-lg transition-all duration-200`,
    };

    const bookedAppointment = appointments?.find(
        (appt) =>
            (appt.doctor === doctors._id || appt.doctor?._id === doctors._id) &&
            appt.status !== "cancelled"
    );

    const handleCancel = async (id) => {
        try {
            const response = await axios.patch(
                `http://localhost:5000/api/appointments/${id}/status`,
                { status: "cancelled" },
                { withCredentials: true }
            );

            // if (response.status === 200) {
            //     fetchMyAppointments();
            // }
            setMyAppointments(prev =>
                prev.map(appt =>
                    appt._id === id ? { ...appt, status: "cancelled" } : appt
                )
            );
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className={styles.card}>

            <div className={styles.imageWrapper}>
                <img className={styles.image} src={`${doctors.image_url ? doctors.image_url : avatarimg}`} alt={doctors.username} />
                <span className={styles.statusDot} />
            </div>

            <div className={styles.body}>
                <span className={styles.badge}>{doctors.doctorInfo?.specialization}</span>

                <h2 className={styles.name}>{doctors.username}</h2>

                <hr className={styles.divider} />

                {bookedAppointment ? (
                    <button onClick={() => handleCancel(bookedAppointment._id)} className="w-auto py-1 px-2 bg-red-500 hover:bg-red-600 text-white rounded-lg">
                        Cancel Appointment
                    </button>
                ) : (
                    <BookingModal doctor={doctors} setMyAppointments={setMyAppointments} />
                )}
            </div>

        </div >

    )
}

export default DoctorCard