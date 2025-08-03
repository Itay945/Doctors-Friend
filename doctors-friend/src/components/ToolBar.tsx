// components/ToolbarPlugin.tsx
import {
  $getSelection,
  $isRangeSelection,
  FORMAT_TEXT_COMMAND,
} from 'lexical';
import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext';
import { useEffect } from 'react';

export default function ToolbarPlugin() {
  const [editor] = useLexicalComposerContext();

  useEffect(() => {
    return editor.registerCommand(
      'TOGGLE_BOLD',
      () => {
        editor.dispatchCommand(FORMAT_TEXT_COMMAND, 'bold');
        return true;
      },
      0
    );
  }, [editor]);

  return (
    <div className="mb-4 space-x-2">
      <button
        onClick={() => editor.dispatchCommand(FORMAT_TEXT_COMMAND, 'bold')}
        className="px-2 py-1 border rounded text-sm hover:bg-gray-100"
      >
        Bold
      </button>
      <button
        onClick={() => editor.dispatchCommand(FORMAT_TEXT_COMMAND, 'italic')}
        className="px-2 py-1 border rounded text-sm hover:bg-gray-100"
      >
        Italic
      </button>
      <button
        onClick={() => editor.dispatchCommand(FORMAT_TEXT_COMMAND, 'underline')}
        className="px-2 py-1 border rounded text-sm hover:bg-gray-100"
      >
        Underline
      </button>
    </div>
  );
}
