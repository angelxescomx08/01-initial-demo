import Head from 'next/head';
import { Navbar } from '../Navbar';
import styles from './MainLayout.module.css';

export const MainLayout = ({children}) => {
    return (
        <div className={styles.container}>
          <Head>
            <title>Contact - Ángel</title>
            <meta name="description" content="Contact page" />
            <link rel="icon" href="/favicon.ico" />
          </Head>
    
          <Navbar/>
    
          <main className={styles.main}>

            {children}
        
          </main>
    
        </div>
      )
}
