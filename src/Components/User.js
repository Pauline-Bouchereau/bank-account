import UserIcon from "./UserIcon";

const User = (props) => {
  return (
    <div className="right-side-header">
      <p>{props.userName}</p>
      <div>
        <UserIcon />
      </div>
    </div>
  );
};

export default User;
