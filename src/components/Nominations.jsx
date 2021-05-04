export default function Nominations(props) {
  const { currentNominations, removeNomination } = props

  const handleRemoveNomination = (event) => {
    const movie = event.target.offsetParent.name;
    const copyNominations = [...currentNominations];
    const removeIndex = copyNominations.indexOf(movie);
    copyNominations.splice(removeIndex, 1);
    removeNomination([...copyNominations]);
  }  
  
  const parsedNominations = currentNominations.map(nomination => 
    <li key={nomination}>
      {nomination}
      <button name={nomination} onClick={handleRemoveNomination}>Remove</button>
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