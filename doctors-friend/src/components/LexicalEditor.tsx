import React from 'react';
import { LexicalComposer } from '@lexical/react/LexicalComposer';
import { RichTextPlugin } from '@lexical/react/LexicalRichTextPlugin';
import { ContentEditable } from '@lexical/react/LexicalContentEditable';
import { HistoryPlugin } from '@lexical/react/LexicalHistoryPlugin';
import { OnChangePlugin } from '@lexical/react/LexicalOnChangePlugin';
import { LexicalErrorBoundary } from '@lexical/react/LexicalErrorBoundary';
import ToolbarPlugin from './ToolBar'; // Adjust path as needed


const theme = {}; // Optional: for future custom themes

function onError(error: Error) {
  console.error('Lexical Error:', error);
}

export default function LexicalEditor() {
  const initialConfig = {
    namespace: 'MyEditor',
    theme,
    onError,
    editorState: null,
  };

  const handleChange = (editorState: any) => {
    editorState.read(() => {
      const json = editorState.toJSON();
      console.log('Editor content:', json);
    });
  };

  return (
    <LexicalComposer initialConfig={initialConfig}>
        <ToolbarPlugin />
      <div className="relative border border-gray-300 rounded-md bg-white p-4 shadow-sm ">
        <RichTextPlugin
          contentEditable={
            <ContentEditable className="outline-none min-h-[100px] text-gray-800" />
          }
          placeholder={
            <div className="absolute top-4 left-4 text-gray-400 pointer-events-none">
              Start typing...
            </div>
          }
          ErrorBoundary={LexicalErrorBoundary}
        />
        <HistoryPlugin />
        <OnChangePlugin onChange={handleChange} />
      </div>
    </LexicalComposer>
  );
}
