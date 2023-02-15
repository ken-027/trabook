import destination1 from '@/assets/destination1.png'
import destination2 from '@/assets/destination2.png'
import destination3 from '@/assets/destination3.png'
import destination4 from '@/assets/destination4.png'
import { RiStarSFill } from 'react-icons/ri'
import style from '@/sass/components/destination.module.scss'

import { motion } from 'framer-motion'

type destination = {
  image: string
  location: string
  country: string
  rating: number
  oldPrice: number
  newPrice: number
}

const list: destination[] = [
  {
    location: 'Madrid',
    country: 'Spain',
    rating: 4.8,
    image: destination1,
    oldPrice: 950,
    newPrice: 850,
  },
  {
    location: 'Firenze',
    country: 'Italy',
    rating: 4.5,
    image: destination2,
    oldPrice: 850,
    newPrice: 750,
  },
  {
    location: 'Paris',
    country: 'France',
    rating: 4.4,
    image: destination3,
    oldPrice: 699,
    newPrice: 599,
  },
  {
    location: 'London',
    country: 'UK',
    rating: 4.8,
    image: destination4,
    oldPrice: 850,
    newPrice: 800,
  },
]

const Destination: React.FC<{}> = () => {
  return (
    <motion.section
      initial={{ translateY: '70vh' }}
      whileInView={{ translateY: '0' }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      className={style.section}>
      <div className={style.container}>
        <motion.h2
          initial={{ opacity: 0.1 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className={style.h2}>
          Exclusive <span>deals & discounts</span>
        </motion.h2>
        <motion.h3
          initial={{ opacity: 0.1 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className={style.h3}>
          Discover our fantastic early booking discounts & start planning your
          journey.
        </motion.h3>
        <div className={style.items}>
          {list.concat(list.concat(list)).map((item, index) => (
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.1 * index }}
              viewport={{ once: true }}
              className={style.item}
              key={index}>
              <div className={style.image}>
                <img
                  src={item.image}
                  alt={item.location}
                />
                <div>
                  <a type='button'>Book Now</a>
                </div>
              </div>
              <div className={style.description}>
                <p>
                  {item.location}{' '}
                  <span>
                    <RiStarSFill /> {item.rating}
                  </span>
                </p>
                <p>
                  {item.country}
                  <span className={style.oldPrice}>${item.oldPrice}</span>
                  <span className={style.newPrice}>${item.newPrice}</span>
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  )
}

export default Destination
