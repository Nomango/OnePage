import React from 'react'
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
          <div className="profile-name">{resume.name}</div>
          <div className="profile-list">
            <hr />
            <div className="profile-items">
              <div className="profile-item">
                <div className="profile-item-icon i-birthday"></div>
                <div className="profile-item-text">主页：{resume.home_page}</div>
              </div>
              <div className="profile-item">
                <div className="profile-item-icon i-address"></div>
                <div className="profile-item-text">现居：{resume.address}</div>
              </div>
            </div>
            <hr />
            <div className="profile-items">
              <div className="profile-item">
                <div className="profile-item-icon i-phone"></div>
                <div className="profile-item-text">电话：{resume.phone}</div>
              </div>
              <div className="profile-item">
                <div className="profile-item-icon i-email"></div>
                <div className="profile-item-text">邮箱：{resume.email}</div>
              </div>
            </div>
            <hr />
          </div>
        </div>
        {
          resume.show_avatar && (
            <div className="profile-right">
              <img className="profile-avatar" src={resume.avatar} alt="avatar" />
            </div>
          )
        }
      </div>
      {
        resume.sections.map((section, i) => {
          return (
            <Section section={section} key={`section-${i}`} theme={props.theme} />
          )
        })
      }
    </div>
  )
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
                <Item item={item} key={`item-${i}`} theme={props.theme} />
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
            <ItemDescription content={content} key={i} theme={props.theme} />
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
