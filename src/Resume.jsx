import avatar from './assets/avatars/avatar.jpg'
import Url from './Url'

function SecretPhone(phone, secret) {
  if (secret) {
    phone = phone.replace(/(\d{3})\d{4}(\d{4})/, "$1****$2")
  }
  return phone
}

var Resume = {
  name: '刘海波',
  nick_name: 'Nomango',
  desired_job: "后端研发工程师",
  avatar: avatar,
  show_avatar: import.meta.env.DEV,
  birthday: "1996.09.06",
  phone: SecretPhone((20000000000-5224322883).toString(), import.meta.env.PROD),
  home_page: <Url label="Github/Nomango" url="https://github.com/Nomango" />,
  email: <Url label="nomango@qq.com" url="mailto://nomango@qq.com" />,
  address: "广东省深圳市",
  sections: [
    {
      title: '工作经历',
      icon: 'i-package',
      items: [
        {
          name: '字节跳动有限公司',
          duration: "2020.04 - 至今",
          position: "Golang后端工程师",
          description: [
            "TODO",
            "TODO2",
          ]
        },
        {
          name: "天津（滨海）军民融合人工智能创新中心",
          duration: "2019.07 - 2020.04",
          position: "C++研发工程师",
          description: [
            "公司简介：创新中心是人工智能领域的新型科研机构，致力于研发我国自主创新的群体协同人工智能操作系统。",
            "荣誉与奖项：",
            [
              "于2019年12月获得年度综合考评先进个人；",
              "于2019年12月获得年度优秀员工；",
            ],
            "工作描述：",
            [
              <>主要负责基于<b>ROS</b>机器人操作系统的无人平台应用开发工作；</>,
              <>独立完成组内代码框架的构建，主要分为通信包、串口包、插件包、仿真包等模块； </>,
              <>完成<b>Gazebo</b>仿真平台上的海港应急场景构建，支持四种无人平台在同一场景下的仿真；</>,
              <>完成大工X402四旋翼无人机和致导科技Q2500复合翼无人机的<b>micROS</b>适配工作。</>,
            ]
          ]
        },
        {
          name: "成都琛石科技有限公司",
          duration: "2018.04 - 2018.10",
          position: "Golang后端实习生",
          description: [
            "公司简介：公司专注虚拟化领域，旗下核心产品“实验楼”是国内领先的IT在线编程及在线实训学习平台。",
            "LabEx 项目：",
            [
              <>主要负责基于 <b>Beego</b> 框架的 Go 后端开发工作；</>,
              <>完成网站的部分架构设计与系统核心部分代码重构工作；</>,
              <>使用 <b>gRPC</b> 实现主服务器与 Docker 微服务间的远程调用过程；</>,
              <>协助完成基于 <b>Redis</b> 的定时任务系统优化，提升客户端响应速度；</>,
              <>使用 <b>MongoDB</b> 实现用户登录、注册、活跃度等信息的统计与储存功能；</>,
              <>在与阿里云合作的澳门大数据比赛中，实现了动态报名表单处理、比赛流程逻辑处理、比赛排行榜信息统计和获取等功能。</>,
            ],
            "实验楼 项目：",
            [
              <>主要负责基于 <b>Flask</b> 框架的 Python 后端开发工作；</>,
              <>参与十一优惠活动的模型设计和逻辑实现，实现随机优惠码发放和使用功能；</>,
              <>参与课程电子证书的发放功能开发，实现证书的展示、分享、下载功能。</>,
            ]
          ]
        }
      ]
    },
    {
      title: '开源项目',
      icon: 'i-topology',
      items: [
        {
          name: "基于Modern C++的通用配置库",
          duration: "2019.04 - 至今",
          preview_label: "项目地址：",
          preview_url: <Url url="https://github.com/Nomango/configor" />,
          description: [
            [
              <>TODO</>,
            ]
          ]
        },
        {
          name: "基于DirectX的C++2D游戏引擎",
          duration: "2017.09 - 2020.12",
          preview_label: "项目地址：",
          preview_url: <Url url="https://github.com/KiwanoEngine/kiwano" />,
          description: [
            [
              <>作为项目发起人，设计和开发了基于 <b>DirectX</b> 的 C++ 2D 游戏开发框架；</>,
              <>该引擎包含渲染引擎、场景管理、动画管理、GUI、音频引擎、物理引擎等模块，具有较完善的日志、内存管理、资源管理、事件分发与监听机制等功能；</>,
              <>以该项目完成了毕业设计《基于C++<b>泛型与元编程</b>的游戏引擎性能优化方案研究》，并申请了软件著作权和发明专利（在审）；</>,
              <>具有易扩展性，支持基于<b>XAudio2</b>的多媒体音频模块、基于 <b>Box2D</b> 的物理引擎模块等。</>,
            ]
          ]
        },
        {
          name: "基于 NTP 的自校时打铃系统",
          duration: "2018.05 - 2019.05",
          preview_label: "项目地址：",
          preview_url: <Url url="https://github.com/Nomango/bellex" />,
          description: [
            [
              <>作为<b>项目负责人</b>带领 8 人小组设计和开发该系统，该项目成功获得 2018 年国家级大创项目立项资格，并在2019 年互联网+大赛中获得校赛第三名；</>,
              <>后端包含一个使用 <b>Beego</b> 开发的 RESTful API 应用，和一个 Golang TCP 服务器，两服务间使用 RPC 进行通信；</>,
              <>前端包含一个使用 <b>Vue</b> + ElementUI 开发单页面 Web 应用，和一个基于 <b>Electron</b> 开发的 C/S 应用；</>,
              <>使用 <b>Jenkins</b> pipeline 进行持续集成和自动化部署，通过 Github hook 配置 GitSCM 自动拉取代码；</>,
              <>负责技术文档的编写以及维护，定期 review 小组成员的代码，与团队共同学习以及成长。</>,
            ]
          ]
        },
        {
          name: "基于ROS的DGX402无人机控制程序",
          duration: "2017.09 - 2020.12",
          preview_label: "项目地址：",
          preview_url: <Url url="https://github.com/Nomango/DGFK-X402-ROS" />,
          description: [
            [
              <>TODO</>,
            ]
          ]
        },
        {
          name: "基于Golang的local cache库",
          duration: "2020.12 - 2021.01",
          preview_label: "项目地址：",
          preview_url: <Url url="https://github.com/Nomango/go-cache" />,
          description: [
            [
              <>TODO</>,
            ]
          ]
        }
      ]
    },
    {
      title: '校园经历',
      icon: 'i-school',
      items: [
        {
          name: "西南民族大学",
          duration: "2015.09 — 2019.6",
          position: "软件工程（本科）",
          description: [
            "GPA：3.02 / 4.00 （专业GPA：3.37）",
            "荣誉/奖项：优秀毕业设计（2019）、校级先进个人（2017-2018）、优秀团员（2016-2017）"
          ],
        },
        {
          name: "敲客校园",
          duration: "2016.10 - 2018.06",
          description: [
            [
              <>作为社团<b>创始人</b>之一，带领 20 人左右的编程爱好者团队开展交流活动和小型编程竞赛；</>,
              <>组织团队成员完成外包任务，与创行中国合作完成了“摩麦搭档（H5）” “万豪问答（H5）”等多个项目。</>,
            ]
          ]
        }
      ]
    },
    {
      title: '自我评价',
      icon: 'i-suit',
      items: [
        {
          description: [
            [
              <>有良好的代码风格，结构清晰，命名规范，逻辑性强，注重代码质量；</>,
              <>研读过多个开源项目，学习改善代码的健壮性与扩展性；</>,
              <>喜欢钻研语言底层与框架原理，能够阅读英文文档；</>,
              <>善于与人沟通，有良好的团队合作精神和高度的责任感，能够承受压力。</>,
            ]
          ]
        }
      ]
    }
  ]
}

export default Resume