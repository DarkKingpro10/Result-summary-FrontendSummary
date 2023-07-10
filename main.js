import Summary from './public/components/SummaryComponent';
/*Llamamos la func*/
document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('summary').innerHTML = Summary();
});