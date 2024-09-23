import spinner from '../assets/Spinner@1x-1.0s-200px-200px.svg';
function Spinner() {
  return (
    <img
      src={spinner}
      alt="Loading..."
      style={{ width: '100px', margin: 'auto', display: 'block' }}
    />
  );
}

export default Spinner;
