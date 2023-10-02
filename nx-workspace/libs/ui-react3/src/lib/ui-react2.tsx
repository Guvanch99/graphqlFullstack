import styles from './ui-react2.module.scss';

/* eslint-disable-next-line */
export interface UiReact2Props {}

export function UiReact2(props: UiReact2Props) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to UiReact2!</h1>
    </div>
  );
}

export default UiReact2;
