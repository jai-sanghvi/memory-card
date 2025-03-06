import '../styles/Card.css'

export default function Card({clickHandler, name = '', img}) {
  return (
    <div className='card' onClick={clickHandler}>
      <img src={img} alt={name} />
      <p>{name.toUpperCase()}</p>
    </div>
  )
}