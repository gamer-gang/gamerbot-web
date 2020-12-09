import ReactDOM from 'react-dom';

export const renderApp = (component: JSX.Element): void => {
  const render = () => {
    ReactDOM.render(component, document.querySelector('#app') as Element);
  };
  if (document.readyState !== 'loading') render();
  else document.addEventListener('DOMContentLoaded', render);
};
