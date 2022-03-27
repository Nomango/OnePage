import resume from './Resume'

function Profile() {
  return (
    <>
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
    </>
  )
}

export default Profile
