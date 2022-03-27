import resume from './Resume'
import './assets/theme/blues.scss'
import './assets/theme/plain.scss'

function Content() {
  return resume.sections.map((section, i) => {
    return (
      <Section section={section} key={`section-${i}`} />
    )
  })
}

function Section(props) {
  let section = props.section;
  return (
    <div className="content-wrapper han-la">
      <div className="content-header-wrapper">
        <div className="content-header">
          <div className={`content-header-icon ${section.icon}`}></div>
          <div className="content-header-text">{section.title}</div>
        </div>
      </div>
      <div className="content-main-wrapper">
        <div className="content-corner"></div>
        <div className="content-main">
          {
            section.items.map((item, i) => {
              return (
                <Item item={item} key={`item-${i}`} />
              )
            })
          }
        </div>
      </div>
    </div>
  )
}

function Item(props) {
  let item = props.item;
  return (
    <div className="content-item">
      {
        item.name && (
          <div className="content-title">
            <div className="content-title-item">{item.name}</div>
            <div className="content-title-item">{item.duration}</div>
            <div className="content-title-item">{item.position ? item.position : null}</div>
          </div>
        )
      }
      {
        item.preview_label && item.preview_url && (
          <div className="content-line">
            {item.preview_label}{item.preview_url}
          </div>
        )
      }
      {
        item.description.map((content, i) => {
          return (
            <ItemDescription content={content} key={i} />
          )
        })
      }
    </div>
  )
}

function ItemDescription(props) {
  let content = props.content;
  if (content instanceof Array) {
    return (
      <div className="content-line">
        <ul>
          {
            content.map((content, i) => { return <li key={`content-${i}`}>{content}&nbsp;</li> })
          }
        </ul>
      </div>
    )
  }
  else {
    return <div className="content-line">{content}&nbsp;</div>
  }
}

export default Content
