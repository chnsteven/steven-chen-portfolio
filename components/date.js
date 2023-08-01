import { parseISO, format } from 'date-fns';

export function Date({ dateString }) {
    const date = parseISO(dateString);
    return <time dateTime={dateString}>{format(date, 'LLLL d, yyyy')}</time>;
}

export default function DateSpan({ start, end }) {
    return <>
    <Date dateString={start}/> to <Date dateString={end}/>
    </>
}