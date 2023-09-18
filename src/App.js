import './App.css';
import Forms from './components/Forms'; 
import { FormProvider } from './contexts/formContext';
import Hello from './components/title';



function App() { 
  return (
    <div className="app">
      <FormProvider>
        <Hello />
        <Forms />
      </FormProvider>
    </div>
  );
}

export default App;
