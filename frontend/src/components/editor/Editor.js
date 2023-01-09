import React, {useState}from 'react'
import AceEditor from "react-ace";
import {toast,ToastContainer} from 'react-toastify'
import "ace-builds/src-noconflict/mode-python";
import "ace-builds/src-noconflict/mode-java";
import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/mode-jsx";
import "ace-builds/src-noconflict/mode-c_cpp";

import "ace-builds/src-noconflict/snippets/python";
import "ace-builds/src-noconflict/snippets/java";
import "ace-builds/src-noconflict/snippets/javascript";
import "ace-builds/src-noconflict/snippets/jsx";
import "ace-builds/src-noconflict/snippets/c_cpp";

import "ace-builds/src-noconflict/theme-twilight";
import "ace-builds/src-noconflict/theme-tomorrow";
import "ace-builds/src-noconflict/theme-solarized_dark";
import "ace-builds/src-noconflict/theme-solarized_light";
import "ace-builds/src-noconflict/theme-terminal";
import "ace-builds/src-noconflict/theme-github";
import "ace-builds/src-noconflict/theme-tomorrow_night";
import "ace-builds/src-noconflict/theme-tomorrow_night_blue";
import "ace-builds/src-noconflict/theme-xcode";

import "ace-builds/src-min-noconflict/ext-searchbox";
import "ace-builds/src-min-noconflict/ext-language_tools";
import "ace-builds/src-noconflict/ext-language_tools"
import './Editor.css'

function Editor() {
      const [language,setLanguage]=useState('Select language')
      const [theme,setTheme]=useState('Select theme')
      const [sourceCode,setSourceCode]=useState('')
      const [userInput,setUserInput]=useState('')
      const [output,setOutput]=useState('')
      const [langId,setLangId]=useState(0)


      const handleSubmit=(e)=>{
          e.preventDefault()
        //   console.log("final",sourceCode);
          let outputText=document.getElementById('output')
          fetch('https://judge0-ce.p.rapidapi.com/submissions',{
              method:'post',
              headers:{
                "x-rapidapi-host": "judge0-ce.p.rapidapi.com",
                "x-rapidapi-key": "ab032fe615msh69965c1ccf87eb2p117914jsn23878deba289", // Get yours for free at https://rapidapi.com/judge0-official/api/judge0-ce/
                "content-type": "application/json",
                accept: "application/json",
              },
              body: JSON.stringify({
                source_code: sourceCode,
                stdin: userInput,
                language_id: langId,
              }),
          })
          .then(res=>res.json())
          .then(data=>{
              fetch(`https://judge0-ce.p.rapidapi.com/submissions/${data.token}?base64_encoded=false`,{
                  method:'get',
                  headers: {
                    "x-rapidapi-host": "judge0-ce.p.rapidapi.com",
                    "x-rapidapi-key": "ab032fe615msh69965c1ccf87eb2p117914jsn23878deba289", // Get yours for free at https://rapidapi.com/judge0-official/api/judge0-ce/
                    "content-type": "application/json",
                  }
              })
              .then(res=>res.json())
              .then(data=>{
                  if(data.stderr!=null && data.compile_output!=null && data.status.description!='Accepted'){
                      toast.error('Please try again')
                  }
                  if(data.status.description!='Accepted'){
                        outputText.innerHTML=data.stderr
                  }
                  else{
                      outputText.innerHTML=data.stdout
                  }
              })
          })

      }
  return (
      <div className='whole-editor-page'>
      
    <div className='editor'>
        <div className='options'>
        <div className="dropdown">
           
            <button id='language-button' className="dropbtn">{language}</button>
            <div class="dropdown-content">
            <a  onClick={e=>{setLangId(54);setLanguage('c_cpp')}}>C++</a>
            <a  onClick={e=>{setLangId(62);setLanguage('java')}}>Java</a>
            <a  onClick={e=>{setLangId(71);setLanguage('python')}}>Python</a>
            <a  onClick={e=>{setLangId(63);setLanguage('javascript')}}>Javascript</a>
            </div>
        </div>
        <div className="dropdown">
            <button className="dropbtn">{theme}</button>
            <div class="dropdown-content">
            <a  onClick={e=>setTheme('github')}>Github</a>
            <a  onClick={e=>setTheme('terminal')}>Terminal</a>
            <a  onClick={e=>setTheme('tomorrow')}>Tomorrow</a>
            <a  onClick={e=>setTheme('tomorrow_night')}>Tomorrow_night</a>
            <a  onClick={e=>setTheme('tomorrow_night_blue')}>Tomorrow_night_blue</a>
            <a  onClick={e=>setTheme('solarized_dark')}>solarized_dark</a>
            <a  onClick={e=>setTheme('solarized_light')}>solarized_light</a>
            <a  onClick={e=>setTheme('twilight')}>Twilight</a>
            <a  onClick={e=>setTheme('xcode')}>Xcode</a>
            </div>
        </div>
        </div>
        <AceEditor
            placeholder="Write your code here....."
            mode={language}
            theme={theme}
            name="DSA-Tracker"
            //   onLoad={this.onLoad}
              onChange={newValue=>{
                  setSourceCode(newValue)
              }}
            fontSize={16}
            width='700px'
            height='500px'
            showPrintMargin={true}
            showGutter={true}
            highlightActiveLine={true}

            setOptions={{
            enableBasicAutocompletion: true,
            enableLiveAutocompletion: true,
            enableSnippets: true,
            showLineNumbers: true,
            tabSize: 2,
  }}/>
        <button id='solution' onClick={e=>handleSubmit(e)}>Execute</button>
        <h5 id='input-heading'>Input</h5>
        <textarea placeholder=' Enter your input' value={userInput} id='zsp' onChange={e=>setUserInput(e.target.value)}></textarea>
        <h5 id='output-heading'>Output</h5>
        <textarea placeholder=' Output will be shown here' id='output'></textarea>
    </div>
    </div>
  )
}

export default Editor