import React from 'react'
import Icon from '../../Components/Icon';
import Style from './index.module.less'

export default function Content(props) {
  const resume = props.resume;
  return (
    <div className={Style['main-container']}>
      <div className="header">
        <div className="header-title">RESUME</div>
      </div>
      <div className="profile">
        <div className="profile-left">
          <h1 className="profile-name">{resume.name}</h1>
          <div className="profile-items">
            {
              resume.basic_info.map((info, i) => {
                return (
                  <BasicInfo info={info} key={`info-${i}`} />
                )
              })
            }
          </div>
        </div>
        {
          resume.show_avatar ? (
            <div className="profile-right">
              <img className="profile-avatar" src={resume.avatar} alt="avatar" />
            </div>
          ) : (
            <div className="profile-right">
              <div className="profile-avatar-dummy"><p>avatar</p></div>
            </div>
          )
        }
      </div>
      {
        resume.sections.map((section, i) => {
          return (
            <Section section={section} key={`section-${i}`} />
          )
        })
      }
    </div>
  )
}

function BasicInfo(props) {
  let info = props.info;
  return (
    <div className="profile-item">
      <Icon icon={info.icon} />
      <div className="profile-item-text">{info.content}</div>
    </div>
  )
}

function Section(props) {
  let section = props.section;
  return (
    <div className="content-wrapper han-la">
      <div className="content-header-wrapper">
        <div className="content-header">
          <Icon icon={section.icon} />
          <h2 className="content-header-text">{section.title}</h2>
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
            <h3 className="content-title-item flex-2 bold">{item.name}</h3>
            <h3 className="content-title-item flex-1 lowlight">{item.duration}</h3>
            <h3 className="content-title-item flex-1">{item.position ? item.position : null}</h3>
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
