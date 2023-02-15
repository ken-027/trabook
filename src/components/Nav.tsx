import { useState, useEffect } from 'react'
import logo from '@/assets/logo.svg'
import 'animate.css'
import style from '@/sass/components/nav.module.scss'
import Hamburger from 'hamburger-react'

const links: { link: string; text: string }[] = [
  { link: '/trabook/', text: 'Home' },
  { link: '#about', text: 'About' },
  { link: '#destination', text: 'Destination' },
  { link: '#tour', text: 'Tour' },
  { link: '#blog', text: 'Blog' },
  { link: '#', text: 'Login' },
  { link: '#', text: 'Sign up' },
]

const Nav: React.FC<{}> = () => {
  const [isOpen, setisOpen] = useState<boolean>(false)

  useEffect(() => {
    const body = document.querySelector('html') as HTMLElement
    if (isOpen) body.style.overflowY = 'hidden'
    else body.style.overflowY = 'auto'
  }, [isOpen])

  const toggleNav = () => setisOpen((prevState) => !prevState)
  const hideNav = () => setisOpen(false)

  return (
    <nav className={style.nav}>
      <div className={style.container}>
        <div className={style.navMobileContainer}>
          <a
            className={style.logoLink}
            href='/trabook/'>
            <img
              src={logo}
              alt='agency match logo'
            />
            <p>
              <span>Tra</span>book
            </p>
          </a>
          <div className={style.navButton}>
            <Hamburger
              toggled={isOpen}
              toggle={toggleNav}
              size={30}
              // direction='right'
              // duration={0.8}
              distance='md'
              color='#222222'
              rounded
              easing='ease-in-out'
            />
          </div>
        </div>
        <ul
          className={`${style.linksContainer} ${isOpen ? style.linkShow : ''}`}>
          {links.map((item, index) => (
            <li key={index}>
              <a
                className={`${isOpen ? style.showLinks : style.hideLinks} ${
                  index === 5 ? style.login : ''
                } ${index === 6 ? style.button : ''}`}
                style={{
                  transitionDelay: isOpen
                    ? `${index > 0 ? 0.4 + index * 0.05 : 0.4}s`
                    : `${
                        index > 0 ? 0.01 - (links.length - index) * 0.01 : 0.01
                      }s`,
                }}
                href={item.link}
                onClick={hideNav}>
                {item.text}
              </a>
            </li>
          ))}
          {/* <li>
            <a
              className={style.login}
              href='#login'>
              Login
            </a>
          </li>
          <li>
            <a
              className={style.button}
              href='#signup'>
              Sign up
            </a>
          </li> */}
        </ul>
        <div
          onClick={hideNav}
          className={`${style.backdrop} ${
            isOpen ? style.backdropShow : ''
          }`}></div>
      </div>
    </nav>
  )
}

export default Nav
