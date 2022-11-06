import styles from '../../styles/Home.module.css'

export default function Blogs({ blogData }) {
  console.info(blogData)

  return (
    <div className={styles.container}>
      <h1>Blog Pages</h1>
      <div className={styles.grid}>
        {blogData.map(e => (
          <div className={styles.card} key={e.id}>
            <h2>{e.title}</h2>
            <p>{e.body}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export async function getServerSideProps() {
  const result = await fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "GET",
    headers: {
      "Content-Type": "application/json"
    }
  })

  const data = await result.json()
  
  return {
    props: {
      blogData: data
    }
  }
}