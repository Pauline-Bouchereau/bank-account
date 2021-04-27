const Account = (props) => {
  return (
    <div className="transaction">
      <div>
        <p>{props.date} </p>
        <p>{props.description} </p>
      </div>
      <p>
        {props.amount} <span>€</span>{" "}
      </p>
    </div>
  );
};

export default Account;
