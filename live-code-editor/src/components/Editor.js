import React from 'react';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
import 'codemirror/mode/xml/xml';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/mode/css/css';
import {Controlled as ControlledEditor} from "react-codemirror2"

export default function Editor(props) {
    let {displayName,  language, value, onChange} = props;

    function handleChange(editor, data, value) {
        onChange(value)
    }

    return (
        <div className="editor">
            <div className="lang_name align_center flex between">
                 <div className="flex">
                     <div className="dots dot_1"></div>
                     <div className="dots dot_2"></div>
                     <div className="dots dot_3"></div>
                 </div>
                 {displayName}
            </div>
            <ControlledEditor
             onBeforeChange={handleChange} 
             value={value}
             className="code_mirror_wrapper"
             options={{
                 lineWrapping : true,
                 lint : true,
                 mode : language,
                 lineNumbers : true,
                 theme : "material",
                
             }}
            />
        </div>
    )
}
