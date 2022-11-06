import styles from '../../../styles/Home.module.css'

export default function Details({ posts }) {
  console.log(posts)
  return(
    <div className={styles.container}>
      <h1>Details Page</h1>

      <h2>{posts.title}</h2>
      <p>{posts.body}</p>
    </div>
  )
}

export async function getStaticPaths() {
  const result = await fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "GET",
    headers: {
      "Content-Type": "application/json"
    }
  })

  const posts = await result.json()
  const paths = posts.map(e => ({
    params: { id: String(e.id) }
  }))
  
  return {paths, fallback : false}
}


export async function getStaticProps(context) {
  const { params } = await context

  const result = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json"
    }
  })

  return{
    props: {
      posts: await result.json()
    }
  }
}