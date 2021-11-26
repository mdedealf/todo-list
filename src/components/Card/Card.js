import styles from './Card.module.css';

const Card = props => {
  // const { id, title, description, status, createdAt, onListClick } = props;
  const { id, title, onListClick } = props;

  return (
    <div className={styles.flex}>
      <ul key={id} onClick={() => onListClick(id)}>
        <li className={styles.title}>{title}</li>
        {/* <li>{id}</li>
        <li>{description}</li>
        <li>{status}</li>
        <li>{createdAt}</li> */}
      </ul>
    </div>
  );
};

export default Card;
