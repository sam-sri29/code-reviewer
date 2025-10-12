import React from 'react'
import Markdown from 'react-markdown';


function Right({ reviews }) {
  let content = "No review yet.";

  if (reviews) {
    if (typeof reviews === "string") {
      content = reviews;
    } else if (typeof reviews === "object" && reviews.result) {
      content = reviews.result;
    } else {
      content = JSON.stringify(reviews, null, 2); 
    }
  }

  return (
    <div className='bg-gray-800 text-white h-[95vh] border rounded-2xl p-4 overflow-auto'>
      <h2 className='text-lg font-semibold mb-3'>AI Review Output</h2>
      <pre className='bg-gray-900 p-3 rounded-lg whitespace-pre-wrap break-words'>
        <Markdown>{content}</Markdown>
      </pre>
    </div>
  )
}

export default Right
