function Url(props) {
    let label = props.label
    if (!label) {
        label = props.url
    }
    return (
        <a href={props.url} target='_blank'>{label}</a>
    )
}

export default Url