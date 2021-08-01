import React, { useState } from 'react';
import Dropdown from './Dropdown';

// AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM

const options = [
    {
        label: 'Japanese',
        value: 'ja'
    },
    {
        label: 'Portuguese',
        value: 'pt'
    },
    {
        label: 'Spanish',
        value: 'es'
    }
];

const Translate = () => {
    const [language, setLanguage] = useState(options[0]);
    const [text, setText] = useState('');
    
    return (
        <div>
            <div className="ui form">
                <div className="field">
                    <label>Enter Text</label>
                    <input value={text} onChange={(e) => setText(e.target.value)} />
                </div>
            </div>
            <Dropdown
                label="Select a language"
                options={options}
                selected={language}
                onSelectedChange={setLanguage}
            />
        </div>
    );
}

export default Translate;