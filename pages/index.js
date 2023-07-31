import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
//import { getSortedPostsData } from '../lib/posts';
import { getSortedProjectsData } from '../lib/projects';
import Link from 'next/link';
import Date from '../components/date';

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
                <p>[Your Self Introduction]</p>
                <p>
                    Check out {' '} <a href="https://nextjs.org/learn">our Next.js tutorial</a>
                </p>
            </section>
            <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
                <h2 className={utilStyles.headingLg}>Project</h2>
                <ul className={utilStyles.list}>
                    {allProjectsData.map(({ id, date, title }) => (
                        <li className={utilStyles.listItem} key={id}>
                            <Link href={`/projects/${id}`}>{title}</Link>
                            <br />
                            <small className={utilStyles.lightText}>
                                <Date dateString={date} />
                            </small>
                        </li>
                    ))}
                </ul>
            </section>
            </Layout>
  )
}
