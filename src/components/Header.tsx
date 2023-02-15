import style from '@/sass/components/header.module.scss'
import hero from '@/assets/hero.png'
import { motion } from 'framer-motion'

const Header: React.FC<{}> = () => {
  return (
    <header className={style.header}>
      <div className={style.container}>
        <div className={style.description}>
          <motion.h1
            initial={{ translateY: '2rem', opacity: 0.3 }}
            animate={{ translateY: '0', opacity: 1 }}
            transition={{ duration: 0.6 }}>
            Get started your exciting{' '}
            <span className={style.span}>journey</span> with us.
          </motion.h1>
          <motion.p
            initial={{ translateY: '2rem', opacity: 0.3 }}
            animate={{ translateY: '0', opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}>
            A Team of experienced tourism professionals will provide you with
            the best advice and tips for your desire place.
          </motion.p>
          <motion.a
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            href='#'
            className={style.button}
            type='button'>
            Discover Now
          </motion.a>
        </div>
        <div className={style.image}>
          <motion.img
            initial={{ scale: 0.8, opacity: 0.3 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6 }}
            src={hero}
            alt='hero image'
          />
        </div>
      </div>
    </header>
  )
}

export default Header
