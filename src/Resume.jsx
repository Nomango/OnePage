import avatar from './assets/avatars/avatar.jpg'
import Url from './Url'

function SecretPhone(phone, secret) {
  if (secret) {
    phone = phone.replace(/(\d{3})\d{4}(\d{4})/, "$1****$2")
  }
  return phone
}

function Title(props) {
  return <b>{props.text}</b>
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
          duration: "2020.04 — 至今",
          position: "Golang后端工程师",
          description: [
            <><Title text="工作概要" />：主要负责广告审核业务下的通用数据链路建设、机器审核模型迭代、反作弊反欺诈等相关工作；</>,
            <><Title text="技术栈" />：<b>Golang</b>、<b>Kite</b>、<b>Gin</b>、ES、Redis、MongoDB、MySQL，以及少量的Kafka、图数据库等技术；</>,
            <><Title text="主要产出" />：</>,
            [
              <>搭建通用数据平台，支持数据链路可视化、可配置化，收敛三方接口权限，增强系统稳定性；</>,
              <>搭建机器审核模型迭代平台，支持语料标注、模型训练、阈值评估、快速灰度、模型部署的全流程自动化；</>,
              <>搭建通用召回链路，实现对Flink实时数据流进行召回规则判断、规则提升、计数清除、下游触发的能力，将数据侧与业务逻辑剥离；</>,
              <>搭建关联图谱与舆情平台，协助运营同学对薅羊毛、黑灰产等违规违法的团伙行为进行挖掘与打击；</>,
              <>工作之余完成个人负责项目40%~60%的单测覆盖率，及多个通用基础组件库的建设。</>,
            ]
          ]
        },
        {
          name: "天津（滨海）军民融合人工智能创新中心",
          duration: "2019.07 — 2020.04",
          position: "C++研发工程师",
          description: [
            <><Title text="公司简介" />：创新中心是人工智能领域的新型科研机构，致力于研发我国自主创新的群体协同人工智能操作系统。</>,
            <><Title text="工作概要" />：主要负责基于ROS机器人操作系统的无人平台应用开发工作；</>,
            <><Title text="技术栈" />：<b>C++</b>、<b>ROS</b>，以及少量的Gazebo和Docker相关技术；</>,
            <><Title text="荣誉奖项" />：于2019年12月分别获得<b>年度综合考评先进个人</b>与<b>年度优秀员工</b>；</>,
            <><Title text="主要产出" />：</>,
            [
              <>独立完成组内代码框架的构建，主要分为通信包、串口包、插件包、仿真包等模块； </>,
              <>完成Gazebo仿真平台上的海港应急场景构建，支持四种无人平台在同一场景下的仿真；</>,
              <>完成大工X402四旋翼无人机和致导科技Q2500复合翼无人机的micROS适配工作。</>,
            ]
          ]
        },
        {
          name: "成都琛石科技有限公司",
          duration: "2018.04 — 2018.10",
          position: "Golang后端实习生",
          description: [
            <><Title text="公司简介" />：公司专注虚拟化领域，旗下核心产品“实验楼”是国内领先的IT在线编程及实训学习平台。</>,
            <><Title text="工作概要" />：主要负责海外的IT在线学习平台的功能开发与维护工作；</>,
            <><Title text="技术栈" />：<b>Golang</b>、<b>Beego</b>、gRPC、MongoDB，以及少量的Docker、Docker Swarm、Flask等技术；</>,
            <><Title text="主要产出" />：</>,
            [
              <>学习使用Docker构建微服务环境，并通过gRPC实现服务间远程调用；</>,
              <>在与阿里云合作的澳门大数据比赛中，实现了动态报名表单处理、比赛流程逻辑处理、比赛排行榜信息统计和获取等功能；</>,
              <>实现用户登录、注册、活跃度等信息的统计与查看功能；</>,
              <>实现后台邮件模板以及一键自动发送功能，支持用户注册欢迎、低活跃用户召回等场景；</>,
              <>参与十一优惠活动的模型设计和逻辑实现，实现随机优惠码发放和使用功能。</>,
            ],
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
          duration: "2019.04 — 至今",
          preview_label: "项目地址：",
          preview_url: <Url url="https://github.com/Nomango/configor" />,
          description: [
            [
              <>C++练手项目，较多的使用了Modern C++语法与技巧，注重项目规范与编码质量；</>,
              <>支持了非常灵活的JSON格式数据交互，遵循标准库的设计语言，降低用户学习成本，尽显C++优雅风范；</>,
              <>在设计时尽可能考虑了可扩展性，未来还预计支持YAML、INI等其他数据格式；</>,
            ]
          ]
        },
        {
          name: "基于DirectX的C++ 2D游戏引擎",
          duration: "2017.09 — 2020.12",
          preview_label: "项目地址：",
          preview_url: <Url url="https://github.com/KiwanoEngine/kiwano" />,
          description: [
            [
              <>包含渲染引擎、场景管理、动画管理、GUI、音频引擎、物理引擎等模块，具有较完善的日志、内存管理、资源管理、事件分发与监听机制等功能；</>,
              <>以该项目完成了毕业设计《基于C++泛型与元编程的游戏引擎性能优化方案研究》，并申请获得<b>软件著作权</b>和<b>发明专利</b>；</>,
              <>具有易扩展性，支持基于XAudio2的多媒体音频模块、基于Box2D的物理引擎模块等。</>,
            ]
          ]
        },
        {
          name: "基于 NTP 的自校时打铃系统",
          duration: "2018.05 — 2019.05",
          preview_label: "项目地址：",
          preview_url: <Url url="https://github.com/Nomango/bellex" />,
          description: [
            [
              <>作为项目负责人带领 8 人小组设计和开发该系统，该项目成功获得 2018 年国家级大创项目立项资格，并在2019 年互联网+大赛中获得校赛第三名；</>,
              <>项目由<b>Beego</b>+<b>Vue</b>+<b>Electron</b>开发的后台系统，和一个与单片机通信的TCP服务器组成；</>,
              <>使用<b>Jenkins</b>进行持续集成和自动化部署，通过Github hook自动拉取代码更新并部署；</>,
              <>负责技术文档的编写以及维护，定期 review 小组成员的代码，与团队共同学习以及成长。</>,
            ]
          ]
        },
        {
          name: "基于Golang的local cache库",
          duration: "2020.12 — 2021.01",
          preview_label: "项目地址：",
          preview_url: <Url url="https://github.com/Nomango/go-cache" />,
          description: [
            [
              <>本地缓存小工具，支持高并发场景，支持自动清理、LRU等机制。</>,
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
          duration: "2016.10 — 2018.06",
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