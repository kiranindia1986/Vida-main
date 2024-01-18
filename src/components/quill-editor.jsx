import React, { useState } from 'react';
import ReactQuill, { Quill } from 'react-quill';
import ImageResize from 'quill-image-resize-module-react';
import 'react-quill/dist/quill.snow.css';
import quillEmoji from 'react-quill-emoji';
import 'react-quill-emoji/dist/quill-emoji.css';

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
