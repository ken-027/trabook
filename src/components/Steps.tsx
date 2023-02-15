import style from '@/sass/components/step.module.scss'
import { ReactSVG } from 'react-svg'
import signup from '@/assets/signup.svg'
import money from '@/assets/money.svg'
import travel from '@/assets/travel.svg'
import { motion } from 'framer-motion'

const list: { icon: JSX.Element; title: string; description: string }[] = [
  {
    icon: <ReactSVG src={signup} />,
    title: 'Sign Up',
    description:
      'Completes all the work associated with planning and processing',
  },
  {
    icon: <ReactSVG src={money} />,
    title: 'Worth of Money',
    description:
      'After successful access then book from exclusive deals & pricing',
  },
  {
    icon: <ReactSVG src={travel} />,
    title: 'Exciting Travel',
    description:
      'Start and explore a wide range of exciting travel experience.',
  },
]

const Steps: React.FC<{}> = () => {
  return (
    <section
      className={style.section}
      id='steps'>
      <motion.div
        initial={{ translateY: '70vh' }}
        whileInView={{ translateY: '0' }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className={style.container}>
        <motion.h2
          initial={{ opacity: 0.1 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
        >
          Things you need <span className={style.span}>to do</span>
        </motion.h2>
        <motion.h3
          initial={{ opacity: 0.1 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          We ensure that you’ll embark on a perfectly planned, safe vacation at
          a price you can afford.
        </motion.h3>
        <div className={style.list}>
          {list.map((item, index) => (
            <motion.div
              initial={{ translateY: '10vh' }}
              whileInView={{ translateY: '0' }}
              transition={{ duration: 0.5, delay: 0.2 * index }}
              viewport={{ once: true }}
              key={index}
              className={style.item}>
              {item.icon}
              <h5>{item.title}</h5>
              <p>{item.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

export default Steps
