import React from 'react';
import ReactMarkdown from 'react-markdown'; 

function FormattedResponse({ text }) {
  return (
    <div className="p-4 bg-white border rounded-lg shadow-md">
      <ReactMarkdown>
        {text}
      </ReactMarkdown>
    </div>
  );
}

export default FormattedResponse;
