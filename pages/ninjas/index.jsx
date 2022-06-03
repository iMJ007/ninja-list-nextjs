import styles from '../../styles/Ninjas.module.css'

export const getStaticProps = async () => {

  const res = await fetch('https://jsonplaceholder.typicode.com/users')
  const data = await res.json();
  return {
    props:{
      data
    }
  }
}

export default function Ninjas({data}) {
  return (
    <div>
        <h1>Here Come the ninjas!</h1>
        {data.map(ninja => (
          <div key={ninja.id}>
            <a className={styles.single}>
              <h3>{ ninja.name}</h3>
            </a>
          </div>
        ))}
    </div>
  )
}
