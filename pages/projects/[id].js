import Layout from '../../components/layout';
import { getAllProjectsIds, getProjectData } from '../../lib/projects';
import Head from 'next/head';
import DateSpan from '../../components/date';
import utilStyles from '../../styles/utils.module.css';
import Image from 'next/image';


export async function getStaticProps({ params }) {
    // Add the "await" keyword like this:
    const projectData = await getProjectData(params.id);

    return {
        props: {
            projectData,
        },
    };
}

export async function getStaticPaths() {
    const paths = getAllProjectsIds();
    return {
        paths,
        fallback: false,
    };
}
export default function Post({ projectData }) {
    return (
        <Layout>
            <Head>
                <title>{projectData.title}</title>
            </Head>
            <article>

                <h1 className={utilStyles.headingXl}>{projectData.title}</h1>
                <div className={utilStyles.lightText}>
                    <DateSpan start={projectData.start_date} end={projectData.end_date}></DateSpan>
                </div>
                <div dangerouslySetInnerHTML={{ __html: projectData.contentHtml }} />
                {projectData.cover_image && <img src={projectData.cover_image} alt='Screenshot of project overview' />}
            </article>
        </Layout>
    );
}