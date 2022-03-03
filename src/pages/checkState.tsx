
import Head from 'next/head'
import { useSelector } from 'react-redux';
import { selectName, selectEmail, selectPhone } from '../features/profile/profileSlice';
import styles from '../styles/Home.module.css'

const CheckState = () => {

  const showName = useSelector(selectName);

const showEmail = useSelector(selectEmail);
const showPhone = useSelector(selectPhone);

  return (
    <div className={styles.container}>
      <Head>
        <title>Redux Toolkit</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
    <p>
      Hi there
    </p>
    <span>{showName}</span>
    <span>{showEmail}</span>
    <span>{showPhone}</span>
    </div>
  )
}

export default CheckState
