import './assets/css/index.css'
import { useMemo, useState } from "react"
import html2pdf from 'html2pdf.js'
import Icon from './Components/Icon'
import { faCode, faDownload, faHouse, faPaintRoller } from '@fortawesome/free-solid-svg-icons'
import Resume from './Resume'
import Plain from './themes/Plain'
import Blues from './themes/Blues'
import { autoGenTextSpace } from './utils/text-autospace'
import Link from './Components/Link'
import GlobalContext from './Components/Context'

// 自动在中英文中间加空格
autoGenTextSpace('#main');

const Themes = [Plain, Blues];

export default function App() {
  const [themeIdx, setTheme] = useState(0);
  const switchTheme = () => {
    setTheme((themeIdx + 1) % Themes.length);
  };
  const value = useMemo(
    () => ({
      resume: Resume,
      theme: Themes[themeIdx],
    }),
    [Resume, themeIdx]
  );
  return (
    <GlobalContext.Provider value={value}>
      <div id='main-wrapper' className='font-hei'>
        <div id="main">
          {<value.theme />}
        </div>
        <div id="sidebar">
          {
            value.resume.home_page && (
              <Link url={value.resume.home_page}><Icon icon={faHouse} /> HomePage</Link>
            )
          }
          <a role="button" onClick={switchTheme}><Icon icon={faPaintRoller} /> Theme</a>
          <a role="button" onClick={downloadPdf}><Icon icon={faDownload} /> Download</a>
          <Link url='https://github.com/Nomango/onepage'><Icon icon={faCode} /> Source</Link>
        </div>
      </div>
    </GlobalContext.Provider>
  )
}

function downloadPdf() {
  // 为了保证输出到pdf的字体合适，需要修改根元素字体大小，并在pdf生成后恢复
  var root = document.querySelector(':root');
  var oldProp = root.style.fontSize;
  root.style.setProperty('font-size', '10px'); // 这个需要和 index.css 同步

  var element = document.getElementById('main');
  var opt = {
    margin: [30, 0],
    filename: `${Resume.name}-${Resume.desired_job}-简历.pdf`,
    image: { type: 'jpeg', quality: 0.98 },
    pagebreak: { mode: 'css' }, // 分页指示样式绑定在 content-item 元素上
    html2canvas: {
      ignoreElements: (e) => e.id == 'sidebar',
      scale: 2,
      imageTimeout: 1000,
      windowWidth: 800,
    },
    jsPDF: { unit: 'pt', format: 'a4', orientation: 'portrait' }
  };
  html2pdf().set(opt).from(element).save().then(() => {
    root.style.setProperty('font-size', oldProp);
  });
}
