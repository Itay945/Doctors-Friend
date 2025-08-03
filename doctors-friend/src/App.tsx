import LexicalEditor from './components/LexicalEditor';

function App() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="w-full max-w-3xl bg-white shadow-lg rounded-2xl p-8 space-y-6">
        <h1 className="text-3xl font-bold text-center text-gray-800">
           Lexical Editor Example
        </h1>
        <LexicalEditor />
      </div>
    </div>
  );
}

export default App;
