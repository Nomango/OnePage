import './assets/css/index.css'
import Profile from './Profile'
import Content from './Content'
import Resume from './Resume'
import html2pdf from 'html2pdf.js'

// const fs = require('fs')
// import RNFS from 'react-native-fs';
// const YAML = require('yaml')

// console.log(RNFS.DocumentDirectoryPath)

function DownloadPdf() {
  var element = document.getElementById('main');
  var opt = {
    margin: 0,
    filename: `${Resume.name}-${Resume.desired_job}-简历.pdf`,
    image: { type: 'jpeg', quality: 0.98 },
    pagebreak: { mode: 'css' }, // 分页指示样式绑定在 content-item 元素上
    html2canvas: { scale: 2, ignoreElements: (e) => e.id == 'download-btn' },
    jsPDF: { unit: 'pt', format: 'a4', orientation: 'portrait' }
  };
  html2pdf().set(opt).from(element).save();
}

function App() {
  // var buffer = fs.readFileSync('./resume.yaml', 'utf8')
  // var buffer = await RNFS.readFile(RNFS.DocumentDirectoryPath + '/resume.yaml', 'utf8')
  // var resume = YAML.parse(buffer)
  return (
    <div className="main-wrapper">
      <div id="main" className="main-container font-hei">
        <div className="header">
          <div className="header-title">RESUME</div>
          <a id="download-btn" role="button" onClick={DownloadPdf}>Download PDF</a>
        </div>
        <Profile />
        <Content />
      </div>
    </div>
  )
}

export default App
