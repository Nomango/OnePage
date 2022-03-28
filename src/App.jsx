import './assets/css/index.css'
import { useState } from "react"
import html2pdf from 'html2pdf.js'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDownload, faPaintRoller } from '@fortawesome/free-solid-svg-icons'
import Resume from './Resume'
import Plain from './themes/Plain'
import Blues from './themes/Blues'

export default function App() {
  const Themes = [Plain, Blues].map(Theme => {
    return <Theme resume={Resume} />
  });
  const [themeIdx, setTheme] = useState(0);
  const switchTheme = () => setTheme((themeIdx + 1) % Themes.length);
  return (
    <div className='main-wrapper font-hei'>
      <div id="main">
        { Themes[themeIdx] }
      </div>
      <div id="sidebar">
        <a role="button" onClick={switchTheme}><FontAwesomeIcon icon={faPaintRoller} /> Theme</a>
        <a role="button" onClick={downloadPdf}><FontAwesomeIcon icon={faDownload} /> Download</a>
      </div>
    </div>
  )
}

function downloadPdf() {
  var element = document.getElementById('main');
  var opt = {
    margin: 0,
    filename: `${Resume.name}-${Resume.desired_job}-简历.pdf`,
    image: { type: 'jpeg', quality: 0.98 },
    pagebreak: { mode: 'css' }, // 分页指示样式绑定在 content-item 元素上
    html2canvas: { scale: 2, ignoreElements: (e) => e.id == 'sidebar', imageTimeout: 1000 },
    jsPDF: { unit: 'pt', format: 'a4', orientation: 'portrait' }
  };
  html2pdf().set(opt).from(element).save();
}
