import React, { useEffect, useState } from 'react'
import prism from 'prismjs'
import 'prismjs/themes/prism-tomorrow.css'
import 'prismjs/components/prism-javascript'
import Editor from 'react-simple-code-editor';
import axios from 'axios'


function Left({setReviews}) {

    const [count, setCount] = useState(0);
    const[code, setCode] = useState(`function add(a, b) {
  return a + b;
}
`);
    
    useEffect(() => {
        prism.highlightAll();
    })

    async function review() {
        try {
            const response = await axios.post('http://localhost:3000/ai/get-response',{ prompt: code });
            setReviews(response.data);
        } catch (error) {
            console.error('Error during code review:', error);
        }
    }
    return (
        <div className='bg-black h-[95vh] border rounded-2xl text-white p-4 relative'>
            
            <div className='code'>
                <Editor
                    value={code}
                    onValueChange={code => setCode(code)}
                    highlight={code => prism.highlight(code, prism.languages.javascript, 'javascript')}
                    padding={10}
                    style={{
                        fontFamily: '"Fira code", "Fira Mono", monospace',
                        fontSize: 14,
                        minHeight: '85vh',
                        overflowY: 'auto',
                        borderRadius: '0.5rem',
                        backgroundColor: '#1e1e1e'
                    }}
                />
            </div>
            {/* Review Button (inside the left panel) */}
            <div><button onClick={review} className='absolute bottom-4 right-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg shadow-md transition-all'>
                Review
            </button></div>
        </div>
    )
}

export default Left
