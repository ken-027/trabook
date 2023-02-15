import { motion } from 'framer-motion'
import { FaChevronRight } from 'react-icons/fa'
import aboutus from '@/assets/aboutus.png'
import style from '@/sass/components//about.module.scss'

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

const AboutUs: React.FC<{}> = () => {
  return (
    <section
      className={style.section}
      id='aboutus'>
      <div className={style.container}>
        <motion.div
          {...transitionOpacity}
          className={style.image}>
          <img
            src={aboutus}
            alt='about us'
          />
        </motion.div>
        <motion.div
          {...transitionTranslate}
          className={style.description}>
          <motion.h3
            {...transitionOpacity}
            transition={{ duration: 0.8, delay: 0.1 }}
            className='green'>
            Over ons
          </motion.h3>
          <motion.h2
            {...transitionOpacity}
            transition={{ duration: 0.8, delay: 0.2 }}>
            Over <span>agency</span>match
          </motion.h2>
          <motion.div
            {...transitionOpacity}
            transition={{ duration: 0.8, delay: 0.3 }}
            className={style.text}>
            Jouw betrouwbare matchmaker Sinds 2009 helpen wij bedrijven en
            overheidsorganisatie bij het vinden van de juiste dienstverlener.
            Via dit platform hebben wij ons gespecialiseerd in het matchen van
            vraag en aanbod voor marketingdiensten.
          </motion.div>
          <motion.a
            {...transitionOpacity}
            // transition={{ duration: 0.8, delay: 0.4 }}
            href='#'
            type='button'>
            Start nu
            <FaChevronRight className='icon-next' />
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}

export default AboutUs
