export function GithubRepoStarBadge(props) {
  return <Badge url={`github/stars/${props.user}/${props.repo}?style=social`} />
}

export default function Badge(props) {
  return (
    <img src={`https://img.shields.io/${props.url}`} />
  )
}
