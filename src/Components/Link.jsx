export default function Link(props) {
    let label = props.children
    if (!label) {
        label = props.url
    }
    return (
        <a href={props.url} target='_blank'>{label}</a>
    )
}
