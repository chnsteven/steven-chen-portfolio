import Head from 'next/head';
import Image from 'next/image';
import styles from './layout.module.css';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';

const name = 'Steven Chen';
export const siteTitle = 'Steven Chen Portfolio';
export const introduction = ''

export default function Layout({ children, home }) {
    return (
        <div className={styles.container}>
            <Head>
                <link rel="icon" href="/favicon.ico" />
                <meta
                    name="description"
                    content="Learn how to build a personal website using Next.js"
                />
                {/*<meta*/}
                {/*    property="og:image"*/}
                {/*    content={`https://og-image.vercel.app/${encodeURI(*/}
                {/*        siteTitle,*/}
                {/*    )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}*/}
                {/*/>*/}
                <meta name="og:title" content={siteTitle} />
                {/*<meta name="twitter:card" content="summary_large_image" />*/}
            </Head>
            <header className={styles.header}>
                <>
                    <Image
                        priority
                        src="/images/profile.jpg"
                        className={`${utilStyles.profilePicture} ${styles.leftContent}`}
                        height={44}
                        width={44}
                        alt=""
                    />
                    <h1 className={`${utilStyles.headingMd} ${styles.rightContent}`}>{name}</h1>
                </>
            </header>
            <main>{children}</main>
            {!home && (
                <div className={styles.backToHome}>
                    <Link href="/">Back to home
                    </Link>
                </div>
            )}
        </div>
    );
}