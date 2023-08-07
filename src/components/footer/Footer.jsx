import styles from './Footer.module.css'

const Footer = () => {
  return (
    <section className={styles.footer_container}>
<p className=''>SpaceX © 2023</p>

<ul className="">
    <li className="">TWITTER</li>
    <li className="">YOUTUBE</li>
    <li className="">INSTAGRAM</li>
    <li className="">FLICKR</li>
    <li className="">LINKEDIN</li>
    <li className="">PRIVACY POLICY</li>
    <li className="">SUPPLIERS</li>
</ul>
    </section>
  )
}

export default Footer