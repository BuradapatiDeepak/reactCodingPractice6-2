// Write your code here
import './index.css'

const DestinationItem = props => {
  const {searchList} = props
  const {name, imgUrl} = searchList

  return (
    <li className="item">
      <img className="image" alt={name} src={imgUrl} />
      <p className="heading">{name}</p>
    </li>
  )
}

export default DestinationItem
