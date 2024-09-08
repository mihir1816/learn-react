import React from 'react';
import ReactMarkdown from 'react-markdown'; 

function FormattedResponse({ text }) {
  return (
    <div className="p-4 max-h-80 bg-white border rounded-lg shadow-md overflow-auto ">
      <ReactMarkdown>
        {text}
      </ReactMarkdown>
    </div>
  );
}

export default FormattedResponse;
