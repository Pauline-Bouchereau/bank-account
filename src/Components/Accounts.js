import Account from "./Account";
import Button from "./Button";

const Accounts = (props) => {
  let color = "";
  if (props.color === "#1976D2") {
    color = "blue";
  } else if (props.color === "#C2185B") {
    color = "pink";
  }

  return (
    <div className="container">
      <div className={`account-title ${color}`}>
        <h2>{props.name}</h2>
        <div>
          <h3>{Number(props.balance).toLocaleString("fr-FR")}</h3>{" "}
          <span>€</span>
        </div>
      </div>
      <div>
        {props.operations.map((elem, index) => {
          return (
            <Account
              key={index}
              date={elem.date}
              description={elem.description}
              amount={Number(elem.amount).toLocaleString("fr-FR", {
                style: "currency",
                currency: "EUR",
              })}
            />
          );
        })}
      </div>
      <Button children="see-more" />
    </div>
  );
};

export default Accounts;
