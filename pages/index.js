import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
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
            <section className={utilStyles.headingMd}>
                <ul>
                    <li>4 years of programming experience in University.</li>
                    <li>4 years of part time work experience as a STEM Instructor at Robostorm Consulting Inc.</li>
                    <li>Experience in C/C++, Python, Java/Javascript, Unity, C#.</li>
                    <li>Knowledge in fundamental data structures and algorithm designs in software engineering.</li>
                </ul>  
            </section>
            <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
                <h2 className={utilStyles.headingLg}>Projects</h2>
                <ul className={utilStyles.list}>
                    {allProjectsData.map(({ id, start_date, end_date, title }) => (
                        <li className={utilStyles.listItem} key={id}>
                            <Link href={`/projects/${id}`}>{title}</Link>
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
