import styles from "./trip-list.module.css"

import trips from "../../../data/trips"
import TripCard from "../../molecules/TripCard"

export default function TripList() {
  return (
    <section className={styles.section}>
        <h2 className={styles.title}>Destinos</h2>

        <div className={styles.list}>
            {
                trips.map((trip) => (
                    <TripCard key={trip.id} trip={trip} />
                ))
            }
        </div>
        </section>
    
  )
}
