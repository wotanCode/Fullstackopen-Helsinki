import './Notification.css'

const Notification = ({ message, status }) => {
  return (
    <div className={`notification ${status}`}>
      {message}
    </div>
  );
};

export default Notification;
