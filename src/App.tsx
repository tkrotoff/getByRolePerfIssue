import { createRoot } from 'react-dom/client';

import { Form } from './Form';
import './App.html';

function App() {
  return <Form />;
}

const root = createRoot(document.getElementById('app')!);
root.render(<App />);
