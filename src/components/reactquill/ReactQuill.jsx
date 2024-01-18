// // Importing helper modules
// import { useCallback, useMemo, useRef, useState } from 'react';

// // Importing core components

// import ReactQuill, { Quill } from 'react-quill';
// import ImageResize from 'quill-image-resize-module-react';

// // Importing styles
// import 'react-quill/dist/quill.snow.css';
// import styles from './quill.css';

// import quillEmoji from 'react-quill-emoji';
// import 'react-quill-emoji/dist/quill-emoji.css';

// const Editor = () => {
//   // Editor state
//   const [value, setValue] = useState('');

//   // Editor ref
//   const quill = useRef();

//   //   // Handler to handle button clicked
//   //   function handler() {
//   //     console.log(value);
//   //   }

//   const imageHandler = useCallback(() => {
//     // Create an input element of type 'file'
//     const input = document.createElement('input');
//     input.setAttribute('type', 'file');
//     input.setAttribute('accept', 'image/*');
//     input.click();

//     // When a file is selected
//     input.onchange = () => {
//       const file = input.files[0];
//       const reader = new FileReader();

//       // Read the selected file as a data URL
//       reader.onload = () => {
//         const imageUrl = reader.result;
//         const quillEditor = quill.current.getEditor();

//         // Get the current selection range and insert the image at that index
//         const range = quillEditor.getSelection(true);
//         quillEditor.insertEmbed(range.index, 'image', imageUrl, 'user');
//       };

//       reader.readAsDataURL(file);
//     };
//   }, []);

//   Quill.register('modules/imageResize', ImageResize);
//   Quill.register(
//     {
//       'formats/emoji': quillEmoji.EmojiBlot,
//       'modules/emoji-toolbar': quillEmoji.ToolbarEmoji,
//       'modules/emoji-textarea': quillEmoji.TextAreaEmoji,
//       'modules/emoji-shortname': quillEmoji.ShortNameEmoji,
//     },
//     true
//   );

//   const modules = useMemo(
//     () => ({
//       toolbar: {
//         // container: [
//         //   [{ header: [2, 3, 4, false] }],
//         //   ['bold', 'italic', 'underline', 'blockquote'],
//         //   [{ color: [] }],
//         //   [{ list: 'ordered' }, { list: 'bullet' }, { indent: '-1' }, { indent: '+1' }],
//         //   ['link', 'image'],
//         //   ['emoji'],
//         //   ['clean'],
//         // ],
//         container: [
//           [{ header: '1' }, { header: '2' }, { header: [3, 4, 5, 6] }, { font: [] }],
//           [{ size: [] }],
//           [{ color: [] }, { background: [] }],
//           ['bold', 'italic', 'underline', 'strike', 'blockquote'],
//           [{ align: [] }],
//           [{ list: 'ordered' }, { list: 'bullet' }],
//           ['link', 'image', 'video'],
//           ['emoji'],
//           ['clean'],
//           ['code-block'],
//         ],
//         handlers: {
//           image: imageHandler,
//         },
//       },
//       'emoji-toolbar': true,
//       'emoji-shortname': true,
//       clipboard: {
//         matchVisual: true,
//       },
//     }),
//     [imageHandler]
//   );

//   const formats = [
//     'header',
//     'bold',
//     'italic',
//     'underline',
//     'strike',
//     'blockquote',
//     'list',
//     'bullet',
//     'indent',
//     'link',
//     'image',
//     'color',
//     'clean',
//   ];

//   return (
//     <div className={styles.wrapper}>
//       <label className={styles.label}>Editor Content</label>
//       <ReactQuill
//         ref={(el) => (quill.current = el)}
//         className={styles.editor}
//         theme="snow"
//         value={value}
//         formats={formats}
//         modules={modules}
//         onChange={(value) => setValue(value)}
//       />
//       {/* <button
//         onClick={handler}
//         className={styles.btn}
//       >
//         Submit
//       </button> */}
//     </div>
//   );
// };

// export default Editor;

import React, { useState } from 'react';
import ReactQuill, { Quill } from 'react-quill';
import ImageResize from 'quill-image-resize-module-react';
import 'react-quill/dist/quill.snow.css';
import quillEmoji from 'react-quill-emoji';
import 'react-quill-emoji/dist/quill-emoji.css';

// const modules = {
//   toolbar: {
//     container: [['bold', 'italic'], ['emoji']],
//   },
//   'emoji-toolbar': true,
//   'emoji-textarea': true,
//   'emoji-shortname': true,
// };
const Editor = () => {
  Quill.register('modules/imageResize', ImageResize);
  Quill.register(
    {
      'formats/emoji': quillEmoji.EmojiBlot,
      'modules/emoji-toolbar': quillEmoji.ToolbarEmoji,
      'modules/emoji-textarea': quillEmoji.TextAreaEmoji,
      'modules/emoji-shortname': quillEmoji.ShortNameEmoji,
    },
    true
  );

  const customBoldHandler = () => {
    console.log('clicked...');
  };

  const [value, setValue] = useState('');

  return (
    <ReactQuill
      modules={{
        toolbar: {
          container: [
            [{ header: [1, 2, 3, 4, 5, 6] }],
            // [{ size: [] }],
            // [{ color: [] }, { background: [] }],
            ['bold', 'italic', 'underline', 'strike', 'blockquote'],
            [{ align: [] }],
            [{ list: 'ordered' }, { list: 'bullet' }],
            ['link', 'image', 'video'],
            ['emoji'],
            ['clean'],
            ['code-block'],
          ],
        },
        'emoji-toolbar': true,
        'emoji-shortname': true,
      }}
      theme="snow"
      value={value}
      onChange={setValue}
      style={{ height: '380px' }}
    />
  );
};
export default Editor;
