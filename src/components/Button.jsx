import "./Button.css"

const Button = ({ clickHandler, name, light, gray, orange, wide, green }) => {

  const handleClick = () => clickHandler(name);

  const className = [
    'component-btn',
    light ? 'light' : '',
    gray ? 'gray' : '',
    orange ? 'orange' : '',
    wide ? 'wide' : '',
    green ? 'green' : '',

  ]

  return (
    <div className={className.join(" ").trim()}>
      <button className="btn" onClick={handleClick}>{name}</button>
    </div>
  )
}

export default Button;