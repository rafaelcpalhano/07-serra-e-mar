import { useState } from "react"

import styles from "./trip-list.module.css"

import trips from "../../../data/trips"
import TripCard from "../../molecules/TripCard"

import BookingDialog from "../BookingDialog"

export default function TripList() {
    const [selected, setSelected] = useState(null)

    return (
        <section id="destinos" className={styles.section}>
            <h2 className={styles.title}>Destinos</h2>

            <div className={styles.list}>
                {
                    trips.map((trip) => (
                        <TripCard
                            key={trip.id}
                            trip={trip}
                            onBook={() => setSelected(trip)}
                        />
                    ))
                }
            </div>

            {selected !== null && (
                <BookingDialog
                    trip={selected}
                    onClose={() => setSelected(null)}
                />
            )}
        </section>
    )
}