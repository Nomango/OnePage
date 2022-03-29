import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Icon(props) {
  return (
    <span className='icon-wrapper' style={{
      lineHeight: '100%',
      display: 'inline-flex',
      alignItems: 'center',
      }}>
      <FontAwesomeIcon className='icon-svg' {...props} style={{
        flex: 1,
      }} />
    </span>
  )
}
