import React, {useState, useEffect} from 'react';
import List from './components/List/List';
import withListLoading  from './components/withListLoading/withListLoading';
import './css/App.css';

require('es6-promise').polyfill();
require('isomorphic-fetch');

const App = () => {
  const [data, setData] = useState([]);
  const [q, setQ] = useState('');

  const ListLoading = withListLoading(List);
  const [appState, setAppState] = useState({
    loading: false,
    templates: null,
  });

  useEffect(() => {
    setAppState({ loading: true });
    fetch('https://front-end-task-dot-fpls-dev.uc.r.appspot.com/api/v1/public/task_templates')
    .then((response) => response.json())
    .then((templates) => {
      setAppState({ loading: false, templates: templates });
    });
  }, [setAppState]);

  return (
    <div>
      <div> search and filter </div>
      <div>
        Tada! Get startd with a free template. Can't find
        what you are looking for? Search from the 
        1000+ available templates.
      </div>
      <div>
        <ListLoading isLoading={appState.loading} templates={appState.templates}/>
      </div>
    </div>
  )
}

export default App;
