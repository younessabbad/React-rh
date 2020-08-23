import React, { useState } from 'react'
import { Worker } from '@phuocng/react-pdf-viewer';
import Viewer from '@phuocng/react-pdf-viewer';
import '@phuocng/react-pdf-viewer/cjs/react-pdf-viewer.css';


export default function Index() {
  const [url, setUrl] = React.useState('');

  // Handle the `onChange` event of the `file` input
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    (files.length > 0) && setUrl(URL.createObjectURL(files[0]));
  };


  return (
    <div className="Rhs">
      <h1>Upload condidat</h1>
      <Worker workerUrl="https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.4.456/pdf.worker.min.js">
        <input type="file" accept=".pdf" onChange={onChange} />

        <div style={{ height: '750px',width:'100%' }}>
          {
            url
              ? <Viewer fileUrl={url} />
              : (
                <div
                  style={{
                    alignItems: 'center',
                    border: '2px dashed rgba(0, 0, 0, .3)',
                    display: 'flex',
                    fontSize: '2rem',
                    height: '100%',
                    justifyContent: 'center',
                    width: '100%',
                  }}
                >
                  Preview area
                </div>
              )
          }
        </div>
      </Worker>
    </div>
  )
}