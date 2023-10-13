import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import styles from '../components/layout.module.css';
//import { getSortedPostsData } from '../lib/posts';
import { getSortedProjectsData } from '../lib/projects';
import Link from 'next/link';
import DateSpan from '../components/date';
export async function getStaticProps() {
    const allProjectsData = getSortedProjectsData();
    return {
        props: {
            allProjectsData,
        },
    };
}
//export async function getServerSideProps(context) {
//    return {
//        props: {
//            // props for your component
//        },
//    };
//}
//import useSWR from 'swr';

//function Profile() {
//    const { data, error } = useSWR('/api/user', fetch);

//    if (error) return <div>failed to load</div>;
//    if (!data) return <div>loading...</div>;
//    return <div>hello {data.name}!</div>;
//}
export default function Home({ allProjectsData }) {
    return (
        <Layout home>
            <Head>
                <title>{siteTitle}</title>
            </Head>
            <h2 className={utilStyles.headingLg}>Overview</h2>
            <section className={utilStyles.headingMd}>
                <ul>
                    {/*<li></li>*/}
                    <li>Proficient in programming languages such as C/C++, Java, JS/TS, Python, and R.</li>
                    <li>Experience with frameworks such as Node.js, Next.js, and Three.js.</li>
                    <li>Experience with Test-driven developments, OOP, ECS.</li>
                    <li>Experience with version control with git.</li>
                    <li>Participated in a simulated Agile work environment.</li>
                    <li>Understand design principles, design patterns, data structures and algorithms.</li>
                    <li>Understand Intelligent system, computer graphics, and computer animations.</li>
                </ul>
            </section>
            <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
                <h2 className={utilStyles.headingLg}>Projects</h2>
                <ul className={utilStyles.list}>
                    {allProjectsData.map(({ id, start_date, end_date, title }) => (
                        <li className={utilStyles.listItem} key={id}>
                            <Link href={`/projects/${id}`} 
                            className={styles.span}>
                                {title}
                                <img src='images/link_icon.png' alt='Link Icon'
                                    className={utilStyles.responsiveIcon}></img>
                            </Link>
                            <br />
                            <small className={utilStyles.lightText}>
                                <DateSpan start={start_date} end={end_date}></DateSpan>
                            </small>
                        </li>
                    ))}
                </ul>
            </section>
        </Layout>
    )
}
