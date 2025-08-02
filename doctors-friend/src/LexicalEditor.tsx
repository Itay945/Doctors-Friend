// LexicalEditor.js
import React from 'react';
import { LexicalComposer } from '@lexical/react/LexicalComposer';
import { RichTextPlugin } from '@lexical/react/LexicalRichTextPlugin';
import { ContentEditable } from '@lexical/react/LexicalContentEditable';
import { HistoryPlugin } from '@lexical/react/LexicalHistoryPlugin';
import { OnChangePlugin } from '@lexical/react/LexicalOnChangePlugin';
import { LexicalErrorBoundary } from '@lexical/react/LexicalErrorBoundary';


const theme = {
  // Minimal theme config (can be empty or expanded later)
};

function onError(error) {
  console.error('Lexical Error:', error);
}

export default function LexicalEditor() {
  const initialConfig = {
    namespace: 'MyEditor',
    theme,
    onError,
    editorState: null,
  };

  const handleChange = (editorState) => {
    editorState.read(() => {
      // You can read the current state here
      const json = editorState.toJSON();
      console.log('Editor content:', json);
    });
  };

  return (
    <LexicalComposer initialConfig={initialConfig}>
      <div className="editor-container">
        <RichTextPlugin
          contentEditable={<ContentEditable className="editor-input" />}
          placeholder={<div className="editor-placeholder">Start typing...</div>}
          ErrorBoundary={LexicalErrorBoundary}
        />
        <HistoryPlugin />
        <OnChangePlugin onChange={handleChange} />
      </div>
    </LexicalComposer>
  );
}
