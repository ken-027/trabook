import style from '@/sass/components/footer.module.scss'
import { FaFacebookF, FaTwitter } from 'react-icons/fa'
import { AiFillInstagram } from 'react-icons/ai'
import footerlogo from '@/assets/logo.svg'
import { motion } from 'framer-motion'

type link = { link: string; text: string }

const links: link[] = [
  { link: '#', text: 'About' },
  { link: '#', text: 'Careers' },
  { link: '#', text: 'Logistic' },
  { link: '#', text: 'Privacy & Policy' },
]

const contacts: link[] = [
  { link: '#', text: 'Help/FAQ' },
  { link: '#', text: 'Press' },
  { link: '#', text: 'Affiliates' },
]

const more: link[] = [
  { link: '#', text: 'Press Centre' },
  { link: '#', text: 'Our Blog' },
  { link: '#', text: 'Low fare tips' },
]

const socials: { link: string; icon: JSX.Element }[] = [
  { link: 'https://facebook.com', icon: <FaFacebookF /> },
  { link: 'https://instagram.com', icon: <AiFillInstagram /> },
  { link: 'https://twitter.com', icon: <FaTwitter /> },
]

const bottomLinks: link[] = [{ link: '#', text: 'Terms & Conditions' }]

const Footer: React.FC<{}> = () => {
  return (
    <motion.footer
      initial={{ translateY: '60vh' }}
      whileInView={{ translateY: '0' }}
      transition={{ duration: 1 }}
      // viewport={{ once: true }}
      className={style.footer}>
      <div className={style.container}>
        <div className={style.footerTop}>
          <div className={style.logo}>
            <img
              // className={style.image}
              src={footerlogo}
              alt='footer logo'
            />
            <p>
              <span>Tra</span>book
            </p>
          </div>
          <p>Book your trip in minute, get full Control for much longer.</p>
          <ul className={style.socialLinks}>
            {socials.map((item, index) => (
              <li key={index}>
                <a
                  target='_blank'
                  href={item.link}>
                  {item.icon}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className={style.groupLinks}>
          <p>Company</p>
          <ul className={style.links}>
            {links.map((item, index) => (
              <li key={index}>
                <a href={item.link}>{item.text}</a>
              </li>
            ))}
          </ul>
        </div>

        <div className={style.groupLinks}>
          <p>Contact</p>
          <ul className={style.links}>
            {contacts.map((item, index) => (
              <li key={index}>
                <a href={item.link}>{item.text}</a>
              </li>
            ))}
          </ul>
        </div>

        <div className={style.groupLinks}>
          <p>More</p>
          <ul className={style.links}>
            {more.map((item, index) => (
              <li key={index}>
                <a href={item.link}>{item.text}</a>
              </li>
            ))}
          </ul>
        </div>

        <ul className={style.bottomLinks}>
          <li className={style.copyright}>
            &copy; Trabook 2022. All rights reserved
          </li>
          {bottomLinks.map((item, index) => (
            <li key={index}>
              <a href={item.link}>{item.text}</a>
            </li>
          ))}
        </ul>
      </div>
    </motion.footer>
  )
}

export default Footer
