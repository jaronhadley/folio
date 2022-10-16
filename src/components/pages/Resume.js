import React, { useState } from 'react';

export default function Resume() {
    const onButtonClick = () => {
        // using Java Script method to get PDF file
        fetch('Sample Resume.pdf').then(response => {
            response.blob().then(blob => {
                // Creating new object of PDF file
                const fileURL = window.URL.createObjectURL(blob);
                // Setting various property values
                let alink = document.createElement('a');
                alink.href = fileURL;
                alink.download = 'resume.pdf';
                alink.click();
            })
        })
    }

    return (
      <div>
        <h1>Skill List</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed neque
          velit, lobortis ut magna varius, blandit rhoncus sem. Morbi lacinia nisi
          ac dui fermentum, sed luctus urna tincidunt. Etiam ut feugiat ex. Cras
          non risus mi. Curabitur mattis rutrum ipsum, ut aliquet urna imperdiet
          ac. Sed nec nulla aliquam, bibendum odio eget, vestibulum tortor. Cras
          rutrum ligula in tincidunt commodo. Morbi sit amet mollis orci, in
          tristique ex. Donec nec ornare elit. Donec blandit est sed risus feugiat
          porttitor. Vestibulum molestie hendrerit massa non consequat. Vestibulum
          vitae lorem tortor. In elementum ultricies tempus. Interdum et malesuada
          fames ac ante ipsum primis in faucibus.
        </p>
        <button onClick={onButtonClick}>
            Download Resume
        </button>
      </div>
    );
  }