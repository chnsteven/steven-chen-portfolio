import Layout from '../../components/layout';
import { getAllProjectsIds, getProjectData } from '../../lib/projects';
import Head from 'next/head';
import DateSpan from '../../components/date';
import utilStyles from '../../styles/utils.module.css';
import React from 'react';
import YouTube from 'react-youtube';

const getYoutubeVideoId = (url) => {
    const videoIdMatch = url.match(/(?:v=|\/)([0-9A-Za-z_-]{11})(?:\?|$)/);
    return videoIdMatch ? videoIdMatch[1] : null;
  };

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
                <h4 className={utilStyles.lightText2}>({projectData.excerpt})</h4>
                <div className={utilStyles.lightText}>
                    <DateSpan start={projectData.start_date} end={projectData.end_date}></DateSpan>
                </div>
                <div className={`${utilStyles.responsive} ${utilStyles.frame}`}>
                    {projectData.cover_image && <img src={projectData.cover_image} alt='Screenshot of project overview' />}
                </div>
                <h2 className={utilStyles.headingMd}>
                    Description:
                </h2>
                <div dangerouslySetInnerHTML={{ __html: projectData.contentHtml }} />
                <h2 className={utilStyles.headingMd}>
                    Video demo:
                </h2>
                <h4 className={utilStyles.lightText2}>({projectData.video_excerpt})</h4>
                <div>
                    <YouTube videoId={getYoutubeVideoId(projectData.video)}/>
                </div>
            </article>
        </Layout>
    );
}