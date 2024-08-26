import Link from '../Components/Link'
import { faPhone, faUser, faEnvelope, faBriefcase, faCode, faGraduationCap, faPenToSquare, faStar, faListCheck, faCubes, faAddressCard, faUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'
import { faGithubAlt } from '@fortawesome/free-brands-svg-icons'
import Icon from '../Components/Icon'
import { GithubRepoStarBadge } from '../Components/Badge'
import Private from './private'
import React from 'react'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { faBuilding } from '@fortawesome/free-solid-svg-icons'

const Resume = {
  name: '刘海波',
  nick_name: 'Nomango',
  // signature: `全栈工程师 - ${WorkingYears(2019)}年开发经验`,
  signature: <>男 | 1996 | {WorkingYears(2019)} 年工作经验 | 联系方式：{Private.phone} / <Link url="mailto://nomango@qq.com">nomango@qq.com</Link></>,
  desired_job: "全栈工程师",
  avatar: Private.avatar,
  home_page: 'https://nomx.dev',
  basic_info: [
    {
      icon: faBuilding,
      content: <>现居四川成都</>,
    },
    {
      icon: faGithubAlt,
      content: <Link url="https://github.com/nomango">Github/Nomango</Link>
    },
    {
      icon: faGraduationCap,
      content: <>西南民族大学（本科）</>,
    },
    {
      // icon: faGraduationCap,
      content: <>软件工程（2015-2019）</>,
    },
    // {
    //   icon: faPhone,
    //   content: Private.phone,
    // },
    // {
    //   icon: faEnvelope,
    //   content: <Link url="mailto://nomango@qq.com">nomango@qq.com</Link>
    // },
  ],
  sections: [
    // {
    //   title: '个人信息',
    //   icon: faAddressCard,
    //   items: [
    //     {
    //       group: [
    //         {
    //           icon: faBuilding,
    //           content: <>现居四川成都</>,
    //         },
    //         {
    //           icon: faGithubAlt,
    //           content: <Link url="https://github.com/nomango">Github/Nomango</Link>
    //         },
    //         {
    //           icon: faGraduationCap,
    //           content: <>西南民族大学（本科）</>,
    //         },
    //         {
    //           // icon: faGraduationCap,
    //           content: <>软件工程专业</>,
    //         },
    //       ],
    //       // description: [
    //       //   // <><p style={{ height: '1rem' }} />联系方式：{Private.phone} | <Link url="mailto://nomango@qq.com">nomango@qq.com</Link></>,
    //       //   <><p style={{ height: '1rem' }} />期望职业：架构师、全栈工程师</>,
    //       // ],
    //     },
    //   ]
    // },
    {
      title: '自我评价',
      icon: faPenToSquare,
      items: [
        {
          description: [
            [
              <>5年Go后端、2年容器相关开发经验，熟悉主流微服务架构方案，有多个中大型项目任职经历；</>,
              // <>核心技能：Golang、Python、Docker (Swarm)、MySQL、MongoDB、Redis、ES、Kafka、Nginx、Aliyun DevOps、Supabase、Cloudflare；</>,
              <>为人细心、开朗乐观、追求极致，自我驱动力强，乐于为项目的发展承担额外的工作和责任。</>,
            ],
          ]
        }
      ]
    },
    // {
    //   title: '专业技能',
    //   icon: faListCheck,
    //   items: [
    //     {
    //       description: [
    //         [
    //           <>拥有丰富的后端开发经验，擅长微服务架构、分布式系统以及。具备卓越的技术领导力和团队协作能力，在多个大型项目中发挥关键作用。</>,
    //         ]
    //       ]
    //     }
    //   ]
    // },
    {
      title: '工作经历',
      icon: faBriefcase,
      items: [
        {
          name: <>成都航诺莱百科技有限公司</>,
          duration: "2022/06 - 至今",
          position: "全栈工程师",
          description: [
            <><Title text="公司简介" />：10人左右技术范小团队，主要创建 LabEx（在线IT实验与AI教学网站 <ExternalLink url="https://labex.io" /> ）和 GetVM（云桌面浏览器插件 <ExternalLink url="https://getvm.io" /> ）两款产品；</>,
            <><Title text="工作内容" />：担任<b>技术合伙人</b>合伙创办该公司，负责系统架构设计、核心代码编写、DevOps 的搭建及维护等等；</>,
            <><Title text="技术栈" />：Docker (Swarm)、Golang、MySQL、MongoDB、Redis、Nginx、Nuxt.js、Deno.js、Supabase、Deno/Vercel Serverless、Cloudflare Worker/Queue/R2、Aliyun DevOps；</>,
            <><Title text="主要产出 & 工程难点" />：</>,
            [
              <>负责包括课程系统、用户容器环境分配服务、AI对话助手、OAuth、支付系统、站内积分、异步任务等模块在内的整个网站所有主要接口的设计及开发工作；</>,
              <>封装 Docker Swarm 实现独特的容器编排服务，支持用户环境的快速保存和启动、NAS 持久化存储挂载，保障系统稳定运行用户容器实验<b>30w+</b>次、云主机实验<b>3w+</b>次；</>,
              // <>独立完成基于 Github Action 的完整 CICD 流程，容器化部署微服务，支持产品的快速迭代交付；</>,
              <>通过GA流量分析、SEMRush分析、SEO优化、AB测试运营策略等多种手段促长自然流量、提升转化率，帮助产品<b>从0成长到15w+</b>用户量；</>,
              <>通过<b>AI实际应用</b>提升产研人效，如自动化运营社交账号、识别及打击恶意用户操作、自动化产出格式化课程内容、实时制作课程封面等等。</>,
            ],
            // <><Title text="公司简介" />：10人左右技术范小团队，主要创建 LabEx（在线IT实验与AI教学网站 <ExternalLink url="https://labex.io" /> ）和 GetVM（云桌面浏览器插件 <ExternalLink url="https://getvm.io" /> ）两款产品；</>,
            // <><Title text="工作内容" />：担任<b>技术合伙人</b>合伙创办该公司，负责包括从0到1的技术团队组建、系统架构设计、核心代码编写、DevOps 的搭建及维护等等；</>,
            // <><Title text="技术栈" />：Docker (Swarm)、gRPC、Nginx、MongoDB、Redis、Nuxt.js、Deno.js、Supabase、Deno/Vercel Serverless、Cloudflare Worker/Queue/R2、Aliyun DevOps；</>,
            // <><Title text="主要产出 & 工程难点" />：</>,
            // [
            //   <>在职期间保障系统稳定运行容器实验<b>30w+</b>次、云主机实验<b>3w+</b>次，应对服务异常、存储异常、高峰流量、恶意攻击等问题，确保核心业务系统的高可用性；</>,
            //   <>魔改 Docker Swarm 实现用户环境的快速保存和启动，支持用户挂载 NAS 持久化存储，支持VNC、WebIDE、SSH等多种界面交互；</>,
            //   <>落实<b>技术质量把控</b>，如规范PR准入流程、自动化单元测试、异常监控及上报(Sentry)、日志收集(SLS) 等。</>,
            //   <>独立完成基于 Github Action 的完整 CICD 流程，容器化部署微服务，支持产品的快速迭代交付；</>,
            //   <>通过GA流量分析、SEMRush分析、SEO优化、AB测试运营策略等多种手段促长自然流量、提升转化率，帮助产品<b>从0成长到15w+</b>用户量；</>,
            //   <>通过<b>AI实际应用</b>提升产研人效，如自动化社交账号运营、用户恶意操作识别及打击、自动化产出格式化课程内容、课程封面实时制作等等。</>,
            // ],
          ]
        },
        // {
        //   name: '同程网络科技股份有限公司',
        //   duration: "2022/05 - 2022/09",
        //   position: "Go 后端工程师",
        //   description: [
        //     <><Title text="工作内容" />：负责机票代理人系统开发工作，在系统重构工作中参与微服务划分，完成机票查询系统的设计、项目搭建、核心代码开发等；</>,
        //   ]
        // },
        {
          name: '字节跳动科技有限公司',
          duration: "2020/04 - 2022/05",
          position: "Go 后端工程师",
          description: [
            <><Title text="工作内容" />：负责广告审核的核心业务开发工作，逐步从只实现业务功能成长为可以<b>参与系统设计</b>的一员，可以独自完成服务设计与开发、应对系统突发流量等紧急情况等等；</>,
            <><Title text="荣誉奖项" />：在职期间持续保持 <b>绩效优异</b>，并于2022年4月获得<b>Spot Bonus</b> - 超出预期成果奖项；</>,
            <><Title text="技术栈" />：Golang、Python、Redis、MySQL、ES、Kafka、HiveSQL；</>,
            <><Title text="主要产出 & 工程难点" />：</>,
            [
              <>参与风控规则平台系统设计，负责核心业务代码编写，实现MVP版本支撑 <b>15w+ QPS</b> 数据流的目标；</>,
              <>在替代老送审方案的过程中，负责灰度测试、服务放量等工作，成功完成了 10 个以上业务队列的平滑接入；</>,
              <>负责开发模型迭代平台核心业务代码，实现模型迭代的全流程自动化处理，平均提升用户工作效率<b>40%以上</b>（由模型同学统计，精确到秒）；</>,
              <>在灰度能力迭代工作中，负责离线数据复用方案的实现，节约<b>95%硬件资源</b>（由CPU核数和内存统计），并在不同情境下提升约<b>20% ~ 40% 运行效率</b>；</>,
              <>编写关联图谱平台核心代码，完成离线数据清洗 → 数据导入 → ES查询的完整链路的搭建，在上线后4个月内协助运营同学在百万级用户量中精准打击了<b>1400+</b>违规用户；</>,
              <>工作之余完成个人负责项目40% ~ 60%的单测覆盖率，同时建设了多个基础组件。</>,
            ],
            // <><Title text="主要产出" />：</>,
            // [
            //   <>主导风控规则平台从0到1建设，对15w+ QPS的数据流进行动态的风控规则判断，解耦数据流与业务逻辑，支持快速接入业务定制的风控场景；</>,
            //   <>参与风控模型迭代自动化平台建设，实现模型迭代的全流程自动化处理，平均提升用户工作效率40%以上；</>,
            //   <>参与灰度能力迭代，复用离线数据，平均节约95%硬件资源，并在不同情境下提升约20% ~ 40%的性能；</>,
            //   <>参与某风控工具建设，搭建离线数据清洗→数据导入→ES查询的完整链路，可查询关联的违规用户，在上线后4个月内协助运营同学打击了1400+违规用户；</>,
            //   <>工作之余完成个人负责项目40% ~ 60%的单测覆盖率，同时建设了多个基础组件库。</>,
            // ]
          ]
        },
        {
          name: "天津军民融合人工智能创新中心",
          duration: "2019/07 - 2020/04",
          position: "C++研发工程师",
          description: [
            <><Title text="工作内容" />：负责基于ROS的机器人操作系统开发工作，完成仿真平台上的某应急场景构建，及某型号复合翼无人机的ROS操作系统适配工作；</>,
            <><Title text="荣誉奖项" />：于2020年获得<b>年度综合考评先进个人</b>与<b>年度优秀员工</b>，是唯一同时获得该两项奖项的员工。</>,
            // <><Title text="公司简介" />：创新中心是人工智能领域的新型科研机构，致力于研发我国自主创新的群体协同人工智能操作系统。</>,
            // <><Title text="工作内容" />：主要负责基于ROS机器人操作系统的无人平台应用开发工作；</>,
            // <><Title text="技术栈" />：<b>ROS</b>（Robot OS），<b>Gazebo</b>，以及少量的嵌入式和Docker相关技术；</>,
            // <><Title text="主要产出" />：</>,
            // [
            //   <>完成某仿真平台上的某应急场景构建，支持四种无人平台在同一场景下的仿真运行；</>,
            //   <>完成某型号四旋翼无人机和某型号复合翼无人机的ROS操作系统适配工作。</>,
            // ]
          ]
        },
        // {
        //   name: "国信蓝桥（成都）教育科技有限公司",
        //   duration: "2018/04 - 2018/10",
        //   position: "Golang后端实习生",
        //   description: [
        //     // <><Title text="公司简介" />：公司专注虚拟化领域，旗下核心产品“实验楼”是国内领先的IT在线编程及实训学习平台。</>,
        //     <><Title text="工作内容" />：主要负责海外的IT在线学习平台的功能开发与维护工作；</>,
        //     <><Title text="技术栈" />：<b>Golang</b>、<b>Beego</b>、gRPC、MongoDB，以及少量的Docker、Swarm、Flask等技术；</>,
        //     <><Title text="主要产出" />：</>,
        //     [
        //       <>在与阿里云合作的澳门大数据比赛中，实现了报名表单、比赛流程逻辑处理、排行榜等功能；</>,
        //       <>实现用户常见信息统计功能，包括登录、注册、活跃度等信息的留存、统计与查看等；</>,
        //       <>参与国庆优惠活动的模型设计和逻辑实现，实现随机优惠码发放和使用功能。</>,
        //     ],
        //   ]
        // }
      ]
    },
    // {
    //   title: '项目经历',
    //   icon: faCubes,
    //   items: [
    //     {
    //       name: <>LabEx 在线实验与AI教学网站 <ExternalLink url="https://labex.io" /></>,
    //       duration: "2022/06 - 至今",
    //       // position: "技术负责人",
    //       description: [
    //         <>技术栈：Docker (Swarm)、GRPC、Nginx、MongoDB、Redis、Nuxt.js、Vercel/Deno/Aliyun Serverless；</>,
    //         <>主要产出：</>,
    //         [
    //           <>作为技术负责人完成系统架构设计、核心业务代码编写、DevOps 的搭建及维护等等；</>,
    //           <>在职期间保障系统稳定运行容器实验<b>30w+</b>次、云主机实验<b>3w+</b>次，应对服务异常、存储异常、高峰流量、恶意攻击等问题，确保核心业务系统的高可用性；</>,
    //           <>通过GA流量分析、SEMRush分析、SEO优化、AB测试运营策略等多种手段促长自然流量、提升转化率，帮助产品从零成长到15w+用户量；</>,
    //           <>通过<b>AI实际应用</b>提升产研人效，如自动化社交账号运营、用户恶意操作识别及打击、自动化产出格式化课程内容、课程封面实时制作等等。</>,
    //         ],
    //         // [
    //         //   <>项目简介：面向海外 IT 教育，为用户提供容器 / 云主机实验环境，通过AI 辅助教学、Project动手实验、技能树、步骤化教程等方式促进用户学习；</>,
    //         //   <>技术选型：Web 框架以 <b>Golang Kratos</b> 为主，灵活选用 Cloudflare Worker/Queue/R2、Supabase、Deno 等部署微服务，用户环境采用 Docker Swarm + KasmVNC + CodeServer + TTYD；</>,
    //         //   <>工程难点：魔改 <b>Docker Swarm</b> 实现容器集群管理，通过 Nginx + Docker Network 实现任意端口访问，支持会员用户的环境保存功能；</>,
    //         //   <>CICD：主要通过 Github Workflow 完成单元测试、镜像构建、部署自动化、发布通知，通过 Docker Swarm 管理集群和服务，所有服务分离部署 Staging 和线上环境。</>,
    //         // ],
    //       ],
    //     },
    //     {
    //       name: <>GetVM 云桌面浏览器插件 <ExternalLink url="https://getvm.io" /></>,
    //       duration: "2024/05 - 至今",
    //       // position: "技术负责人",
    //       description: [
    //         <>技术栈：Chrome Extension、Supabase、Cloudflare Worker/Queue/R2、Vue.js、Deno.js；</>,
    //         <>主要产出：</>,
    //         [
    //           <>独立一人在<b>两周</b>内完成 MVP 版本，包括插件开发、Serverless服务开发、认证鉴权、监控告警等等，支持产品的快速迭代、交付。</>,
    //         ],
    //         // [
    //         //   <>项目简介：一款浏览器插件，借助 Chrome 在 23 年 5 月新推出的 SidePanel 功能，为用户提供在侧边栏访问云桌面的功能；</>,
    //         //   // <>技术选型：插件框架选用 Wxt + Vue3，用户环境和 LabEx 同样采用 Docker Swarm 管理；</>,
    //         //   <>工程难点：通过 NAS 挂载为用户提供持久化存储功能，通过 iptables + 阿里云风险监控 实现网络管控和挖矿等风险事件及时处理；</>,
    //         //   // <>CICD：主要通过 Github Workflow 完成自动化管理插件版本、自动化发布 Chrome、Edge 商店。</>,
    //         // ],
    //       ],
    //     },
    //     {
    //       name: <>广告风控规则平台（字节跳动广告审核子平台）</>,
    //       duration: "2021/12 - 2022/05",
    //       description: [
    //         <>技术栈：Golang、Python、Kafka、Redis、MySQL、Grafana；</>,
    //         <>主要产出：</>,
    //         [
    //           <>参与系统设计，并负责核心业务代码编写，实现MVP版本支撑 <b>15w+ QPS</b> 数据流的目标；</>,
    //           <>在替代老送审方案的过程中，负责灰度测试、服务放量、单人值班等工作，成功完成了 10 个以上业务队列的平滑接入。</>,
    //         ],
    //       ],
    //     },
    //     {
    //       name: <>模型迭代平台（字节跳动广告审核子平台）</>,
    //       duration: "2021/08 - 2022/05",
    //       description: [
    //         <>技术栈：Golang、Bytedance Workflow、MySQL、HiveSQL；</>,
    //         <>主要产出：</>,
    //         [
    //           <>负责开发核心业务代码，实现模型迭代的全流程自动化处理，达到平均提升用户工作效率<b>40%以上</b>的目标（由模型同学统计，精确到秒）；</>,
    //           <>在灰度能力迭代工作中，负责离线数据复用方案的实现，节约<b>95%硬件资源</b>（由CPU核数和内存统计），并在不同情境下提升约<b>20% ~ 40% 运行效率</b>；</>,
    //         ],
    //       ],
    //     },
    //     {
    //       name: <>关联图谱平台（字节跳动广告审核子平台）</>,
    //       duration: "2020/05 - 2021/01",
    //       description: [
    //         <>技术栈：Golang、ES、HiveSQL；</>,
    //         <>主要产出：</>,
    //         [
    //           <>编写该平台核心代码，完成离线数据清洗 → 数据导入 → ES查询的完整链路的搭建，在上线后4个月内协助运营同学在百万级用户量中精准打击了<b>1400+</b>违规用户。</>,
    //         ],
    //       ],
    //     },
    //   ],
    // },
    {
      title: '个人开源项目',
      icon: faCode,
      items: [
        {
          name: <>Modern C++适用的通用配置库 <ExternalLink url="https://github.com/nomango/configor" /></>,
          position: <GithubRepoStarBadge user="Nomango" repo="configor" />,
          // position: <>320+ <Icon icon={faStar} /></>,
          duration: "2019/04",
          // preview_label: "项目地址：",
          // preview_url: <Link url="https://github.com/Nomango/configor" />,
          description: [
            [
              <>仅头文件的轻量级 C++11 配置库，遵循STL设计规范，具有非侵入式的序列化与反序列化、自定义类型隐式转换、完备的Unicode支持等特点；</>,
              <>注重项目规范与编码质量，<b>单测覆盖率&gt;90%</b>，并通过Github Actions检查常见系统和编译器的可移植性。</>,
              // <>在设计时尽可能考虑了可扩展性，目前仅支持JSON，未来还预计支持YAML、INI等其他数据格式。</>,
            ]
          ]
        },
        {
          name: <>Kiwano 2D游戏引擎 <ExternalLink url="https://kiwanoengine.com" /></>,
          position: <GithubRepoStarBadge user="KiwanoEngine" repo="Kiwano" />,
          // position: <>170+ <Icon icon={faStar} /></>,
          duration: "2017/09",
          // preview_label: "项目地址：",
          // preview_url: <Link url="https://kiwanoengine.com" />,
          description: [
            [
              <>基于Direct2D实现的C++ 2D游戏引擎，包含渲染引擎、场景管理、动画管理、音频管理、物理引擎等模块，具有较完善的日志、内存管理、资源管理、事件分发与监听等功能；</>,
              <>该项目获得了<b>软件著作权</b>和<b>发明专利</b>，并以该项目完成了毕业设计《基于C++泛型与元编程的游戏引擎性能优化方案研究》；</>,
              <>通过模板元编程技巧实现Matrix乘法表达式懒展开、侵入式的场景节点树结构等以优化游戏性能。</>,
              // <>支持模块扩展，支持基于 XAudio2 + MediaFoundation 的多媒体音频模块、基于 ImGui 的 UI 模块、基于 Box2D 的物理引擎模块等；</>,
              // <>接入appveyor ci自动构建与发布流程，通过PowerShell Script收集多job下产物，打包为7z与exe两种格式的installer，并发布到nuget平台。</>,
            ]
          ]
        },
        // {
        //   name: <>基于 NTP 的自校时打铃系统 <ExternalLink url="https://github.com/Nomango/bellex" /></>,
        //   duration: "2018/05",
        //   position: "大创项目",
        //   // preview_label: "项目地址：",
        //   // preview_url: <Link url="https://github.com/Nomango/bellex" />,
        //   description: [
        //     [
        //       <>作为<b>项目负责人</b>带领 8 人小组设计和开发该系统，该项目成功获得 2018 年国家级大创项目立项，并在2019年互联网+大赛中获得校赛第三名；</>,
        //       // <>项目背景：使用NTP校时技术优化现有打铃系统的校时模块，提升校时精确性，相比于GPS校时降低约80%费用；</>,
        //       <>技术栈：Electron 客户端 + Beego 后端服务 + TCP 服务端 + STM32f1 单片机程序，同时使用<b>Jenkins</b>进行持续集成和自动化部署。</>,
        //       // <>使用<b>Jenkins</b>进行持续集成和自动化部署，通过Github hook自动拉取代码更新并部署；</>,
        //       // <>负责技术文档的编写以及维护，定期 review 小组成员的代码，与团队共同学习以及成长。</>,
        //     ]
        //   ]
        // },
        // {
        //   name: "Local Cache for Golang",
        //   duration: "2020/12 - 2021/01",
        //   preview_label: "项目地址：",
        //   preview_url: <Link url="https://github.com/Nomango/go-cache" />,
        //   description: [
        //     [
        //       <>本地缓存小工具，支持高并发场景，支持自动清理、LRU等机制。</>,
        //     ]
        //   ]
        // },
        // {
        //   name: "OnePage个人主页",
        //   duration: "2022/03 - 2022/03",
        //   preview_label: "项目地址：",
        //   preview_url: <Link url="https://onepage.nomango.cn" />,
        //   description: [
        //     [
        //       <>这个简历本身；</>,
        //       <>使用<b>ViteJS</b> + <b>React</b>搭建，支持主题切换 和 一键导出PDF。</>,
        //     ]
        //   ]
        // }
      ]
    },
    {
      title: '校园经历',
      icon: faGraduationCap,
      items: [
        {
          name: "西南民族大学",
          duration: "2015/09 - 2019/06",
          position: "软件工程（本科）",
          description: [
            // "GPA：3.02 / 4.00 （专业GPA：3.37）",
            "荣誉/奖项：优秀毕业设计（2019）、校级先进个人（2017-2018）、优秀团员（2016-2017）"
          ],
        },
        {
          name: "敲客校园",
          duration: "2016/10 - 2018/06",
          position: "社团发起人",
          description: [
            [
              <>作为社团<b>发起人</b>之一，带领 20 人左右的编程爱好者团队开展交流活动和小型编程竞赛；</>,
              <>组织团队成员完成外包任务，与创行中国合作完成了“摩麦搭档(H5)” “万豪问答(H5)”等多个项目。</>,
            ]
          ]
        },
      ]
    },
  ]
}

function Title(props) {
  return <>{props.text}</>
  // return <b>{props.text}</b>
}

function WorkingYears(entryYear) {
  return new Date().getFullYear() - entryYear
}

function ExternalLink(props) {
  let { children, ...rest } = props;
  return <Link {...rest}><Icon className='profile-item-icon' icon={props.icon || faUpRightFromSquare} />{children}</Link>
}

export default Resume;
