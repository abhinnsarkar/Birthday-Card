import Card from "./Card";
import "./styles.css";
import Confetti from 'react-confetti'

export const Pop =  () => {
  return (
    <Confetti
      width={window.width}
      height={window.height}
    />
  )
}


export default function App() {
  return (
    <div className="App">
      <Card/>
      <Pop />

    </div>
  );
}
