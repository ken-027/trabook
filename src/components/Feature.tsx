import { motion } from 'framer-motion'
import faq from '@/assets/faq.png'
import { FaChevronRight } from 'react-icons/fa'
import puzzle from '@/assets/puzzle.png'
import feedback from '@/assets/feedback.png'
import { BsCheckLg } from 'react-icons/bs'
import style from '@/sass/components/feature.module.scss'

const list: { image: string; title: string; description: string }[] = [
  {
    image: faq,
    title: 'Plaats gratis je aanvraag',
    description:
      'Onze slimme vragenlijst brengt jouw wensen in kaart, op basis hiervan zoeken wij de 3 meest passende online  marketingbureau’s.',
  },
  {
    image: puzzle,
    title: 'Ontvang offertes',
    description:
      'Van deze 3 online marketingbureaus ontvang je binnen 24 uur gratis en vrijblijvend een offerte.',
  },
  {
    image: feedback,
    title: 'Vergelijk en kies',
    description:
      'Vergelijk de offertes en kies het beste online marketingbureau voor jou.',
  },
]

const transitionOpacity = {
  initial: { opacity: 0 },
  whileInView: { opacity: 1 },
  transition: { duration: 0.8 },
  viewport: { once: true },
}

const transitionTranslate = {
  initial: { translateY: '10vh' },
  whileInView: { translateY: 0 },
  transition: { duration: 0.8 },
  viewport: { once: true },
}

const Feature: React.FC<{}> = () => {
  return (
    <section
      className={style.feature}
      id='feature'>
      <motion.h3
        {...transitionOpacity}
        className={style.subTitle}>
        Zo werkt het
      </motion.h3>
      <motion.h2
        {...transitionOpacity}
        transition={{ delay: 0.2, duration: 0.8 }}
        className={style.title}>
        In 3 stappen naar het juiste online marketingbureau
      </motion.h2>
      <div className={style.list}>
        {list.map((item, index) => (
          <motion.div
            {...transitionTranslate}
            transition={{ duration: 0.8, delay: index * 0.1 }}
            className={style.item}
            key={index}>
            <img
              src={item.image}
              alt={item.title}
            />
            <p>{item.title}</p>
            <p className='description'>{item.description}</p>
          </motion.div>
        ))}
      </div>
      <ul className={style.checkList}>
        <motion.li {...transitionOpacity}>
          <BsCheckLg />
          <p>Enkel online marketingbureau's met trackrecord</p>
        </motion.li>
        <motion.li
          {...transitionOpacity}
          transition={{ duration: 0.8, delay: 0.1 }}>
          <BsCheckLg />
          <p>Je gegevens zijn veilig bij ons</p>
        </motion.li>
      </ul>
      <motion.a
        {...transitionOpacity}
        href='#'
        type='button'>
        Start nu
        <FaChevronRight className='icon-next' />
      </motion.a>
    </section>
  )
}

export default Feature
