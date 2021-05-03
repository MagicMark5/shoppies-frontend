export default function Nominations(props) {
  const { currentNominations } = props

  const parsedNominations = currentNominations.map(nomination => 
    <li key={nomination}>
      {nomination}
    </li>
  )
  
  return (
    <section className="nominations">
      <h3>Nominations List</h3>
      <ul>
        {parsedNominations}
      </ul>
    </section>
  )
}