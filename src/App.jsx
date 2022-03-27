import './assets/css/index.css'
import { useState } from "react"
import Profile from './Profile'
import Content from './Content'
import Resume from './Resume'
import html2pdf from 'html2pdf.js'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDownload, faPaintRoller } from '@fortawesome/free-solid-svg-icons'

function DownloadPdf() {
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

function App() {
  const themes = ['blues', 'plain'];
  const [theme, setTheme] = useState(0);
  const switchTheme = () => {
    let value = theme+1
    if (value == themes.length) {
      setTheme(0)
    } else {
      setTheme(value)
    }
  }
  return (
    <div className="main-wrapper">
      <div id="main" className={`main-container font-hei theme-${themes[theme]}`}>
        <Profile />
        <Content />
      </div>
      <div id="sidebar">
        <a role="button" onClick={switchTheme}><FontAwesomeIcon icon={faPaintRoller} /> Theme</a>
        <a role="button" onClick={DownloadPdf}><FontAwesomeIcon icon={faDownload} /> Download</a>
      </div>
    </div>
  )
}

export default App
