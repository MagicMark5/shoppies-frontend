export default function Nominations(props) {
  const { currentNominations, removeNomination } = props

  const handleRemoveNomination = (event) => {
    const movie = event.target.name;
    const copyNominations = [...currentNominations];
    console.log("before splice...")
    console.log(copyNominations);
    const removeIndex = copyNominations.indexOf(movie);
    copyNominations.splice(removeIndex, 1);
    console.log("after splice...")
    console.log(copyNominations);
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