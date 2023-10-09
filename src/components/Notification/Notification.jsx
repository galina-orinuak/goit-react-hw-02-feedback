import styles from './Notification.module.css';

export const NotificationMesage = ({ message }) => {
  return (
    <div className={styles.notification}>
      <p>{message}</p>
    </div>
  );
};
