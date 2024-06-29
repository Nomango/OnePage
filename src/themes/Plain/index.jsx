import React, { useContext, useState } from 'react';
import GlobalContext from '../../Components/Context';
import Icon from '../../Components/Icon';
import Style from './index.module.less';

export default function Content() {
  const { resume } = useContext(GlobalContext);
  const [showDummyAvatar, setShowDummyAvatar] = useState(false);
  return (
    <div className={Style['main-container']}>
      <div className="profile">
        <div className="profile-left">
          <h1 className="profile-name">{resume.name}</h1>
          <p>{resume.signature}</p>
        </div>
        <div className="profile-right">
          <div className='profile-avatar-wrapper'>
            {
              showDummyAvatar ? (
                <div className="profile-avatar-dummy"><p>avatar</p></div>
              ) : (
                <img className="profile-avatar" src={resume.avatar} alt="avatar" onError={() => { setShowDummyAvatar(true); console.log(resume.avatar, 'is not found') }} />
              )
            }
          </div>
        </div>
      </div>
      {
        resume.basic_info && (
          <div className="profile-items">
            {
              resume.basic_info.map((info, i) => {
                return (
                  <BasicInfo info={info} key={`info-${i}`} />
                )
              })
            }
          </div>
        )
      }
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
      <Icon className='profile-item-icon' icon={info.icon} />
      <div className="profile-item-text">{info.content}</div>
    </div>
  )
}

function Section(props) {
  let section = props.section;
  return (
    <div className="content-wrapper han-la">
      <div className="content-header">
        <Icon className='content-header-icon' icon={section.icon} />
        <h2 className="content-header-text">{section.title}</h2>
      </div>
      <div className="content-main">
        {section.items.map((item, i) => <Item item={item} key={`item-${i}`} />)}
      </div>
    </div>
  )
}

function Item(props) {
  let item = props.item;
  if (item.group) {
    return (
      <div className="content-item">
        <div className="profile-items">
          {
            item.group.map((info, i) => <BasicInfo info={info} key={`info-${i}`} />)
          }
        </div>
        {
          item.description?.map((content, i) => {
            return (
              <ItemDescription content={content} key={i} />
            )
          })
        }
      </div>
    )
  }
  return (
    <div className="content-item">
      {
        item.name && (
          <div className="content-title">
            <h3 className="content-title-item flex-1 bold">{item.name}</h3>
            <h3 className="content-title-item">{item.position ? item.position : null}</h3>
            <p className="content-title-item lowlight">{item.duration}</p>
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
