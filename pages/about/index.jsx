import Head from 'next/head'
import styles from '../../styles/Home.module.css'

export default function About() {
  return(
    <div className={styles.container}>
      <Head>
        <title>About</title>
        <meta name="description" content="this is an about pages" />
      </Head>

      <h1>About Page</h1>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores perspiciatis ipsum veniam non expedita optio nobis suscipit assumenda. At illum explicabo quia? Doloremque iusto neque temporibus est praesentium, error quae?</p>
    </div>
  )
}