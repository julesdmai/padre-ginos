const Pizza = (props) => {
  return (
    <div className="pizza">
      <h1>{props.name}</h1>
      <p>{props.description}</p>
      <img src={props.image ? props.image : "https://www.websitepulse.com/blog/uploads/2013/03/200.jpg"} alt={props.name} />
    </div>
  );
};

export default Pizza;